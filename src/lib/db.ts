import { supabase, isPostgresConfigured } from './supabase';
import { 
  UserProfile, 
  Question, 
  StudyPlan, 
  StudyPlanDay,
  StudyPlanTask,
  Submission, 
  ProblemProgress, 
  CustomTestCase,
  ProblemDraft,
  AssessmentAttempt,
  SpacedReviewItem,
  NotificationPreferences,
  InAppNotification,
  TopicMasteryRecord,
  StudyPlanRevisionRecord,
  MCQAttempt,
  DailyStudySession,
  DailyStudySessionItem,
  NotificationDevice,
  ScheduledNotification,
  PrepIntensity
} from '../types';

/**
 * PostgreSQL Authoritative Data Access Layer
 * Powered by Supabase PostgreSQL backend with connection pooling and typed entities.
 */

// 1. PROFILES
export async function getPostgresProfile(userId: string): Promise<UserProfile | null> {
  if (!isPostgresConfigured() || !supabase) return null;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, display_name, target_track, preferred_language, available_days, daily_minutes, exam_date, proficiency, weak_topics, role, timezone, onboarding_completed, onboarding_version, days_available_per_week, preferred_study_hours, preparation_start_date, prep_intensity, version, created_at, updated_at')
      .eq('id', userId)
      .maybeSingle();

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
      timezone: data.timezone || 'Asia/Kolkata',
      onboardingCompleted: data.onboarding_completed ?? (Boolean(data.target_track)),
      onboardingVersion: data.onboarding_version || 1,
      daysAvailablePerWeek: data.days_available_per_week || 6,
      preferredStudyHours: data.preferred_study_hours || undefined,
      preparationStartDate: data.preparation_start_date || undefined,
      prepIntensity: (data.prep_intensity as PrepIntensity) || 'STANDARD',
      version: data.version || 1,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (err) {
    console.warn('Failed to fetch PostgreSQL profile:', err);
    return null;
  }
}

export async function upsertPostgresProfile(profile: UserProfile): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const payload: any = {
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
      timezone: profile.timezone || 'Asia/Kolkata',
      onboarding_completed: profile.onboardingCompleted ?? true,
      onboarding_version: profile.onboardingVersion || 1,
      days_available_per_week: profile.daysAvailablePerWeek || 6,
      preferred_study_hours: profile.preferredStudyHours || null,
      preparation_start_date: profile.preparationStartDate || null,
      prep_intensity: profile.prepIntensity || 'STANDARD',
      version: (profile.version || 1) + 1,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('profiles')
      .upsert(payload);

    return !error;
  } catch (err) {
    console.error('Failed to upsert PostgreSQL profile:', err);
    return false;
  }
}

