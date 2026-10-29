# PrepPath Operational Continuity, Backup & Disaster Recovery Runbook

This document defines the authoritative backup schedules, Point-in-Time Recovery (PITR) procedures, failover protocols, and quarterly disaster recovery drill procedures for the PrepPath platform database.

---

## 1. Reliability Objectives & Service Level Commitments

| Metric | Target SLA | Operational Implementation |
| :--- | :--- | :--- |
| **Recovery Point Objective (RPO)** | **$\le$ 5 minutes** | Continuous PostgreSQL Write-Ahead Log (WAL) streaming to geographically redundant object storage, supplemented by daily logical snapshots. |
| **Recovery Time Objective (RTO)** | **$\le$ 1 hour** | Automated provisioning and PITR point restoration via Supabase CLI and infrastructure-as-code orchestration scripts. |
| **Target Active Capacity** | 1,000+ Registered Users | Supported through PgBouncer connection pooling and indexed tables. |
| **Concurrent Virtual Users** | 1,000 Simulated Users | Validated via `scripts/loadTestSimulation.js` with p95 < 500ms response time. |

---

## 2. Automated Backup Strategy

### Continuous Physical Archiving (Point-in-Time Recovery - PITR)
- **Mechanism**: PostgreSQL Write-Ahead Logs (WAL) are streamed continuously and archived every 2 to 5 minutes to multi-region cloud object storage.
- **Retention**: 7 to 30 days of continuous PITR granularity depending on the operational tier.
- **Restoration Precision**: Allows restoring the database to any specific second (e.g. `2026-10-30T14:32:15Z`) immediately preceding an operational error or data corruption event.

### Automated Logical Daily Snapshots
- **Schedule**: Nightly at `02:00 UTC` during off-peak student preparation traffic.
- **Format**: Compressed PostgreSQL custom format (`pg_dump -Fc`).
- **Storage**: Encrypted with AES-256 and stored in an isolated, access-restricted backup bucket with lifecycle expiration policies (daily snapshots retained for 30 days, monthly retained for 1 year).

---

## 3. Disaster Recovery Scenarios & Playbooks

### Scenario A: Accidental Table Corruption or Unintended Bulk Deletion
**Symptoms**: Unintended migration drop or cascading delete of student records.
**Target RTO**: < 30 minutes | **Target RPO**: < 2 minutes

**Action Procedure**:
1. Identify the exact UTC timestamp $T_{incident}$ when the destructive query occurred via database logs:
   ```bash
   supabase logs -p <project-ref> --db
   ```
2. Determine restore point timestamp: $T_{restore} = T_{incident} - 30\text{ seconds}$.
3. Initiate Point-in-Time Recovery:
   ```bash
   supabase db restore --target-time "2026-10-30T14:31:30Z"
   ```
4. Verify table integrity and row counts across `profiles`, `study_plans`, `study_plan_tasks`, and `submissions`.
5. Point client traffic back to the restored instance.

---

### Scenario B: Cloud Provider Regional Outage or Primary Instance Failure
**Symptoms**: Supabase / PostgreSQL primary host becomes unreachable or experiences extended downtime.
**Target RTO**: < 60 minutes | **Target RPO**: < 5 minutes

**Action Procedure**:
1. Notify platform status page and enable maintenance banner in the web client.
2. Spin up a standby instance in the designated secondary region:
   ```bash
   supabase projects create --name preppath-dr-secondary --region us-east-1
   ```
3. Restore latest available snapshot and replay latest WAL archives:
   ```bash
   pg_restore --clean --if-exists -h secondary.db.host -U postgres -d postgres backup_latest.dump
   ```
4. Apply forward-only migration scripts:
   ```bash
   supabase db push
   ```
5. Update DNS / Supabase environment variables in client deployment (Vercel / Cloudflare Pages):
   ```bash
   VITE_SUPABASE_URL=https://dr-secondary.supabase.co
   VITE_SUPABASE_ANON_KEY=<new-secondary-anon-key>
   ```
6. Run smoke tests and load test simulation:
   ```bash
   npm run test:load
   npm test
   ```
7. Remove maintenance banner and resume normal student preparation traffic.

---

## 4. Quarterly Restoration Drill Protocol

To ensure that the backup and recovery mechanisms remain operational and tested, engineering executes a quarterly restoration drill according to the following checklist:

1. **Staging Environment Isolation**: Provision a dedicated, isolated test database instance. Never conduct drills against production instances.
2. **Snapshot Download**: Fetch the latest nightly logical dump from the backup bucket.
3. **Restoration Execution**: Time the execution of `pg_restore` from start to finish. Ensure elapsed time is $< 20$ minutes for full database rehydration.
4. **Data Integrity & RLS Verification**:
   - Run automated test suite against the restored database:
     ```bash
     npm test
     ```
   - Verify that student profiles, active study plans, and historical submissions are intact.
   - Verify that private hidden test cases and reference solutions remain inaccessible to non-admin roles.
   - Verify that partial unique index `uq_one_active_plan_per_user` correctly rejects concurrent active plan insertions.
5. **Post-Mortem & Documentation**: Record drill duration, RPO gap, and any anomalies in the operational compliance log.
