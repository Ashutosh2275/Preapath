-- Migration: 20241031010000_mcq_grading_integrity_and_replacement_flow.sql
-- Description: Supports intelligent next-question replacement flow in daily study sessions and reinforces MCQ grading integrity.

-- 1. Ensure daily_study_session_items tracks original question slot assignment and replacement history
ALTER TABLE daily_study_session_items 
  ADD COLUMN IF NOT EXISTS original_question_id TEXT,
  ADD COLUMN IF NOT EXISTS replacement_history JSONB DEFAULT '[]'::jsonb;

-- 2. Make confidence explicitly optional/nullable on mcq_attempts (supporting pure behavioral diagnostics)
ALTER TABLE mcq_attempts 
  ALTER COLUMN confidence DROP NOT NULL;

-- 3. Index for replacement lookup performance
CREATE INDEX IF NOT EXISTS idx_session_items_question 
  ON daily_study_session_items(session_id, question_id);
