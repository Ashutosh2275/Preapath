import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  UserProfile, 
  StudyPlan, 
  CustomTestCase, 
  ProblemDraft, 
  Submission, 
  ProblemProgress, 
  ProgrammingLanguage,
  ExecutionVerdict,
  AssessmentAttempt,
  SpacedReviewItem,
  NotificationPreferences,
  InAppNotification,
  TopicMasteryRecord,
  StudyPlanRevisionRecord,
  MCQAttempt,
  DailyStudySession,
  DailyStudySessionItem
} from '../types';
import { 
  upsertPostgresProfile, 
  getPostgresProfile,
  savePostgresStudyPlan, 
  fetchPostgresStudyPlan,
  savePostgresDraft, 
  fetchPostgresDrafts,
  savePostgresCustomTestCase, 
  deletePostgresCustomTestCase, 
  fetchPostgresCustomTestCases,
  recordPostgresSubmission, 
  fetchPostgresSubmissions,
  upsertPostgresProgress,
  fetchPostgresProgress,
  fetchPostgresSpacedReviews,
  fetchPostgresNotificationPreferences,
  fetchPostgresInAppNotifications,
  fetchPostgresTopicMastery,
  upsertPostgresTopicMastery,
  fetchPostgresPlanRevisions,
  recordPostgresPlanRevision,
  recordPostgresMcqAttempt,
  fetchPostgresMcqAttempts,
  savePostgresDailySession,
  fetchPostgresDailySessions
} from '../lib/db';
import { calculateNextSpacedReview } from '../lib/spacedRepetition';
import { evaluateTopicMastery } from '../lib/topicMastery';
import { ALL_QUESTIONS } from '../data/questions';
import { generateDailyStudySession } from '../lib/recommendationEngine';

interface UserStoreState {
  // Authentication & Profile
  user: UserProfile | null;
  isLoadingAuth: boolean;
  setUser: (user: UserProfile | null) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  loadAuthoritativeData: (userId: string) => Promise<void>;

  // Study Plan
  studyPlan: StudyPlan | null;
  setStudyPlan: (plan: StudyPlan | null) => void;
  toggleTaskCompletion: (dayNumber: number, taskId: string) => void;
  rescheduleIncompleteTasks: (fromDayNumber: number, toDayNumber: number) => void;

  // Problem Drafts (autosaved per problem and language)
  drafts: Record<string, ProblemDraft>; // key: `${problemId}_${language}`
  saveDraft: (problemId: string, language: ProgrammingLanguage, code: string) => void;
  getDraft: (problemId: string, language: ProgrammingLanguage) => string | null;

  // Language Preference per problem
  lastSelectedLanguage: Record<string, ProgrammingLanguage>;
  setProblemLanguage: (problemId: string, language: ProgrammingLanguage) => void;

  // Custom Test Cases
  customTestCases: CustomTestCase[];
  addCustomTestCase: (tc: Omit<CustomTestCase, 'id' | 'createdAt' | 'updatedAt'>) => CustomTestCase;
  updateCustomTestCase: (id: string, updates: Partial<CustomTestCase>) => void;
  deleteCustomTestCase: (id: string) => void;
  getCustomTestCases: (problemId: string) => CustomTestCase[];

  // Submissions History (complete snapshots)
  submissions: Submission[];
  addSubmission: (submission: Submission) => void;
  getSubmissions: (problemId: string) => Submission[];

  // Problem Progress (authoritative attempt/solved/bookmark/notes/hints)
  problemProgress: Record<string, ProblemProgress>;
  recordSubmissionResult: (
    problemId: string, 
    verdict: ExecutionVerdict, 
    language: ProgrammingLanguage,
    timeMs?: number
  ) => void;
  toggleBookmark: (problemId: string) => boolean;
  toggleNeedsRevision: (problemId: string) => boolean;
  revealNextHint: (problemId: string, maxHints: number) => number;
  saveProblemNote: (problemId: string, note: string) => void;

