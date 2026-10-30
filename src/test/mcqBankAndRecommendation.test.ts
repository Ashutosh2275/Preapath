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
  createSeededRandom,
  seededShuffle 
} from '../lib/recommendationEngine';
import { MCQAttempt, Submission } from '../types';

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

    Object.values(MCQ_ANSWER_KEYS).forEach((key) => {
      distribution[key.correctOptionId] = (distribution[key.correctOptionId] || 0) + 1;
    });

    // Verify option balance: none should exceed 35% or be less than 15%
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

      // Check option IDs are strictly A, B, C, D
      const optionIds = q.options?.map((o) => o.id);
      expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
    });
  });
});

describe('Secure MCQ Grading & Mistake Diagnostics Engine', () => {
  it('every question in the 120 catalog has an authoritative entry in MCQ_ANSWER_KEYS', () => {
    const totalKeys = Object.keys(MCQ_ANSWER_KEYS).length;
    expect(totalKeys).toBe(120);

    NUMERICAL_QUESTIONS.forEach((q) => expect(MCQ_ANSWER_KEYS[q.id]).toBeDefined());
    REASONING_QUESTIONS.forEach((q) => expect(MCQ_ANSWER_KEYS[q.id]).toBeDefined());
    VERBAL_QUESTIONS.forEach((q) => expect(MCQ_ANSWER_KEYS[q.id]).toBeDefined());
    ADVANCED_QUANT_QUESTIONS.forEach((q) => expect(MCQ_ANSWER_KEYS[q.id]).toBeDefined());
    PROGRAMMING_QUESTIONS.forEach((q) => expect(MCQ_ANSWER_KEYS[q.id]).toBeDefined());
  });

  it('grades submissions accurately and provides structured feedback upon completion', async () => {
    const sampleQuestion = NUMERICAL_QUESTIONS[0];
    const correctOption = MCQ_ANSWER_KEYS[sampleQuestion.id].correctOptionId;
    const wrongOption = correctOption === 'A' ? 'B' : 'A';

    // Test correct submission
    const correctResult = await gradeMcqSubmission(sampleQuestion.id, correctOption, 45000);
    expect(correctResult.isCorrect).toBe(true);
    expect(correctResult.correctOptionId).toBe(correctOption);
    expect(correctResult.explanation.length).toBeGreaterThan(20);
    expect(correctResult.conceptTested).toBeDefined();

    // Test wrong submission
    const wrongResult = await gradeMcqSubmission(sampleQuestion.id, wrongOption, 45000);
    expect(wrongResult.isCorrect).toBe(false);
    expect(wrongResult.correctOptionId).toBe(correctOption);
    expect(wrongResult.mistakeType).toBeDefined();
  });

  it('diagnoses mistake types and provides pedagogical guidance', () => {
    // Calculation error on quantitative
    const calcMistake = diagnoseMistake(false, 45000, 'NUMERICAL', 'MEDIUM');
    expect(calcMistake).toBe('CALCULATION_ERROR');
    const calcFeedback = getPedagogicalFeedback('CALCULATION_ERROR', 'Compound Interest');
    expect(calcFeedback.title).toContain('Precision');

    // Time pressure (> 3 mins)
    const timeMistake = diagnoseMistake(false, 200000, 'REASONING', 'HARD');
    expect(timeMistake).toBe('TIME_PRESSURE');

    // Attentional slip (< 15 seconds)
    const rushMistake = diagnoseMistake(false, 8000, 'NUMERICAL', 'MEDIUM');
    expect(rushMistake).toBe('CARELESS_ERROR');
  });
});

describe('Adaptive Daily Recommendation Engine', () => {
  const mockUserId = 'user_ashutosh_2026';

  it('generates deterministic daily preparation sessions using stable per-user, per-day seeds', () => {
    const s1 = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    const s2 = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    expect(s1.items.length).toBe(s2.items.length);
    expect(s1.items.map((i) => i.questionId)).toEqual(s2.items.map((i) => i.questionId));
  });

  it('generates distinct sessions on different days', () => {
    const sDay1 = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    const sDay2 = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-11-01',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    expect(sDay1.items.map((i) => i.questionId)).not.toEqual(sDay2.items.map((i) => i.questionId));
  });

  it('respects time budgets (45 mins vs 90 mins)', () => {
    const shortSession = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 45
    });

    const standardSession = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    const shortMcqs = shortSession.items.filter((i) => i.itemType === 'MCQ').length;
    const standardMcqs = standardSession.items.filter((i) => i.itemType === 'MCQ').length;

    expect(shortMcqs).toBeLessThan(standardMcqs);
    expect(shortSession.items.length).toBeLessThan(standardSession.items.length);
  });

  it('dynamically adapts to user topic weaknesses', () => {
    // Simulate repeated mistakes on 'Percentages'
    const mockAttempts: MCQAttempt[] = [
      {
        id: 'att-1',
        userId: mockUserId,
        questionId: 'nume-001',
        questionVersion: 1,
        selectedOptionId: 'B',
        isCorrect: false,
        responseTimeMs: 30000,
        difficulty: 'MEDIUM',
        topic: 'Percentages',
        isRevision: false,
        attemptedAt: '2026-10-30T10:00:00Z'
      },
      {
        id: 'att-2',
        userId: mockUserId,
        questionId: 'nume-030',
        questionVersion: 1,
        selectedOptionId: 'C',
        isCorrect: false,
        responseTimeMs: 25000,
        difficulty: 'EASY',
        topic: 'Percentages',
        isRevision: false,
        attemptedAt: '2026-10-30T10:05:00Z'
      }
    ];

    const weakTopics = identifyWeakTopics(mockAttempts, []);
    expect(weakTopics).toContain('Percentages');

    const adaptiveSession = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90,
      attempts: mockAttempts
    });

    // Should include a question on Percentages
    const topicsInSession = adaptiveSession.items.map((i) => i.topic);
    expect(topicsInSession).toContain('Percentages');
  });

  it('includes 1 Easy and 1 Medium coding problem for comprehensive balanced preparation', () => {
    const session = generateDailyStudySession({
      userId: mockUserId,
      dateString: '2026-10-31',
      targetTrack: 'NINJA',
      dailyAvailableMinutes: 90
    });

    const easyCoding = session.items.filter((i) => i.itemType === 'EASY_CODING');
    const mediumCoding = session.items.filter((i) => i.itemType === 'MEDIUM_CODING');

    expect(easyCoding.length).toBe(1);
    expect(mediumCoding.length).toBe(1);
  });
});
