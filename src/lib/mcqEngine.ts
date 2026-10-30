import { 
  MCQAnswerKey, 
  MCQGradingResult, 
  MCQMistakeType, 
  ConfidenceLevel, 
  MCQAttempt, 
  SectionType,
  DifficultyLevel,
  Question
} from '../types';
import { MCQ_ANSWER_KEYS } from '../data/questions/mcqAnswerKeys';
import { supabase } from './supabase';

/**
 * Infer or diagnose the type of mistake made on an incorrect attempt using behavioral evidence:
 * response time, section type, question difficulty, and previous attempt patterns.
 */
export function diagnoseMistake(
  isCorrect: boolean,
  responseTimeMs: number,
  section?: SectionType,
  difficulty?: DifficultyLevel,
  confidence?: ConfidenceLevel,
  userSelectedMistake?: MCQMistakeType
): MCQMistakeType | undefined {
  if (isCorrect) return undefined;
  if (userSelectedMistake && userSelectedMistake !== 'UNCLASSIFIED') {
    return userSelectedMistake;
  }

  // Answered too quickly under 15 seconds on a medium/hard question indicates attentional slip
  if (responseTimeMs > 0 && responseTimeMs < 15000 && (difficulty === 'MEDIUM' || difficulty === 'HARD')) {
    return 'CARELESS_ERROR';
  }

  // Took longer than 3 minutes (180,000 ms), indicates struggle with time pressure
  if (responseTimeMs > 180000) {
    return 'TIME_PRESSURE';
  }

  // Domain-specific defaults based on cognitive skills tested
  if (section === 'NUMERICAL' || section === 'NUMERICAL_ABILITY' || section === 'ADVANCED_QUANT') {
    return 'CALCULATION_ERROR';
  }
  if (section === 'LOGICAL_REASONING' || section === 'REASONING') {
    return 'LOGICAL_REASONING_ERROR';
  }
  if (section === 'PROGRAMMING' || section === 'CODING') {
    return 'CONCEPTUAL_GAP';
  }
  if (section === 'VERBAL' || section === 'VERBAL_ABILITY') {
    return 'MISREAD_QUESTION';
  }

  // Fallback to historical confidence only if explicitly present
  if (confidence === 'LOW') {
    return 'GUESS_OR_UNCERTAIN';
  }

  return 'CONCEPTUAL_GAP';
}

/**
 * Returns a constructive pedagogical recommendation based on the diagnostic mistake type.
 */
export function getPedagogicalFeedback(
  mistakeType: MCQMistakeType,
  conceptTested: string
): { title: string; advice: string } {
  switch (mistakeType) {
    case 'CALCULATION_ERROR':
      return {
        title: 'Arithmetic Precision Gap',
        advice: `Your conceptual direction was likely sound, but an intermediate arithmetic or unit-conversion error occurred. For "${conceptTested}", write out equations step-by-step or check with unit dimensional analysis.`
      };
    case 'CONCEPTUAL_GAP':
      return {
        title: 'Core Concept Misalignment',
        advice: `This question tests underlying fundamentals of "${conceptTested}". Review the step-by-step formula and rule summary above to solidify theoretical understanding before attempting next question.`
      };
    case 'MISREAD_QUESTION':
      return {
        title: 'Constraint or Qualifier Overlook',
        advice: `Double check constraints like "NOT", "LEAST", "EXCEPT", or specific units/ratios. Read the final question sentence first before working out the data.`
      };
    case 'LOGICAL_REASONING_ERROR':
      return {
        title: 'Premise Deduction Fault',
        advice: `In deductive reasoning questions like "${conceptTested}", avoid making real-world common sense assumptions outside the strictly stated premises. Use Venn diagrams or tabular grids.`
      };
    case 'TIME_PRESSURE':
      return {
        title: 'Time Allocation Pressure',
        advice: `Spending too long or rushing under a ticking clock leads to errors. Master the "Speed Shortcut" technique shown in the explanation to solve this archetype in under 60 seconds.`
      };
    case 'GUESS_OR_UNCERTAIN':
      return {
        title: 'Uncertainty / Speculative Guess',
        advice: `When unsure about "${conceptTested}", use the process of elimination. Cross out distractors that violate boundary conditions rather than guessing blindly.`
      };
    case 'CARELESS_ERROR':
      return {
        title: 'Attentional Slip',
        advice: `Take a 3-second verification pause before locking in your final choice. Re-read what the prompt specifically requested (e.g., radius vs diameter, profit percentage vs profit amount).`
      };
    case 'KNOWLEDGE_GAP':
    case 'UNCLASSIFIED':
    default:
      return {
        title: 'Learning Opportunity',
        advice: `Study the verified solution walkthrough and memorize the key formula for "${conceptTested}".`
      };
  }
}

