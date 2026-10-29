-- Migration: 20241030000000_production_hardening_and_private_grading.sql
-- Description: Production hardening, private grading isolation, immutable study plan lifecycle,
--              role escalation protections, and performance indexes for 1,000+ users.

-- 1. PRIVATE HIDDEN TEST CASES (Separated from public question catalog)
CREATE TABLE IF NOT EXISTS question_hidden_test_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  input TEXT NOT NULL,
  expected_output TEXT NOT NULL,
  time_limit_ms INTEGER NOT NULL DEFAULT 2000,
  memory_limit_kb INTEGER NOT NULL DEFAULT 128000,
  is_secret BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_hidden_cases_question ON question_hidden_test_cases(question_id);

-- 2. PRIVATE REFERENCE SOLUTIONS (Protected grading source code)
CREATE TABLE IF NOT EXISTS question_reference_solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('c', 'cpp', 'java', 'python')),
  solution_code TEXT NOT NULL,
  time_complexity TEXT,
  space_complexity TEXT,
  explanation TEXT,
  is_verified BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ref_solutions_question ON question_reference_solutions(question_id, language);

-- 3. EXAM PROFILES (Versioned Assessment Blueprint Configurations)
CREATE TABLE IF NOT EXISTS exam_profiles (
  id TEXT PRIMARY KEY,
  track TEXT NOT NULL CHECK (track IN ('NINJA', 'DIGITAL', 'PRIME')),
  title TEXT NOT NULL,
  version INTEGER NOT NULL DEFAULT 1,
  sections JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_duration_minutes INTEGER NOT NULL DEFAULT 90,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_exam_profiles_track_active ON exam_profiles(track, is_active);

-- Seed initial TCS NQT 2025/2026 versioned assessment blueprints
INSERT INTO exam_profiles (id, track, title, version, sections, total_duration_minutes, is_active)
VALUES
(
  'tcs-nqt-ninja-v2025',
  'NINJA',
  'TCS NQT Ninja Standard Assessment (Batch 2025-2026)',
  1,
  '[
    {"section": "Numerical Ability", "questionsCount": 20, "durationMinutes": 25},
    {"section": "Reasoning Ability", "questionsCount": 20, "durationMinutes": 25},
    {"section": "Verbal Ability", "questionsCount": 20, "durationMinutes": 25},
    {"section": "Hands-on Coding", "questionsCount": 2, "durationMinutes": 45}
  ]'::jsonb,
  120,
  TRUE
),
(
  'tcs-nqt-digital-v2025',
  'DIGITAL',
  'TCS NQT Digital Advanced Assessment (Batch 2025-2026)',
  1,
  '[
    {"section": "Advanced Quantitative", "questionsCount": 15, "durationMinutes": 20},
    {"section": "Advanced Reasoning", "questionsCount": 15, "durationMinutes": 25},
    {"section": "Advanced Coding (Stage C)", "questionsCount": 2, "durationMinutes": 60}
  ]'::jsonb,
  105,
  TRUE
),
(
  'tcs-nqt-prime-v2025',
  'PRIME',
  'TCS NQT Prime Premier Assessment (Batch 2025-2026)',
  1,
  '[
    {"section": "Advanced Quantitative & Algorithms", "questionsCount": 20, "durationMinutes": 30},
    {"section": "High-Difficulty Coding", "questionsCount": 2, "durationMinutes": 75}
  ]'::jsonb,
  105,
  TRUE
)
ON CONFLICT (id) DO NOTHING;

-- 4. STUDY PLANS IMMUTABILITY & LIFECYCLE EXTENSIONS
-- Drop old status check if exists and recreate with full lifecycle states
DO $$ 
BEGIN
  ALTER TABLE study_plans DROP CONSTRAINT IF EXISTS study_plans_status_check;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

ALTER TABLE study_plans
  ADD CONSTRAINT study_plans_status_check 
  CHECK (status IN ('DRAFT', 'ACTIVE', 'PAUSED', 'COMPLETED', 'ARCHIVED'));

ALTER TABLE study_plans
  ADD COLUMN IF NOT EXISTS version INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS generation_seed TEXT,
  ADD COLUMN IF NOT EXISTS input_snapshot JSONB,
  ADD COLUMN IF NOT EXISTS activated_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ;

