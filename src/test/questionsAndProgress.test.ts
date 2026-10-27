import { describe, it, expect } from 'vitest';
import { STARTER_QUESTIONS } from '../data/starterQuestions';
import { useUserStore } from '../stores/useUserStore';

describe('QuestionBank Integrity & Progress Store', () => {
  it('all starter questions have required metadata, examples, and progressive hints', () => {
    expect(STARTER_QUESTIONS.length).toBeGreaterThanOrEqual(5);

    STARTER_QUESTIONS.forEach(q => {
      expect(q.id).toBeDefined();
      expect(q.title).toBeDefined();
      expect(q.problemStatement.length).toBeGreaterThan(20);
      expect(q.inputFormat).toBeDefined();
      expect(q.outputFormat).toBeDefined();
      expect(q.examples.length).toBeGreaterThanOrEqual(1);
      expect(q.publicTestCases.length).toBeGreaterThanOrEqual(1);
      expect(q.hints.length).toBeGreaterThanOrEqual(2);
      expect(q.explanation.length).toBeGreaterThan(20);
      expect(q.starterCodeByLanguage.python).toBeDefined();
      expect(q.starterCodeByLanguage.cpp).toBeDefined();
      expect(q.starterCodeByLanguage.java).toBeDefined();
      expect(q.starterCodeByLanguage.c).toBeDefined();

      // Check evidence label validity
      expect([
        'OFFICIAL_INFORMATION',
        'CANDIDATE_RECALLED',
        'RECURRING_PATTERN',
        'ORIGINAL_PRACTICE'
      ]).toContain(q.sourceType);
    });
  });

  it('progress store does not mark a problem SOLVED when submission verdict is Wrong Answer', () => {
    const store = useUserStore.getState();
    const problemId = 'tcs-cp-001';

    store.recordSubmissionResult(problemId, 'Wrong Answer', 'python', 35);
    const updated = useUserStore.getState().problemProgress[problemId];

    expect(updated.currentStatus).toBe('ATTEMPTED');
    expect(updated.acceptedSubmissions).toBe(0);
    expect(updated.totalSubmissions).toBe(1);
    expect(updated.lastVerdict).toBe('Wrong Answer');
  });

  it('marks problem SOLVED upon first Accepted submission', () => {
    const store = useUserStore.getState();
    const problemId = 'tcs-cp-002';

    store.recordSubmissionResult(problemId, 'Accepted', 'python', 22);
    const updated = useUserStore.getState().problemProgress[problemId];

    expect(updated.currentStatus).toBe('SOLVED');
    expect(updated.acceptedSubmissions).toBe(1);
    expect(updated.firstAcceptedAt).toBeDefined();
    expect(updated.bestRuntimeMs).toBe(22);
  });

  it('reveals hints progressively one by one without exceeding total count', () => {
    const store = useUserStore.getState();
    const problemId = 'tcs-cp-003';
    const totalHints = 4;

    const count1 = store.revealNextHint(problemId, totalHints);
    expect(count1).toBe(1);

    const count2 = store.revealNextHint(problemId, totalHints);
    expect(count2).toBe(2);

    // Call several times to ensure it caps at totalHints
    store.revealNextHint(problemId, totalHints);
    store.revealNextHint(problemId, totalHints);
    const capped = store.revealNextHint(problemId, totalHints);
    expect(capped).toBe(totalHints);
  });
});
