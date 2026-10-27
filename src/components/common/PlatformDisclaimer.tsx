import React from 'react';
import { Info } from 'lucide-react';

export const PlatformDisclaimer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-1.5 px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold text-slate-600 dark:text-slate-300">Independent Preparation Platform:</span> PrepPath is not affiliated with, endorsed by, or sponsored by Tata Consultancy Services.
      </div>
    );
  }

  return (
    <aside
      aria-label="Platform Disclaimer"
      className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4 text-xs text-slate-500 dark:text-slate-400 flex items-start gap-3"
    >
      <Info className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
      <div>
        <p className="font-semibold text-slate-700 dark:text-slate-300 mb-0.5">
          Independent Educational Resource Notice
        </p>
        <p>
          PrepPath is an independent placement preparation platform authored to help students practice algorithmic coding, quantitative aptitude, and technical skills. PrepPath is not affiliated with, endorsed by, sponsored by, or an official partner of Tata Consultancy Services (TCS). All company, test name, and track references (Ninja, Digital, Prime) are used strictly for descriptive educational categorization under fair use.
        </p>
      </div>
    </aside>
  );
};
