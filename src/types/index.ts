export type TargetTrack = 'NINJA' | 'DIGITAL' | 'PRIME';

export type ProgrammingLanguage = 'c' | 'cpp' | 'java' | 'python';

export type ProficiencyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export type UserRole = 'student' | 'admin';

export type PrepIntensity = 'RELAXED' | 'STANDARD' | 'INTENSIVE';

export type AccountSyncState = 'IDLE' | 'SAVING' | 'SAVED' | 'FAILED' | 'OFFLINE';

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
  timezone?: string;
  onboardingCompleted?: boolean;
  onboardingVersion?: number;
  daysAvailablePerWeek?: number;
  preferredStudyHours?: string;
  preparationStartDate?: string;
  prepIntensity?: PrepIntensity;
  version?: number;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationDevice {
  id: string;
  userId: string;
  deviceId: string;
  fcmToken?: string;
  deviceName: string;
  platform?: string;
  timezone: string;
  isActive: boolean;
  lastActiveAt: string;
  createdAt: string;
  updatedAt: string;
}

export type ScheduledNotificationStatus = 
  | 'SCHEDULED' 
  | 'QUEUED' 
  | 'SENT_TO_PROVIDER' 
  | 'PROVIDER_REJECTED' 
  | 'TOKEN_INVALID' 
  | 'CANCELLED' 
  | 'DELIVERY_UNAVAILABLE';

export interface ScheduledNotification {
  id: string;
  userId: string;
  deviceId?: string;
  notificationType: 'DAILY_STUDY_REMINDER' | 'REVIEW_DUE' | 'ASSESSMENT_ALERT' | 'SYSTEM';
  scheduledForUtc: string;
  title: string;
  body: string;
  targetUrl: string;
  status: ScheduledNotificationStatus;
  idempotencyKey: string;
  dispatchedAt?: string;
  createdAt: string;
}

export type TopicMasteryState = 
  | 'NOT_STARTED'
  | 'LEARNING'
  | 'NEEDS_REVIEW'
  | 'IMPROVING'
  | 'PROVISIONALLY_MASTERED'
  | 'MASTERED';

export interface TopicMasteryRecord {
  id?: string;
  userId: string;
  topic: string;
  section: SectionType;
  track: TargetTrack;
  masteryState: TopicMasteryState;
  score: number; // 0 to 100
  totalAttempts: number;
  successfulAttempts: number;
  independentSolves: number; // solved with 0 hints
  delayedRecallSuccesses: number;
  lastAttemptAt?: string;
  evidenceNotes?: string[];
  updatedAt: string;
}

export interface PlanRevisionProposal {
  currentPlanVersion: number;
  newPlanVersion: number;
  changeReason: 'EXAM_DATE_MOVED_EARLIER' | 'EXAM_DATE_MOVED_LATER' | 'STUDY_TIME_CHANGED' | 'MANUAL_RESCHEDULE' | 'INSUFFICIENT_TIME_PRIORITIZATION';
  previousExamDate?: string;
  newExamDate?: string;
  previousRemainingDays: number;
  newRemainingDays: number;
  previousDailyMinutes: number;
  newDailyMinutes: number;
  completedDaysPreserved: number;
  completedTasksPreserved: number;
  futureDaysProposed: number;
  prioritizedWeakTopics: string[];
  deferredTopics: string[];
  isTimeConstrained: boolean;
  proposedDays: StudyPlanDay[];
  summaryMessage: string;
}

export interface StudyPlanRevisionRecord {
  id: string;
  planId: string;
  userId: string;
  fromVersion: number;
  toVersion: number;
  changeReason: string;
  previousExamDate?: string;
  newExamDate?: string;
  previousDailyMinutes: number;
  newDailyMinutes: number;
  completedDaysCount: number;
  completedTasksCount: number;
  deferredTopics: string[];
  summaryMessage: string;
  authorizedBy: string;
  createdAt: string;
}

export type SectionType = 
  | 'NUMERICAL' 
  | 'NUMERICAL_ABILITY'
  | 'REASONING' 
  | 'LOGICAL_REASONING'
  | 'VERBAL' 
  | 'VERBAL_ABILITY'
  | 'PROGRAMMING' 
  | 'ADVANCED_QUANT' 
  | 'CODING'
  | 'REVISION';

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

export type CognitiveSkill = 
  | 'REMEMBERING' 
  | 'UNDERSTANDING' 
  | 'APPLYING' 
  | 'ANALYZING' 
  | 'EVALUATING';

export type MCQMistakeType = 
  | 'CONCEPTUAL_GAP' 
  | 'CALCULATION_ERROR' 
  | 'MISREAD_QUESTION' 
  | 'LOGICAL_REASONING_ERROR' 
  | 'TIME_PRESSURE' 
  | 'GUESS_OR_UNCERTAIN' 
  | 'CARELESS_ERROR' 
  | 'KNOWLEDGE_GAP' 
  | 'UNCLASSIFIED';

export type ConfidenceLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface MCQAnswerKey {
  questionId: string;
  correctOptionId: string;
  explanation: string;
  formulaOrRule?: string;
  distractorExplanations?: Record<string, string>;
  misconceptionNotes?: string;
  shortcutTechnique?: string;
  conceptTested: string;
  verifiedBy: string;
  isVerified: boolean;
}

