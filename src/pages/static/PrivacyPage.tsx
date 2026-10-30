import React from 'react';
import { ShieldCheck, AlertCircle, Lock, Server, Bell, Code, Database, UserCheck, FileText } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="w-8 h-8 text-primary" />
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Revised: October 2026 • Effective Date: October 31, 2026 • PrepPath Independent Platform
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-xs text-slate-600 leading-relaxed shadow-sm">
        {/* Intro notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
          <p className="font-semibold text-slate-900 mb-1">Production Publication Notice:</p>
          <p>
            PrepPath is operated as an independent placement preparation platform. This policy provides complete disclosure regarding how personal data, preparation preferences, source code submissions, and device notification tokens are processed and stored. Specific legal operating entity details and formal data protection officer contact endpoints must be designated by the deploying administrator prior to public commercial release.
          </p>
        </div>

        {/* 1. Information Collected */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-primary" />
            1. Information We Collect
          </h2>
          <p>
            When you register and use PrepPath, we collect information necessary to personalize your study roadmap, evaluate code submissions, and synchronize your progress across devices:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-1 text-slate-600">
            <li><strong>Account & Authentication Information:</strong> Your authenticated email address, chosen display name, unique account identifier, account role, and session tokens.</li>
            <li><strong>Preparation Preferences:</strong> Target preparation track (Ninja, Digital, or Prime), confirmed or tentative examination dates, daily available study minutes, days available per week, preferred study hours, and preparation intensity.</li>
            <li><strong>Technical Skill Preferences:</strong> Preferred programming language (Python, Java, C++, or C), self-reported proficiency level, and chosen weak preparation topics.</li>
            <li><strong>Timezone & Metadata:</strong> Browser-detected IANA timezone identifier (e.g. <code>Asia/Kolkata</code>) to compute accurate daily study plan cutoffs and schedule reminders. We do not access precise GPS coordinates.</li>
            <li><strong>Device & Notification Data:</strong> Device platform descriptions (e.g. "Chrome on Windows"), unique persistent device identifiers, and Web Push / Firebase Cloud Messaging (FCM) device subscription tokens when push reminders are explicitly activated.</li>
          </ul>
        </section>

        {/* 2. Educational & Code Submission Data */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Code className="w-4 h-4 text-primary" />
            2. Source Code, Drafts & Practice Records
          </h2>
          <p>
            • <strong>Coding Drafts:</strong> In-progress code is periodically saved to your authoritative cloud profile to prevent work loss across browser refreshes and device switches.
          </p>
          <p>
            • <strong>Submissions & Execution History:</strong> Source code submitted for grading, execution verdicts, runtime metrics, memory usage, and custom test case inputs are stored in association with your user account.
          </p>
          <p>
            • <strong>MCQ Attempts & Topic Mastery:</strong> Individual option selections, attempt timestamps, diagnostic tags, and spaced-review intervals are recorded to drive adaptive recommendations.
          </p>
          <p>
            • <strong>Confidentiality Guarantee:</strong> PrepPath does not sell, rent, or publicly share student source code or assessment scores with third-party recruitment agencies or external commercial vendors.
          </p>
        </section>

        {/* 3. Third-Party Service Providers */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Server className="w-4 h-4 text-primary" />
            3. Third-Party Infrastructure & Processors
          </h2>
          <p>
            To deliver secure, scalable services, PrepPath utilizes vetted third-party service providers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="font-bold text-slate-900 text-xs block">PostgreSQL / Supabase</span>
              <p className="text-[11px] text-slate-600">
                Authoritative relational database storage with row-level security (RLS) and connection pooling. All user profiles, study plans, submissions, and session states reside here.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="font-bold text-slate-900 text-xs block">Firebase Authentication & FCM</span>
              <p className="text-[11px] text-slate-600">
                Identity verification, credential management, and web push notification dispatch via Firebase Cloud Messaging.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="font-bold text-slate-900 text-xs block">Execution Sandboxes (Judge0 / Piston)</span>
              <p className="text-[11px] text-slate-600">
                Isolated containerized workers for compiling and running submitted code with strict CPU time, memory, and output length boundaries. Execution nodes do not archive student solutions permanently.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="font-bold text-slate-900 text-xs block">Hosting & Static Delivery (Vercel / Netlify)</span>
              <p className="text-[11px] text-slate-600">
                Secure global Content Delivery Network (CDN) enforcing TLS 1.3 HTTPS encryption for all browser traffic.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Local Storage & Cookies */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            4. Local Storage & Client Caching
          </h2>
          <p>
            PrepPath uses client-side Web Storage (<code>localStorage</code>) strictly for non-sensitive local operational needs:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Session caching and fast offline recovery (<code>preppath_user_storage_v2</code>).</li>
            <li>In-progress onboarding wizard draft preservation (<code>preppath_onboarding_draft</code>).</li>
            <li>Stable device subscription identifier (<code>preppath_device_id</code>).</li>
          </ul>
          <p className="mt-1">
            Local storage is never treated as the authoritative identity or permission store. You can clear local browser data at any time via Settings without affecting your saved cloud records.
          </p>
        </section>

        {/* 5. Notifications & Permissions */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" />
            5. Study Reminders & Push Notification Permissions
          </h2>
          <p>
            We never request native browser notification permission automatically upon registration. Browser permission is requested only after you click "Enable Study Reminders".
          </p>
          <p>
            Each registered device maintains an independent notification subscription. You can disable notifications on an individual device or configure Quiet Hours to suppress notifications during rest periods directly in Settings.
          </p>
        </section>

        {/* 6. Data Retention & Account Deletion */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            6. Data Retention, Rights & Account Deletion
          </h2>
          <p>
            We retain account data as long as your profile remains active. You maintain full rights to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>Access & Modify:</strong> Review and update your profile, goals, and study settings at any time.</li>
            <li><strong>Clear Local Cache:</strong> Remove temporary client storage from your active browser without losing account data.</li>
            <li><strong>Permanent Account Deletion:</strong> You may permanently delete your PrepPath account from the Account & Security settings section. Upon confirmation, your profile, active study plans, custom test cases, submissions, and device registrations are purged from the database via cascade constraints.</li>
          </ul>
        </section>

        {/* 7. Security Limitations */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-primary" />
            7. Security Controls & Limitations
          </h2>
          <p>
            We implement industry-standard security practices including encrypted HTTPS transit, database row-level security, sandboxed code compilation, and authenticated backend boundaries. However, no internet transmission or electronic storage method can guarantee absolute mathematical security. Users are responsible for maintaining strong credentials.
          </p>
        </section>

        {/* 8. Policy Updates & Contact */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            8. Policy Changes & Enquiries
          </h2>
          <p>
            We may update this Privacy Policy to reflect platform enhancements or regulatory adjustments. Significant revisions will be communicated through in-app notifications or revised revision dates. For privacy enquiries or formal data access requests, contact the administrative team through the official support channels.
          </p>
        </section>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
