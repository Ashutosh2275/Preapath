import { ProgrammingLanguage, ExecutionVerdict, TestCase, Submission, TestCaseResult } from '../types';
import { STARTER_QUESTIONS } from '../data/starterQuestions';
import { recordPostgresSubmission } from './db';

export interface RunResult {
  caseId: string;
  name: string;
  input: string;
  expectedOutput?: string;
  actualOutput: string;
  stderr?: string;
  compileOutput?: string;
  verdict: ExecutionVerdict | string;
  isPassed: boolean;
  timeMs: number;
  memoryKb: number;
}

export interface Judge0SubmissionPayload {
  source_code: string;
  language_id: number;
  stdin: string;
  expected_output?: string;
  cpu_time_limit?: number; // seconds
  memory_limit?: number;   // KB
}

export interface Judge0Response {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  time: string | null;
  memory: number | null;
  token?: string;
  status: {
    id: number;
    description: string;
  };
}

// Supported Judge0 Language ID Mapping (GCC / OpenJDK / Python3)
export const JUDGE0_LANGUAGE_IDS: Record<ProgrammingLanguage, number> = {
  c: 50,      // C (GCC 9.2.0)
  cpp: 54,    // C++ (GCC 9.2.0)
  java: 62,   // Java (OpenJDK 13/17)
  python: 71, // Python (3.8.1)
};

export const MAX_SOURCE_CODE_BYTES = 64 * 1024; // 64 KB limit
export const MAX_INPUT_BYTES = 256 * 1024;      // 256 KB limit
export const DEFAULT_CPU_TIME_LIMIT_SEC = 2.0;
export const DEFAULT_MEMORY_LIMIT_KB = 128000;

export function normalizeOutput(output: string | null | undefined): string {
  if (!output) return '';
  return output
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .trim();
}

/**
 * Check if the real Judge0 execution service is configured.
 */
export function isExecutionServiceConfigured(): boolean {
  const url = import.meta.env.VITE_JUDGE0_API_URL;
  return Boolean(
    url &&
    url.startsWith('http') &&
    !url.includes('placeholder')
  );
}

/**
 * Custom fetcher / transport hook for testing and alternative sandboxes
 */
type ExecutionTransport = (
  payload: Judge0SubmissionPayload
) => Promise<Judge0Response>;

let customTransport: ExecutionTransport | null = null;

export function setCustomExecutionTransport(transport: ExecutionTransport | null) {
  customTransport = transport;
}

/**
 * Map Judge0 status ID to application ExecutionVerdict
 */
export function mapJudge0StatusToVerdict(statusId: number): ExecutionVerdict {
  switch (statusId) {
    case 3:
      return 'Accepted';
    case 4:
      return 'Wrong Answer';
    case 5:
      return 'Time Limit Exceeded';
    case 6:
      return 'Compilation Error';
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return 'Runtime Error';
    default:
      return 'Internal Execution Error';
  }
}

/**
 * Execute code via real Judge0 service API
 */