// 2. QUESTIONS (Public catalog query projection - NEVER exposes hidden test cases)
export async function fetchPostgresQuestions(): Promise<Question[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        id,
        catalog_number,
        external_problem_id,
        external_url,
        slug,
        title,
        problem_statement,
        input_format,
        output_format,
        constraints,
        examples,
        difficulty,
        topics,
        sections,
        target_tracks,
        estimated_minutes,
        problem_format,
        source_type,
        hints,
        hint_stages,
        solutions,
        options,
        correct_option_id,
        explanation,
        time_complexity,
        space_complexity,
        starter_code,
        public_test_cases,
        publication_status,
        version,
        created_at,
        updated_at
      `)
      .order('catalog_number', { ascending: true, nullsFirst: false });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      catalogNumber: row.catalog_number || undefined,
      externalProblemId: row.external_problem_id || undefined,
      externalUrl: row.external_url || undefined,
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
      problemFormat: row.problem_format || 'STANDARD_IO',
      sourceType: row.source_type,
      hints: row.hints || [],
      hintStages: row.hint_stages || [],
      solutions: row.solutions || [],
      options: row.options || [],
      correctOptionId: row.correct_option_id || undefined,
      explanation: row.explanation,
      timeComplexity: row.time_complexity,
      spaceComplexity: row.space_complexity,
      starterCodeByLanguage: row.starter_code || { c: '', cpp: '', java: '', python: '' },
      publicTestCases: row.public_test_cases || [],
      hiddenTestCases: [], // Explicitly empty for public client query
      publicationStatus: row.publication_status,
      version: row.version || 1,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch PostgreSQL questions:', err);
    return [];
  }
}

export async function upsertPostgresQuestion(question: Question): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('questions')
      .upsert({
        id: question.id,
        catalog_number: question.catalogNumber,
        external_problem_id: question.externalProblemId,
        external_url: question.externalUrl,
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
        problem_format: question.problemFormat,
        source_type: question.sourceType,
        hints: question.hints || [],
        hint_stages: question.hintStages || [],
        solutions: question.solutions || [],
        options: question.options || null,
        correct_option_id: question.correctOptionId || null,
        explanation: question.explanation,
        time_complexity: question.timeComplexity || null,
        space_complexity: question.spaceComplexity || null,
        starter_code: question.starterCodeByLanguage || {},
        public_test_cases: question.publicTestCases || [],
        publication_status: question.publicationStatus,
        version: question.version || 1,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'id' });

    if (error) {
      console.warn('Failed to upsert question in PostgreSQL:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Error upserting question in PostgreSQL:', err);
    return false;
  }
}

// 3. STUDY PLANS & IMMUTABLE TASKS
export async function savePostgresStudyPlan(plan: StudyPlan): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
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
        version: plan.version || 1,
        generation_seed: plan.generationSeed || null,
        input_snapshot: plan.inputSnapshot || null,
        activated_at: plan.activatedAt || (plan.status === 'ACTIVE' ? new Date().toISOString() : null),
        archived_at: plan.archivedAt || null,
        updated_at: new Date().toISOString(),
      });

    if (planError) {
      console.error('Error saving study plan record:', planError);
      return false;
    }

    // Insert tasks atomically with stage and rescheduling audit metadata
    const tasksToInsert = plan.days.flatMap(day =>
      day.tasks.map(t => ({
        id: t.id,
        plan_id: plan.id,
        day_number: day.dayNumber,
        scheduled_date: day.date,
        task_type: t.type,
        stage_type: t.stage || null,
        stage_label: t.stageLabel || null,
        catalog_number: t.catalogNumber || null,
        budget_reason: t.budgetReason || null,
        title: t.title,
        description: t.description,
        estimated_minutes: t.estimatedMinutes,
        problem_id: t.problemId || null,
        completed: t.completed,
        completed_at: t.completedAt || null,
        is_rescheduled: t.isRescheduled || false,
        original_day_number: t.originalDayNumber || null,
        rescheduled_to_day: t.rescheduledToDay || null,
        rescheduled_at: t.rescheduledAt || null,
      }))
    );

    const { error: tasksError } = await supabase
      .from('study_plan_tasks')
      .upsert(tasksToInsert, { onConflict: 'id' });

    return !tasksError;
  } catch (err) {
    console.error('Failed to save study plan to PostgreSQL:', err);
    return false;
  }
}

export async function fetchPostgresStudyPlan(userId: string): Promise<StudyPlan | null> {
  if (!isPostgresConfigured() || !supabase) return null;

  try {
    const { data: planData, error: planError } = await supabase
      .from('study_plans')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'ACTIVE')
      .order('created_at', { ascending: false })
      .maybeSingle();

    if (planError || !planData) return null;

    const { data: tasksData, error: tasksError } = await supabase
      .from('study_plan_tasks')
      .select('*')
      .eq('plan_id', planData.id)
      .order('day_number', { ascending: true });

    if (tasksError || !tasksData) return null;

    // Group tasks by dayNumber
    const dayMap = new Map<number, StudyPlanTask[]>();
    const dateMap = new Map<number, string>();

    tasksData.forEach((row: any) => {
      const dayNum = row.day_number;
      if (!dayMap.has(dayNum)) {
        dayMap.set(dayNum, []);
        dateMap.set(dayNum, row.scheduled_date);
      }
      dayMap.get(dayNum)!.push({
        id: row.id,
        type: row.task_type,
        stage: row.stage_type || undefined,
        stageLabel: row.stage_label || undefined,
        title: row.title,
        description: row.description || '',
        estimatedMinutes: row.estimated_minutes,
        problemId: row.problem_id || undefined,
        catalogNumber: row.catalog_number || undefined,
        budgetReason: row.budget_reason || undefined,
        completed: row.completed,
        completedAt: row.completed_at || undefined,
        isRescheduled: row.is_rescheduled,
        originalDayNumber: row.original_day_number || undefined,
        rescheduledToDay: row.rescheduled_to_day || undefined,
        rescheduledAt: row.rescheduled_at || undefined,
      });
    });

    const days: StudyPlanDay[] = Array.from(dayMap.entries()).map(([dayNumber, tasks]) => {
      const isCompleted = tasks.every(t => t.completed);
      const totalMinutes = tasks.reduce((sum, t) => sum + t.estimatedMinutes, 0);
      return {
        dayNumber,
        date: dateMap.get(dayNumber) || planData.start_date,
        topic: tasks[0]?.stageLabel || 'Daily Practice Session',
        section: 'NUMERICAL',
        tasks,
        isCompleted,
        totalPlannedMinutes: totalMinutes,
      };
    });

    return {
      id: planData.id,
      userId: planData.user_id,
      targetTrack: planData.target_track,
      startDate: planData.start_date,
      endDate: planData.end_date,
      dailyAvailableMinutes: planData.daily_minutes,
      days,
      status: planData.status,
      version: planData.version,
      generationSeed: planData.generation_seed || undefined,
      inputSnapshot: planData.input_snapshot || undefined,
      activatedAt: planData.activated_at || undefined,
      archivedAt: planData.archived_at || undefined,
      createdAt: planData.created_at,
      updatedAt: planData.updated_at,
    };
  } catch (err) {
    console.warn('Failed to fetch study plan from PostgreSQL:', err);
    return null;
  }
}

export async function archivePostgresStudyPlan(planId: string, userId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('study_plans')
      .update({
        status: 'ARCHIVED',
        archived_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', planId)
      .eq('user_id', userId);

    return !error;
  } catch (err) {
    console.error('Failed to archive study plan:', err);
    return false;
  }
}

// 4. SUBMISSIONS (Immutable Judged Snapshots)
export async function recordPostgresSubmission(submission: Submission): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
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
        submission_token: submission.submissionToken || null,
        execution_status: submission.executionStatus || 'COMPLETED',
        submitted_at: submission.submittedAt,
      });

    return !error;
  } catch (err) {
    console.error('Failed to insert submission to PostgreSQL:', err);
    return false;
  }
}

export async function fetchPostgresSubmissions(userId: string): Promise<Submission[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('user_id', userId)
      .order('submitted_at', { ascending: false })
      .limit(100);

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      problemId: row.problem_id,
      language: row.language,
      sourceCodeSnapshot: row.source_code_snapshot,
      verdict: row.verdict,
      passedTests: row.passed_tests,
      totalTests: row.total_tests,
      executionTimeMs: row.execution_time_ms,
      memoryUsedKb: row.memory_used_kb,
      publicCaseResults: row.public_results || [],
      submissionToken: row.submission_token || undefined,
      executionStatus: row.execution_status || 'COMPLETED',
      submittedAt: row.submitted_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch submissions from PostgreSQL:', err);
    return [];
  }
}

// 5. PROBLEM PROGRESS
export async function upsertPostgresProgress(progress: ProblemProgress, userId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
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
      }, { onConflict: 'user_id, problem_id' });

    return !error;
  } catch (err) {
    console.error('Failed to upsert progress to PostgreSQL:', err);
    return false;
  }
}

export async function fetchPostgresProgress(userId: string): Promise<Record<string, ProblemProgress>> {
  if (!isPostgresConfigured() || !supabase) return {};

  try {
    const { data, error } = await supabase
      .from('problem_progress')
      .select('*')
      .eq('user_id', userId);

    if (error || !data) return {};

    const progressMap: Record<string, ProblemProgress> = {};
    data.forEach((row: any) => {
      progressMap[row.problem_id] = {
        problemId: row.problem_id,
        currentStatus: row.current_status,
        totalSubmissions: row.total_submissions,
        acceptedSubmissions: row.accepted_submissions,
        firstAcceptedAt: row.first_accepted_at || undefined,
        lastAttemptAt: row.last_attempt_at || undefined,
        lastVerdict: row.last_verdict || undefined,
        lastLanguage: row.last_language || undefined,
        bestRuntimeMs: row.best_runtime_ms || undefined,
        needsRevision: row.needs_revision,
        bookmarked: row.bookmarked,
        revealedHintsCount: row.revealed_hints_count,
        notes: row.notes || undefined,
        updatedAt: row.updated_at,
      };
    });

    return progressMap;
  } catch (err) {
    console.warn('Failed to fetch progress from PostgreSQL:', err);
    return {};
  }
}

// 6. CODE DRAFTS
export async function savePostgresDraft(
  userId: string,
  problemId: string,
  language: string,
  sourceCode: string
): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('problem_drafts')
      .upsert({
        id: `draft-${userId}-${problemId}-${language}`,
        user_id: userId,
        problem_id: problemId,
        language,
        source_code: sourceCode,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id, problem_id, language' });

    return !error;
  } catch (err) {
    console.error('Failed to save draft to PostgreSQL:', err);
    return false;
  }
}

export async function fetchPostgresDrafts(userId: string): Promise<Record<string, ProblemDraft>> {
  if (!isPostgresConfigured() || !supabase) return {};

  try {
    const { data, error } = await supabase
      .from('problem_drafts')
      .select('*')
      .eq('user_id', userId);

    if (error || !data) return {};

    const draftMap: Record<string, ProblemDraft> = {};
    data.forEach((row: any) => {
      const key = `${row.problem_id}_${row.language}`;
      draftMap[key] = {
        problemId: row.problem_id,
        language: row.language,
        sourceCode: row.source_code,
        updatedAt: row.updated_at,
      };
    });

    return draftMap;
  } catch (err) {
    console.warn('Failed to fetch drafts from PostgreSQL:', err);
    return {};
  }
}

// 7. CUSTOM TEST CASES
export async function savePostgresCustomTestCase(tc: CustomTestCase): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
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
  } catch (err) {
    console.error('Failed to save custom test case:', err);
    return false;
  }
}

export async function deletePostgresCustomTestCase(caseId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('custom_test_cases')
      .delete()
      .eq('id', caseId);

    return !error;
  } catch (err) {
    console.error('Failed to delete custom test case:', err);
    return false;
  }
}

export async function fetchPostgresCustomTestCases(userId: string): Promise<CustomTestCase[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('custom_test_cases')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: true });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      problemId: row.problem_id,
      name: row.name,
      input: row.input,
      expectedOutput: row.expected_output || undefined,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch custom test cases:', err);
    return [];
  }
}

// 8. SPACED REVIEW ITEMS
export async function upsertPostgresSpacedReviewItem(item: SpacedReviewItem): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('spaced_review_items')
      .upsert({
        id: item.id,
        user_id: item.userId,
        problem_id: item.problemId,
        problem_title: item.problemTitle,
        catalog_number: item.catalogNumber || null,
        problem_format: item.problemFormat,
        section: item.section,
        difficulty: item.difficulty,
        last_attempt_at: item.lastAttemptAt,
        last_verdict: item.lastVerdict,
        attempt_count: item.attemptCount,
        is_accepted: item.isAccepted,
        revealed_hints_count: item.revealedHintsCount,
        time_spent_seconds: item.timeSpentSeconds || null,
        next_review_date: item.nextReviewDate,
        interval_days: item.intervalDays,
        repetition_count: item.repetitionCount,
        consecutive_correct: item.consecutiveCorrect,
        is_mastered: item.isMastered,
        status: item.status,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id, problem_id' });

    return !error;
  } catch (err) {
    console.error('Failed to upsert spaced review item:', err);
    return false;
  }
}

export async function fetchPostgresSpacedReviews(userId: string): Promise<SpacedReviewItem[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('spaced_review_items')
      .select('*')
      .eq('user_id', userId)
      .order('next_review_date', { ascending: true });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      problemId: row.problem_id,
      problemTitle: row.problem_title,
      catalogNumber: row.catalog_number || undefined,
      problemFormat: row.problem_format,
      section: row.section,
      difficulty: row.difficulty,
      lastAttemptAt: row.last_attempt_at,
      lastVerdict: row.last_verdict,
      attemptCount: row.attempt_count,
      isAccepted: row.is_accepted,
      revealedHintsCount: row.revealed_hints_count,
      timeSpentSeconds: row.time_spent_seconds || undefined,
      nextReviewDate: row.next_review_date,
      intervalDays: row.interval_days,
      repetitionCount: row.repetition_count,
      consecutiveCorrect: row.consecutive_correct,
      isMastered: row.is_mastered,
      status: row.status,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch spaced reviews:', err);
    return [];
  }
}

// 9. NOTIFICATION PREFERENCES & LOGS
export async function upsertPostgresNotificationPreferences(prefs: NotificationPreferences): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('notification_preferences')
      .upsert({
        user_id: prefs.userId,
        enabled: prefs.enabled,
        frequency: prefs.frequency,
        reminder_time: prefs.reminderTime,
        timezone: prefs.timezone,
        remind_reviews_due: prefs.remindReviewsDue,
        quiet_hours_enabled: prefs.quietHoursEnabled,
        quiet_hours_start: prefs.quietHoursStart,
        quiet_hours_end: prefs.quietHoursEnd,
        push_token: prefs.pushToken || null,
        browser_permission: prefs.browserPermission,
        paused_until: prefs.pausedUntil || null,
        updated_at: new Date().toISOString(),
      });

    return !error;
  } catch (err) {
    console.error('Failed to upsert notification preferences:', err);
    return false;
  }
}

export async function fetchPostgresNotificationPreferences(userId: string): Promise<NotificationPreferences | null> {
  if (!isPostgresConfigured() || !supabase) return null;

  try {
    const { data, error } = await supabase
      .from('notification_preferences')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) return null;

    return {
      userId: data.user_id,
      enabled: data.enabled,
      frequency: data.frequency,
      reminderTime: data.reminder_time,
      timezone: data.timezone,
      remindReviewsDue: data.remind_reviews_due,
      quietHoursEnabled: data.quiet_hours_enabled,
      quietHoursStart: data.quiet_hours_start,
      quietHoursEnd: data.quiet_hours_end,
      pushToken: data.push_token || undefined,
      browserPermission: data.browser_permission,
      pausedUntil: data.paused_until || undefined,
      updatedAt: data.updated_at,
    };
  } catch (err) {
    console.warn('Failed to fetch notification preferences:', err);
    return null;
  }
}

export async function logPostgresNotificationDelivery(log: {
  userId: string;
  type: string;
  title: string;
  body: string;
  status: 'SENT' | 'FAILED' | 'SKIPPED_QUIET_HOURS' | 'SKIPPED_ALREADY_COMPLETED';
  idempotencyKey?: string;
  errorMessage?: string;
}): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('notification_logs')
      .insert({
        id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        user_id: log.userId,
        notification_type: log.type,
        title: log.title,
        body: log.body,
        status: log.status,
        idempotency_key: log.idempotencyKey || null,
        error_message: log.errorMessage || null,
        sent_at: new Date().toISOString(),
      });

    return !error;
  } catch (err) {
    console.error('Failed to log notification delivery:', err);
    return false;
  }
}

export async function fetchPostgresInAppNotifications(userId: string): Promise<InAppNotification[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('in_app_notifications')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      title: row.title,
      body: row.body,
      type: row.type,
      targetUrl: row.target_url,
      read: row.read,
      createdAt: row.created_at,
      sentViaPush: false,
    }));
  } catch (err) {
    console.warn('Failed to fetch in-app notifications:', err);
    return [];
  }
}

// 10. TOPIC MASTERY & RETENTION
export async function fetchPostgresTopicMastery(userId: string): Promise<TopicMasteryRecord[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('topic_mastery')
      .select('*')
      .eq('user_id', userId);

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      topic: row.topic,
      section: row.section,
      track: row.track,
      masteryState: row.mastery_state,
      score: row.score,
      totalAttempts: row.total_attempts,
      successfulAttempts: row.successful_attempts,
      independentSolves: row.independent_solves,
      delayedRecallSuccesses: row.delayed_recall_successes,
      evidenceNotes: row.evidence_notes || [],
      lastAttemptAt: row.last_attempt_at,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch topic mastery records:', err);
    return [];
  }
}

export async function upsertPostgresTopicMastery(record: TopicMasteryRecord): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('topic_mastery')
      .upsert({
        user_id: record.userId,
        topic: record.topic,
        section: record.section,
        track: record.track,
        mastery_state: record.masteryState,
        score: record.score,
        total_attempts: record.totalAttempts,
        successful_attempts: record.successfulAttempts,
        independent_solves: record.independentSolves,
        delayed_recall_successes: record.delayedRecallSuccesses,
        evidence_notes: record.evidenceNotes || [],
        last_attempt_at: record.lastAttemptAt || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,topic' });

    return !error;
  } catch (err) {
    console.error('Failed to upsert topic mastery:', err);
    return false;
  }
}

// 11. STUDY PLAN REVISIONS AUDIT LOG
export async function recordPostgresPlanRevision(revision: StudyPlanRevisionRecord): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('study_plan_revisions')
      .insert({
        id: revision.id,
        plan_id: revision.planId,
        user_id: revision.userId,
        from_version: revision.fromVersion,
        to_version: revision.toVersion,
        change_reason: revision.changeReason,
        previous_exam_date: revision.previousExamDate || null,
        new_exam_date: revision.newExamDate || null,
        previous_daily_minutes: revision.previousDailyMinutes,
        new_daily_minutes: revision.newDailyMinutes,
        completed_days_count: revision.completedDaysCount,
        completed_tasks_count: revision.completedTasksCount,
        deferred_topics: revision.deferredTopics || [],
        summary_message: revision.summaryMessage,
        authorized_by: revision.authorizedBy,
        created_at: revision.createdAt,
      });

    return !error;
  } catch (err) {
    console.error('Failed to record study plan revision:', err);
    return false;
  }
}

export async function fetchPostgresPlanRevisions(userId: string): Promise<StudyPlanRevisionRecord[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('study_plan_revisions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      planId: row.plan_id,
      userId: row.user_id,
      fromVersion: row.from_version,
      toVersion: row.to_version,
      changeReason: row.change_reason,
      previousExamDate: row.previous_exam_date || undefined,
      newExamDate: row.new_exam_date || undefined,
      previousDailyMinutes: row.previous_daily_minutes,
      newDailyMinutes: row.new_daily_minutes,
      completedDaysCount: row.completed_days_count,
      completedTasksCount: row.completed_tasks_count,
      deferredTopics: row.deferred_topics || [],
      summaryMessage: row.summary_message,
      authorizedBy: row.authorized_by,
      createdAt: row.created_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch plan revisions:', err);
    return [];
  }
}

// 12. MCQ ATTEMPTS
export async function recordPostgresMcqAttempt(attempt: MCQAttempt): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('mcq_attempts')
      .insert({
        id: attempt.id,
        user_id: attempt.userId,
        question_id: attempt.questionId,
        question_version: attempt.questionVersion || 1,
        selected_option: attempt.selectedOptionId,
        is_correct: attempt.isCorrect,
        response_time_ms: attempt.responseTimeMs,
        difficulty: attempt.difficulty,
        topic: attempt.topic,
        question_archetype: attempt.questionArchetype || null,
        confidence: attempt.confidence || null,
        mistake_type: attempt.mistakeType || null,
        is_revision: attempt.isRevision || false,
        attempted_at: attempt.attemptedAt,
      });

    return !error;
  } catch (err) {
    console.error('Failed to record MCQ attempt:', err);
    return false;
  }
}

export async function fetchPostgresMcqAttempts(userId: string): Promise<MCQAttempt[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('mcq_attempts')
      .select('*')
      .eq('user_id', userId)
      .order('attempted_at', { ascending: false });

    if (error || !data) return [];

    return data.map((row: any) => ({
      id: row.id,
      userId: row.user_id,
      questionId: row.question_id,
      questionVersion: row.question_version,
      selectedOptionId: row.selected_option,
      isCorrect: row.is_correct,
      responseTimeMs: row.response_time_ms,
      difficulty: row.difficulty,
      topic: row.topic,
      questionArchetype: row.question_archetype || undefined,
      confidence: row.confidence || undefined,
      mistakeType: row.mistake_type || undefined,
      isRevision: row.is_revision,
      attemptedAt: row.attempted_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch MCQ attempts:', err);
    return [];
  }
}

// 13. DAILY STUDY SESSIONS & ITEMS
export async function savePostgresDailySession(session: DailyStudySession): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    // 1. Upsert session parent record
    const { error: sessionError } = await supabase
      .from('daily_study_sessions')
      .upsert({
        id: session.id,
        user_id: session.userId,
        session_date: session.sessionDate,
        day_number: session.dayNumber,
        target_track: session.targetTrack,
        randomization_seed: session.randomizationSeed,
        time_budget_minutes: session.timeBudgetMinutes,
        status: session.status,
        created_at: session.createdAt,
      });

    if (sessionError) {
      console.warn('Failed to upsert daily_study_sessions:', sessionError);
      return false;
    }

    // 2. Upsert items
    if (session.items && session.items.length > 0) {
      const dbItems = session.items.map((it) => ({
        id: it.id,
        session_id: session.id,
        order_index: it.orderIndex,
        item_type: it.itemType,
        section: it.section,
        topic: it.topic,
        question_id: it.questionId,
        original_question_id: it.originalQuestionId || null,
        replacement_history: it.replacementHistory || [],
        difficulty: it.difficulty,
        estimated_minutes: it.estimatedMinutes,
        status: it.status,
        completed_at: it.completedAt || null,
      }));

      const { error: itemsError } = await supabase
        .from('daily_study_session_items')
        .upsert(dbItems);

      if (itemsError) {
        console.warn('Failed to upsert daily_study_session_items:', itemsError);
      }
    }

    return true;
  } catch (err) {
    console.error('Failed to save daily study session:', err);
    return false;
  }
}

export async function fetchPostgresDailySessions(userId: string): Promise<Record<string, DailyStudySession>> {
  if (!isPostgresConfigured() || !supabase) return {};

  try {
    const { data: sessionData, error: sessionError } = await supabase
      .from('daily_study_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('session_date', { ascending: false });

    if (sessionError || !sessionData || sessionData.length === 0) return {};

    const sessionIds = sessionData.map((s: any) => s.id);
    const { data: itemData, error: itemError } = await supabase
      .from('daily_study_session_items')
      .select('*')
      .in('session_id', sessionIds)
      .order('order_index', { ascending: true });

    const itemsBySession: Record<string, DailyStudySessionItem[]> = {};
    if (!itemError && itemData) {
      itemData.forEach((row: any) => {
        if (!itemsBySession[row.session_id]) {
          itemsBySession[row.session_id] = [];
        }
        itemsBySession[row.session_id].push({
          id: row.id,
          sessionId: row.session_id,
          orderIndex: row.order_index,
          itemType: row.item_type,
          section: row.section,
          topic: row.topic,
          questionId: row.question_id,
          originalQuestionId: row.original_question_id || undefined,
          replacementHistory: row.replacement_history || [],
          difficulty: row.difficulty,
          estimatedMinutes: row.estimated_minutes,
          status: row.status,
          completedAt: row.completed_at || undefined,
        });
      });
    }

    const sessionsMap: Record<string, DailyStudySession> = {};
    sessionData.forEach((s: any) => {
      sessionsMap[s.session_date] = {
        id: s.id,
        userId: s.user_id,
        sessionDate: s.session_date,
        dayNumber: s.day_number,
        targetTrack: s.target_track,
        randomizationSeed: s.randomization_seed,
        timeBudgetMinutes: s.time_budget_minutes,
        status: s.status,
        items: itemsBySession[s.id] || [],
        createdAt: s.created_at,
      };
    });

    return sessionsMap;
  } catch (err) {
    console.warn('Failed to fetch daily study sessions:', err);
    return {};
  }
}

// 19. MULTI-DEVICE NOTIFICATIONS & SUBSCRIPTIONS
export async function registerPostgresNotificationDevice(
  device: Omit<NotificationDevice, 'id' | 'createdAt' | 'updatedAt'>
): Promise<NotificationDevice | null> {
  if (!isPostgresConfigured() || !supabase) return null;

  try {
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('notification_devices')
      .upsert({
        user_id: device.userId,
        device_id: device.deviceId,
        fcm_token: device.fcmToken || null,
        device_name: device.deviceName,
        platform: device.platform || 'web',
        timezone: device.timezone || 'Asia/Kolkata',
        is_active: device.isActive,
        last_active_at: now,
        updated_at: now,
      }, { onConflict: 'user_id,device_id' })
      .select()
      .single();

    if (error || !data) {
      console.warn('registerPostgresNotificationDevice note:', error);
      return null;
    }

    return {
      id: data.id,
      userId: data.user_id,
      deviceId: data.device_id,
      fcmToken: data.fcm_token || undefined,
      deviceName: data.device_name,
      platform: data.platform || undefined,
      timezone: data.timezone,
      isActive: data.is_active,
      lastActiveAt: data.last_active_at,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (err) {
    console.warn('Failed to register notification device:', err);
    return null;
  }
}

export async function fetchPostgresNotificationDevices(userId: string): Promise<NotificationDevice[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('notification_devices')
      .select('*')
      .eq('user_id', userId)
      .order('last_active_at', { ascending: false });

    if (error || !data) return [];

    return data.map((d: any) => ({
      id: d.id,
      userId: d.user_id,
      deviceId: d.device_id,
      fcmToken: d.fcm_token || undefined,
      deviceName: d.device_name,
      platform: d.platform || undefined,
      timezone: d.timezone,
      isActive: d.is_active,
      lastActiveAt: d.last_active_at,
      createdAt: d.created_at,
      updatedAt: d.updated_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch notification devices:', err);
    return [];
  }
}

export async function updatePostgresNotificationDeviceStatus(
  userId: string,
  deviceId: string,
  isActive: boolean
): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('notification_devices')
      .update({ is_active: isActive, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .eq('device_id', deviceId);

    return !error;
  } catch (err) {
    console.warn('Failed to update device status:', err);
    return false;
  }
}

export async function removePostgresNotificationDevice(
  userId: string,
  deviceId: string
): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('notification_devices')
      .delete()
      .eq('user_id', userId)
      .eq('device_id', deviceId);

    return !error;
  } catch (err) {
    console.warn('Failed to remove notification device:', err);
    return false;
  }
}

// 20. SCHEDULED NOTIFICATIONS DURABLE OUTBOX
export async function queueScheduledNotification(
  notif: Omit<ScheduledNotification, 'id' | 'createdAt'>
): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    const { error } = await supabase
      .from('scheduled_notifications')
      .upsert({
        user_id: notif.userId,
        device_id: notif.deviceId || null,
        notification_type: notif.notificationType,
        scheduled_for_utc: notif.scheduledForUtc,
        title: notif.title,
        body: notif.body,
        target_url: notif.targetUrl,
        status: notif.status,
        idempotency_key: notif.idempotencyKey,
      }, { onConflict: 'idempotency_key' });

    return !error;
  } catch (err) {
    console.warn('Failed to queue scheduled notification:', err);
    return false;
  }
}

export async function fetchPostgresScheduledNotifications(userId: string): Promise<ScheduledNotification[]> {
  if (!isPostgresConfigured() || !supabase) return [];

  try {
    const { data, error } = await supabase
      .from('scheduled_notifications')
      .select('*')
      .eq('user_id', userId)
      .order('scheduled_for_utc', { ascending: false })
      .limit(50);

    if (error || !data) return [];

    return data.map((n: any) => ({
      id: n.id,
      userId: n.user_id,
      deviceId: n.device_id || undefined,
      notificationType: n.notification_type,
      scheduledForUtc: n.scheduled_for_utc,
      title: n.title,
      body: n.body,
      targetUrl: n.target_url,
      status: n.status,
      idempotencyKey: n.idempotency_key,
      dispatchedAt: n.dispatched_at || undefined,
      createdAt: n.created_at,
    }));
  } catch (err) {
    console.warn('Failed to fetch scheduled notifications:', err);
    return [];
  }
}

// 21. ACCOUNT DATA MANAGEMENT & DELETION
export async function deletePostgresAccount(userId: string): Promise<boolean> {
  if (!isPostgresConfigured() || !supabase) return false;

  try {
    // Cascade constraints on tables will clean up child records
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);

    return !error;
  } catch (err) {
    console.error('Failed to delete user profile from PostgreSQL:', err);
    return false;
  }
}
