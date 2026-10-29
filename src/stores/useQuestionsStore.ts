import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Question, SectionType, DifficultyLevel, TargetTrack, SourceEvidenceType } from '../types';
import { STARTER_QUESTIONS } from '../data/starterQuestions';
import { upsertPostgresQuestion } from '../lib/db';

export interface AdminAuditLog {
  id: string;
  action: 'CREATE_QUESTION' | 'UPDATE_QUESTION' | 'PUBLISH_QUESTION' | 'UNPUBLISH_QUESTION';
  questionId: string;
  adminEmail: string;
  timestamp: string;
  details: string;
}

interface QuestionFilters {
  searchTerm: string;
  section: SectionType | 'ALL';
  difficulty: DifficultyLevel | 'ALL';
  track: TargetTrack | 'ALL';
  sourceType: SourceEvidenceType | 'ALL';
  topic: string | 'ALL';
  status: 'ALL' | 'SOLVED' | 'ATTEMPTED' | 'NOT_ATTEMPTED' | 'BOOKMARKED' | 'REVISION';
}

interface QuestionsStoreState {
  questions: Question[];
  auditLogs: AdminAuditLog[];
  filters: QuestionFilters;
  
  // Filter actions
  setFilter: <K extends keyof QuestionFilters>(key: K, value: QuestionFilters[K]) => void;
  resetFilters: () => void;

  // Question CRUD (Admin workflow)
  addQuestion: (question: Omit<Question, 'id' | 'createdAt' | 'updatedAt' | 'version'>, adminEmail: string) => Question;
  updateQuestion: (id: string, updates: Partial<Question>, adminEmail: string) => void;
  setPublicationStatus: (id: string, status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED', adminEmail: string) => void;
  getQuestionById: (id: string) => Question | undefined;
  getQuestionBySlug: (slug: string) => Question | undefined;
  getQuestionByCatalogNumber: (num: number) => Question | undefined;
}

const defaultFilters: QuestionFilters = {
  searchTerm: '',
  section: 'ALL',
  difficulty: 'ALL',
  track: 'ALL',
  sourceType: 'ALL',
  topic: 'ALL',
  status: 'ALL',
};

export const useQuestionsStore = create<QuestionsStoreState>()(
  persist(
    (set, get) => ({
      questions: STARTER_QUESTIONS,
      auditLogs: [],
      filters: defaultFilters,

      setFilter: (key, value) => {
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        }));
      },

      resetFilters: () => {
        set({ filters: defaultFilters });
      },

      addQuestion: (data, adminEmail) => {
        const id = `q-custom-${Date.now()}`;
        const newQuestion: Question = {
          ...data,
          id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          version: 1,
        };

        const auditLog: AdminAuditLog = {
          id: `log-${Date.now()}`,
          action: 'CREATE_QUESTION',
          questionId: id,
          adminEmail,
          timestamp: new Date().toISOString(),
          details: `Created question: ${newQuestion.title} (${newQuestion.publicationStatus})`,
        };

        set((state) => ({
          questions: [newQuestion, ...state.questions],
          auditLogs: [auditLog, ...state.auditLogs],
        }));

        upsertPostgresQuestion(newQuestion).catch((err: unknown) => console.debug('PG question sync:', err));

        return newQuestion;
      },

      updateQuestion: (id, updates, adminEmail) => {
        const current = get().questions.find((q) => q.id === id);
        if (!current) return;

        const updated: Question = {
          ...current,
          ...updates,
          updatedAt: new Date().toISOString(),
          version: (current.version || 1) + 1,
        };

        const auditLog: AdminAuditLog = {
          id: `log-${Date.now()}`,
          action: 'UPDATE_QUESTION',
          questionId: id,
          adminEmail,
          timestamp: new Date().toISOString(),
          details: `Updated question fields: ${Object.keys(updates).join(', ')}`,
        };

        set((state) => ({
          questions: state.questions.map((q) => (q.id === id ? updated : q)),
          auditLogs: [auditLog, ...state.auditLogs],
        }));

        upsertPostgresQuestion(updated).catch((err: unknown) => console.debug('PG question update:', err));
      },

      setPublicationStatus: (id, status, adminEmail) => {
        const current = get().questions.find((q) => q.id === id);
        if (!current) return;

        const action = status === 'PUBLISHED' ? 'PUBLISH_QUESTION' : 'UNPUBLISH_QUESTION';
        const auditLog: AdminAuditLog = {
          id: `log-${Date.now()}`,
          action,
          questionId: id,
          adminEmail,
          timestamp: new Date().toISOString(),
          details: `Changed publication status to ${status}`,
        };

        const updated = {
          ...current,
          publicationStatus: status,
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          questions: state.questions.map((q) => (q.id === id ? updated : q)),
          auditLogs: [auditLog, ...state.auditLogs],
        }));

        upsertPostgresQuestion(updated).catch((err: unknown) => console.debug('PG question status:', err));
      },

      getQuestionById: (id) => {
        return get().questions.find((q) => q.id === id);
      },

      getQuestionBySlug: (slug) => {
        const num = Number(slug);
        return get().questions.find(
          (q) =>
            q.slug === slug ||
            q.id === slug ||
            (!isNaN(num) && q.catalogNumber === num)
        );
      },

      getQuestionByCatalogNumber: (num) => {
        return get().questions.find((q) => q.catalogNumber === num);
      },
    }),
    {
      name: 'preppath_questions_storage_v3',
      merge: (persistedState: any, currentState) => {
        const persistedQuestions: Question[] = persistedState?.questions || [];
        const combined = [...STARTER_QUESTIONS];
        for (const pq of persistedQuestions) {
          if (!combined.some((q) => q.id === pq.id)) {
            combined.push(pq);
          }
        }
        return {
          ...currentState,
          ...persistedState,
          questions: combined,
        };
      },
    }
  )
);
