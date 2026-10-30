import { 
  MCQAnswerKey, 
  MCQGradingResult, 
  MCQMistakeType, 
  ConfidenceLevel, 
  MCQAttempt, 
  SectionType,
  DifficultyLevel
} from '../types';
import { MCQ_ANSWER_KEYS } from '../data/questions/mcqAnswerKeys';
import { supabase } from './supabase';

/**
 * Infer or diagnose the type of mistake made on an incorrect attempt.
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

  // If user indicated low confidence, it was a guess
  if (confidence === 'LOW') {
    return 'GUESS_OR_UNCERTAIN';
  }

  // Answered too quickly under 15 seconds on a medium/hard question
  if (responseTimeMs < 15000 && (difficulty === 'MEDIUM' || difficulty === 'HARD')) {
    return 'CARELESS_ERROR';
  }

  // Took longer than 3 minutes (180,000 ms), indicates struggle with time pressure
  if (responseTimeMs > 180000) {
    return 'TIME_PRESSURE';
  }

  // Domain-specific defaults
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
 * Grades an MCQ submission securely.
 * Checks Supabase RPC `submit_mcq_grade` if available; otherwise securely looks up
 * from the protected MCQ_ANSWER_KEYS dictionary without exposing it to the UI beforehand.
 */
export async function gradeMcqSubmission(
  questionId: string,
  selectedOptionId: string,
  responseTimeMs: number,
  options?: {
    userId?: string;
    section?: SectionType;
    difficulty?: DifficultyLevel;
    confidence?: ConfidenceLevel;
    userMistake?: MCQMistakeType;
  }
): Promise<MCQGradingResult> {
  const normalizedOption = selectedOptionId.toUpperCase().trim();

  // 1. Try Supabase RPC if logged in and configured
  if (options?.userId && supabase) {
    try {
      const { data, error } = await supabase.rpc('submit_mcq_grade', {
        p_user_id: options.userId,
        p_question_id: questionId,
        p_selected_option: normalizedOption,
        p_response_time_ms: responseTimeMs,
        p_confidence: options.confidence || 'MEDIUM',
        p_mistake_type: options.userMistake || 'UNCLASSIFIED',
        p_is_revision: false
      });

      if (!error && data && data.length > 0) {
        const row = data[0];
        const isCorrect = Boolean(row.is_correct);
        const mistakeType = isCorrect 
          ? undefined 
          : diagnoseMistake(
              false, 
              responseTimeMs, 
              options.section, 
              options.difficulty, 
              options.confidence, 
              options.userMistake
            );

        return {
          isCorrect,
          correctOptionId: row.correct_option,
          explanation: row.explanation,
          formulaOrRule: row.formula_or_rule,
          distractorExplanations: row.distractor_explanations,
          misconceptionNotes: row.misconception_notes,
          shortcutTechnique: row.shortcut_technique,
          conceptTested: row.concept_tested,
          mistakeType
        };
      }
    } catch {
      // Fallback to local verified keys
    }
  }

  // 2. Authoritative local vault fallback
  const answerKey: MCQAnswerKey | undefined = MCQ_ANSWER_KEYS[questionId];
  if (!answerKey) {
    // If somehow missing from answer keys, fail safe
    return {
      isCorrect: false,
      correctOptionId: 'A',
      explanation: 'Detailed solution will be available in the next assessment revision cycle.',
      conceptTested: 'General Aptitude',
      mistakeType: 'UNCLASSIFIED'
    };
  }

  const isCorrect = normalizedOption === answerKey.correctOptionId.toUpperCase();
  const mistakeType = isCorrect 
    ? undefined 
    : diagnoseMistake(
        false, 
        responseTimeMs, 
        options?.section, 
        options?.difficulty, 
        options?.confidence, 
        options?.userMistake
      );

  return {
    isCorrect,
    correctOptionId: answerKey.correctOptionId,
    explanation: answerKey.explanation,
    formulaOrRule: answerKey.formulaOrRule,
    distractorExplanations: answerKey.distractorExplanations,
    misconceptionNotes: answerKey.misconceptionNotes,
    shortcutTechnique: answerKey.shortcutTechnique,
    conceptTested: answerKey.conceptTested,
    mistakeType
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

  // Check distinct archetypes tested
  const distinctArchetypes = new Set(
    topicAttempts.map((a) => a.questionArchetype || a.questionId)
  );

  // Weak topic criterion: >= 3 attempts, >= 2 distinct archetypes, accuracy < 60%
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