  // Assessment Attempts
  assessmentAttempts: AssessmentAttempt[];
  recordAssessmentAttempt: (attempt: AssessmentAttempt) => void;

  // Spaced Revision System
  spacedReviewItems: Record<string, SpacedReviewItem>;
  markReviewCompleted: (problemId: string) => void;

  // Topic Mastery & Retention
  topicMastery: Record<string, TopicMasteryRecord>;
  updateTopicMastery: (record: TopicMasteryRecord) => void;

  // Plan Revisions Audit Log
  planRevisions: StudyPlanRevisionRecord[];
  addPlanRevision: (revision: StudyPlanRevisionRecord) => void;

  // Study Reminders & Push Notifications
  notificationPreferences: NotificationPreferences;
  updateNotificationPreferences: (updates: Partial<NotificationPreferences>) => void;
  inAppNotifications: InAppNotification[];
  addInAppNotification: (notif: Omit<InAppNotification, 'id' | 'createdAt'>) => void;
  markNotificationRead: (id: string) => void;
  clearAllNotifications: () => void;

  // MCQ Attempts & Performance Analytics
  mcqAttempts: MCQAttempt[];
  recordMcqAttempt: (attempt: Omit<MCQAttempt, 'id' | 'attemptedAt'>) => MCQAttempt;
  getMcqAttempts: (questionId?: string) => MCQAttempt[];

  // Daily Adaptive Study Sessions
  dailySessions: Record<string, DailyStudySession>;
  getOrCreateTodaySession: () => DailyStudySession;
  updateSessionItemStatus: (sessionId: string, itemId: string, status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'SKIPPED') => void;

  // System stats & helper actions
  resetAccountData: () => void;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoadingAuth: false,
      setUser: (user) => {
        set({ user });
        if (user) {
          upsertPostgresProfile(user).catch(err => console.debug('PG profile sync:', err));
          get().loadAuthoritativeData(user.uid).catch(err => console.debug('PG data hydration note:', err));
        }
      },
      updateProfile: (updates) => {
        const current = get().user;
        if (!current) return;
        const updated = {
          ...current,
          ...updates,
          updatedAt: new Date().toISOString(),
        };
        set({ user: updated });
        upsertPostgresProfile(updated).catch(err => console.debug('PG profile update:', err));
      },
      loadAuthoritativeData: async (userId: string) => {
        set({ isLoadingAuth: true });
        try {
          // Parallel fetch of authoritative PostgreSQL state
          const [
            dbProfile,
            dbPlan,
            dbProgress,
            dbSubmissions,
            dbDrafts,
            dbCustomCases,
            dbSpacedReviews,
            dbNotificationPrefs,
            dbInAppNotifs,
            dbTopicMastery,
            dbPlanRevisions,
            dbMcqAttempts,
            dbDailySessions
          ] = await Promise.all([
            getPostgresProfile(userId),
            fetchPostgresStudyPlan(userId),
            fetchPostgresProgress(userId),
            fetchPostgresSubmissions(userId),
            fetchPostgresDrafts(userId),
            fetchPostgresCustomTestCases(userId),
            fetchPostgresSpacedReviews(userId),
            fetchPostgresNotificationPreferences(userId),
            fetchPostgresInAppNotifications(userId),
            fetchPostgresTopicMastery(userId),
            fetchPostgresPlanRevisions(userId),
            fetchPostgresMcqAttempts(userId),
            fetchPostgresDailySessions(userId)
          ]);

          const updates: Partial<UserStoreState> = {};

          if (dbProfile) {
            updates.user = dbProfile;
          }
          if (dbPlan) {
            updates.studyPlan = dbPlan;
          }
          if (Object.keys(dbProgress).length > 0) {
            updates.problemProgress = { ...get().problemProgress, ...dbProgress };
          }
          if (dbSubmissions.length > 0) {
            updates.submissions = dbSubmissions;
          }
          if (Object.keys(dbDrafts).length > 0) {
            updates.drafts = { ...get().drafts, ...dbDrafts };
          }
          if (dbCustomCases.length > 0) {
            updates.customTestCases = dbCustomCases;
          }
          if (dbSpacedReviews.length > 0) {
            const reviewMap: Record<string, SpacedReviewItem> = {};
            dbSpacedReviews.forEach(r => { reviewMap[r.problemId] = r; });
            updates.spacedReviewItems = reviewMap;
          }
          if (dbTopicMastery && dbTopicMastery.length > 0) {
            const masteryMap: Record<string, TopicMasteryRecord> = {};
            dbTopicMastery.forEach(m => { masteryMap[m.topic] = m; });
            updates.topicMastery = masteryMap;
          }
          if (dbPlanRevisions && dbPlanRevisions.length > 0) {
            updates.planRevisions = dbPlanRevisions;
          }
          if (dbNotificationPrefs) {
            updates.notificationPreferences = dbNotificationPrefs;
          }
          if (dbInAppNotifs.length > 0) {
            updates.inAppNotifications = dbInAppNotifs;
          }
          if (dbMcqAttempts && dbMcqAttempts.length > 0) {
            updates.mcqAttempts = dbMcqAttempts;
          }
          if (dbDailySessions && Object.keys(dbDailySessions).length > 0) {
            updates.dailySessions = { ...get().dailySessions, ...dbDailySessions };
          }

          set(updates);
        } catch (err) {
          console.warn('PostgreSQL authoritative data loading note:', err);
        } finally {
          set({ isLoadingAuth: false });
        }
      },