export interface MCQGradingResult {
  questionId: string;
  questionVersion: number;
  selectedOptionId: string;
  correctOptionId: string;
  isCorrect: boolean;
  explanation: string;
  formulaOrRule?: string;
  distractorExplanations?: Record<string, string>;
  misconceptionNotes?: string;
  shortcutTechnique?: string;
  conceptTested?: string;
  mistakeType?: MCQMistakeType;
  gradingStatus: 'GRADED' | 'ERROR' | 'UNAVAILABLE';
  errorMessage?: string;
}

export interface MCQAttempt {
  id: string;
  userId: string;
  questionId: string;
  questionVersion: number;
  selectedOptionId: string;
  isCorrect: boolean;
  responseTimeMs: number;
  difficulty: DifficultyLevel;
  topic: string;
  questionArchetype?: string;
  confidence?: ConfidenceLevel;
  mistakeType?: MCQMistakeType;
  isRevision: boolean;
  attemptedAt: string;
}

export interface DailyStudySessionItem {
  id: string;
  sessionId: string;
  orderIndex: number;
  itemType: 'MCQ' | 'EASY_CODING' | 'MEDIUM_CODING' | 'SPACED_REVIEW' | 'MOCK_ASSESSMENT';
  section: SectionType;
  topic: string;
  questionId: string;
  originalQuestionId?: string;
  replacementHistory?: string[];
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED';
  completedAt?: string;
}

export interface DailyStudySession {
  id: string;
  userId: string;
  sessionDate: string; // YYYY-MM-DD
  dayNumber: number;
  targetTrack: TargetTrack;
  randomizationSeed: string;
  timeBudgetMinutes: number;
  status: 'ACTIVE' | 'COMPLETED' | 'SKIPPED';
  items: DailyStudySessionItem[];
  createdAt: string;
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
  questionArchetype?: string;
  templateFamilyId?: string;
  templateFamily_id?: string;
  learningObjective?: string;
  cognitiveSkill?: CognitiveSkill;
  scenarioType?: string;
  contentFingerprint?: string;
  sourceId?: string;
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
  correctOptionId?: string; // Note: In client public payloads, this may be omitted to protect answer keys
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
  | 'Internal Execution Error'
  | 'Execution Service Unavailable';

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
  submissionToken?: string;
  executionStatus?: 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  errorDetails?: string;
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

export type StudyPlanStageType = 
  | 'STAGE_A_MCQ' 
  | 'STAGE_B_EASY_CODING' 
  | 'STAGE_C_MEDIUM_CODING' 
  | 'STAGE_D_REVIEW' 
  | 'MOCK_ASSESSMENT';

export interface StudyPlanTask {
  id: string;
  type: 'CONCEPT' | 'PRACTICE_CODING' | 'APTITUDE_QUIZ' | 'REVISION' | 'MOCK_ASSESSMENT';
  stage?: StudyPlanStageType;
  stageLabel?: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  problemId?: string;
  catalogNumber?: number;
  budgetReason?: string;
  completed: boolean;
  completedAt?: string;
  isRescheduled?: boolean;
  originalDayNumber?: number;
  rescheduledToDay?: number;
  rescheduledAt?: string;
}

export interface SpacedReviewItem {
  id: string;
  userId: string;
  problemId: string;
  problemTitle: string;
  catalogNumber?: number;
  problemFormat: 'STANDARD_IO' | 'FUNCTION_SIGNATURE' | 'MULTIPLE_CHOICE';
  section: SectionType;
  difficulty: DifficultyLevel;
  lastAttemptAt: string;
  lastVerdict: ExecutionVerdict;
  attemptCount: number;
  isAccepted: boolean;
  revealedHintsCount: number;
  timeSpentSeconds?: number;
  nextReviewDate: string; // ISO Date YYYY-MM-DD
  intervalDays: number;   // 1, 2, 3, 7, 14
  repetitionCount: number;
  consecutiveCorrect: number;
  isMastered: boolean;
  status: 'PENDING' | 'COMPLETED' | 'SNOOZED';
  updatedAt: string;
}

export type NotificationFrequency = 'DAILY' | 'EVERY_OTHER_DAY' | 'WEEKLY' | 'DISABLED';

export interface NotificationPreferences {
  userId: string;
  enabled: boolean;
  frequency: NotificationFrequency;
  reminderTime: string; // "19:00"
  timezone: string;
  remindReviewsDue: boolean;
  quietHoursEnabled: boolean;
  quietHoursStart: string; // "22:00"
  quietHoursEnd: string;   // "08:00"
  pushToken?: string;
  browserPermission: 'default' | 'granted' | 'denied' | 'unsupported';
  pausedUntil?: string;
  updatedAt: string;
}

export interface InAppNotification {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: 'DAILY_STUDY_REMINDER' | 'REVIEW_DUE' | 'STREAK_MILESTONE' | 'SYSTEM';
  targetUrl: string;
  read: boolean;
  createdAt: string;
  sentViaPush: boolean;
}

export type StudyPlanStatus = 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'ARCHIVED';

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
  status: StudyPlanStatus;
  version?: number;
  generationSeed?: string;
  inputSnapshot?: Record<string, any>;
  activatedAt?: string;
  archivedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ExamProfile {
  id: string;
  track: TargetTrack;
  title: string;
  version: number;
  sections: {
    section: string;
    questionsCount: number;
    durationMinutes: number;
  }[];
  totalDurationMinutes: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HiddenTestCase {
  id: string;
  questionId: string;
  input: string;
  expectedOutput: string;
  timeLimitMs?: number;
  memoryLimitKb?: number;
  isSecret?: boolean;
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
