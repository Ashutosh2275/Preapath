-- Migration: 20241031000000_professional_mcq_bank_and_adaptive_engine.sql
-- Description: Schema for unique professional MCQ bank, protected answer keys,
--              persistent MCQ attempts, mistake classifications, and daily study sessions.

-- 1. QUESTION SOURCES TABLE
CREATE TABLE IF NOT EXISTS question_sources (
  id TEXT PRIMARY KEY,
  publisher TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  evidence_category TEXT NOT NULL CHECK (evidence_category IN (
    'OFFICIAL_INFORMATION', 'CANDIDATE_RECALLED', 'REPORTED_PREVIOUS_QUESTION', 'RECURRING_PATTERN', 'ORIGINAL_PRACTICE'
  )),
  verification_date DATE NOT NULL,
  supported_batch_hiring_cycle TEXT NOT NULL,
  notes TEXT,
  reviewer_status TEXT NOT NULL DEFAULT 'VERIFIED' CHECK (reviewer_status IN ('VERIFIED', 'PENDING', 'EDITORIAL_AUDITED')),
  content_usage_rights TEXT NOT NULL DEFAULT 'EDUCATIONAL_FAIR_USE' CHECK (content_usage_rights IN ('OFFICIAL_PUBLIC_NOTICE', 'EDUCATIONAL_FAIR_USE', 'ORIGINAL_AUTHORSHIP')),
  is_official BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed verified question sources
INSERT INTO question_sources (id, publisher, title, url, evidence_category, verification_date, supported_batch_hiring_cycle, notes, is_official, reviewer_status, content_usage_rights)
VALUES
  ('src-tcs-official-nqt', 'Tata Consultancy Services', 'TCS All India National Qualifier Test (NQT) Hiring Portal', 'https://www.tcs.com/careers/india/tcs-all-india-nqt-hiring', 'OFFICIAL_INFORMATION', '2026-10-30', '2024–2026 Batch Integrated NQT', 'Official examination syllabus, test sections (190 mins total), and eligibility criteria.', TRUE, 'VERIFIED', 'OFFICIAL_PUBLIC_NOTICE'),
  ('src-gfg-tcs-nqt-guide', 'GeeksforGeeks', 'TCS NQT Preparation Guide 2026', 'https://www.geeksforgeeks.org/interview-prep/tcs-nqt-preparation-guide-2026-videos-mcqs-questions-bank/', 'RECURRING_PATTERN', '2026-10-30', '2024–2026 Hiring Cycles', 'Quantitative shortcuts, logical deduction puzzles, verbal error correction, and foundational coding paradigms.', FALSE, 'VERIFIED', 'EDUCATIONAL_FAIR_USE'),
  ('src-prepinsta-nqt-papers', 'PrepInsta', 'TCS NQT Placement Papers Archives', 'https://prepinsta.com/tcs-nqt/placement-papers/', 'CANDIDATE_RECALLED', '2026-10-30', 'Candidate Recall Archives (2024–2026)', 'Candidate recall datasets for aptitude speed math, syllogisms, seating arrangements, and pseudo-code output tracing.', FALSE, 'VERIFIED', 'EDUCATIONAL_FAIR_USE'),
  ('src-preppath-editorial-original', 'PrepPath Editorial Assessment Board', 'PrepPath Original Placement Preparation Question Suite', 'https://preppath.dev/curriculum', 'ORIGINAL_PRACTICE', '2026-10-31', '2024–2026 Preparation Engine', 'Independently authored, educator-quality MCQs with unique reasoning contexts, plausible misconception-based distractors, and verified programming executions.', FALSE, 'EDITORIAL_AUDITED', 'ORIGINAL_AUTHORSHIP')
ON CONFLICT (id) DO NOTHING;

-- 2. ENHANCE QUESTIONS TABLE WITH PEDAGOGICAL & ARCHETYPE METADATA
ALTER TABLE questions
  ADD COLUMN IF NOT EXISTS question_format TEXT NOT NULL DEFAULT 'MULTIPLE_CHOICE',
  ADD COLUMN IF NOT EXISTS question_archetype TEXT,
  ADD COLUMN IF NOT EXISTS template_family_id TEXT,
  ADD COLUMN IF NOT EXISTS learning_objective TEXT,
  ADD COLUMN IF NOT EXISTS cognitive_skill TEXT CHECK (cognitive_skill IN ('REMEMBERING', 'UNDERSTANDING', 'APPLYING', 'ANALYZING', 'EVALUATING')),
  ADD COLUMN IF NOT EXISTS scenario_type TEXT,
  ADD COLUMN IF NOT EXISTS content_fingerprint TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS source_id TEXT REFERENCES question_sources(id);

CREATE INDEX IF NOT EXISTS idx_questions_archetype ON questions(question_archetype);
CREATE INDEX IF NOT EXISTS idx_questions_fingerprint ON questions(content_fingerprint);

-- 3. MCQ OPTIONS (Public Question Representation)
CREATE TABLE IF NOT EXISTS question_mcq_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  option_id TEXT NOT NULL,
  option_text TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE(question_id, option_id)
);

