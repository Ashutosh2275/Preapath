-- Migration: 20241030100000_adaptive_learning_and_plan_revisions.sql
-- Description: Adaptive plan revisions, topic mastery tracking, audit history, and timezone persistence.

-- 1. ADD TIMEZONE TO PROFILES
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata';

-- 2. STUDY PLAN REVISIONS AUDIT LOG (Immutable History of All Plan Adjustments)
CREATE TABLE IF NOT EXISTS study_plan_revisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id TEXT NOT NULL REFERENCES study_plans(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  from_version INTEGER NOT NULL,
  to_version INTEGER NOT NULL,
  change_reason TEXT NOT NULL CHECK (change_reason IN (
    'EXAM_DATE_MOVED_EARLIER',
    'EXAM_DATE_MOVED_LATER',
    'STUDY_TIME_CHANGED',
    'MANUAL_RESCHEDULE',
    'TOPIC_ADAPTATION',
    'INSUFFICIENT_TIME_PRIORITIZATION'
  )),
  previous_exam_date DATE,
  new_exam_date DATE,
  previous_daily_minutes INTEGER NOT NULL,
  new_daily_minutes INTEGER NOT NULL,
  completed_days_count INTEGER NOT NULL DEFAULT 0,
  completed_tasks_count INTEGER NOT NULL DEFAULT 0,
  deferred_topics TEXT[] NOT NULL DEFAULT '{}',
  summary_message TEXT NOT NULL,
  authorized_by TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_plan_revisions_user_created ON study_plan_revisions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_plan_revisions_plan ON study_plan_revisions(plan_id);

-- Enable RLS on study_plan_revisions
ALTER TABLE study_plan_revisions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own plan revision history"
  ON study_plan_revisions
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert own plan revisions"
  ON study_plan_revisions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = user_id);

-- 3. TOPIC MASTERY (Quality-Based Learning & Long-Term Retention)
CREATE TABLE IF NOT EXISTS topic_mastery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  topic TEXT NOT NULL,
  section TEXT NOT NULL,
  track TEXT NOT NULL CHECK (track IN ('NINJA', 'DIGITAL', 'PRIME')),
  mastery_state TEXT NOT NULL CHECK (mastery_state IN (
    'NOT_STARTED',
    'LEARNING',
    'NEEDS_REVIEW',
    'IMPROVING',
    'PROVISIONALLY_MASTERED',
    'MASTERED'
  )),
  score INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  total_attempts INTEGER NOT NULL DEFAULT 0,
  successful_attempts INTEGER NOT NULL DEFAULT 0,
  independent_solves INTEGER NOT NULL DEFAULT 0,
  delayed_recall_successes INTEGER NOT NULL DEFAULT 0,
  evidence_notes JSONB NOT NULL DEFAULT '[]'::jsonb,
  last_attempt_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_user_topic UNIQUE (user_id, topic)
);

CREATE INDEX IF NOT EXISTS idx_topic_mastery_user ON topic_mastery(user_id);
CREATE INDEX IF NOT EXISTS idx_topic_mastery_user_state ON topic_mastery(user_id, mastery_state);

-- Enable RLS on topic_mastery
ALTER TABLE topic_mastery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own topic mastery"
  ON topic_mastery
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

CREATE POLICY "Users can upsert own topic mastery"
  ON topic_mastery
  FOR ALL
  TO authenticated
  USING (auth.uid()::text = user_id)
  WITH CHECK (auth.uid()::text = user_id);
