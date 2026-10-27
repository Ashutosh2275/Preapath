export type TargetTrack = 'NINJA' | 'DIGITAL' | 'PRIME';

export type ProgrammingLanguage = 'c' | 'cpp' | 'java' | 'python';

export type ProficiencyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export type UserRole = 'student' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  targetTrack: TargetTrack;
  preferredLanguage: ProgrammingLanguage;
  availablePreparationDays: number;
  dailyAvailableMinutes: number;
  examDate?: string;
  proficiency: ProficiencyLevel;
  weakTopics: string[];
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type SectionType = 
  | 'NUMERICAL' 
  | 'REASONING' 
  | 'VERBAL' 
  | 'PROGRAMMING' 
  | 'ADVANCED_QUANT' 
  | 'CODING';

export type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

export type SourceEvidenceType = 
  | 'OFFICIAL_INFORMATION' 
  | 'CANDIDATE_RECALLED' 
  | 'RECURRING_PATTERN' 
  | 'ORIGINAL_PRACTICE';

export type ProblemStatus = 'NOT_ATTEMPTED' | 'ATTEMPTED' | 'SOLVED';

export interface TestCase {
  id: string;
  name?: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface HintStage {
  stage: number;
  title: string;
  content: string;
}

export interface QuestionSolution {
  approachName: string;
  language: ProgrammingLanguage;
  code: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface QuestionOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface Question {
  id: string;
  catalogNumber?: number;
  externalProblemId?: string;
  externalUrl?: string;
  slug: string;
  title: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: Example[];
  difficulty: DifficultyLevel;
  topics: string[];
  sections: SectionType[];
  targetTracks: TargetTrack[];
  estimatedMinutes: number;
  problemFormat: 'STANDARD_IO' | 'FUNCTION_SIGNATURE' | 'MULTIPLE_CHOICE';
  sourceType: SourceEvidenceType;
  sourceReferences?: {
    title: string;
    url?: string;
    hiringCycle?: string;
    notes?: string;
  };
  hints: string[];
  hintStages?: HintStage[];
  solutions?: QuestionSolution[];
  options?: QuestionOption[];
  correctOptionId?: string;
  explanation: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  starterCodeByLanguage: Record<ProgrammingLanguage, string>;
  publicTestCases: TestCase[];
  hiddenTestCases?: TestCase[]; // Backend/admin only
  publicationStatus: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: string;
  updatedAt: string;
  version: number;
}

export interface CustomTestCase {
  id: string;
  userId: string;
  problemId: string;
  name: string;
  input: string;
  expectedOutput?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProblemDraft {
  problemId: string;
  language: ProgrammingLanguage;
  sourceCode: string;
  updatedAt: string;
}

export type ExecutionVerdict = 
  | 'Accepted' 
  | 'Wrong Answer' 
  | 'Compilation Error' 
  | 'Runtime Error' 
  | 'Time Limit Exceeded' 
  | 'Memory Limit Exceeded' 
  | 'Internal Execution Error';

export interface TestCaseResult {
  caseIndex: number;
  passed: boolean;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  timeMs: number;
}

export interface Submission {
  id: string;
  userId: string;
  problemId: string;
  language: ProgrammingLanguage;
  sourceCodeSnapshot: string;
  verdict: ExecutionVerdict;
  passedTests: number;
  totalTests: number;
  executionTimeMs: number;
  memoryUsedKb: number;
  submittedAt: string;
  publicCaseResults?: TestCaseResult[];
}

export interface ProblemProgress {
  problemId: string;
  currentStatus: ProblemStatus;
  totalSubmissions: number;
  acceptedSubmissions: number;
  firstAcceptedAt?: string;
  lastAttemptAt?: string;
  lastVerdict?: ExecutionVerdict;
  lastLanguage?: ProgrammingLanguage;
  bestRuntimeMs?: number;
  needsRevision: boolean;
  bookmarked: boolean;
  revealedHintsCount: number;
  notes?: string;
  updatedAt?: string;
}

export interface StudyPlanTask {
  id: string;
  type: 'CONCEPT' | 'PRACTICE_CODING' | 'APTITUDE_QUIZ' | 'REVISION' | 'MOCK_ASSESSMENT';
  title: string;
  description: string;
  estimatedMinutes: number;
  problemId?: string;
  completed: boolean;
}

export interface StudyPlanDay {
  dayNumber: number;
  date: string;
  topic: string;
  section: SectionType;
  tasks: StudyPlanTask[];
  isCompleted: boolean;
  totalPlannedMinutes: number;
}

export interface StudyPlan {
  id: string;
  userId: string;
  targetTrack: TargetTrack;
  startDate: string;
  endDate: string;
  dailyAvailableMinutes: number;
  days: StudyPlanDay[];
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
  createdAt: string;
  updatedAt: string;
}

export interface AssessmentSection {
  id: string;
  title: string;
  sectionType: SectionType;
  durationMinutes: number;
  questionsCount: number;
}

export interface AssessmentQuestion {
  id: string;
  sectionId: string;
  type: 'MCQ' | 'CODING';
  title: string;
  prompt: string;
  options?: { id: string; text: string }[];
  correctOptionId?: string;
  explanation: string;
  marks: number;
  negativeMarks?: number;
  codingProblemId?: string;
}

export interface MockAssessment {
  id: string;
  title: string;
  description: string;
  track: TargetTrack;
  hiringCycle: string;
  totalDurationMinutes: number;
  sections: AssessmentSection[];
  questions: AssessmentQuestion[];
  instructions: string[];
}

export interface AssessmentAttempt {
  id: string;
  assessmentId: string;
  userId: string;
  startedAt: string;
  completedAt?: string;
  score: number;
  totalPossibleScore: number;
  sectionScores: Record<string, { correct: number; total: number; marks: number }>;
  answers: Record<string, string>; // questionId -> selectedOptionId / code
  markedForReview: string[]; // questionIds
  status: 'IN_PROGRESS' | 'COMPLETED' | 'EXPIRED';
}
