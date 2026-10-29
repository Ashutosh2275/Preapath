# PrepPath PostgreSQL Database Architecture & Concurrency Guide

This document specifies the authoritative PostgreSQL schema, connection pooling configuration, Row-Level Security (RLS) policies, and performance indexes supporting PrepPath's production capacity targets (1,000+ registered candidates and 1,000 concurrent simulated active users with p95 < 500ms response time).

---

## 1. Schema Topology & Table Relationships

The application relies on PostgreSQL as the sole source of truth. All tables use UUID/TEXT identifiers, strict foreign key constraints, timestamps (`TIMESTAMPTZ`), and audit columns.

```
       +--------------------+
       |      profiles      | (auth.uid() = id, role enum)
       +--------------------+
                 |
      +----------+----------+-----------------------+---------------------+
      |                     |                       |                     |
      v                     v                       v                     v
+-------------+      +---------------+      +---------------+     +---------------+
| study_plans |      |  submissions  |      |problem_progress|    |  code_drafts  |
+-------------+      +---------------+      +---------------+     +---------------+
      |                     |
      v                     |
+------------------+        |
| study_plan_tasks |        |
+------------------+        |
                            |
                            v
       +---------------------------------------------+
       |                  questions                  | (Public Catalog Projection)
       +---------------------------------------------+
                 |                           |
                 v                           v
  +-----------------------------+  +-------------------------------+
  | question_hidden_test_cases  |  | question_reference_solutions  |
  |  (RLS: Service Role / Admin) |  |  (RLS: Service Role / Admin)  |
  +-----------------------------+  +-------------------------------+
```

### Table Dictionary

| Table Name | Description | Key Security / Concurrency Attributes |
| :--- | :--- | :--- |
| `profiles` | Candidate target track, daily minutes, prep days, and role. | `BEFORE UPDATE` trigger rejects non-admin role escalation. |
| `questions` | Public question repository with problem statements, starter code, and public test cases. | Publicly viewable for published problems. Never stores hidden test cases. |
| `question_hidden_test_cases` | Private test cases used solely for backend grading and anti-cheat verification. | RLS strictly restricts access to `service_role` and `admin`. Zero public access. |
| `question_reference_solutions` | Private validated reference solutions for automated grading and hint generation. | RLS strictly restricts access to `service_role` and `admin`. |
| `exam_profiles` | Blueprints for TCS Ninja, Digital, and Prime exam sections and time budgets. | Read-only for authenticated candidates. |
| `study_plans` | Daily preparation schedule container with status lifecycle (`DRAFT`, `ACTIVE`, `PAUSED`, `COMPLETED`, `ARCHIVED`). | Partial unique index (`WHERE status = 'ACTIVE'`) prevents concurrent duplicate active plans. |
| `study_plan_tasks` | Individual scheduled tasks linked to problems and syllabus stages. | Audit columns track reschedule history (`is_rescheduled`, `original_day_number`). |
| `submissions` | Immutable code execution records with compiler outputs, runtime metrics, and Judge0 tokens. | Unique constraint on `(user_id, submission_token)` guarantees idempotency. |
| `problem_progress` | Solved, attempted, and bookmarked statuses with confidence ratings. | Primary key `(user_id, problem_id)`. |
| `code_drafts` | Multi-language scratchpad autosaves. | Unique key `(user_id, problem_id, language)`. |
| `custom_test_cases` | User-created test cases for interactive debugging. | Tenant isolation via `user_id = auth.uid()`. |
| `spaced_review_queue` | SM-2 spaced repetition items with intervals, ease factors, and due dates. | Unique key `(user_id, problem_id)`. |
| `user_notification_preferences` | Daily reminder email/push opt-ins and scheduled reminder hours. | 1:1 relation to `profiles`. |
| `in_app_notifications` | Persistent user notifications for plan milestones and review alerts. | Cascade deletes on profile deletion. |

---

## 2. Connection Pooling Architecture

To support 1,000 concurrent active users without database connection exhaustion, Supabase PgBouncer connection pooling must be configured according to connection mode:

