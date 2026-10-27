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
  TargetTrack,
  ExecutionVerdict,
  AssessmentAttempt
} from '../types';
import { STARTER_QUESTIONS } from '../data/starterQuestions';

interface UserStoreState {
  // Authentication & Profile
  user: UserProfile | null;
  isLoadingAuth: boolean;
  setUser: (user: UserProfile | null) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;

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

  // System stats & helper actions
  resetAccountData: () => void;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoadingAuth: false,
      setUser: (user) => set({ user }),
      updateProfile: (updates) => {
        const current = get().user;
        if (!current) return;
        set({
          user: {
            ...current,
            ...updates,
            updatedAt: new Date().toISOString(),
          },
        });
      },

      // Study Plan
      studyPlan: null,
      setStudyPlan: (plan) => set({ studyPlan: plan }),
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
        set({
          studyPlan: {
            ...plan,
            days: updatedDays,
            updatedAt: new Date().toISOString(),
          },
        });
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

        set({
          studyPlan: {
            ...plan,
            days: updatedDays,
            updatedAt: new Date().toISOString(),
          },
        });
      },

      // Problem Drafts
      drafts: {},
      saveDraft: (problemId, language, code) => {
        const key = `${problemId}_${language}`;
        set((state) => ({
          drafts: {
            ...state.drafts,
            [key]: {
              problemId,
              language,
              sourceCode: code,
              updatedAt: new Date().toISOString(),
            },
          },
        }));
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
        return newCase;
      },
      updateCustomTestCase: (id, updates) => {
        set((state) => ({
          customTestCases: state.customTestCases.map((tc) =>
            tc.id === id
              ? { ...tc, ...updates, updatedAt: new Date().toISOString() }
              : tc
          ),
        }));
      },
      deleteCustomTestCase: (id) => {
        set((state) => ({
          customTestCases: state.customTestCases.filter((tc) => tc.id !== id),
        }));
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
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: {
              ...existing,
              bookmarked: newBookmarked,
              updatedAt: new Date().toISOString(),
            },
          },
        });
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
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: {
              ...existing,
              needsRevision: newRevision,
              updatedAt: new Date().toISOString(),
            },
          },
        });
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
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: {
              ...existing,
              revealedHintsCount: nextCount,
              updatedAt: new Date().toISOString(),
            },
          },
        });
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
        set({
          problemProgress: {
            ...state.problemProgress,
            [problemId]: {
              ...existing,
              notes: note,
              updatedAt: new Date().toISOString(),
            },
          },
        });
      },

      // Assessment Attempts
      assessmentAttempts: [],
      recordAssessmentAttempt: (attempt) => {
        set((state) => ({
          assessmentAttempts: [attempt, ...state.assessmentAttempts],
        }));
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
        });
      },
    }),
    {
      name: 'preppath_user_storage_v1',
    }
  )
);
