import { describe, it, expect } from 'vitest';
import { 
  NUMERICAL_QUESTIONS, 
  REASONING_QUESTIONS, 
  VERBAL_QUESTIONS, 
  ADVANCED_QUANT_QUESTIONS, 
  PROGRAMMING_QUESTIONS,
  MCQ_ANSWER_KEYS,
  ALL_QUESTIONS
} from '../data/questions';
import { gradeMcqSubmission, diagnoseMistake, getPedagogicalFeedback } from '../lib/mcqEngine';
import { 
  generateDailyStudySession, 
  identifyWeakTopics, 
  findReplacementMcq
} from '../lib/recommendationEngine';
import { useUserStore } from '../stores/useUserStore';
import { MCQAttempt, Question } from '../types';

describe('TCS NQT Professional MCQ Question Bank & Integrity', () => {
  const allCuratedMcqs = [
    ...NUMERICAL_QUESTIONS,
    ...REASONING_QUESTIONS,
    ...VERBAL_QUESTIONS,
    ...ADVANCED_QUANT_QUESTIONS,
    ...PROGRAMMING_QUESTIONS
  ];

  it('contains exactly 120 independently authored, unique MCQs', () => {
    expect(NUMERICAL_QUESTIONS.length).toBe(30);
    expect(REASONING_QUESTIONS.length).toBe(30);
    expect(VERBAL_QUESTIONS.length).toBe(25);
    expect(ADVANCED_QUANT_QUESTIONS.length).toBe(20);
    expect(PROGRAMMING_QUESTIONS.length).toBe(15);
    expect(allCuratedMcqs.length).toBe(120);
  });

  it('has zero duplicate titles and zero duplicate content fingerprints', () => {
    const titles = new Set<string>();
    const fingerprints = new Set<string>();

    allCuratedMcqs.forEach((q) => {
      const normalizedTitle = q.title.trim().toLowerCase();
      expect(titles.has(normalizedTitle), `Duplicate question title found: "${q.title}"`).toBe(false);
      titles.add(normalizedTitle);

      if (q.contentFingerprint) {
        expect(fingerprints.has(q.contentFingerprint), `Duplicate content fingerprint: ${q.contentFingerprint}`).toBe(false);
        fingerprints.add(q.contentFingerprint);
      }
    });

    expect(titles.size).toBe(120);
  });

  it('maintains a statistically balanced option distribution across all 120 MCQs', () => {
    const distribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

    allCuratedMcqs.forEach((q) => {
      const key = MCQ_ANSWER_KEYS[q.id];
      if (key) {
        distribution[key.correctOptionId] = (distribution[key.correctOptionId] || 0) + 1;
      }
    });

    const total = 120;
    Object.entries(distribution).forEach(([opt, count]) => {
      const percentage = (count / total) * 100;
      expect(percentage).toBeGreaterThanOrEqual(18); // At least 18% (~22 questions)
      expect(percentage).toBeLessThanOrEqual(32);    // At most 32% (~38 questions)
    });
  });

  it('guarantees pedagogical metadata completeness for every MCQ', () => {
    allCuratedMcqs.forEach((q) => {
      expect(q.id).toBeDefined();
      expect(q.catalogNumber).toBeGreaterThanOrEqual(101);
      expect(q.catalogNumber).toBeLessThanOrEqual(220);
      expect(q.problemFormat).toBe('MULTIPLE_CHOICE');
      expect(q.options?.length).toBe(4);
      expect(q.questionArchetype).toBeDefined();
      expect(q.learningObjective).toBeDefined();
      expect(q.cognitiveSkill).toBeDefined();
      expect(q.sourceType).toBeDefined();

      const optionIds = q.options?.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
    });
  });
});