      // Study Plan
      studyPlan: null,
      setStudyPlan: (plan) => {
        set({ studyPlan: plan });
        if (plan) {
          savePostgresStudyPlan(plan).catch(err => console.debug('PG study plan sync:', err));
        }
      },
      toggleTaskCompletion: (dayNumber, taskId) => {
        const plan = get().studyPlan;
        if (!plan) return;
        const updatedDays = plan.days.map((day) => {
          if (day.dayNumber !== dayNumber) return day;
          const updatedTasks = day.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: !t.completed } : t
          );
          const isAllDone = updatedTasks.every((t) => t.completed);
          return {
            ...day,
            tasks: updatedTasks,
            isCompleted: isAllDone,
          };
        });
        const updatedPlan: StudyPlan = {
          ...plan,
          days: updatedDays,
          updatedAt: new Date().toISOString(),
        };
        set({ studyPlan: updatedPlan });
        savePostgresStudyPlan(updatedPlan).catch(err => console.debug('PG task update:', err));
      },
      rescheduleIncompleteTasks: (fromDayNumber, toDayNumber) => {
        const plan = get().studyPlan;
        if (!plan) return;
        const fromDay = plan.days.find((d) => d.dayNumber === fromDayNumber);
        if (!fromDay) return;
        const incomplete = fromDay.tasks.filter((t) => !t.completed);
        if (incomplete.length === 0) return;

        const updatedDays = plan.days.map((day) => {
          if (day.dayNumber === fromDayNumber) {
            return {
              ...day,
              tasks: day.tasks.filter((t) => t.completed),
              isCompleted: true,
            };
          }
          if (day.dayNumber === toDayNumber) {
            return {
              ...day,
              tasks: [...day.tasks, ...incomplete],
              isCompleted: false,
            };
          }
          return day;
        });

        const updatedPlan: StudyPlan = {
          ...plan,
          days: updatedDays,
          updatedAt: new Date().toISOString(),
        };
        set({ studyPlan: updatedPlan });
        savePostgresStudyPlan(updatedPlan).catch(err => console.debug('PG reschedule sync:', err));
      },

      // Problem Drafts
      drafts: {},
      saveDraft: (problemId, language, code) => {
        const key = `${problemId}_${language}`;
        const draft: ProblemDraft = {
          problemId,
          language,
          sourceCode: code,
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({
          drafts: {
            ...state.drafts,
            [key]: draft,
          },
        }));

        const user = get().user;
        if (user) {
          savePostgresDraft(user.uid, problemId, language, code).catch(err => console.debug('PG draft save:', err));
        }
      },
      getDraft: (problemId, language) => {
        const key = `${problemId}_${language}`;
        const draft = get().drafts[key];
        return draft ? draft.sourceCode : null;
      },

      // Language Preference
      lastSelectedLanguage: {},
      setProblemLanguage: (problemId, language) => {
        set((state) => ({
          lastSelectedLanguage: {
            ...state.lastSelectedLanguage,
            [problemId]: language,
          },
        }));
      },

      // Custom Test Cases
      customTestCases: [],
      addCustomTestCase: (data) => {
        const newCase: CustomTestCase = {
          ...data,
          id: `case-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({
          customTestCases: [newCase, ...state.customTestCases],
        }));
        savePostgresCustomTestCase(newCase).catch(err => console.debug('PG custom test case save:', err));
        return newCase;
      },
      updateCustomTestCase: (id, updates) => {
        set((state) => ({
          customTestCases: state.customTestCases.map((tc) => {
            if (tc.id !== id) return tc;
            const updated = { ...tc, ...updates, updatedAt: new Date().toISOString() };
            savePostgresCustomTestCase(updated).catch(err => console.debug('PG custom test case update:', err));
            return updated;
          }),
        }));
      },
      deleteCustomTestCase: (id) => {
        set((state) => ({
          customTestCases: state.customTestCases.filter((tc) => tc.id !== id),
        }));
        deletePostgresCustomTestCase(id).catch(err => console.debug('PG custom test case delete:', err));
      },
      getCustomTestCases: (problemId) => {
        return get().customTestCases.filter((tc) => tc.problemId === problemId);
      },

      // Submissions History
      submissions: [],
      addSubmission: (submission) => {
        set((state) => ({
          submissions: [submission, ...state.submissions],
        }));
        recordPostgresSubmission(submission).catch(err => console.debug('PG submission save:', err));
      },
      getSubmissions: (problemId) => {
        return get().submissions.filter((s) => s.problemId === problemId);
      },

      // Problem Progress
      problemProgress: {},
      recordSubmissionResult: (problemId, verdict, language, timeMs) => {
        const state = get();
        const existing = state.problemProgress[problemId] || {
          problemId,
          currentStatus: 'NOT_ATTEMPTED',
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          needsRevision: false,
          bookmarked: false,
          revealedHintsCount: 0,
        };

        const isAccepted = verdict === 'Accepted';
        const wasAccepted = existing.acceptedSubmissions > 0 || existing.currentStatus === 'SOLVED';

        const updated: ProblemProgress = {
          ...existing,
          totalSubmissions: existing.totalSubmissions + 1,
          acceptedSubmissions: existing.acceptedSubmissions + (isAccepted ? 1 : 0),
          currentStatus: isAccepted || wasAccepted ? 'SOLVED' : 'ATTEMPTED',
          lastVerdict: verdict,
          lastLanguage: language,
          lastAttemptAt: new Date().toISOString(),
          firstAcceptedAt: isAccepted && !existing.firstAcceptedAt 
            ? new Date().toISOString() 
            : existing.firstAcceptedAt,
          bestRuntimeMs: isAccepted && timeMs !== undefined
            ? Math.min(existing.bestRuntimeMs || Infinity, timeMs)
            : existing.bestRuntimeMs,
          updatedAt: new Date().toISOString(),
        };

        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: updated,
          },
        });

        // Calculate and update Spaced Review Item based on real submission performance
        const question = ALL_QUESTIONS.find(q => q.id === problemId);
        if (question) {
          const previousReview = state.spacedReviewItems?.[problemId];
          const updatedReview = calculateNextSpacedReview({
            userId: state.user?.uid || 'guest-user',
            question,
            verdict,
            revealedHintsCount: existing.revealedHintsCount,
            timeSpentSeconds: timeMs ? Math.round(timeMs / 1000) : undefined,
            previousRecord: previousReview,
          });

          set((s) => ({
            spacedReviewItems: {
              ...(s.spacedReviewItems || {}),
              [problemId]: updatedReview,
            },
          }));

          // Evaluate Topic Mastery
          if (question.topics && question.topics.length > 0) {
            const primaryTopic = question.topics[0];
            const existingTopicMastery = state.topicMastery?.[primaryTopic];
            const evaluatedMastery = evaluateTopicMastery({
              userId: state.user?.uid || 'guest-user',
              topic: primaryTopic,
              section: question.sections[0] || 'CODING',
              track: state.user?.targetTrack || 'NINJA',
              isCorrect: isAccepted,
              verdict,
              hintsRevealedCount: existing.revealedHintsCount,
              hasViewedReferenceSolution: false,
              existingRecord: existingTopicMastery,
            });

            set((s) => ({
              topicMastery: {
                ...(s.topicMastery || {}),
                [primaryTopic]: evaluatedMastery,
              },
            }));

            if (state.user) {
              upsertPostgresTopicMastery(evaluatedMastery).catch(err => console.debug('PG topic mastery sync:', err));
            }
          }
        }

        if (state.user) {
          upsertPostgresProgress(updated, state.user.uid).catch(err => console.debug('PG progress update:', err));
        }
      },

      toggleBookmark: (problemId) => {
        const state = get();
        const existing = state.problemProgress[problemId] || {
          problemId,
          currentStatus: 'NOT_ATTEMPTED',
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          needsRevision: false,
          bookmarked: false,
          revealedHintsCount: 0,
        };
        const newBookmarked = !existing.bookmarked;
        const updated = {
          ...existing,
          bookmarked: newBookmarked,
          updatedAt: new Date().toISOString(),
        };
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: updated,
          },
        });
        if (state.user) {
          upsertPostgresProgress(updated, state.user.uid).catch(err => console.debug('PG bookmark update:', err));
        }
        return newBookmarked;
      },

      toggleNeedsRevision: (problemId) => {
        const state = get();
        const existing = state.problemProgress[problemId] || {
          problemId,
          currentStatus: 'NOT_ATTEMPTED',
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          needsRevision: false,
          bookmarked: false,
          revealedHintsCount: 0,
        };
        const newRevision = !existing.needsRevision;
        const updated = {
          ...existing,
          needsRevision: newRevision,
          updatedAt: new Date().toISOString(),
        };
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: updated,
          },
        });
        if (state.user) {
          upsertPostgresProgress(updated, state.user.uid).catch(err => console.debug('PG revision update:', err));
        }
        return newRevision;
      },

      revealNextHint: (problemId, maxHints) => {
        const state = get();
        const existing = state.problemProgress[problemId] || {
          problemId,
          currentStatus: 'NOT_ATTEMPTED',
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          needsRevision: false,
          bookmarked: false,
          revealedHintsCount: 0,
        };
        const nextCount = Math.min(maxHints, existing.revealedHintsCount + 1);
        const updated = {
          ...existing,
          revealedHintsCount: nextCount,
          updatedAt: new Date().toISOString(),
        };
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: updated,
          },
        });
        if (state.user) {
          upsertPostgresProgress(updated, state.user.uid).catch(err => console.debug('PG hint update:', err));
        }
        return nextCount;
      },

      saveProblemNote: (problemId, note) => {
        const state = get();
        const existing = state.problemProgress[problemId] || {
          problemId,
          currentStatus: 'NOT_ATTEMPTED',
          totalSubmissions: 0,
          acceptedSubmissions: 0,
          needsRevision: false,
          bookmarked: false,
          revealedHintsCount: 0,
        };
        const updated = {
          ...existing,
          notes: note,
          updatedAt: new Date().toISOString(),
        };
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: updated,
          },
        });
        if (state.user) {
          upsertPostgresProgress(updated, state.user.uid).catch(err => console.debug('PG notes update:', err));
        }
      },

      // Assessment Attempts
      assessmentAttempts: [],
      recordAssessmentAttempt: (attempt) => {
        set((state) => ({
          assessmentAttempts: [attempt, ...state.assessmentAttempts],
        }));
      },

      // Spaced Revision System
      spacedReviewItems: {},
      markReviewCompleted: (problemId) => {
        const state = get();
        const existing = state.spacedReviewItems?.[problemId];
        if (!existing) return;
        const updated: SpacedReviewItem = {
          ...existing,
          status: 'COMPLETED',
          updatedAt: new Date().toISOString(),
        };
        set({
          spacedReviewItems: {
            ...state.spacedReviewItems,
            [problemId]: updated,
          },
        });
      },

      // Topic Mastery & Retention
      topicMastery: {},
      updateTopicMastery: (record) => {
        set((state) => ({
          topicMastery: {
            ...state.topicMastery,
            [record.topic]: record,
          },
        }));
        if (get().user) {
          upsertPostgresTopicMastery(record).catch(err => console.debug('PG topic mastery sync:', err));
        }
      },

      // Plan Revisions Audit Log
      planRevisions: [],
      addPlanRevision: (revision) => {
        set((state) => ({
          planRevisions: [revision, ...(state.planRevisions || [])],
        }));
        if (get().user) {
          recordPostgresPlanRevision(revision).catch(err => console.debug('PG plan revision sync:', err));
        }
      },

      // Study Reminders & Push Notifications
      notificationPreferences: {
        userId: 'guest-user',
        enabled: false,
        frequency: 'DAILY',
        reminderTime: '19:00',
        timezone: typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata' : 'Asia/Kolkata',
        remindReviewsDue: true,
        quietHoursEnabled: true,
        quietHoursStart: '22:00',
        quietHoursEnd: '08:00',
        browserPermission: 'default',
        updatedAt: new Date().toISOString(),
      },
      updateNotificationPreferences: (updates) => {
        set((state) => ({
          notificationPreferences: {
            ...state.notificationPreferences,
            ...updates,
            updatedAt: new Date().toISOString(),
          },
        }));
      },
      inAppNotifications: [
        {
          id: 'welcome-reminder',
          userId: 'guest-user',
          title: 'Welcome to TCS NQT Daily Preparation',
          body: 'Your personalized daily sequence (MCQs, Coding & Spaced Review) is ready. Click to begin today\'s practice.',
          type: 'DAILY_STUDY_REMINDER',
          targetUrl: '/study-plan',
          read: false,
          createdAt: new Date().toISOString(),
          sentViaPush: false,
        }
      ],
      addInAppNotification: (notif) => {
        const id = `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
        set((state) => ({
          inAppNotifications: [
            {
              ...notif,
              id,
              createdAt: new Date().toISOString(),
            },
            ...(state.inAppNotifications || []),
          ],
        }));
      },
      markNotificationRead: (id) => {
        set((state) => ({
          inAppNotifications: (state.inAppNotifications || []).map((n) =>
            n.id === id ? { ...n, read: true } : n
          ),
        }));
      },
      clearAllNotifications: () => {
        set({ inAppNotifications: [] });
      },

      // MCQ Attempts & Performance Analytics
      mcqAttempts: [],
      recordMcqAttempt: (attemptData) => {
        const id = `att_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        const attemptedAt = new Date().toISOString();
        const newAttempt: MCQAttempt = {
          ...attemptData,
          id,
          attemptedAt,
        };

        set((state) => {
          const currentAttempts = state.mcqAttempts || [];
          const updatedAttempts = [newAttempt, ...currentAttempts];

          // Also update problemProgress for this question
          const currentProgress = state.problemProgress[newAttempt.questionId] || {
            problemId: newAttempt.questionId,
            currentStatus: 'NOT_ATTEMPTED',
            totalSubmissions: 0,
            acceptedSubmissions: 0,
            needsRevision: false,
            bookmarked: false,
            revealedHintsCount: 0,
            updatedAt: attemptedAt,
          };

          const isSolved = currentProgress.currentStatus === 'SOLVED' || newAttempt.isCorrect;
          const updatedProgress: ProblemProgress = {
            ...currentProgress,
            currentStatus: isSolved ? 'SOLVED' : 'ATTEMPTED',
            totalSubmissions: currentProgress.totalSubmissions + 1,
            acceptedSubmissions: currentProgress.acceptedSubmissions + (newAttempt.isCorrect ? 1 : 0),
            lastAttemptAt: attemptedAt,
            needsRevision: !newAttempt.isCorrect ? true : currentProgress.needsRevision,
            updatedAt: attemptedAt,
          };

          return {
            mcqAttempts: updatedAttempts,
            problemProgress: {
              ...state.problemProgress,
              [newAttempt.questionId]: updatedProgress,
            },
          };
        });

        // Persist to PostgreSQL in background
        recordPostgresMcqAttempt(newAttempt).catch((err) =>
          console.debug('PG mcq_attempt sync note:', err)
        );

        return newAttempt;
      },
      getMcqAttempts: (questionId?: string) => {
        const attempts = get().mcqAttempts || [];
        if (!questionId) return attempts;
        return attempts.filter((a) => a.questionId === questionId);
      },

      // Daily Adaptive Study Sessions
      dailySessions: {},
      getOrCreateTodaySession: () => {
        const todayStr = new Date().toISOString().split('T')[0];
        const state = get();
        if (state.dailySessions && state.dailySessions[todayStr]) {
          return state.dailySessions[todayStr];
        }

        const user = state.user;
        const targetTrack = user?.targetTrack || 'NINJA';
        const dailyAvailableMinutes = user?.dailyAvailableMinutes || 90;
        const userId = user?.uid || 'guest-user';

        const newSession = generateDailyStudySession({
          userId,
          dateString: todayStr,
          targetTrack,
          dailyAvailableMinutes,
          attempts: state.mcqAttempts || [],
          submissions: state.submissions || [],
          questions: ALL_QUESTIONS,
        });

        set((s) => ({
          dailySessions: {
            ...s.dailySessions,
            [todayStr]: newSession,
          },
        }));

        savePostgresDailySession(newSession).catch((err) =>
          console.debug('PG daily_study_session sync note:', err)
        );

        return newSession;
      },
      updateSessionItemStatus: (sessionId, itemId, status) => {
        set((state) => {
          const sessions = { ...state.dailySessions };
          let targetDate: string | null = null;

          for (const [dateKey, session] of Object.entries(sessions)) {
            if (session.id === sessionId) {
              targetDate = dateKey;
              const updatedItems = session.items.map((it) => {
                if (it.id === itemId) {
                  return {
                    ...it,
                    status,
                    completedAt: status === 'COMPLETED' ? new Date().toISOString() : it.completedAt,
                  };
                }
                return it;
              });

              const allDone = updatedItems.every((it) => it.status === 'COMPLETED' || it.status === 'SKIPPED');
              sessions[dateKey] = {
                ...session,
                items: updatedItems,
                status: allDone ? 'COMPLETED' : session.status,
              };
              break;
            }
          }

          if (targetDate && sessions[targetDate]) {
            savePostgresDailySession(sessions[targetDate]).catch((err) =>
              console.debug('PG update session item note:', err)
            );
          }

          return { dailySessions: sessions };
        });
      },

      resetAccountData: () => {
        set({
          user: null,
          studyPlan: null,
          drafts: {},
          lastSelectedLanguage: {},
          customTestCases: [],
          submissions: [],
          problemProgress: {},
          assessmentAttempts: [],
          spacedReviewItems: {},
          topicMastery: {},
          planRevisions: [],
          inAppNotifications: [],
          mcqAttempts: [],
          dailySessions: {},
        });
      },
    }),
    {
      name: 'preppath_user_storage_v2',
    }
  )
);
