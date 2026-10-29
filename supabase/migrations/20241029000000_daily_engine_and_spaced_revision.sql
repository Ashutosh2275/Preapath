-- Migration: 20241029000000_daily_engine_and_spaced_revision.sql
-- Description: Implement Daily Preparation Engine stages, Spaced Repetition review schedules,
--              Notification preferences, and delivery logs.

-- 1. Extend study_plan_tasks with stage metadata
ALTER TABLE study_plan_tasks
  ADD COLUMN IF NOT EXISTS stage_type TEXT
    CHECK (stage_type IN ('STAGE_A_MCQ', 'STAGE_B_EASY_CODING', 'STAGE_C_MEDIUM_CODING', 'STAGE_D_REVIEW', 'MOCK_ASSESSMENT')),
  ADD COLUMN IF NOT EXISTS stage_label TEXT,
  ADD COLUMN IF NOT EXISTS catalog_number INTEGER,
  ADD COLUMN IF NOT EXISTS budget_reason TEXT;

CREATE INDEX IF NOT EXISTS idx_study_plan_tasks_stage ON study_plan_tasks(stage_type);

-- 2. Spaced Review Schedule Items
CREATE TABLE IF NOT EXISTS spaced_review_items (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  problem_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  problem_title TEXT NOT NULL,
  catalog_number INTEGER,
  problem_format TEXT NOT NULL DEFAULT 'STANDARD_IO',
  section TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  last_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_verdict TEXT NOT NULL,
  attempt_count INTEGER NOT NULL DEFAULT 1,
  is_accepted BOOLEAN NOT NULL DEFAULT FALSE,
  revealed_hints_count INTEGER NOT NULL DEFAULT 0,
  time_spent_seconds INTEGER,
  next_review_date DATE NOT NULL,
  interval_days INTEGER NOT NULL DEFAULT 1,
  repetition_count INTEGER NOT NULL DEFAULT 0,
  consecutive_correct INTEGER NOT NULL DEFAULT 0,
  is_mastered BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'COMPLETED', 'SNOOZED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_user_problem_spaced_review UNIQUE(user_id, problem_id)
);

CREATE INDEX IF NOT EXISTS idx_spaced_review_user_date ON spaced_review_items(user_id, next_review_date);
CREATE INDEX IF NOT EXISTS idx_spaced_review_status ON spaced_review_items(status);

-- 3. Notification Preferences
CREATE TABLE IF NOT EXISTS notification_preferences (
  user_id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  frequency TEXT NOT NULL DEFAULT 'DAILY' CHECK (frequency IN ('DAILY', 'EVERY_OTHER_DAY', 'WEEKLY', 'DISABLED')),
  reminder_time TEXT NOT NULL DEFAULT '19:00',
  timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  remind_reviews_due BOOLEAN NOT NULL DEFAULT TRUE,
  quiet_hours_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  quiet_hours_start TEXT NOT NULL DEFAULT '22:00',
  quiet_hours_end TEXT NOT NULL DEFAULT '08:00',
  push_token TEXT,
  browser_permission TEXT NOT NULL DEFAULT 'default',
  paused_until TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Notification Delivery Logs (Idempotent delivery tracking)
CREATE TABLE IF NOT EXISTS notification_logs (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status TEXT NOT NULL CHECK (status IN ('SENT', 'FAILED', 'SKIPPED_QUIET_HOURS', 'SKIPPED_ALREADY_COMPLETED')),
  idempotency_key TEXT UNIQUE,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_notification_logs_idempotency ON notification_logs(idempotency_key);
CREATE INDEX IF NOT EXISTS idx_notification_logs_user_sent ON notification_logs(user_id, sent_at);

-- 5. In-App Notifications
CREATE TABLE IF NOT EXISTS in_app_notifications (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'DAILY_STUDY_REMINDER',
  target_url TEXT NOT NULL DEFAULT '/study-plan',
  read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_in_app_notifications_user ON in_app_notifications(user_id, read, created_at DESC);

-- Enable Row Level Security
ALTER TABLE spaced_review_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE in_app_notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage their own spaced review items"
  ON spaced_review_items FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their notification preferences"
  ON notification_preferences FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read their notification logs"
  ON notification_logs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their in-app notifications"
  ON in_app_notifications FOR ALL
  USING (auth.uid() = user_id);