describe('Authoritative MCQ Grading Bug Fix & Integrity Tests', () => {
  const sampleQuestion = NUMERICAL_QUESTIONS[0]; // e.g. nume-001
  const key = MCQ_ANSWER_KEYS[sampleQuestion.id];
  const correctOption = key.correctOptionId;
  const incorrectOption = correctOption === 'A' ? 'B' : 'A';

  it('Grading Test 1: Selects correct option -> isCorrect: true, gradingStatus: GRADED', async () => {
    const result = await gradeMcqSubmission(sampleQuestion.id, correctOption, 35000, {
      question: sampleQuestion
    });
    expect(result.gradingStatus).toBe('GRADED');
    expect(result.isCorrect).toBe(true);
    expect(result.selectedOptionId).toBe(correctOption);
    expect(result.correctOptionId).toBe(correctOption);
    expect(result.explanation.length).toBeGreaterThan(10);
  });

  it('Grading Test 2: Selects incorrect option -> isCorrect: false, gradingStatus: GRADED, shows actual correct answer', async () => {
    const result = await gradeMcqSubmission(sampleQuestion.id, incorrectOption, 35000, {
      question: sampleQuestion
    });
    expect(result.gradingStatus).toBe('GRADED');
    expect(result.isCorrect).toBe(false);
    expect(result.selectedOptionId).toBe(incorrectOption);
    expect(result.correctOptionId).toBe(correctOption);
    expect(result.mistakeType).toBeDefined();
  });

  it('Grading Test 3: Normalizes lowercase option input (e.g. "a" -> "A")', async () => {
    const lowerInput = correctOption.toLowerCase();
    const result = await gradeMcqSubmission(sampleQuestion.id, lowerInput, 30000, {
      question: sampleQuestion
    });
    expect(result.gradingStatus).toBe('GRADED');
    expect(result.isCorrect).toBe(true);
    expect(result.selectedOptionId).toBe(correctOption);
  });

  it('Grading Test 4: Selects an invalid option outside options list -> returns validation error', async () => {
    const result = await gradeMcqSubmission(sampleQuestion.id, 'Z', 10000, {
      question: sampleQuestion
    });
    expect(result.gradingStatus).toBe('ERROR');
    expect(result.errorMessage).toContain('not a valid option');
    expect(result.isCorrect).toBe(false);
  });

  it('Grading Test 5: Missing answer key -> returns UNAVAILABLE, never fabricated Incorrect with fake "A"', async () => {
    const nonExistentId = 'unknown-ghost-question-999';
    const result = await gradeMcqSubmission(nonExistentId, 'A', 20000);

    // CRITICAL: Must be UNAVAILABLE, not fabricated isCorrect: false with correctOptionId: 'A'
    expect(result.gradingStatus).toBe('UNAVAILABLE');
    expect(result.isCorrect).toBe(false);
    expect(result.correctOptionId).toBe('');
    expect(result.errorMessage).toContain('Authoritative answer key could not be retrieved');
  });

  it('Grading Test 6: Rejects grading response if correct option does not exist in question options list', async () => {
    const corruptQuestion: Question = {
      ...sampleQuestion,
      id: 'corrupt-q-1',
      options: [
        { id: 'A', text: 'Option A' },
        { id: 'B', text: 'Option B' }
      ]
    };

    // If answer key points to 'D' which does not exist in corruptQuestion options
    MCQ_ANSWER_KEYS['corrupt-q-1'] = {
      questionId: 'corrupt-q-1',
      correctOptionId: 'D',
      explanation: 'Test corrupt key',
      conceptTested: 'Integrity',
      verifiedBy: 'Test',
      isVerified: true
    };

    const result = await gradeMcqSubmission('corrupt-q-1', 'A', 15000, {
      question: corruptQuestion
    });

    expect(result.gradingStatus).toBe('ERROR');
    expect(result.errorMessage).toContain('Grading Integrity Error');

    delete MCQ_ANSWER_KEYS['corrupt-q-1'];
  });

  it('Grading Test 7: Correct and incorrect highlights always logically agree with isCorrect', async () => {
    const resCorrect = await gradeMcqSubmission(sampleQuestion.id, correctOption, 25000, {
      question: sampleQuestion
    });

    // Logical UI highlighting rule check
    sampleQuestion.options?.forEach((opt) => {
      const isSelected = resCorrect.selectedOptionId === opt.id;
      const isCorrectHighlight = resCorrect.gradingStatus === 'GRADED' && opt.id === resCorrect.correctOptionId;
      const isWrongHighlight = resCorrect.gradingStatus === 'GRADED' && isSelected && !resCorrect.isCorrect;

      if (opt.id === correctOption) {
        expect(isCorrectHighlight).toBe(true);
        expect(isWrongHighlight).toBe(false);
      } else {
        expect(isCorrectHighlight).toBe(false);
        expect(isWrongHighlight).toBe(false);
      }
    });
  });

  it('Behavioral Mistake Diagnostics: classifies speed and time pressure without requiring user confidence input', () => {
    // Under 15s on medium difficulty -> Careless error
    const careless = diagnoseMistake(false, 8000, 'NUMERICAL', 'MEDIUM');
    expect(careless).toBe('CARELESS_ERROR');

    // Over 3 mins -> Time pressure
    const timePressure = diagnoseMistake(false, 195000, 'REASONING', 'HARD');
    expect(timePressure).toBe('TIME_PRESSURE');

    // Section defaults
    expect(diagnoseMistake(false, 40000, 'NUMERICAL', 'EASY')).toBe('CALCULATION_ERROR');
    expect(diagnoseMistake(false, 40000, 'REASONING', 'MEDIUM')).toBe('LOGICAL_REASONING_ERROR');
    expect(diagnoseMistake(false, 40000, 'PROGRAMMING', 'MEDIUM')).toBe('CONCEPTUAL_GAP');
    expect(diagnoseMistake(false, 40000, 'VERBAL', 'EASY')).toBe('MISREAD_QUESTION');
  });
});