/**
 * Options passed to gradeMcqSubmission
 */
export interface GradeMcqOptions {
  userId?: string;
  question?: Question;
  questionVersion?: number;
  section?: SectionType;
  difficulty?: DifficultyLevel;
  confidence?: ConfidenceLevel;
  userMistake?: MCQMistakeType;
}

/**
 * Grades an MCQ submission securely.
 * Checks Supabase RPC `submit_mcq_grade` if available; otherwise securely looks up
 * from the protected authoritative MCQ_ANSWER_KEYS registry.
 *
 * Rules:
 * - If answer key is not found, NEVER return fabricated isCorrect: false or correctOptionId: 'A'.
 *   Instead returns gradingStatus: 'UNAVAILABLE'.
 * - If selected or correct option does not exist in question options, returns gradingStatus: 'ERROR'.
 * - isCorrect is strictly derived from normalizedSelected === normalizedCorrect.
 */
export async function gradeMcqSubmission(
  questionId: string,
  selectedOptionId: string,
  responseTimeMs: number,
  options?: GradeMcqOptions
): Promise<MCQGradingResult> {
  // 1. Validate inputs
  if (!questionId || !selectedOptionId) {
    return {
      questionId: questionId || '',
      questionVersion: options?.questionVersion || options?.question?.version || 1,
      selectedOptionId: selectedOptionId || '',
      correctOptionId: '',
      isCorrect: false,
      explanation: '',
      gradingStatus: 'ERROR',
      errorMessage: 'Validation Error: Question ID and selected option are required.'
    };
  }

  const normalizedSelected = selectedOptionId.trim().toUpperCase();
  const qVersion = options?.questionVersion || options?.question?.version || 1;

  // Validate that selected option actually exists in the question's option list
  if (options?.question?.options && options.question.options.length > 0) {
    const optionExists = options.question.options.some(
      (opt) => opt.id.trim().toUpperCase() === normalizedSelected
    );
    if (!optionExists) {
      return {
        questionId,
        questionVersion: qVersion,
        selectedOptionId: normalizedSelected,
        correctOptionId: '',
        isCorrect: false,
        explanation: '',
        gradingStatus: 'ERROR',
        errorMessage: `Validation Error: Selected option "${selectedOptionId}" is not a valid option for this question.`
      };
    }
  }

  // 2. Try Supabase RPC if logged in and configured
  if (options?.userId && supabase) {
    try {
      const { data, error } = await supabase.rpc('submit_mcq_grade', {
        p_user_id: options.userId,
        p_question_id: questionId,
        p_selected_option_id: normalizedSelected,
        p_response_time_ms: responseTimeMs,
        p_confidence: options.confidence || null
      });

      if (!error && data) {
        const row = Array.isArray(data) ? data[0] : data;
        if (row && row.correct_option_id) {
          const rCorrect = String(row.correct_option_id).trim().toUpperCase();
          const rIsCorrect = normalizedSelected === rCorrect;
          const mistakeType = rIsCorrect 
            ? undefined 
            : diagnoseMistake(
                false, 
                responseTimeMs, 
                options.section || options.question?.sections?.[0], 
                options.difficulty || options.question?.difficulty, 
                options.confidence, 
                options.userMistake
              );

          return {
            questionId,
            questionVersion: qVersion,
            selectedOptionId: normalizedSelected,
            correctOptionId: rCorrect,
            isCorrect: rIsCorrect,
            explanation: row.explanation || '',
            formulaOrRule: row.formula_or_rule,
            distractorExplanations: row.distractor_explanations,
            misconceptionNotes: row.misconception_notes,
            shortcutTechnique: row.shortcut_technique,
            conceptTested: row.concept_tested || options.question?.topics?.[0] || 'General Aptitude',
            mistakeType,
            gradingStatus: 'GRADED'
          };
        }
      }
    } catch {
      // Fallback to local verified keys
    }
  }

  // 3. Authoritative local registry resolution
  let answerKey: MCQAnswerKey | undefined = MCQ_ANSWER_KEYS[questionId];

  // If not in MCQ_ANSWER_KEYS but the question object itself carries verified correctOptionId
  if (!answerKey && options?.question && options.question.correctOptionId) {
    answerKey = {
      questionId: options.question.id,
      correctOptionId: options.question.correctOptionId,
      explanation: options.question.explanation || 'Verified step-by-step derivation.',
      conceptTested: options.question.topics?.[0] || 'Aptitude & Logic',
      verifiedBy: 'PrepPath Verified Editorial',
      isVerified: true
    };
  }

  // 4. Important failure-handling rule:
  // If no answer key is found, NEVER convert to a false negative or fake correct option 'A'!
  if (!answerKey || !answerKey.correctOptionId) {
    return {
      questionId,
      questionVersion: qVersion,
      selectedOptionId: normalizedSelected,
      correctOptionId: '',
      isCorrect: false,
      explanation: '',
      gradingStatus: 'UNAVAILABLE',
      errorMessage: 'Grading Unavailable: Authoritative answer key could not be retrieved for this question.'
    };
  }

  const normalizedCorrect = answerKey.correctOptionId.trim().toUpperCase();

  // 5. Confirm that the correct option actually exists in the question's option list
  if (options?.question?.options && options.question.options.length > 0) {
    const correctExists = options.question.options.some(
      (opt) => opt.id.trim().toUpperCase() === normalizedCorrect
    );
    if (!correctExists) {
      return {
        questionId,
        questionVersion: qVersion,
        selectedOptionId: normalizedSelected,
        correctOptionId: '',
        isCorrect: false,
        explanation: '',
        gradingStatus: 'ERROR',
        errorMessage: 'Grading Integrity Error: The answer key references an option that is not present in this question.'
      };
    }
  }

  // 6. Authoritative comparison: isCorrect is strictly derived from normalized identifiers
  const isCorrect = normalizedSelected === normalizedCorrect;
  const mistakeType = isCorrect 
    ? undefined 
    : diagnoseMistake(
        false, 
        responseTimeMs, 
        options?.section || options?.question?.sections?.[0], 
        options?.difficulty || options?.question?.difficulty, 
        options?.confidence, 
        options?.userMistake
      );

  return {
    questionId,
    questionVersion: qVersion,
    selectedOptionId: normalizedSelected,
    correctOptionId: normalizedCorrect,
    isCorrect,
    explanation: answerKey.explanation,
    formulaOrRule: answerKey.formulaOrRule,
    distractorExplanations: answerKey.distractorExplanations,
    misconceptionNotes: answerKey.misconceptionNotes,
    shortcutTechnique: answerKey.shortcutTechnique,
    conceptTested: answerKey.conceptTested || options?.question?.topics?.[0] || 'General Aptitude',
    mistakeType,
    gradingStatus: 'GRADED'
  };
}