-- Crucial: Concurrency control — only ONE active plan permitted per user at any time
CREATE UNIQUE INDEX IF NOT EXISTS uq_one_active_plan_per_user 
  ON study_plans(user_id) 
  WHERE status = 'ACTIVE';

-- 5. STUDY PLAN TASKS IMMUTABILITY & AUDIT EXTENSIONS
ALTER TABLE study_plan_tasks
  ADD COLUMN IF NOT EXISTS is_rescheduled BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS original_day_number INTEGER,
  ADD COLUMN IF NOT EXISTS rescheduled_to_day INTEGER,
  ADD COLUMN IF NOT EXISTS rescheduled_at TIMESTAMPTZ;

-- 6. IMMUTABLE SUBMISSIONS EXTENSIONS
ALTER TABLE submissions
  ADD COLUMN IF NOT EXISTS submission_token TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS execution_status TEXT NOT NULL DEFAULT 'COMPLETED'
    CHECK (execution_status IN ('QUEUED', 'PROCESSING', 'COMPLETED', 'FAILED')),
  ADD COLUMN IF NOT EXISTS error_details TEXT;

CREATE INDEX IF NOT EXISTS idx_submissions_token ON submissions(submission_token);

-- 7. SECURITY & ROLE ESCALATION PREVENTION TRIGGER
CREATE OR REPLACE FUNCTION prevent_profile_role_escalation()
RETURNS TRIGGER AS $$
BEGIN
  -- If role is being changed
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    -- Check if current authenticated user is an admin or if called by service role
    IF auth.role() <> 'service_role' AND NOT EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    ) THEN
      -- Reset role back to existing value to prevent client escalation
      NEW.role := OLD.role;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_prevent_role_escalation ON profiles;
CREATE TRIGGER trg_prevent_role_escalation
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_profile_role_escalation();

-- 8. ROW LEVEL SECURITY (RLS) FOR NEW ENTITIES
ALTER TABLE question_hidden_test_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_reference_solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE exam_profiles ENABLE ROW LEVEL SECURITY;

-- Question Hidden Test Cases: NEVER accessible by students/public. Only Admins or Service Role.
CREATE POLICY "Admins full access to hidden test cases"
  ON question_hidden_test_cases FOR ALL
  USING (
    auth.role() = 'service_role' OR
    EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
  );

-- Reference Solutions: NEVER accessible by students/public. Only Admins or Service Role.
CREATE POLICY "Admins full access to reference solutions"
  ON question_reference_solutions FOR ALL
  USING (
    auth.role() = 'service_role' OR
    EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
  );

-- Exam Profiles: Public read for active profiles; admins full control
CREATE POLICY "Public read active exam profiles"
  ON exam_profiles FOR SELECT
  USING (is_active = TRUE);

CREATE POLICY "Admins full access to exam profiles"
  ON exam_profiles FOR ALL
  USING (
    auth.role() = 'service_role' OR
    EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
  );

-- Ensure Submissions cannot be modified or deleted by users once committed
CREATE POLICY "Submissions are append-only"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 9. PERFORMANCE INDEXES FOR 1,000+ REGISTERED & CONCURRENT SIMULATED USERS
-- Optimizes query latencies to p95 < 500ms
CREATE INDEX IF NOT EXISTS idx_questions_catalog_num ON questions(catalog_number);
CREATE INDEX IF NOT EXISTS idx_questions_format_difficulty ON questions(problem_format, difficulty);
CREATE INDEX IF NOT EXISTS idx_questions_sections ON questions USING GIN(sections);
CREATE INDEX IF NOT EXISTS idx_questions_target_tracks ON questions USING GIN(target_tracks);
CREATE INDEX IF NOT EXISTS idx_problem_progress_user_status ON problem_progress(user_id, current_status);
CREATE INDEX IF NOT EXISTS idx_problem_progress_user_rev ON problem_progress(user_id, needs_revision);
CREATE INDEX IF NOT EXISTS idx_study_plan_tasks_plan_day ON study_plan_tasks(plan_id, day_number, completed);
CREATE INDEX IF NOT EXISTS idx_submissions_user_prob_date ON submissions(user_id, problem_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_custom_cases_user ON custom_test_cases(user_id);
