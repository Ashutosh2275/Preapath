-- Migration: 20241028000000_expand_question_bank.sql
-- Description: Expand questions table schema to support numbered LeetCode-style catalog,
--              12-stage progressive hint systems, multiple-choice aptitude questions,
--              external reference metadata, and verified solutions.

ALTER TABLE questions
  ADD COLUMN IF NOT EXISTS catalog_number INTEGER,
  ADD COLUMN IF NOT EXISTS external_problem_id TEXT,
  ADD COLUMN IF NOT EXISTS external_url TEXT,
  ADD COLUMN IF NOT EXISTS problem_format TEXT NOT NULL DEFAULT 'STANDARD_IO'
    CHECK (problem_format IN ('STANDARD_IO', 'FUNCTION_SIGNATURE', 'MULTIPLE_CHOICE')),
  ADD COLUMN IF NOT EXISTS hint_stages JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS solutions JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS options JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS correct_option_id TEXT;

-- Create indexes for fast catalog lookups and section filtering
CREATE INDEX IF NOT EXISTS idx_questions_catalog_number ON questions(catalog_number);
CREATE INDEX IF NOT EXISTS idx_questions_problem_format ON questions(problem_format);
CREATE INDEX IF NOT EXISTS idx_questions_sections_gin ON questions USING GIN (sections);
CREATE INDEX IF NOT EXISTS idx_questions_topics_gin ON questions USING GIN (topics);
CREATE INDEX IF NOT EXISTS idx_questions_target_tracks_gin ON questions USING GIN (target_tracks);

-- Comment on table additions
COMMENT ON COLUMN questions.catalog_number IS 'LeetCode-style sequential catalog index (e.g., 1 for Two Sum, 101 for Numerical Aptitude)';
COMMENT ON COLUMN questions.hint_stages IS 'Structured 12-stage progressive hint guidance';
COMMENT ON COLUMN questions.options IS 'Options A, B, C, D for multiple-choice aptitude and reasoning problems';
COMMENT ON COLUMN questions.correct_option_id IS 'Key of the correct option for multiple-choice problems (e.g., A, B, C, D)';