CREATE INDEX IF NOT EXISTS idx_mcq_options_question ON question_mcq_options(question_id, display_order);

-- 4. PROTECTED MCQ ANSWER KEYS (Never directly readable by standard students before submission)
CREATE TABLE IF NOT EXISTS mcq_answer_keys (
  question_id TEXT PRIMARY KEY REFERENCES questions(id) ON DELETE CASCADE,
  correct_option_id TEXT NOT NULL,
  explanation TEXT NOT NULL,
  formula_or_rule TEXT,
  distractor_explanations JSONB NOT NULL DEFAULT '{}'::jsonb,
  misconception_notes TEXT,
  shortcut_technique TEXT,
  concept_tested TEXT NOT NULL,
  verified_by TEXT NOT NULL DEFAULT 'Editorial QA Pipeline',
  is_verified BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row-Level Security for mcq_answer_keys: Strictly Admins and Service Role
ALTER TABLE mcq_answer_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins full access to mcq_answer_keys"
  ON mcq_answer_keys FOR ALL
  USING (
    auth.role() = 'service_role' OR
    EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin')
  );

-- 5. PERSISTENT MCQ ATTEMPTS TABLE
CREATE TABLE IF NOT EXISTS mcq_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  question_version INTEGER NOT NULL DEFAULT 1,
  selected_option_id TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  response_time_ms INTEGER NOT NULL DEFAULT 0,
  difficulty TEXT NOT NULL,
  topic TEXT NOT NULL,
  question_archetype TEXT,
  confidence TEXT CHECK (confidence IN ('LOW', 'MEDIUM', 'HIGH')),
  mistake_type TEXT CHECK (mistake_type IN (
    'CONCEPTUAL_GAP', 'CALCULATION_ERROR', 'MISREAD_QUESTION', 'LOGICAL_REASONING_ERROR',
    'TIME_PRESSURE', 'GUESS_OR_UNCERTAIN', 'CARELESS_ERROR', 'KNOWLEDGE_GAP', 'UNCLASSIFIED'
  )),
  is_revision BOOLEAN NOT NULL DEFAULT FALSE,
  attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mcq_attempts_user_topic ON mcq_attempts(user_id, topic, attempted_at DESC);
CREATE INDEX IF NOT EXISTS idx_mcq_attempts_user_question ON mcq_attempts(user_id, question_id, attempted_at DESC);
CREATE INDEX IF NOT EXISTS idx_mcq_attempts_user_mistake ON mcq_attempts(user_id, mistake_type);

ALTER TABLE mcq_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own mcq_attempts"
  ON mcq_attempts FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 6. DAILY STUDY SESSIONS & ITEMS (Stable Per-User, Per-Date Seeded Plan)
CREATE TABLE IF NOT EXISTS daily_study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  session_date DATE NOT NULL,
  day_number INTEGER NOT NULL,
  target_track TEXT NOT NULL,
  randomization_seed TEXT NOT NULL,
  time_budget_minutes INTEGER NOT NULL DEFAULT 90,
  status TEXT NOT NULL DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'COMPLETED', 'SKIPPED')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, session_date)
);

CREATE TABLE IF NOT EXISTS daily_study_session_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES daily_study_sessions(id) ON DELETE CASCADE,
  order_index INTEGER NOT NULL,
  item_type TEXT NOT NULL CHECK (item_type IN ('MCQ', 'EASY_CODING', 'MEDIUM_CODING', 'SPACED_REVIEW', 'MOCK_ASSESSMENT')),
  section TEXT NOT NULL,
  topic TEXT NOT NULL,
  question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  difficulty TEXT NOT NULL,
  estimated_minutes INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED')),
  completed_at TIMESTAMPTZ,
  UNIQUE (session_id, order_index)
);

