import React from 'react';
import { ShieldCheck, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          About PrepPath
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Our Educational Mission & Provenance Principles
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          PrepPath was created to provide university engineering students with a structured, honest, and high-quality preparation environment for national campus placement assessments.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          The 4 Pillars of PrepPath Integrity
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm block">1. Transparent Provenance</span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We never fabricate recurrence percentages, exam shifts, or claim that an independently written practice question is an official leaked paper.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm block">2. No Fabricated Statistics</span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not display invented user counts, inflated pass rates, or fake placement offers. All analytics reflect your verified activity.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm block">3. Progressive Pedagogy</span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Rather than immediately leaking complete answers, our progressive hint system guides you toward discovering solutions yourself.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-1.5">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm block">4. Secure Isolated Sandboxes</span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Code execution is conducted in sandboxed environments with strict CPU, memory, and output length boundaries.
            </p>
          </div>
        </div>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