export async function executeJudge0Case(
  sourceCode: string,
  language: ProgrammingLanguage,
  input: string,
  expectedOutput?: string
): Promise<{
  stdout: string;
  stderr: string;
  compileOutput: string;
  verdict: ExecutionVerdict;
  timeMs: number;
  memoryKb: number;
  isPassed: boolean;
  token?: string;
}> {
  // Validate language
  const languageId = JUDGE0_LANGUAGE_IDS[language];
  if (!languageId) {
    throw new Error(`Unsupported programming language: ${language}. Supported languages are C, C++, Java, and Python 3.`);
  }

  // Validate limits
  if (new Blob([sourceCode]).size > MAX_SOURCE_CODE_BYTES) {
    throw new Error(`Source code exceeds maximum size limit of ${MAX_SOURCE_CODE_BYTES / 1024} KB.`);
  }
  if (new Blob([input]).size > MAX_INPUT_BYTES) {
    throw new Error(`Input payload exceeds maximum size limit of ${MAX_INPUT_BYTES / 1024} KB.`);
  }

  // If a custom transport is provided (e.g. in test suites or local proxy), use it
  if (customTransport) {
    const res = await customTransport({
      source_code: sourceCode,
      language_id: languageId,
      stdin: input,
      expected_output: expectedOutput,
      cpu_time_limit: DEFAULT_CPU_TIME_LIMIT_SEC,
      memory_limit: DEFAULT_MEMORY_LIMIT_KB,
    });

    const stdout = res.stdout || '';
    const stderr = res.stderr || '';
    const compileOutput = res.compile_output || '';
    const timeMs = Math.round(parseFloat(res.time || '0') * 1000);
    const memoryKb = res.memory || 0;
    const verdict = mapJudge0StatusToVerdict(res.status?.id || 3);
    
    let isPassed = false;
    if (verdict === 'Accepted') {
      if (expectedOutput !== undefined) {
        isPassed = normalizeOutput(stdout) === normalizeOutput(expectedOutput);
      } else {
        isPassed = true;
      }
    }

    return {
      stdout,
      stderr,
      compileOutput,
      verdict: isPassed ? 'Accepted' : verdict === 'Accepted' ? 'Wrong Answer' : verdict,
      timeMs,
      memoryKb,
      isPassed,
      token: res.token,
    };
  }

  // Check if live Judge0 endpoint is configured
  if (!isExecutionServiceConfigured()) {
    return {
      stdout: '',
      stderr: 'Compiler execution gateway is unconfigured.',
      compileOutput: 'Real compiler execution service is not configured. Configure VITE_JUDGE0_API_URL and VITE_JUDGE0_API_KEY in your environment to execute code.',
      verdict: 'Execution Service Unavailable',
      timeMs: 0,
      memoryKb: 0,
      isPassed: false,
    };
  }

  const judge0Url = import.meta.env.VITE_JUDGE0_API_URL;
  const judge0Key = import.meta.env.VITE_JUDGE0_API_KEY;
  const judge0Host = import.meta.env.VITE_JUDGE0_HOST || (judge0Url ? new URL(judge0Url).host : '');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (judge0Key) {
    headers['X-RapidAPI-Key'] = judge0Key;
    headers['X-RapidAPI-Host'] = judge0Host;
  }

  // Step 1: Create submission with wait=false for asynchronous bounded judging
  const createRes = await fetch(`${judge0Url}/submissions?base64_encoded=false&wait=false`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      source_code: sourceCode,
      language_id: languageId,
      stdin: input,
      expected_output: expectedOutput,
      cpu_time_limit: DEFAULT_CPU_TIME_LIMIT_SEC,
      memory_limit: DEFAULT_MEMORY_LIMIT_KB,
    }),
  });

  if (!createRes.ok) {
    const errorText = await createRes.text();
    throw new Error(`Execution provider rejected request [HTTP ${createRes.status}]: ${errorText}`);
  }

  const { token } = await createRes.json();
  if (!token) {
    throw new Error('Execution provider did not return a valid submission token.');
  }

  // Step 2: Poll with bounded retries and exponential backoff
  let attempts = 0;
  const maxAttempts = 12;
  let delayMs = 350;

  while (attempts < maxAttempts) {
    await new Promise(resolve => setTimeout(resolve, delayMs));
    attempts++;

    const pollRes = await fetch(`${judge0Url}/submissions/${token}?base64_encoded=false`, {
      method: 'GET',
      headers,
    });

    if (!pollRes.ok) {
      continue;
    }

    const data: Judge0Response = await pollRes.json();
    const statusId = data.status?.id || 1;

    // Status 1 = In Queue, 2 = Processing
    if (statusId > 2) {
      const stdout = data.stdout || '';
      const stderr = data.stderr || '';
      const compileOutput = data.compile_output || '';
      const timeMs = Math.round(parseFloat(data.time || '0') * 1000);
      const memoryKb = data.memory || 0;
      const rawVerdict = mapJudge0StatusToVerdict(statusId);

      let isPassed = false;
      if (rawVerdict === 'Accepted') {
        if (expectedOutput !== undefined) {
          isPassed = normalizeOutput(stdout) === normalizeOutput(expectedOutput);
        } else {
          isPassed = true;
        }
      }

      return {
        stdout,
        stderr,
        compileOutput,
        verdict: isPassed ? 'Accepted' : rawVerdict === 'Accepted' ? 'Wrong Answer' : rawVerdict,
        timeMs,
        memoryKb,
        isPassed,
        token,
      };
    }

    delayMs = Math.min(delayMs * 1.3, 1500);
  }

  return {
    stdout: '',
    stderr: 'Execution timed out while waiting in judge queue.',
    compileOutput: '',
    verdict: 'Time Limit Exceeded',
    timeMs: Math.round(DEFAULT_CPU_TIME_LIMIT_SEC * 1000),
    memoryKb: 0,
    isPassed: false,
    token,
  };
}

