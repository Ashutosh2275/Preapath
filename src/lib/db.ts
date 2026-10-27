import { supabase, isPostgresConfigured } from './supabase';
import { 
  UserProfile, 
  Question, 
  StudyPlan, 
  Submission, 
  ProblemProgress, 
  CustomTestCase,
  AssessmentAttempt
} from '../types';

/**
 * PostgreSQL Data Access Layer
 * Provides typed persistence against Supabase PostgreSQL backend.
 */

// 1. PROFILES
export async function getPostgresProfile(userId: string): Promise<UserProfile | null> {
  if (!isPostgresConfigured() || !supabase) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error || !data) return null;

  return {
    uid: data.id,
    email: data.email,
    displayName: data.display_name || '',
    targetTrack: data.target_track,
    preferredLanguage: data.preferred_language,
    availablePreparationDays: data.available_days,
    dailyAvailableMinutes: data.daily_minutes,
    examDate: data.exam_date || undefined,
    proficiency: data.proficiency,
    weakTopics: data.weak_topics || [],
    role: data.role,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

export async function upsertPostgresProfile(profile: UserProfile): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: profile.uid,
      email: profile.email,
      display_name: profile.displayName,
      target_track: profile.targetTrack,
      preferred_language: profile.preferredLanguage,
      available_days: profile.availablePreparationDays,
      daily_minutes: profile.dailyAvailableMinutes,
      exam_date: profile.examDate || null,
      proficiency: profile.proficiency,
      weak_topics: profile.weakTopics,
      role: profile.role,
      updated_at: new Date().toISOString(),
    });

  return !error;
}

// 2. QUESTIONS
export async function fetchPostgresQuestions(): Promise<Question[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data) return [];

  return data.map((row: any) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    problemStatement: row.problem_statement,
    inputFormat: row.input_format,
    outputFormat: row.output_format,
    constraints: row.constraints || [],
    examples: row.examples || [],
    difficulty: row.difficulty,
    topics: row.topics || [],
    sections: row.sections || [],
    targetTracks: row.target_tracks || [],
    estimatedMinutes: row.estimated_minutes,
    problemFormat: 'STANDARD_IO',
    sourceType: row.source_type,
    hints: row.hints || [],
    explanation: row.explanation,
    timeComplexity: row.time_complexity,
    spaceComplexity: row.space_complexity,
    starterCodeByLanguage: row.starter_code,
    publicTestCases: row.public_test_cases || [],
    hiddenTestCases: row.hidden_test_cases || [],
    publicationStatus: row.publication_status,
    version: row.version || 1,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export async function upsertPostgresQuestion(question: Question): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('questions')
    .upsert({
      id: question.id,
      slug: question.slug,
      title: question.title,
      problem_statement: question.problemStatement,
      input_format: question.inputFormat,
      output_format: question.outputFormat,
      constraints: question.constraints,
      examples: question.examples,
      difficulty: question.difficulty,
      topics: question.topics,
      sections: question.sections,
      target_tracks: question.targetTracks,
      estimated_minutes: question.estimatedMinutes,
      source_type: question.sourceType,
      hints: question.hints,
      explanation: question.explanation,
      time_complexity: question.timeComplexity || null,
      space_complexity: question.spaceComplexity || null,
      starter_code: question.starterCodeByLanguage,
      public_test_cases: question.publicTestCases,
      hidden_test_cases: question.hiddenTestCases || [],
      publication_status: question.publicationStatus,
      version: question.version || 1,
      updated_at: new Date().toISOString(),
    });

  return !error;
}

// 3. STUDY PLANS
export async function savePostgresStudyPlan(plan: StudyPlan): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error: planError } = await supabase
    .from('study_plans')
    .upsert({
      id: plan.id,
      user_id: plan.userId,
      target_track: plan.targetTrack,
      start_date: plan.startDate,
      end_date: plan.endDate,
      daily_minutes: plan.dailyAvailableMinutes,
      status: plan.status,
      updated_at: new Date().toISOString(),
    });

  if (planError) return false;

  // Insert tasks
  const tasksToInsert = plan.days.flatMap(day =>
    day.tasks.map(t => ({
      id: t.id,
      plan_id: plan.id,
      day_number: day.dayNumber,
      scheduled_date: day.date,
      task_type: t.type,
      title: t.title,
      description: t.description,
      estimated_minutes: t.estimatedMinutes,
      problem_id: t.problemId || null,
      completed: t.completed,
    }))
  );

  const { error: tasksError } = await supabase
    .from('study_plan_tasks')
    .upsert(tasksToInsert);

  return !tasksError;
}

// 4. SUBMISSIONS
export async function recordPostgresSubmission(submission: Submission): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('submissions')
    .insert({
      id: submission.id,
      user_id: submission.userId,
      problem_id: submission.problemId,
      language: submission.language,
      source_code_snapshot: submission.sourceCodeSnapshot,
      verdict: submission.verdict,
      passed_tests: submission.passedTests,
      total_tests: submission.totalTests,
      execution_time_ms: submission.executionTimeMs,
      memory_used_kb: submission.memoryUsedKb,
      public_results: submission.publicCaseResults || [],
      submitted_at: submission.submittedAt,
    });

  return !error;
}

// 5. PROBLEM PROGRESS
export async function upsertPostgresProgress(progress: ProblemProgress, userId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('problem_progress')
    .upsert({
      id: `prog-${userId}-${progress.problemId}`,
      user_id: userId,
      problem_id: progress.problemId,
      current_status: progress.currentStatus,
      total_submissions: progress.totalSubmissions,
      accepted_submissions: progress.acceptedSubmissions,
      first_accepted_at: progress.firstAcceptedAt || null,
      last_attempt_at: progress.lastAttemptAt || null,
      last_verdict: progress.lastVerdict || null,
      last_language: progress.lastLanguage || null,
      best_runtime_ms: progress.bestRuntimeMs || null,
      needs_revision: progress.needsRevision,
      bookmarked: progress.bookmarked,
      revealed_hints_count: progress.revealedHintsCount,
      notes: progress.notes || null,
      updated_at: new Date().toISOString(),
    });

  return !error;
}

// 6. CODE DRAFTS
export async function savePostgresDraft(
  userId: string,
  problemId: string,
  language: string,
  sourceCode: string
): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('problem_drafts')
    .upsert({
      id: `draft-${userId}-${problemId}-${language}`,
      user_id: userId,
      problem_id: problemId,
      language,
      source_code: sourceCode,
      updated_at: new Date().toISOString(),
    });

  return !error;
}

// 7. CUSTOM TEST CASES
export async function savePostgresCustomTestCase(tc: CustomTestCase): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('custom_test_cases')
    .upsert({
      id: tc.id,
      user_id: tc.userId,
      problem_id: tc.problemId,
      name: tc.name,
      input: tc.input,
      expected_output: tc.expectedOutput || null,
      updated_at: new Date().toISOString(),
    });

  return !error;
}

export async function deletePostgresCustomTestCase(caseId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  const { error } = await supabase
    .from('custom_test_cases')
    .delete()
    .eq('id', caseId);

  return !error;
}