CREATE INDEX IF NOT EXISTS idx_session_items_session ON daily_study_session_items(session_id, order_index);

ALTER TABLE daily_study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_study_session_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own daily sessions"
  ON daily_study_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own session items"
  ON daily_study_session_items FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM daily_study_sessions
      WHERE daily_study_sessions.id = daily_study_session_items.session_id
        AND daily_study_sessions.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM daily_study_sessions
      WHERE daily_study_sessions.id = daily_study_session_items.session_id
        AND daily_study_sessions.user_id = auth.uid()
    )
  );

-- 7. SECURE GRADING RPC FUNCTION
-- Grades submitted option securely against protected mcq_answer_keys table without exposing keys in advance
CREATE OR REPLACE FUNCTION submit_mcq_grade(
  p_user_id UUID,
  p_question_id TEXT,
  p_selected_option_id TEXT,
  p_response_time_ms INTEGER DEFAULT 0,
  p_confidence TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_answer_key RECORD;
  v_question RECORD;
  v_is_correct BOOLEAN;
  v_mistake_type TEXT;
  v_distractor_expl TEXT;
BEGIN
  -- 1. Fetch protected answer key
  SELECT * INTO v_answer_key
  FROM mcq_answer_keys
  WHERE question_id = p_question_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Answer key not found for question ID: %', p_question_id;
  END IF;

  -- 2. Fetch public question metadata
  SELECT difficulty, topics, question_archetype, version INTO v_question
  FROM questions
  WHERE id = p_question_id;

  -- 3. Determine correctness
  v_is_correct := (UPPER(TRIM(p_selected_option_id)) = UPPER(TRIM(v_answer_key.correct_option_id)));

  -- 4. Mistake diagnosis
  IF NOT v_is_correct THEN
    -- Check if distractor explanation classifies mistake
    v_distractor_expl := v_answer_key.distractor_explanations->>UPPER(TRIM(p_selected_option_id));
    IF p_response_time_ms > 0 AND p_response_time_ms < 15000 THEN
      v_mistake_type := 'TIME_PRESSURE';
    ELSIF v_distractor_expl IS NOT NULL AND v_distractor_expl ILIKE '%formula%' THEN
      v_mistake_type := 'CONCEPTUAL_GAP';
    ELSIF v_distractor_expl IS NOT NULL AND (v_distractor_expl ILIKE '%calculation%' OR v_distractor_expl ILIKE '%sign%') THEN
      v_mistake_type := 'CALCULATION_ERROR';
    ELSIF v_distractor_expl IS NOT NULL AND v_distractor_expl ILIKE '%misread%' THEN
      v_mistake_type := 'MISREAD_QUESTION';
    ELSIF p_confidence = 'LOW' THEN
      v_mistake_type := 'GUESS_OR_UNCERTAIN';
    ELSE
      v_mistake_type := 'CARELESS_ERROR';
    END IF;
  ELSE
    v_mistake_type := NULL;
  END IF;

  -- 5. Record immutable attempt
  INSERT INTO mcq_attempts (
    user_id,
    question_id,
    question_version,
    selected_option_id,
    is_correct,
    response_time_ms,
    difficulty,
    topic,
    question_archetype,
    confidence,
    mistake_type,
    attempted_at
  ) VALUES (
    p_user_id,
    p_question_id,
    COALESCE(v_question.version, 1),
    p_selected_option_id,
    v_is_correct,
    p_response_time_ms,
    COALESCE(v_question.difficulty, 'MEDIUM'),
    COALESCE(v_question.topics[1], 'General'),
    v_question.question_archetype,
    p_confidence,
    v_mistake_type,
    NOW()
  );

  -- 6. Return graded result and explanation only after submission
  RETURN jsonb_build_object(
    'is_correct', v_is_correct,
    'correct_option_id', v_answer_key.correct_option_id,
    'explanation', v_answer_key.explanation,
    'formula_or_rule', v_answer_key.formula_or_rule,
    'distractor_explanations', v_answer_key.distractor_explanations,
    'misconception_notes', v_answer_key.misconception_notes,
    'shortcut_technique', v_answer_key.shortcut_technique,
    'concept_tested', v_answer_key.concept_tested,
    'mistake_type', v_mistake_type
  );
END;
$$;
