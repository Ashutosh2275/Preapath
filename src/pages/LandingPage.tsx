import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Sparkles, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Terminal, 
  History, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { PlatformDisclaimer } from '../components/common/PlatformDisclaimer';
import { useUserStore } from '../stores/useUserStore';

export const LandingPage: React.FC = () => {
  const { user } = useUserStore();

  const tracks = [
    {
      name: 'TCS Ninja Track',
      badge: 'Foundation Tier',
      packageEst: '₹3.36 LPA - ₹3.6 LPA',
      focus: 'Foundational Aptitude & Core Coding',
      description: 'Focuses on Numerical Ability, Reasoning Ability, Verbal Ability, Programming Logic, and a hands-on coding problem covering basic arithmetic, strings, and arrays.',
      color: 'indigo',
    },
    {
      name: 'TCS Digital Track',
      badge: 'Advanced Tier',
      packageEst: '₹7.0 LPA - ₹7.5 LPA',
      focus: 'Data Structures, Prefix Sums & Grid Algos',
      description: 'Requires higher proficiency in Advanced Quantitative analysis, Advanced Reasoning, Dynamic Programming, String Algorithms, and complex Array/Matrix manipulations.',
      color: 'teal',
    },
    {
      name: 'TCS Prime Track',
      badge: 'Premier Tier',
      packageEst: '₹9.0 LPA - ₹11.5 LPA',
      focus: 'Complex Algorithms, Trees, Graphs & Optimization',
      description: 'Targets premier algorithmic problem solvers with deep knowledge of advanced Data Structures, dynamic programming optimization, bit manipulation, and optimal time-space bounds.',
      color: 'purple',
    },
  ];

  const evidenceTypes = [
    {
      label: 'OFFICIAL_INFORMATION',
      name: 'Official Exam Syllabus',
      desc: 'Sourced directly from published hiring notices, test pattern announcements, and official exam structural guidelines.',
    },
    {
      label: 'RECURRING_PATTERN',
      name: 'Recurring Assessment Pattern',
      desc: 'Validated algorithmic problem archetypes consistently verified across multiple engineering hiring test cycles.',
    },
    {
      label: 'CANDIDATE_RECALLED',
      name: 'Candidate Recalled Archetype',
      desc: 'Based on student recollection of exam themes, formulated with precise bounds and validated test cases.',
    },
    {
      label: 'ORIGINAL_PRACTICE',
      name: 'Original Practice Question',
      desc: 'Independently authored coding and aptitude problems designed to build specific competencies, never falsely claimed as past questions.',
    },
  ];

  return (
    <div className="space-y-20 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 sm:pt-12 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <Sparkles className="w-3.5 h-3.5" />
          Evidence-Based TCS Placement Preparation
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Your preparation. Your progress. <br />
          <span className="text-primary">Your next opportunity.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          A dedicated, transparent full-stack preparation platform for engineering students targeting <strong className="font-semibold text-slate-900 dark:text-white">TCS Ninja, Digital, and Prime</strong> roles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {user ? (
            <Link to="/dashboard">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Go to Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Create Personalized Study Plan
                </Button>
              </Link>
              <Link to="/problems">
                <Button variant="outline" size="lg" leftIcon={<Code2 className="w-5 h-5" />}>
                  Explore Problem Bank
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* 5 Core Questions Card */}
        <div className="pt-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm text-left">
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Answers the 5 Essential Preparation Questions:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { q: "What should I study today?", a: "Daily prioritized schedule divided by minutes and topics." },
                { q: "Which problems should I solve first?", a: "Syllabus-aligned questions ordered by your target track." },
                { q: "How can I improve when stuck?", a: "Layered hints: observation -> pattern -> pseudocode -> solution." },
                { q: "What did I do last time?", a: "Complete attempt history with judged snapshots and code restoration." },
                { q: "How close am I to my goal?", a: "Real syllabus and task completion metrics without inflated stats." },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-center text-[10px] leading-4 font-mono font-bold">
                      {idx + 1}
                    </span>
                    {item.q}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Comparison Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Tailored Tracks for Every Hiring Tier
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Each track aligns practice tasks with the verified syllabus complexity and expected problem archetypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.name}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {track.badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    {track.packageEst}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {track.name}
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {track.focus}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
                <Link to="/signup">
                  <Button variant="outline" size="sm" className="w-full">
                    Select {track.name.replace('TCS ', '')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Question Bank Provenance & Evidence Types */}
      <section className="rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            Integrity & Transparency Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Honest Question Provenance Labels
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            PrepPath never invents historical frequency percentages, fake exam shifts, or unverified claims. Every question explicitly states its evidence origin:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {evidenceTypes.map((et) => (
            <div
              key={et.label}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-2 shadow-xs"
            >
              <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 px-2 py-0.5 rounded">
                {et.label}
              </span>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                {et.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {et.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Pillars: Workspace, Hints, Custom Cases */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Terminal className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            LeetCode-Style Workspace
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Monaco Editor coding environment with C, C++, Java, and Python starter code, auto-saving drafts, syntax validation, and mobile-friendly tabs.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Progressive Hint System
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Never get stuck without learning. Reveal structured hints one step at a time, keeping the final solution hidden until you explicitly need it.
          </p>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <History className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Persistent History & Custom Cases
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Create, save, and test private custom test cases. Revisit any previous attempt and restore historical code snapshots with one click.
          </p>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ready to Start Structured Preparation?
        </h2>
        <p className="text-indigo-200 max-w-xl mx-auto text-sm sm:text-base">
          Configure your preparation timeline, identify your target track, and let PrepPath generate an actionable daily study roadmap.
        </p>
        <div>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 border-transparent shadow-lg font-bold">
              Start Free Preparation Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Legal & Educational Disclaimer */}
      <PlatformDisclaimer />
    </div>
  );
};
