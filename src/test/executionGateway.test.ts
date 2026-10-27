import { describe, it, expect } from 'vitest';
import { normalizeOutput, runCodeGateway, submitCodeGateway } from '../lib/executionGateway';
import { STARTER_QUESTIONS } from '../data/starterQuestions';

describe('ExecutionGateway - Sandboxed Evaluation & Normalization', () => {
  it('correctly normalizes CRLF and trailing whitespace', () => {
    const raw = '23  \r\n45\t \r\n';
    const normalized = normalizeOutput(raw);
    expect(normalized).toBe('23\n45');
  });

  it('runs code against public test cases and returns run results without judging', async () => {
    const problem = STARTER_QUESTIONS[0]; // sum-of-multiples-of-three-and-five
    const validPython = problem.starterCodeByLanguage.python;

    const results = await runCodeGateway(
      problem.id,
      'python',
      validPython,
      problem.publicTestCases
    );

    expect(results).toHaveLength(problem.publicTestCases.length);
    expect(results[0].caseId).toBe(problem.publicTestCases[0].id);
    expect(results[0].actualOutput).toBe(problem.publicTestCases[0].expectedOutput);
    expect(results[0].isPassed).toBe(true);
  });

  it('evaluates official submission across all public and hidden cases', async () => {
    const problem = STARTER_QUESTIONS[0];
    const validPython = problem.starterCodeByLanguage.python;

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      validPython
    );

    expect(isAccepted).toBe(true);
    expect(submission.verdict).toBe('Accepted');
    expect(submission.passedTests).toBe(submission.totalTests);
    expect(submission.publicCaseResults).toBeDefined();

    // Verify hidden test cases are not leaked in publicCaseResults
    const publicCaseCount = problem.publicTestCases.length;
    expect(submission.publicCaseResults?.length).toBeLessThanOrEqual(publicCaseCount);
  });

  it('produces Wrong Answer when output fails expected output comparison', async () => {
    const problem = STARTER_QUESTIONS[0];
    const faultyPython = `import sys\nprint("999999")`;

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      faultyPython
    );

    expect(isAccepted).toBe(false);
    expect(submission.verdict).toBe('Wrong Answer');
    expect(submission.passedTests).toBe(0);
  });

  it('identifies syntax errors and sets Compilation Error verdict', async () => {
    const problem = STARTER_QUESTIONS[0];
    const brokenCode = `def solve(\n  print("missing closing paren and colon")`;

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      brokenCode
    );

    expect(isAccepted).toBe(false);
    expect(submission.verdict).toBe('Compilation Error');
  });
});
