import React from 'react';
import { Info } from 'lucide-react';

export const PlatformDisclaimer: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-slate-100 border-b border-slate-200 py-1.5 px-4 text-center text-xs text-slate-500">
        <span className="font-semibold text-slate-600">Independent Preparation Platform:</span> PrepPath is not affiliated with, endorsed by, or sponsored by Tata Consultancy Services.
      </div>
    );
  }

  return (
    <aside
      aria-label="Platform Disclaimer"
      className="rounded-lg border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-500 flex items-start gap-3"
    >
      <Info className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
      <div>
        <p className="font-semibold text-slate-700 mb-0.5">
          Independent Educational Resource Notice
        </p>
        <p>
          PrepPath is an independent placement preparation platform authored to help students practice algorithmic coding, quantitative aptitude, and technical skills. PrepPath is not affiliated with, endorsed by, sponsored by, or an official partner of Tata Consultancy Services (TCS). All company, test name, and track references (Ninja, Digital, Prime) are used strictly for descriptive educational categorization under fair use.
        </p>
      </div>
    </aside>
  );
};
