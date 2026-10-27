import { describe, it, expect } from 'vitest';
import { generateStudyPlan } from '../lib/plannerEngine';

describe('PlannerEngine - Personalized Study Plan Generator', () => {
  it('generates a feasible schedule with correct total days and daily minutes', () => {
    const plan = generateStudyPlan({
      userId: 'test-user-1',
      targetTrack: 'NINJA',
      availablePreparationDays: 14,
      dailyAvailableMinutes: 90,
      proficiency: 'INTERMEDIATE',
      weakTopics: [],
    });

    expect(plan.days).toHaveLength(14);
    expect(plan.dailyAvailableMinutes).toBe(90);
    expect(plan.targetTrack).toBe('NINJA');
    expect(plan.status).toBe('ACTIVE');

    // Check each day has tasks with reasonable minute allocations
    plan.days.forEach(day => {
      expect(day.tasks.length).toBeGreaterThan(0);
      const dayTotalMins = day.tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
      expect(dayTotalMins).toBeGreaterThanOrEqual(60);
      expect(dayTotalMins).toBeLessThanOrEqual(120);
    });
  });

  it('schedules periodic revision and mock assessment days', () => {
    const plan = generateStudyPlan({
      userId: 'test-user-2',
      targetTrack: 'DIGITAL',
      availablePreparationDays: 20,
      dailyAvailableMinutes: 120,
      proficiency: 'BEGINNER',
      weakTopics: ['Prefix Sum'],
    });

    // Check for at least one mock assessment task
    const mockTasks = plan.days.flatMap(d => d.tasks).filter(t => t.type === 'MOCK_ASSESSMENT');
    expect(mockTasks.length).toBeGreaterThan(0);

    // Check for revision tasks
    const revisionTasks = plan.days.flatMap(d => d.tasks).filter(t => t.type === 'REVISION');
    expect(revisionTasks.length).toBeGreaterThan(0);
  });

  it('prioritizes topics identified as weak by student', () => {
    const plan = generateStudyPlan({
      userId: 'test-user-3',
      targetTrack: 'DIGITAL',
      availablePreparationDays: 10,
      dailyAvailableMinutes: 90,
      proficiency: 'BEGINNER',
      weakTopics: ['Dynamic Programming'],
    });

    // First scheduled topic should align with weak topics
    const firstDayTopic = plan.days[0].topic.toLowerCase();
    const secondDayTopic = plan.days[1].topic.toLowerCase();
    const hasWeakEarly = firstDayTopic.includes('dynamic') || secondDayTopic.includes('dynamic');
    expect(hasWeakEarly).toBe(true);
  });
});
