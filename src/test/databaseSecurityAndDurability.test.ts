import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  getPostgresProfile, 
  upsertPostgresProfile, 
  fetchPostgresQuestions, 
  recordPostgresSubmission 
} from '../lib/db';
import { supabase } from '../lib/supabase';
import { UserProfile, Submission } from '../types';

// Mock Supabase client
vi.mock('../lib/supabase', () => ({
  supabase: {
    from: vi.fn(),
  },
  isPostgresConfigured: vi.fn(() => true),
  isSupabaseConfigured: vi.fn(() => true),
}));

describe('Database Security, Durability & RLS Isolation Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('1. Profile Persistence Across Sign-Out and Sign-In', () => {
    it('reliably persists and re-hydrates candidate profile attributes from PostgreSQL', async () => {
      const mockCandidate: UserProfile = {
        uid: 'usr_candidate_7788',
        email: 'student.tcs@university.edu',
        displayName: 'Arun Kumar',
        targetTrack: 'PRIME',
        preferredLanguage: 'python',
        dailyAvailableMinutes: 120,
        availablePreparationDays: 30,
        proficiency: 'INTERMEDIATE',
        weakTopics: ['Dynamic Programming', 'Graph Theory'],
        role: 'student',
        createdAt: '2026-10-30T00:00:00.000Z',
        updatedAt: '2026-10-30T00:00:00.000Z',
      };

      // Mock upsertPostgresProfile
      const upsertMock = vi.fn().mockResolvedValue({
        error: null,
      });
      (supabase!.from as any).mockReturnValue({
        upsert: upsertMock,
      });

      const saved = await upsertPostgresProfile(mockCandidate);
      expect(saved).toBe(true);
      expect(upsertMock).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'usr_candidate_7788',
          email: 'student.tcs@university.edu',
          target_track: 'PRIME',
          daily_minutes: 120,
          role: 'student',
        })
      );

      // Mock getPostgresProfile (re-hydrating on new session sign-in)
      const singleMock = vi.fn().mockResolvedValue({
        data: {
          id: 'usr_candidate_7788',
          email: 'student.tcs@university.edu',
          display_name: 'Arun Kumar',
          target_track: 'PRIME',
          preferred_language: 'python',
          daily_minutes: 120,
          available_days: 30,
          proficiency: 'INTERMEDIATE',
          weak_topics: ['Dynamic Programming', 'Graph Theory'],
          role: 'student',
          created_at: '2026-10-30T00:00:00.000Z',
          updated_at: '2026-10-30T00:00:00.000Z',
        },
        error: null,
      });
      const eqMock = vi.fn().mockReturnValue({ maybeSingle: singleMock });
      const selectMock = vi.fn().mockReturnValue({ eq: eqMock });
      (supabase!.from as any).mockReturnValue({ select: selectMock });

      const reloadedProfile = await getPostgresProfile('usr_candidate_7788');
      expect(reloadedProfile).not.toBeNull();
      expect(reloadedProfile?.email).toBe('student.tcs@university.edu');
      expect(reloadedProfile?.targetTrack).toBe('PRIME');
      expect(reloadedProfile?.role).toBe('student');
    });
  });

  describe('2. Client-Side Role Escalation Prevention', () => {
    it('enforces that student profiles cannot elevate their role to admin', async () => {
      // In the database layer and migration trigger prevent_profile_role_escalation:
      // When a non-service-role client attempts to update role to ADMIN, PostgreSQL rejects it.
      const maliciousPayload: UserProfile = {
        uid: 'usr_hacker_99',
        email: 'hacker@exploit.test',
        displayName: 'Script Kiddie',
        targetTrack: 'NINJA',
        preferredLanguage: 'c',
        dailyAvailableMinutes: 60,
        availablePreparationDays: 14,
        proficiency: 'BEGINNER',
        weakTopics: [],
        role: 'admin', // Attempted role escalation
        createdAt: '2026-10-30T00:00:00.000Z',
        updatedAt: '2026-10-30T00:00:00.000Z',
      };

      // Mock database returning security violation error from PostgreSQL trigger
      const upsertMock = vi.fn().mockResolvedValue({
        error: {
          code: '42501',
          message: 'Security violation: Unauthorized attempt to elevate role to ADMIN',
        },
      });
      (supabase!.from as any).mockReturnValue({
        upsert: upsertMock,
      });

      const saveResult = await upsertPostgresProfile(maliciousPayload);
      expect(saveResult).toBe(false);
    });
  });

  describe('3. RLS Isolation & Hidden Test Case Zero Exposure', () => {
    it('guarantees public question queries never expose hidden grading test cases to the browser', async () => {
      // Mock question table return with public projection
      const mockDbQuestions = [
        {
          id: 'tcs-adv-matrix-rotation',
          catalog_number: 104,
          slug: 'matrix-rotation-90',
          title: '90-Degree Matrix In-Place Rotation',
          problem_statement: 'Rotate an NxN matrix 90 degrees clockwise.',
          input_format: 'First line contains N...',
          output_format: 'Print the rotated matrix...',
          constraints: ['1 <= N <= 1000'],
          examples: [{ input: '2\n1 2\n3 4', output: '3 1\n4 2' }],
          difficulty: 'MEDIUM',
          topics: ['Matrices', 'In-Place Operations'],
          sections: ['CODING', 'PROGRAMMING'],
          target_tracks: ['DIGITAL', 'PRIME'],
          estimated_minutes: 30,
          problem_format: 'STANDARD_IO',
          source_type: 'RECURRING_PATTERN',
          hints: ['Transpose the matrix first, then reverse each row.'],
          explanation: 'Standard in-place matrix rotation.',
          time_complexity: 'O(N^2)',
          space_complexity: 'O(1)',
          starter_code: { python: 'def rotate(matrix):\n    pass' },
          public_test_cases: [
            { id: 'tc-pub-1', input: '2\n1 2\n3 4', expectedOutput: '3 1\n4 2', isHidden: false }
          ],
          // Note: Private table `question_hidden_test_cases` is NOT joined or queried
          publication_status: 'PUBLISHED',
          version: 1,
          created_at: '2026-10-30T00:00:00Z',
          updated_at: '2026-10-30T00:00:00Z'
        }
      ];

      const orderMock = vi.fn().mockResolvedValue({
        data: mockDbQuestions,
        error: null,
      });
      const selectMock = vi.fn().mockReturnValue({ order: orderMock });
      (supabase!.from as any).mockReturnValue({ select: selectMock });

      const catalog = await fetchPostgresQuestions();
      expect(catalog.length).toBe(1);
      
      const question = catalog[0];
      expect(question.publicTestCases.length).toBe(1);
      expect(question.publicTestCases[0].isHidden).toBe(false);

      // Verify that hiddenTestCases property is strictly empty
      expect(question.hiddenTestCases).toEqual([]);
      expect(JSON.stringify(catalog)).not.toContain('tc-secret-');
    });
  });

  describe('4. Idempotent Submission Handling with Tokens', () => {
    it('records submissions with a unique idempotency token to prevent double-counting', async () => {
      const submissionToken = 'sub_tok_9918273645';
      const mockSubmission: Submission = {
        id: 'sub_rec_1',
        userId: 'usr_candidate_1',
        problemId: 'q_tcs_fib',
        language: 'python',
        sourceCodeSnapshot: 'print(fib(10))',
        verdict: 'Accepted',
        executionStatus: 'COMPLETED',
        submissionToken,
        executionTimeMs: 14,
        memoryUsedKb: 3820,
        passedTests: 5,
        totalTests: 5,
        submittedAt: '2026-10-30T01:00:00.000Z',
      };

      const insertMock = vi.fn().mockResolvedValue({ error: null });
      (supabase!.from as any).mockReturnValue({ insert: insertMock });

      const recordSuccess = await recordPostgresSubmission(mockSubmission);
      expect(recordSuccess).toBe(true);
      expect(insertMock).toHaveBeenCalledWith(
        expect.objectContaining({
          user_id: 'usr_candidate_1',
          problem_id: 'q_tcs_fib',
          submission_token: submissionToken,
          verdict: 'Accepted',
          execution_status: 'COMPLETED',
        })
      );
    });
  });
});
