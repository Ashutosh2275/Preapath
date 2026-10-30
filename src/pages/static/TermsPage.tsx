import React from 'react';
import { BookOpen, ShieldAlert, CheckCircle2, FileText, AlertTriangle, Scale, Code } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
          <BookOpen className="w-8 h-8 text-primary" />
          Terms of Service & Platform Guidelines
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: October 2026 • Version 2.2 • PrepPath Independent Platform
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 text-xs text-slate-600 leading-relaxed shadow-sm">
        {/* Important Commercial & Legal Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
          <p className="font-semibold text-slate-900 mb-1">Commercial Publication Notice:</p>
          <p>
            These Terms of Service govern your use of the PrepPath website, application, study planners, coding sandboxes, and assessment practice services. Prior to commercial public release, these terms must be formally ratified by the legal operating entity.
          </p>
        </div>

        {/* 1. Independent Platform Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Scale className="w-4 h-4 text-primary" />
            1. Independent Educational Platform Notice
          </h2>
          <p>
            PrepPath is an independent educational training and preparation tool created to help candidates prepare for placement examinations. PrepPath is not affiliated with, endorsed by, sponsored by, or operated by Tata Consultancy Services (TCS) or any of its associated corporate entities.
          </p>
          <p>
            The terms "TCS", "Tata Consultancy Services", "Ninja", "Digital", "Prime", and "National Qualifier Test (NQT)" are trademarks of their respective owners. Their mention on PrepPath is strictly for nominative fair-use descriptive curricular purposes to help students identify standard examination syllabus levels.
          </p>
        </section>

        {/* 2. Educational Scope & No Guarantee */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            2. Educational Scope & No Employment Guarantee
          </h2>
          <p>
            PrepPath provides practice problem sets, algorithmic challenges, concept derivation walkthroughs, and automated scheduling. <strong>Using PrepPath does not guarantee recruitment, shortlisting, selection, specific exam scores, or compensation packages</strong> from TCS or any other prospective employer.
          </p>
          <p>
            Practice materials, mock assessment timers, and questions are developed through educational research and public curriculum frameworks. We do not claim possession of confidential or proprietary examination papers.
          </p>
        </section>

        {/* 3. Account Responsibility */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            3. User Accounts & Cross-Device Access
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your authentication credentials and for all activities that occur under your account. You agree to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Provide accurate information during mandatory onboarding setup.</li>
            <li>Maintain one primary personal account rather than creating redundant automated accounts.</li>
            <li>Notify administrators immediately if you detect unauthorized access to your account.</li>
          </ul>
        </section>

        {/* 4. Acceptable Use & Sandboxed Code Execution Restrictions */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <Code className="w-4 h-4 text-primary" />
            4. Acceptable Use & Code Sandbox Restrictions
          </h2>
          <p>
            The PrepPath code execution sandbox is provided solely for compiling and verifying algorithm practice solutions. You expressly agree not to submit or attempt to execute code that:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Attempts to escape containerized sandboxes, inspect host file systems, or probe internal networks.</li>
            <li>Consumes excessive computing resources intended to degrade service availability (Denial of Service).</li>
            <li>Contains viruses, trojans, worms, fork bombs, or malicious payloads.</li>
            <li>Scrapes, automates, or circumvents rate limits and authentication protections.</li>
          </ul>
          <p className="mt-1 text-rose-700 font-medium">
            Violation of sandbox boundaries will result in immediate session revocation and permanent account termination.
          </p>
        </section>

        {/* 5. Intellectual Property & User Code */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            5. Intellectual Property & User-Submitted Code
          </h2>
          <p>
            • <strong>Platform Content:</strong> PrepPath retains all rights, title, and interest in and to the platform interface, design systems, algorithms, study plan engines, and original editorial content.
          </p>
          <p>
            • <strong>Your Source Code:</strong> You retain ownership of the original source code and custom test cases you create. By submitting code for execution, you grant PrepPath a limited, non-exclusive license solely to transmit, compile, and evaluate your code for feedback and progress tracking.
          </p>
        </section>

        {/* 6. Availability & Service Continuity */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-primary" />
            6. Availability, Maintenance & Limitation of Liability
          </h2>
          <p>
            While we strive for high service reliability, PrepPath is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that service will be uninterrupted or error-free. To the maximum extent permitted by applicable law, PrepPath and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use the platform.
          </p>
        </section>

        {/* 7. Account Termination & Deletion */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            7. Account Suspension & Deletion
          </h2>
          <p>
            You may permanently delete your account at any time through the Account & Security settings section. PrepPath reserves the right to suspend or terminate accounts that violate acceptable use policies, tamper with platform security, or engage in abusive platform behavior.
          </p>
        </section>

        {/* 8. Modifications to Terms */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-1 border-b border-slate-100 flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            8. Modifications to These Terms
          </h2>
          <p>
            We reserve the right to amend these terms at any time. Material changes will be highlighted with an updated revision date. Continued use of the platform after updates constitutes agreement to the revised terms.
          </p>
        </section>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
