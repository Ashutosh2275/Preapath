import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-primary" />
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last revised: October 2024 • PrepPath Independent Platform
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-xs text-slate-600 leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">1. Information We Collect</h3>
          <p>
            PrepPath collects minimal student profile information necessary for personalizing preparation roadmaps: account email, optional display name, target track preference, daily study minutes, preferred programming language, and self-reported proficiency.
          </p>
          <p>
            <strong className="text-slate-800">Strict Non-Collection Rule:</strong> PrepPath never asks for, collects, or stores student credentials, passwords, or login tokens for external portals such as TCS NextStep, college placement portals, or third-party email accounts.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">2. User Source Code & Drafts</h3>
          <p>
            Source code drafts and custom test cases are stored in your private user profile in Firebase Firestore or secure local client storage. They are accessible only by you and are never published, shared with external recruitment entities, or sold.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">3. Sandboxed Code Execution</h3>
          <p>
            When you run or submit code, source code strings and stdin inputs are transmitted securely to sandboxed execution workers (Judge0) solely for compilation, test evaluation, and metric calculation. Code is not permanently archived by execution nodes.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">4. Account Deletion</h3>
          <p>
            Students can clear local preparation records at any time from the Settings page.
          </p>
        </section>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
