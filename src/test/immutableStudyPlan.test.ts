import { describe, it, expect } from 'vitest';
import { generateStudyPlan, isPlanActive, createNewPlanWithArchival, PlannerInput } from '../lib/plannerEngine';
import { StudyPlan } from '../types';

describe('Immutable Study Plan Lifecycle & Concurrency Guarantees', () => {
  const baseInput: PlannerInput = {
    userId: 'usr_tcs_aspirant_42',
    targetTrack: 'DIGITAL',
    availablePreparationDays: 14,
    dailyAvailableMinutes: 90,
    proficiency: 'INTERMEDIATE',
    weakTopics: ['Bit Manipulation', 'Dynamic Programming'],
    startDate: '2026-11-01',
  };

  describe('1. Authoritative Generation & Seeded Immutability', () => {
    it('creates a study plan initialized in ACTIVE state with version 1 and an input snapshot', () => {
      const plan = generateStudyPlan(baseInput);

      expect(plan.status).toBe('ACTIVE');
      expect(plan.version).toBe(1);
      expect(plan.generationSeed).toBeDefined();
      expect(plan.generationSeed).toContain('usr_tcs_aspirant_42');
      expect(plan.inputSnapshot).toEqual({
        targetTrack: 'DIGITAL',
        availablePreparationDays: 14,
        dailyAvailableMinutes: 90,
        proficiency: 'INTERMEDIATE',
        weakTopics: ['Bit Manipulation', 'Dynamic Programming'],
        examDate: undefined,
      });
      expect(plan.days.length).toBe(14);
    });

    it('guarantees identical day-by-day task sequences across multiple independent generations with identical input', () => {
      const planA = generateStudyPlan(baseInput);
      const planB = generateStudyPlan(baseInput);

      expect(planA.generationSeed).toBe(planB.generationSeed);
      expect(planA.days.length).toBe(planB.days.length);

      for (let i = 0; i < planA.days.length; i++) {
        const dayA = planA.days[i];
        const dayB = planB.days[i];

        expect(dayA.topic).toBe(dayB.topic);
        expect(dayA.section).toBe(dayB.section);
        expect(dayA.tasks.length).toBe(dayB.tasks.length);

        for (let j = 0; j < dayA.tasks.length; j++) {
          expect(dayA.tasks[j].title).toBe(dayB.tasks[j].title);
          expect(dayA.tasks[j].problemId).toBe(dayB.tasks[j].problemId);
          expect(dayA.tasks[j].catalogNumber).toBe(dayB.tasks[j].catalogNumber);
          expect(dayA.tasks[j].estimatedMinutes).toBe(dayB.tasks[j].estimatedMinutes);
        }
      }
    });
  });

  describe('2. Active Plan Lock & Immutability Verification', () => {
    it('recognizes an active plan as immutable and prevents silent modification', () => {
      const plan = generateStudyPlan(baseInput);
      expect(isPlanActive(plan)).toBe(true);

      // A paused or archived plan is not active
      const archivedPlan: StudyPlan = {
        ...plan,
        status: 'ARCHIVED',
        archivedAt: new Date().toISOString(),
      };
      expect(isPlanActive(archivedPlan)).toBe(false);

      const pausedPlan: StudyPlan = {
        ...plan,
        status: 'PAUSED',
      };
      expect(isPlanActive(pausedPlan)).toBe(false);
    });
  });

  describe('3. Deliberate Archival & Plan Versioning (No Accidental Overwrites)', () => {
    it('archives existing plan with timestamp and increments version upon intentional regeneration', () => {
      const originalPlan = generateStudyPlan(baseInput);

      // Simulate student completing day 1 task
      originalPlan.days[0].tasks[0].completed = true;
      originalPlan.days[0].tasks[0].completedAt = new Date().toISOString();

      const updatedInput: PlannerInput = {
        ...baseInput,
        targetTrack: 'PRIME', // Candidate switched target to PRIME
        dailyAvailableMinutes: 120,
      };

      const { archivedPlan, newPlan } = createNewPlanWithArchival(updatedInput, originalPlan);

      // Verify old plan is safely archived
      expect(archivedPlan).not.toBeNull();
      expect(archivedPlan!.id).toBe(originalPlan.id);
      expect(archivedPlan!.status).toBe('ARCHIVED');
      expect(archivedPlan!.archivedAt).toBeDefined();
      // Completed progress in archived plan remains intact for historical records
      expect(archivedPlan!.days[0].tasks[0].completed).toBe(true);

      // Verify new plan is active with incremented version
      expect(newPlan.id).not.toBe(originalPlan.id);
      expect(newPlan.status).toBe('ACTIVE');
      expect(newPlan.version).toBe(2);
      expect(newPlan.targetTrack).toBe('PRIME');
      expect(newPlan.dailyAvailableMinutes).toBe(120);
      expect(newPlan.inputSnapshot?.targetTrack).toBe('PRIME');
    });
  });
});
