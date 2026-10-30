-- PrepPath PostgreSQL Schema Migration
-- Enterprise Account Management, Cross-Device Synchronization, Mandatory Onboarding, and Multi-Device Notifications
-- Migration: 20241031020000_enterprise_account_and_notifications.sql

-- 1. PROFILES ENHANCEMENTS FOR ONBOARDING AND CONCURRENCY
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS onboarding_version INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS days_available_per_week INTEGER DEFAULT 6,
  ADD COLUMN IF NOT EXISTS preferred_study_hours TEXT,
  ADD COLUMN IF NOT EXISTS preparation_start_date DATE,
  ADD COLUMN IF NOT EXISTS prep_intensity TEXT DEFAULT 'STANDARD',
  ADD COLUMN IF NOT EXISTS version INTEGER NOT NULL DEFAULT 1;

-- Backfill: Preserve existing accounts with configured tracks as onboarding_completed = TRUE
-- to ensure returning users retain their saved preferences and are not forced into re-onboarding
UPDATE profiles 
SET onboarding_completed = TRUE 
WHERE target_track IS NOT NULL AND onboarding_completed = FALSE;

-- Index on onboarding status
CREATE INDEX IF NOT EXISTS idx_profiles_onboarding ON profiles(id, onboarding_completed);

-- 2. MULTI-DEVICE NOTIFICATION SUBSCRIPTIONS TABLE
CREATE TABLE IF NOT EXISTS notification_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  device_id TEXT NOT NULL,
  fcm_token TEXT,
  device_name TEXT NOT NULL,
  platform TEXT,
  timezone TEXT NOT NULL DEFAULT 'Asia/Kolkata',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  last_active_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT uq_user_device UNIQUE(user_id, device_id)
);

CREATE INDEX IF NOT EXISTS idx_notif_devices_user ON notification_devices(user_id);
CREATE INDEX IF NOT EXISTS idx_notif_devices_token ON notification_devices(fcm_token);
CREATE INDEX IF NOT EXISTS idx_notif_devices_active ON notification_devices(user_id, is_active);

-- Enable RLS on notification_devices
ALTER TABLE notification_devices ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notification_devices' AND policyname = 'Users can view own devices') THEN
    CREATE POLICY "Users can view own devices" ON notification_devices
      FOR SELECT USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notification_devices' AND policyname = 'Users can insert own devices') THEN
    CREATE POLICY "Users can insert own devices" ON notification_devices
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notification_devices' AND policyname = 'Users can update own devices') THEN
    CREATE POLICY "Users can update own devices" ON notification_devices
      FOR UPDATE USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'notification_devices' AND policyname = 'Users can delete own devices') THEN
    CREATE POLICY "Users can delete own devices" ON notification_devices
      FOR DELETE USING (auth.uid() = user_id);
  END IF;
END $$;

-- 3. SCHEDULED NOTIFICATIONS DURABLE OUTBOX & AUDIT QUEUE
CREATE TABLE IF NOT EXISTS scheduled_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  device_id TEXT,
  notification_type TEXT NOT NULL CHECK (notification_type IN ('DAILY_STUDY_REMINDER', 'REVIEW_DUE', 'ASSESSMENT_ALERT', 'SYSTEM')),
  scheduled_for_utc TIMESTAMPTZ NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  target_url TEXT NOT NULL DEFAULT '/dashboard',
  status TEXT NOT NULL DEFAULT 'SCHEDULED' CHECK (status IN ('SCHEDULED', 'QUEUED', 'SENT_TO_PROVIDER', 'PROVIDER_REJECTED', 'TOKEN_INVALID', 'CANCELLED', 'DELIVERY_UNAVAILABLE')),
  idempotency_key TEXT UNIQUE NOT NULL,
  dispatched_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_scheduled_notifs_due ON scheduled_notifications(scheduled_for_utc, status);
CREATE INDEX IF NOT EXISTS idx_scheduled_notifs_user ON scheduled_notifications(user_id, scheduled_for_utc);

-- Enable RLS on scheduled_notifications
ALTER TABLE scheduled_notifications ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'scheduled_notifications' AND policyname = 'Users can view own scheduled notifications') THEN
    CREATE POLICY "Users can view own scheduled notifications" ON scheduled_notifications
      FOR SELECT USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'scheduled_notifications' AND policyname = 'Users can insert own scheduled notifications') THEN
    CREATE POLICY "Users can insert own scheduled notifications" ON scheduled_notifications
      FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'scheduled_notifications' AND policyname = 'Users can update own scheduled notifications') THEN
    CREATE POLICY "Users can update own scheduled notifications" ON scheduled_notifications
      FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;
