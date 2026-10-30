import { describe, it, expect } from 'vitest';
import { 
  generateStudyPlan, 
  generatePlanRevisionProposal, 
  applyPlanRevision,
  PlannerInput
} from '../lib/plannerEngine';
import { evaluateTopicMastery } from '../lib/topicMastery';
import { calculateNextSpacedReview } from '../lib/spacedRepetition';
import { ALL_QUESTIONS } from '../data/questions';
import { StudyPlan, TopicMasteryRecord, Question } from '../types';

describe('PrepPath Adaptive Preparation Engine & Quality-Based Learning (Scenarios A - J)', () => {
  const baseInput: PlannerInput = {
    userId: 'student_tcs_2026',
    targetTrack: 'DIGITAL',
    availablePreparationDays: 21,
    dailyAvailableMinutes: 90,
    proficiency: 'INTERMEDIATE',
    weakTopics: ['Percentages & Ratios', 'Arrays & Invariants'],
    startDate: '2026-11-01',
    examDate: '2026-11-21',
  };

  describe('Scenario C — Exam Moved Earlier (21 days -> 10 days remaining after completing 10 days)', () => {
    it('preserves first 10 completed days and recalculates exactly 10 remaining days prioritizing weak topics', () => {
      // 1. Initial 21-day plan
      const originalPlan = generateStudyPlan(baseInput);
      expect(originalPlan.days.length).toBe(21);

      // 2. Student completes first 10 days
      for (let d = 0; d < 10; d++) {
        originalPlan.days[d].isCompleted = true;
        for (const task of originalPlan.days[d].tasks) {
          task.completed = true;
          task.completedAt = originalPlan.days[d].date;
        }
      }

      // 3. Exam rescheduled leaving 10 days
      const updatedInput: PlannerInput = {
        ...baseInput,
        examDate: '2026-11-20', // new exam date leaving 10 days
        availablePreparationDays: 20, // 10 completed + 10 remaining
      };

      const proposal = generatePlanRevisionProposal(
        originalPlan,
        updatedInput,
        'Asia/Kolkata',
        [
          {
            userId: 'student_tcs_2026',
            topic: 'Percentages & Ratios',
            section: 'NUMERICAL',
            track: 'DIGITAL',
            masteryState: 'NEEDS_REVIEW',
            score: 20,
            totalAttempts: 3,
            successfulAttempts: 1,
            independentSolves: 0,
            delayedRecallSuccesses: 0,
            updatedAt: '2026-11-10T00:00:00Z',
          }
        ]
      );

      // Verify proposal details
      expect(proposal.changeReason).toBe('EXAM_DATE_MOVED_EARLIER');
      expect(proposal.completedDaysPreserved).toBe(10);
      expect(proposal.newRemainingDays).toBe(10);
      expect(proposal.futureDaysProposed).toBe(10);
      expect(proposal.proposedDays.length).toBe(20); // 10 completed + 10 future

      // Verify first 10 days are strictly preserved
      for (let d = 0; d < 10; d++) {
        expect(proposal.proposedDays[d].dayNumber).toBe(d + 1);
        expect(proposal.proposedDays[d].isCompleted).toBe(true);
        expect(proposal.proposedDays[d].tasks.every(t => t.completed)).toBe(true);
      }

      // Verify weak topic is prioritized in future unstarted days
      expect(proposal.prioritizedWeakTopics).toContain('Percentages & Ratios');
      expect(proposal.proposedDays[10].topic).toContain('Weak Area Priority');

      // 4. Apply revision after student confirmation
      const { newPlan, archivedPlan, revisionRecord } = applyPlanRevision(
        proposal,
        originalPlan,
        updatedInput,
        'student_tcs_2026'
      );

      expect(archivedPlan.status).toBe('ARCHIVED');
      expect(newPlan.status).toBe('ACTIVE');
      expect(newPlan.version).toBe(2);
      expect(newPlan.days.length).toBe(20);
      expect(revisionRecord.fromVersion).toBe(1);
      expect(revisionRecord.toVersion).toBe(2);
      expect(revisionRecord.completedDaysCount).toBe(10);
    });
  });

  describe('Scenario D — Exam Moved Later (Additional preparation time)', () => {
    it('extends the schedule with delayed recall and mixed assessments without repeating completed problems', () => {
      const originalPlan = generateStudyPlan(baseInput);

      // Complete first 5 days
      for (let d = 0; d < 5; d++) {
        originalPlan.days[d].isCompleted = true;
        for (const task of originalPlan.days[d].tasks) {
          task.completed = true;
        }
      }

      // Exam moved 10 days later
      const extendedInput: PlannerInput = {
        ...baseInput,
        availablePreparationDays: 31,
        examDate: '2026-12-01',
      };

      const proposal = generatePlanRevisionProposal(
        originalPlan,
        extendedInput,
        'Asia/Kolkata'
      );

      expect(proposal.changeReason).toBe('EXAM_DATE_MOVED_LATER');
      expect(proposal.completedDaysPreserved).toBe(5);
      expect(proposal.proposedDays.length).toBeGreaterThan(21);
      expect(proposal.summaryMessage).toContain('extended');

      // Verify completed tasks in first 5 days are not repeated in future unstarted days
      const completedIds = new Set<string>();
      for (let d = 0; d < 5; d++) {
        for (const t of proposal.proposedDays[d].tasks) {
          if (t.problemId) completedIds.add(t.problemId);
        }
      }

      for (let d = 5; d < proposal.proposedDays.length; d++) {
        for (const t of proposal.proposedDays[d].tasks) {
          if (t.type === 'PRACTICE_CODING' && t.problemId) {
            // New practice assignments should not blindly duplicate completed tasks
            expect(completedIds.has(t.problemId)).toBe(false);
          }
        }
      }
    });
  });

  describe('Scenario E — Daily Availability Reduced (90 mins -> 30 mins)', () => {
    it('recalculates future unstarted sessions to 30 mins while leaving completed days unchanged', () => {
      const originalPlan = generateStudyPlan(baseInput);

      // Complete Day 1
      originalPlan.days[0].isCompleted = true;
      for (const t of originalPlan.days[0].tasks) {
        t.completed = true;
      }
      expect(originalPlan.days[0].totalPlannedMinutes).toBe(90);

      // Change daily time to 30 mins
      const reducedInput: PlannerInput = {
        ...baseInput,
        dailyAvailableMinutes: 30,
      };

      const proposal = generatePlanRevisionProposal(
        originalPlan,
        reducedInput,
        'Asia/Kolkata'
      );

      expect(proposal.changeReason).toBe('STUDY_TIME_CHANGED');
      expect(proposal.previousDailyMinutes).toBe(90);
      expect(proposal.newDailyMinutes).toBe(30);

      // Preserved Day 1 retains 90 mins planned historical record
      expect(proposal.proposedDays[0].totalPlannedMinutes).toBe(90);
      expect(proposal.proposedDays[0].isCompleted).toBe(true);

      // Future unstarted days are adapted to 30 mins
      for (let d = 1; d < proposal.proposedDays.length; d++) {
        expect(proposal.proposedDays[d].totalPlannedMinutes).toBe(30);
      }
    });
  });

  describe('Scenario F — Deterministic Session Stability Across Page Reloads', () => {
    it('produces identical assignments across multiple generations with identical input', () => {
      const planA = generateStudyPlan(baseInput);
      const planB = generateStudyPlan(baseInput);

      expect(planA.generationSeed).toBe(planB.generationSeed);
      expect(planA.days.length).toBe(planB.days.length);

      for (let i = 0; i < planA.days.length; i++) {
        expect(planA.days[i].tasks.length).toBe(planB.days[i].tasks.length);
        for (let j = 0; j < planA.days[i].tasks.length; j++) {
          expect(planA.days[i].tasks[j].title).toBe(planB.days[i].tasks[j].title);
          expect(planA.days[i].tasks[j].problemId).toBe(planB.days[i].tasks[j].problemId);
        }
      }
    });
  });

  describe('Scenario G & H — Quality-Based Topic Mastery & Retention', () => {
    it('promotes to PROVISIONALLY_MASTERED only after independent solves with 0 hints and delayed recall', () => {
      // 1. Initial attempt with 2 hints revealed -> LEARNING (assisted, cannot be provisionally mastered)
      const assistedRecord = evaluateTopicMastery({
        userId: 'student_1',
        topic: 'Binary Search',
        section: 'CODING',
        track: 'DIGITAL',
        isCorrect: true,
        hintsRevealedCount: 2,
        hasViewedReferenceSolution: false,
      });

      expect(assistedRecord.masteryState).toBe('LEARNING');
      expect(assistedRecord.independentSolves).toBe(0);

      // 2. Solved with 0 hints independently -> IMPROVING
      const independentRecord = evaluateTopicMastery({
        userId: 'student_1',
        topic: 'Binary Search',
        section: 'CODING',
        track: 'DIGITAL',
        isCorrect: true,
        hintsRevealedCount: 0,
        hasViewedReferenceSolution: false,
        existingRecord: assistedRecord,
      });

      expect(independentRecord.masteryState).toBe('IMPROVING');
      expect(independentRecord.independentSolves).toBe(1);

      // 3. Delayed recall solve with 0 hints -> PROVISIONALLY_MASTERED
      const delayedRecallRecord = evaluateTopicMastery({
        userId: 'student_1',
        topic: 'Binary Search',
        section: 'CODING',
        track: 'DIGITAL',
        isCorrect: true,
        hintsRevealedCount: 0,
        hasViewedReferenceSolution: false,
        isDelayedRecall: true,
        existingRecord: independentRecord,
      });

      expect(delayedRecallRecord.masteryState).toBe('PROVISIONALLY_MASTERED');
      expect(delayedRecallRecord.delayedRecallSuccesses).toBe(1);
      expect(delayedRecallRecord.score).toBeGreaterThanOrEqual(75);

      // 4. Viewing full reference solution on a subsequent question does NOT count as independent mastery
      const solutionViewedRecord = evaluateTopicMastery({
        userId: 'student_1',
        topic: 'Binary Search',
        section: 'CODING',
        track: 'DIGITAL',
        isCorrect: true,
        hintsRevealedCount: 0,
        hasViewedReferenceSolution: true, // Looked at reference solution
        existingRecord: delayedRecallRecord,
      });

      expect(solutionViewedRecord.independentSolves).toBe(delayedRecallRecord.independentSolves); // Not incremented!
    });

    it('demotes to NEEDS_REVIEW when an incorrect attempt is recorded on a previously mastered topic', () => {
      const masteredRecord: TopicMasteryRecord = {
        userId: 'student_1',
        topic: 'Two Pointers',
        section: 'CODING',
        track: 'DIGITAL',
        masteryState: 'MASTERED',
        score: 95,
        totalAttempts: 5,
        successfulAttempts: 5,
        independentSolves: 4,
        delayedRecallSuccesses: 2,
        updatedAt: '2026-10-30T00:00:00Z',
      };

      const failedRecord = evaluateTopicMastery({
        userId: 'student_1',
        topic: 'Two Pointers',
        section: 'CODING',
        track: 'DIGITAL',
        isCorrect: false, // Got it wrong
        hintsRevealedCount: 0,
        hasViewedReferenceSolution: false,
        existingRecord: masteredRecord,
      });

      expect(failedRecord.masteryState).toBe('NEEDS_REVIEW');
      expect(failedRecord.score).toBe(20);
    });
  });

  describe('Scenario I — Insufficient Time Prioritization & Deferred Topics', () => {
    it('flags time constraints, prioritizes core foundations, and explicitly identifies deferred topics when remaining time is short', () => {
      const originalPlan = generateStudyPlan(baseInput);

      // Student has only 4 days left before exam!
      const constrainedInput: PlannerInput = {
        ...baseInput,
        availablePreparationDays: 4,
        dailyAvailableMinutes: 45,
        examDate: undefined,
      };

      const proposal = generatePlanRevisionProposal(
        originalPlan,
        constrainedInput,
        'Asia/Kolkata'
      );

      expect(proposal.isTimeConstrained).toBe(true);
      expect(proposal.deferredTopics.length).toBeGreaterThan(0);
      expect(proposal.deferredTopics).toContain('Advanced Dynamic Programming Patterns');
      expect(proposal.summaryMessage).toContain('Deferring secondary topics');
    });
  });
});
