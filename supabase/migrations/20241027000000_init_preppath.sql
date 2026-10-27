-- PrepPath PostgreSQL Schema Migration
-- Authoritative Relational Database Architecture

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. PROFILES (Users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  target_track TEXT NOT NULL DEFAULT 'NINJA' CHECK (target_track IN ('NINJA', 'DIGITAL', 'PRIME')),
  preferred_language TEXT NOT NULL DEFAULT 'python' CHECK (preferred_language IN ('c', 'cpp', 'java', 'python')),
  available_days INTEGER NOT NULL DEFAULT 21 CHECK (available_days > 0),
  daily_minutes INTEGER NOT NULL DEFAULT 90 CHECK (daily_minutes >= 15),
  exam_date DATE,
  proficiency TEXT NOT NULL DEFAULT 'INTERMEDIATE' CHECK (proficiency IN ('BEGINNER', 'INTERMEDIATE', 'ADVANCED')),
  weak_topics TEXT[] NOT NULL DEFAULT '{}',
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index on role for fast permission checks
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);

-- 2. QUESTION SOURCES
CREATE TABLE IF NOT EXISTS question_sources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  evidence_type TEXT NOT NULL CHECK (evidence_type IN ('OFFICIAL_INFORMATION', 'CANDIDATE_RECALLED', 'RECURRING_PATTERN', 'ORIGINAL_PRACTICE')),
  hiring_cycle TEXT,
  notes TEXT,
  verification_status TEXT NOT NULL DEFAULT 'VERIFIED',
  verified_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. QUESTIONS
CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  input_format TEXT NOT NULL,
  output_format TEXT NOT NULL,
  constraints TEXT[] NOT NULL DEFAULT '{}',
  examples JSONB NOT NULL DEFAULT '[]'::jsonb,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('EASY', 'MEDIUM', 'HARD')),
  topics TEXT[] NOT NULL DEFAULT '{}',
  sections TEXT[] NOT NULL DEFAULT '{}',
  target_tracks TEXT[] NOT NULL DEFAULT '{}',
  estimated_minutes INTEGER NOT NULL DEFAULT 20,
  source_id TEXT REFERENCES question_sources(id) ON DELETE SET NULL,
  source_type TEXT NOT NULL CHECK (source_type IN ('OFFICIAL_INFORMATION', 'CANDIDATE_RECALLED', 'RECURRING_PATTERN', 'ORIGINAL_PRACTICE')),
  hints TEXT[] NOT NULL DEFAULT '{}',
  explanation TEXT NOT NULL,
  time_complexity TEXT,
  space_complexity TEXT,
  starter_code JSONB NOT NULL DEFAULT '{}'::jsonb,
  public_test_cases JSONB NOT NULL DEFAULT '[]'::jsonb,
  hidden_test_cases JSONB NOT NULL DEFAULT '[]'::jsonb,
  publication_status TEXT NOT NULL DEFAULT 'DRAFT' CHECK (publication_status IN ('DRAFT', 'PUBLISHED', 'ARCHIVED')),
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_questions_publication ON questions(publication_status);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);

-- 4. STUDY PLANS
CREATE TABLE IF NOT EXISTS study_plans (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  target_track TEXT NOT NULL CHECK (target_track IN ('NINJA', 'DIGITAL', 'PRIME')),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  daily_minutes INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'COMPLETED', 'PAUSED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_study_plans_user ON study_plans(user_id);

-- 5. STUDY PLAN TASKS
CREATE TABLE IF NOT EXISTS study_plan_tasks (
  id TEXT PRIMARY KEY,
  plan_id TEXT NOT NULL REFERENCES study_plans(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  scheduled_date DATE NOT NULL,
  task_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  estimated_minutes INTEGER NOT NULL,
  problem_id TEXT REFERENCES questions(id) ON DELETE SET NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_study_plan_tasks_plan ON study_plan_tasks(plan_id);

-- 6. PROBLEM PROGRESS
CREATE TABLE IF NOT EXISTS problem_progress (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  problem_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  current_status TEXT NOT NULL DEFAULT 'NOT_ATTEMPTED' CHECK (current_status IN ('NOT_ATTEMPTED', 'ATTEMPTED', 'SOLVED')),
  total_submissions INTEGER NOT NULL DEFAULT 0,
  accepted_submissions INTEGER NOT NULL DEFAULT 0,
  first_accepted_at TIMESTAMPTZ,
  last_attempt_at TIMESTAMPTZ,
  last_verdict TEXT,
  last_language TEXT,
  best_runtime_ms INTEGER,
  needs_revision BOOLEAN NOT NULL DEFAULT FALSE,
  bookmarked BOOLEAN NOT NULL DEFAULT FALSE,
  revealed_hints_count INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, problem_id)
);

CREATE INDEX IF NOT EXISTS idx_problem_progress_user ON problem_progress(user_id);

-- 7. PROBLEM DRAFTS (Autosaved per user, problem, and language)
CREATE TABLE IF NOT EXISTS problem_drafts (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  problem_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  source_code TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, problem_id, language)
);

CREATE INDEX IF NOT EXISTS idx_problem_drafts_lookup ON problem_drafts(user_id, problem_id, language);

-- 8. CUSTOM TEST CASES (Private to user)
CREATE TABLE IF NOT EXISTS custom_test_cases (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  problem_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  input TEXT NOT NULL,
  expected_output TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_custom_cases_user_prob ON custom_test_cases(user_id, problem_id);

-- 9. SUBMISSIONS (Immutable Judged Snapshots)
CREATE TABLE IF NOT EXISTS submissions (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  problem_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  language TEXT NOT NULL,
  source_code_snapshot TEXT NOT NULL,
  verdict TEXT NOT NULL,
  passed_tests INTEGER NOT NULL,
  total_tests INTEGER NOT NULL,
  execution_time_ms INTEGER NOT NULL DEFAULT 0,
  memory_used_kb INTEGER NOT NULL DEFAULT 0,
  public_results JSONB DEFAULT '[]'::jsonb,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_submissions_user_prob ON submissions(user_id, problem_id);
CREATE INDEX IF NOT EXISTS idx_submissions_submitted_at ON submissions(submitted_at DESC);

-- 10. ASSESSMENT ATTEMPTS
CREATE TABLE IF NOT EXISTS assessment_attempts (
  id TEXT PRIMARY KEY,
  assessment_id TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  total_possible_score INTEGER NOT NULL DEFAULT 0,
  section_scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  marked_for_review TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'IN_PROGRESS' CHECK (status IN ('IN_PROGRESS', 'COMPLETED', 'EXPIRED')),
  started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_assessment_attempts_user ON assessment_attempts(user_id);

-- 11. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  action TEXT NOT NULL,
  question_id TEXT,
  admin_email TEXT NOT NULL,
  details TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plan_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE problem_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE problem_drafts ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_test_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Profiles: users read and update their own profile; admins can read all
CREATE POLICY "Profiles user access" ON profiles
  FOR ALL USING (auth.uid() = id);

-- Questions: Public can read published questions; admins can do all
CREATE POLICY "Questions public read" ON questions
  FOR SELECT USING (publication_status = 'PUBLISHED');

CREATE POLICY "Questions admin all" ON questions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
  );

-- User-owned tables: only owner can read and write
CREATE POLICY "Study plans owner access" ON study_plans
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Problem progress owner access" ON problem_progress
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Problem drafts owner access" ON problem_drafts
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Custom test cases owner access" ON custom_test_cases
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Submissions owner access" ON submissions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Assessment attempts owner access" ON assessment_attempts
  FOR ALL USING (auth.uid() = user_id);
