import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { 
  normalizeOutput, 
  runCodeGateway, 
  submitCodeGateway, 
  setCustomExecutionTransport,
  JUDGE0_LANGUAGE_IDS
} from '../lib/executionGateway';
import { STARTER_QUESTIONS } from '../data/starterQuestions';

describe('ExecutionGateway - Real Sandboxed Evaluation & Hardened Judge0 Client', () => {
  afterEach(() => {
    setCustomExecutionTransport(null);
  });

  it('correctly normalizes CRLF and trailing whitespace', () => {
    const raw = '23  \r\n45\t \r\n';
    const normalized = normalizeOutput(raw);
    expect(normalized).toBe('23\n45');
  });

  it('reports honest Execution Service Unavailable when unconfigured (no simulation)', async () => {
    setCustomExecutionTransport(null);
    const problem = STARTER_QUESTIONS[0];
    const results = await runCodeGateway(
      problem.id,
      'python',
      'print("test")',
      problem.publicTestCases
    );

    expect(results).toHaveLength(problem.publicTestCases.length);
    expect(results[0].verdict).toBe('Execution Service Unavailable');
    expect(results[0].isPassed).toBe(false);
  });

  it('runs code against public test cases and returns run results via real Judge0 transport', async () => {
    const problem = STARTER_QUESTIONS[0]; // sum-of-multiples-of-three-and-five
    const validPython = problem.starterCodeByLanguage.python;

    // Configure mock transport representing real Judge0 execution response
    setCustomExecutionTransport(async (payload) => {
      return {
        stdout: '23',
        stderr: null,
        compile_output: null,
        time: '0.045',
        memory: 4200,
        token: 'judge0-test-token-123',
        status: { id: 3, description: 'Accepted' },
      };
    });

    const results = await runCodeGateway(
      problem.id,
      'python',
      validPython,
      [problem.publicTestCases[0]]
    );

    expect(results).toHaveLength(1);
    expect(results[0].caseId).toBe(problem.publicTestCases[0].id);
    expect(results[0].actualOutput).toBe('23');
    expect(results[0].isPassed).toBe(true);
    expect(results[0].timeMs).toBe(45);
    expect(results[0].memoryKb).toBe(4200);
  });

  it('evaluates official submission across all test cases without leaking hidden test data', async () => {
    const problem = STARTER_QUESTIONS[0];
    const validPython = problem.starterCodeByLanguage.python;

    setCustomExecutionTransport(async (payload) => {
      // Echo expected output
      return {
        stdout: payload.expected_output || '',
        stderr: null,
        compile_output: null,
        time: '0.032',
        memory: 5120,
        token: 'judge0-sub-token',
        status: { id: 3, description: 'Accepted' },
      };
    });

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      validPython
    );

    expect(isAccepted).toBe(true);
    expect(submission.verdict).toBe('Accepted');
    expect(submission.passedTests).toBe(submission.totalTests);
    expect(submission.submissionToken).toBe('judge0-sub-token');

    // Verify hidden test cases are NEVER exposed in publicCaseResults
    const publicCaseCount = problem.publicTestCases.length;
    expect(submission.publicCaseResults?.length).toBeLessThanOrEqual(publicCaseCount);
  });

  it('produces Wrong Answer when compiler output does not match expected output', async () => {
    const problem = STARTER_QUESTIONS[0];

    setCustomExecutionTransport(async () => {
      return {
        stdout: '99999',
        stderr: null,
        compile_output: null,
        time: '0.020',
        memory: 3800,
        token: 'tok-wa',
        status: { id: 3, description: 'Accepted' },
      };
    });

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      'print(99999)'
    );

    expect(isAccepted).toBe(false);
    expect(submission.verdict).toBe('Wrong Answer');
    expect(submission.passedTests).toBe(0);
  });

  it('correctly handles Compilation Error from Judge0 status 6', async () => {
    const problem = STARTER_QUESTIONS[0];

    setCustomExecutionTransport(async () => {
      return {
        stdout: null,
        stderr: 'SyntaxError: unexpected EOF while parsing',
        compile_output: 'Line 2: error: unexpected token',
        time: '0.010',
        memory: 1200,
        token: 'tok-ce',
        status: { id: 6, description: 'Compilation Error' },
      };
    });

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      'def solve('
    );

    expect(isAccepted).toBe(false);
    expect(submission.verdict).toBe('Compilation Error');
  });

  it('correctly handles Time Limit Exceeded from Judge0 status 5', async () => {
    const problem = STARTER_QUESTIONS[0];

    setCustomExecutionTransport(async () => {
      return {
        stdout: null,
        stderr: 'Time limit exceeded',
        compile_output: null,
        time: '2.015',
        memory: 14200,
        token: 'tok-tle',
        status: { id: 5, description: 'Time Limit Exceeded' },
      };
    });

    const { submission, isAccepted } = await submitCodeGateway(
      'student-1',
      problem.id,
      'python',
      'while True: pass'
    );

    expect(isAccepted).toBe(false);
    expect(submission.verdict).toBe('Time Limit Exceeded');
  });

  it('rejects unsupported languages cleanly', async () => {
    const problem = STARTER_QUESTIONS[0];
    const results = await runCodeGateway(
      problem.id,
      'rust' as any,
      'fn main() {}',
      problem.publicTestCases
    );
    expect(results.length).toBe(problem.publicTestCases.length);
    expect(results[0].verdict).toBe('Internal Execution Error');
    expect(results[0].isPassed).toBe(false);
  });
});
