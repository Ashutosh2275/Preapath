import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ExternalLink } from 'lucide-react';
import { PlatformDisclaimer } from '../common/PlatformDisclaimer';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                PrepPath
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Your preparation. Your progress. Your next opportunity. A structured, evidence-based preparation platform for engineering students targeting TCS Ninja, Digital, and Prime placement assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
              Preparation Modules
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/study-plan" className="hover:text-primary transition-colors">
                  Personalized Study Planner
                </Link>
              </li>
              <li>
                <Link to="/problems" className="hover:text-primary transition-colors">
                  Problem Bank & Coding Sandbox
                </Link>
              </li>
              <li>
                <Link to="/assessments" className="hover:text-primary transition-colors">
                  Timed Mock Assessments
                </Link>
              </li>
              <li>
                <Link to="/progress" className="hover:text-primary transition-colors">
                  Skill & Accuracy Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">
              Platform & Ethics
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About & Provenance Principles
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service & Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Unobtrusive Independent Platform Disclaimer */}
        <PlatformDisclaimer />

        <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PrepPath Platform. All rights reserved.</p>
          <p>
            Designed for engineering candidates preparing for technical placement assessments.
          </p>
        </div>
      </div>
    </footer>
  );
};
