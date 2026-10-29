import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-slate-900">
              PrepPath
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <Link to="/problems" className="hover:text-primary transition-colors">
              Problems
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Notice
            </Link>
          </div>
        </div>

        {/* Single, concise independent platform disclaimer */}
        <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} PrepPath. An independent placement preparation resource, not affiliated with or endorsed by Tata Consultancy Services.
          </p>
          <p className="shrink-0">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
