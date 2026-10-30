import React from 'react';
import { BookOpen } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" />
          Terms of Service & Independent Platform Notice
        </h1>
        <p className="text-xs text-slate-500">
          Last updated: October 2024 • PrepPath Independent Platform
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-xs text-slate-600 leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">1. Educational Independence Disclaimer</h3>
          <p>
            PrepPath is an independent educational training platform. PrepPath is not owned, developed, operated, endorsed, or affiliated with Tata Consultancy Services (TCS) or any of its subsidiaries.
          </p>
          <p>
            The terms "TCS", "Ninja", "Digital", "Prime", and "National Qualifier Test (NQT)" are trademarks of their respective owners. Their use on PrepPath is strictly for fair-use identification and descriptive curricular classification.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">2. No Guarantee of Placement</h3>
          <p>
            PrepPath provides structured practice tools, mock assessments, and algorithmic exercises. Use of PrepPath does not guarantee recruitment, selection, a specific package offer, or hiring by TCS or any other employer.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900">3. Acceptable Use Policy</h3>
          <p>
            Users agree not to submit malicious, abusive, or denial-of-service code through the execution sandbox. Any attempt to compromise server infrastructure, bypass rate limits, or access another user's submissions is strictly prohibited.
          </p>
        </section>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