/**
 * Run code against provided test cases without submitting
 */
export async function runCodeGateway(
  problemId: string,
  language: ProgrammingLanguage,
  sourceCode: string,
  testCases: TestCase[]
): Promise<RunResult[]> {
  const results: RunResult[] = [];

  for (const tc of testCases) {
    try {
      const exec = await executeJudge0Case(sourceCode, language, tc.input, tc.expectedOutput);

      results.push({
        caseId: tc.id,
        name: tc.name || 'Test Case',
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: exec.stdout,
        stderr: exec.stderr,
        compileOutput: exec.compileOutput,
        verdict: exec.verdict,
        isPassed: exec.isPassed,
        timeMs: exec.timeMs,
        memoryKb: exec.memoryKb,
      });
    } catch (err: any) {
      results.push({
        caseId: tc.id,
        name: tc.name || 'Test Case',
        input: tc.input,
        expectedOutput: tc.expectedOutput,
        actualOutput: '',
        stderr: err.message || 'Execution error',
        compileOutput: '',
        verdict: 'Internal Execution Error',
        isPassed: false,
        timeMs: 0,
        memoryKb: 0,
      });
    }
  }

  return results;
}

/**
 * Officially submit code for judging across public and private test cases.
 * Returns immutable judged snapshot and never reveals hidden test cases in response.
 */
export async function submitCodeGateway(
  userId: string,
  problemId: string,
  language: ProgrammingLanguage,
  sourceCode: string
): Promise<{
  submission: Submission;
  isAccepted: boolean;
}> {
  const question = STARTER_QUESTIONS.find(q => q.id === problemId);
  if (!question) {
    throw new Error('Problem not found.');
  }

  const publicCases = question.publicTestCases || [];
  const hiddenCases = question.hiddenTestCases || [];
  const allCases = [...publicCases, ...hiddenCases];

  let passedTests = 0;
  let overallVerdict: ExecutionVerdict = 'Accepted';
  let totalTimeMs = 0;
  let maxMemoryKb = 0;
  const publicCaseResults: TestCaseResult[] = [];
  let executionToken: string | undefined = undefined;

  for (let i = 0; i < allCases.length; i++) {
    const tc = allCases[i];
    const isPublic = i < publicCases.length;

    try {
      const exec = await executeJudge0Case(sourceCode, language, tc.input, tc.expectedOutput);
      if (exec.token) executionToken = exec.token;

      totalTimeMs += exec.timeMs;
      maxMemoryKb = Math.max(maxMemoryKb, exec.memoryKb);

      if (exec.verdict === 'Execution Service Unavailable') {
        overallVerdict = 'Execution Service Unavailable';
        break;
      }

      if (exec.verdict === 'Compilation Error' || exec.verdict === 'Time Limit Exceeded' || exec.verdict === 'Runtime Error') {
        overallVerdict = exec.verdict;
        if (isPublic) {
          publicCaseResults.push({
            caseIndex: i + 1,
            passed: false,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: exec.stdout || exec.stderr || exec.compileOutput,
            timeMs: exec.timeMs,
          });
        }
        break;
      }

      if (exec.isPassed) {
        passedTests++;
        if (isPublic) {
          publicCaseResults.push({
            caseIndex: i + 1,
            passed: true,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: exec.stdout,
            timeMs: exec.timeMs,
          });
        }
      } else {
        overallVerdict = 'Wrong Answer';
        if (isPublic) {
          publicCaseResults.push({
            caseIndex: i + 1,
            passed: false,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: exec.stdout,
            timeMs: exec.timeMs,
          });
        }
        break; // Stop at first failing test case
      }
    } catch (err: any) {
      overallVerdict = 'Internal Execution Error';
      break;
    }
  }

  const submission: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    userId,
    problemId,
    language,
    sourceCodeSnapshot: sourceCode,
    verdict: overallVerdict,
    passedTests,
    totalTests: allCases.length,
    executionTimeMs: totalTimeMs,
    memoryUsedKb: maxMemoryKb,
    submittedAt: new Date().toISOString(),
    publicCaseResults,
    submissionToken: executionToken,
    executionStatus: 'COMPLETED',
  };

  // Asynchronously record submission to PostgreSQL
  recordPostgresSubmission(submission).catch(err => {
    console.debug('PostgreSQL submission recording note:', err);
  });

  return {
    submission,
    isAccepted: overallVerdict === 'Accepted' && passedTests === allCases.length,
  };
}