describe('Intelligent Next-Question Generation & Try Another Question Flow', () => {
  const currentMcq = NUMERICAL_QUESTIONS[0]; // nume-001 (Percentages, EASY)

  it('Replacement Test 1: returns a distinct question ID belonging to appropriate topic & difficulty', () => {
    const { replacementQuestion, matchPriority } = findReplacementMcq({
      currentQuestion: currentMcq,
      allQuestions: ALL_QUESTIONS,
      targetTrack: 'NINJA'
    });

    expect(replacementQuestion).not.toBeNull();
    expect(replacementQuestion!.id).not.toBe(currentMcq.id);
    expect(replacementQuestion!.problemFormat).toBe('MULTIPLE_CHOICE');
    expect(matchPriority).toBeGreaterThanOrEqual(1);
    expect(matchPriority).toBeLessThanOrEqual(5);
  });

  it('Replacement Test 2: never duplicates questions already allocated in the active daily session', () => {
    const allocatedSessionIds = ['nume-002', 'nume-003', 'nume-004', 'nume-005'];
    
    const { replacementQuestion } = findReplacementMcq({
      currentQuestion: currentMcq,
      allQuestions: ALL_QUESTIONS,
      excludeQuestionIds: allocatedSessionIds
    });

    expect(replacementQuestion).not.toBeNull();
    expect(allocatedSessionIds).not.toContain(replacementQuestion!.id);
    expect(replacementQuestion!.id).not.toBe(currentMcq.id);
  });

  it('Replacement Test 3: excludes recently attempted questions when candidate pool permits', () => {
    const mockAttempts: MCQAttempt[] = [
      {
        id: 'att-1',
        userId: 'u1',
        questionId: 'nume-002',
        questionVersion: 1,
        selectedOptionId: 'A',
        isCorrect: false,
        responseTimeMs: 30000,
        difficulty: 'EASY',
        topic: 'Percentages',
        isRevision: false,
        attemptedAt: new Date().toISOString()
      }
    ];

    const { replacementQuestion } = findReplacementMcq({
      currentQuestion: currentMcq,
      allQuestions: ALL_QUESTIONS,
      attempts: mockAttempts
    });

    expect(replacementQuestion).not.toBeNull();
    expect(replacementQuestion!.id).not.toBe('nume-002');
  });

  it('Replacement Test 4: returns informative notice when category is completely exhausted', () => {
    // Artificial small pool containing only the current question
    const isolatedPool = [currentMcq];

    const result = findReplacementMcq({
      currentQuestion: currentMcq,
      allQuestions: isolatedPool
    });

    expect(result.replacementQuestion).toBeNull();
    expect(result.message).toContain('completed all available practice questions');
  });

  it('Daily Session Slot Persistence: replaces question in slot and preserves audit history', () => {
    const store = useUserStore.getState();
    const session = store.getOrCreateTodaySession();
    expect(session.items.length).toBeGreaterThanOrEqual(5);

    const slotItem = session.items[0];
    const originalQId = slotItem.questionId;
    const replacementQId = 'nume-025';

    // Replace question slot
    const didReplace = store.replaceDailySessionQuestion(
      session.id,
      originalQId,
      replacementQId,
      'Percentages',
      'MEDIUM'
    );

    expect(didReplace).toBe(true);

    // Verify session slot was updated in store
    const updatedSession = useUserStore.getState().dailySessions[session.sessionDate];
    const updatedSlot = updatedSession.items.find((it) => it.id === slotItem.id);

    expect(updatedSlot).toBeDefined();
    expect(updatedSlot!.questionId).toBe(replacementQId);
    expect(updatedSlot!.originalQuestionId).toBe(originalQId);
    expect(updatedSlot!.replacementHistory).toContain(originalQId);
    expect(updatedSlot!.status).toBe('PENDING');

    // Verify other slots were completely unaffected
    const otherSlots = updatedSession.items.filter((it) => it.id !== slotItem.id);
    expect(otherSlots.length).toBe(session.items.length - 1);
  });
});
