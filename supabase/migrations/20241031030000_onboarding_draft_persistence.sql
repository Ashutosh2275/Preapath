-- PrepPath PostgreSQL Migration: Onboarding Draft Persistence
-- Enables durable cross-device onboarding resumption and safe draft recovery
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS onboarding_draft JSONB DEFAULT NULL;

COMMENT ON COLUMN profiles.onboarding_draft IS 'Incomplete onboarding wizard draft persisted across devices prior to final confirmation.';