### Port 6543: PgBouncer Transaction Pooling Mode (Application Clients)
- **Primary Use**: All runtime frontend queries, Edge Functions, REST API calls, and compiler evaluation webhooks.
- **Protocol**: Stateless transaction-level pooling. A PostgreSQL connection is borrowed from the pool only for the duration of a transaction, then immediately released.
- **Capacity**: Enables thousands of concurrent virtual users over a small underlying server connection pool (e.g., 25 - 50 physical connections).
- **Configuration Parameter**:
  ```ini
  pool_mode = transaction
  default_pool_size = 35
  max_client_conn = 1500
  query_timeout = 8000  # 8s statement timeout prevents runaway queries
  ```

### Port 5432: Session Mode / Direct Connection (Migrations & Admin Tools)
- **Primary Use**: Database migrations (`supabase db push`), DDL scripts, `LISTEN/NOTIFY` channels, and temporary prepared statements during batch administrative tasks.
- **Rule**: Never point runtime web traffic or serverless client instances to Port 5432 in high-concurrency environments.

---

## 3. Row-Level Security (RLS) Policy Catalog

All tables have Row-Level Security enabled (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`).

### 1. Role Escalation Prevention Trigger
Client-side tokens must not be capable of elevating a candidate's `role` to `'ADMIN'`. Enforced via a PostgreSQL trigger function:

```sql
CREATE OR REPLACE FUNCTION prevent_profile_role_escalation()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.role = 'ADMIN' AND OLD.role <> 'ADMIN' THEN
    IF current_setting('request.jwt.claims', true)::jsonb->>'role' <> 'service_role' THEN
      RAISE EXCEPTION 'Security violation: Unauthorized attempt to elevate role to ADMIN';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 2. Hidden Test Case & Reference Solution Isolation
Public clients and candidates cannot query `question_hidden_test_cases` or `question_reference_solutions`:

```sql
-- Public/Student access is explicitly denied (zero policy for public)
-- Only Service Role or Platform Admin can access
CREATE POLICY "Admins have full access to hidden test cases"
  ON question_hidden_test_cases
  FOR ALL
  TO authenticated
  USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'ADMIN')
  );
```

### 3. Candidate Tenant Isolation
Candidates can only view and mutate rows where `user_id = auth.uid()`:
- `study_plans`, `study_plan_tasks`
- `submissions`
- `problem_progress`
- `code_drafts`, `custom_test_cases`
- `spaced_review_queue`
- `user_notification_preferences`, `in_app_notifications`

---

## 4. Performance Indexes & p95 SLA Optimization

To guarantee sub-500ms p95 latency under high concurrent load:

| Index Name | Table & Columns | Purpose |
| :--- | :--- | :--- |
| `uq_one_active_plan_per_user` | `study_plans(user_id) WHERE status = 'ACTIVE'` | Partial unique index enforcing exactly one active plan per student without race conditions. |
| `uq_submissions_user_token` | `submissions(user_id, submission_token)` | Unique index guaranteeing submission idempotency. |
| `idx_questions_catalog_num` | `questions(catalog_number)` | Fast ascending sort for problem explorer. |
| `idx_questions_format_difficulty`| `questions(problem_format, difficulty)` | Composite index for Stage A/B/C question pool filtering. |
| `idx_questions_sections` | `questions USING GIN(sections)` | Multivalue index for syllabus section filtering. |
| `idx_questions_target_tracks` | `questions USING GIN(target_tracks)` | Multivalue index for TCS track filtering (Ninja, Digital, Prime). |
| `idx_submissions_user_problem`| `submissions(user_id, problem_id, submitted_at DESC)`| Rapid retrieval of past submissions on problem detail page. |
| `idx_study_plan_tasks_lookup` | `study_plan_tasks(plan_id, day_number, sort_order)` | Sub-millisecond day task loading during student daily dashboard hydration. |
| `idx_spaced_review_due` | `spaced_review_queue(user_id, next_review_due)` | Rapid retrieval of overdue / due spaced recall items. |