/**
 * Analyze attempts for a specific topic or section.
 * Calculates accuracy, speed, and identifies persistent gap areas.
 */
export function analyzeTopicPerformance(
  attempts: MCQAttempt[],
  topic: string
): {
  totalAttempts: number;
  correctCount: number;
  accuracyPercent: number;
  avgTimeMs: number;
  isWeakTopic: boolean;
  commonMistakes: Record<MCQMistakeType, number>;
} {
  const topicAttempts = attempts.filter((a) => a.topic.toLowerCase() === topic.toLowerCase());
  if (topicAttempts.length === 0) {
    return {
      totalAttempts: 0,
      correctCount: 0,
      accuracyPercent: 0,
      avgTimeMs: 0,
      isWeakTopic: false,
      commonMistakes: {} as Record<MCQMistakeType, number>
    };
  }

  const correctCount = topicAttempts.filter((a) => a.isCorrect).length;
  const accuracyPercent = Math.round((correctCount / topicAttempts.length) * 100);
  const totalTime = topicAttempts.reduce((acc, a) => acc + a.responseTimeMs, 0);
  const avgTimeMs = Math.round(totalTime / topicAttempts.length);

  const distinctArchetypes = new Set(
    topicAttempts.map((a) => a.questionArchetype || a.questionId)
  );

  const isWeakTopic = 
    topicAttempts.length >= 3 && 
    distinctArchetypes.size >= 2 && 
    accuracyPercent < 60;

  const commonMistakes = topicAttempts.reduce((acc, a) => {
    if (!a.isCorrect && a.mistakeType) {
      acc[a.mistakeType] = (acc[a.mistakeType] || 0) + 1;
    }
    return acc;
  }, {} as Record<MCQMistakeType, number>);

  return {
    totalAttempts: topicAttempts.length,
    correctCount,
    accuracyPercent,
    avgTimeMs,
    isWeakTopic,
    commonMistakes
  };
}
