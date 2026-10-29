import { describe, it, expect } from 'vitest';
import { generateStudyPlan } from '../lib/plannerEngine';
import { calculateNextSpacedReview } from '../lib/spacedRepetition';
import { isWithinQuietHours } from '../lib/notificationService';
import { ALL_QUESTIONS } from '../data/questions';

describe('TCS NQT Daily Preparation Engine & Spaced Revision System', () => {
  it('generates the standard learning sequence: Stage A -> Stage B -> Stage C -> Stage D', () => {
    const plan = generateStudyPlan({
      userId: 'student-unit-test-1',
      targetTrack: 'DIGITAL',
      availablePreparationDays: 7,
      dailyAvailableMinutes: 90,
      proficiency: 'INTERMEDIATE',
      weakTopics: [],
    });

    const day1 = plan.days[0];
    expect(day1.tasks.length).toBeGreaterThanOrEqual(4);

    // Verify stage progression order
    expect(day1.tasks[0].stage).toBe('STAGE_A_MCQ');
    expect(day1.tasks[1].stage).toBe('STAGE_B_EASY_CODING');
    expect(day1.tasks[2].stage).toBe('STAGE_C_MEDIUM_CODING');
    expect(day1.tasks[3].stage).toBe('STAGE_D_REVIEW');

    // Stage labels should be clearly formatted
    expect(day1.tasks[0].stageLabel).toContain('Stage A');
    expect(day1.tasks[1].stageLabel).toContain('Stage B');
    expect(day1.tasks[2].stageLabel).toContain('Stage C');
    expect(day1.tasks[3].stageLabel).toContain('Stage D');
  });

  it('adapts tasks realistically without exceeding strict time budgets', () => {
    // 30-minute constrained budget
    const plan30 = generateStudyPlan({
      userId: 'student-budget-30',
      targetTrack: 'NINJA',
      availablePreparationDays: 5,
      dailyAvailableMinutes: 30,
      proficiency: 'BEGINNER',
      weakTopics: [],
    });

    const regularDay = plan30.days[0];
    const totalMinutesPlanned = regularDay.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);

    // Should not silently blow past budget
    expect(totalMinutesPlanned).toBeLessThanOrEqual(35);

    // Should contain budgetReason explaining the deferred medium coding
    expect(regularDay.tasks[0].budgetReason).toBeDefined();
    expect(regularDay.tasks[0].budgetReason).toContain('30-min budget');

    // Medium coding should be deferred
    const hasMedium = regularDay.tasks.some(t => t.stage === 'STAGE_C_MEDIUM_CODING');
    expect(hasMedium).toBe(false);
  });

  it('guarantees deterministic, reproducible question shuffling across page reloads', () => {
    const input = {
      userId: 'reproducible-student-42',
      targetTrack: 'PRIME' as const,
      availablePreparationDays: 14,
      dailyAvailableMinutes: 90,
      proficiency: 'ADVANCED' as const,
      weakTopics: ['Dynamic Programming'],
      startDate: '2026-10-30',
    };

    const run1 = generateStudyPlan(input);
    const run2 = generateStudyPlan(input);

    // Every day and task must be 100% identical between run1 and run2
    expect(run1.days.length).toBe(run2.days.length);

    for (let i = 0; i < run1.days.length; i++) {
      const d1 = run1.days[i];
      const d2 = run2.days[i];

      expect(d1.topic).toBe(d2.topic);
      expect(d1.tasks.length).toBe(d2.tasks.length);

      for (let j = 0; j < d1.tasks.length; j++) {
        expect(d1.tasks[j].problemId).toBe(d2.tasks[j].problemId);
        expect(d1.tasks[j].title).toBe(d2.tasks[j].title);
        expect(d1.tasks[j].estimatedMinutes).toBe(d2.tasks[j].estimatedMinutes);
      }
    }
  });

  it('applies exact spaced repetition interval rules based on user performance', () => {
    const sampleQuestion = ALL_QUESTIONS[0];
    const baseDate = new Date('2026-10-30T10:00:00Z');

    // 1. Wrong answer -> 1 day interval
    const wrongAttempt = calculateNextSpacedReview({
      userId: 'test-user',
      question: sampleQuestion,
      verdict: 'Wrong Answer',
      revealedHintsCount: 0,
      currentDate: baseDate,
    });
    expect(wrongAttempt.intervalDays).toBe(1);
    expect(wrongAttempt.nextReviewDate).toBe('2026-10-31');
    expect(wrongAttempt.isMastered).toBe(false);
    expect(wrongAttempt.consecutiveCorrect).toBe(0);

    // 2. Solved with several hints (>= 3) -> 2 days interval
    const hintsAttempt = calculateNextSpacedReview({
      userId: 'test-user',
      question: sampleQuestion,
      verdict: 'Accepted',
      revealedHintsCount: 3,
      currentDate: baseDate,
    });
    expect(hintsAttempt.intervalDays).toBe(2);
    expect(hintsAttempt.nextReviewDate).toBe('2026-11-01');

    // 3. Solved slow -> 3 days interval
    const slowAttempt = calculateNextSpacedReview({
      userId: 'test-user',
      question: sampleQuestion,
      verdict: 'Accepted',
      revealedHintsCount: 0,
      timeSpentSeconds: 1500, // Slow for easy coding
      currentDate: baseDate,
    });
    expect(slowAttempt.intervalDays).toBe(3);
    expect(slowAttempt.nextReviewDate).toBe('2026-11-02');

    // 4. Confident clean solve -> 7 days interval
    const confidentAttempt = calculateNextSpacedReview({
      userId: 'test-user',
      question: sampleQuestion,
      verdict: 'Accepted',
      revealedHintsCount: 1,
      timeSpentSeconds: 300,
      currentDate: baseDate,
    });
    expect(confidentAttempt.intervalDays).toBe(7);
    expect(confidentAttempt.nextReviewDate).toBe('2026-11-06');
    expect(confidentAttempt.consecutiveCorrect).toBe(1);

    // 5. Repeated mastery (previous consecutive >= 2) -> 14 days interval
    const masteredAttempt = calculateNextSpacedReview({
      userId: 'test-user',
      question: sampleQuestion,
      verdict: 'Accepted',
      revealedHintsCount: 0,
      timeSpentSeconds: 250,
      previousRecord: {
        ...confidentAttempt,
        consecutiveCorrect: 2,
      },
      currentDate: baseDate,
    });
    expect(masteredAttempt.intervalDays).toBe(14);
    expect(masteredAttempt.nextReviewDate).toBe('2026-11-13');
    expect(masteredAttempt.isMastered).toBe(true);
    expect(masteredAttempt.consecutiveCorrect).toBe(3);
  });

  it('correctly calculates overnight quiet hours', () => {
    // Range 22:00 to 08:00
    const lateNight = new Date('2026-10-30T23:30:00');
    expect(isWithinQuietHours('22:00', '08:00', lateNight)).toBe(true);

    const earlyMorning = new Date('2026-10-30T05:00:00');
    expect(isWithinQuietHours('22:00', '08:00', earlyMorning)).toBe(true);

    const midDay = new Date('2026-10-30T14:00:00');
    expect(isWithinQuietHours('22:00', '08:00', midDay)).toBe(false);
  });
});
