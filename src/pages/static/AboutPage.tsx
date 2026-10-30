import React from 'react';
import { BookOpen, Target, CheckCircle2, Shield, Calendar, Code2, BarChart2, Layers } from 'lucide-react';
import { PlatformDisclaimer } from '../../components/common/PlatformDisclaimer';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          About PrepPath
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Structured, Research-Backed Placement Preparation
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
          PrepPath is an independent placement-preparation platform that helps engineering students organize their learning, practise problem-solving, and track their progress through structured study plans and coding exercises.
        </p>
      </div>

      {/* Target Audience & Purpose */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Who PrepPath Is Designed For
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            PrepPath is built for university engineering candidates and software job seekers preparing for competitive campus recruitment assessments. It provides a methodical alternative to unstructured question repositories by creating day-by-day practice schedules aligned with industry assessment patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-xs">TCS Ninja Track</h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Foundational quantitative aptitude, verbal pattern drills, and essential data structures (arrays, strings, basic mathematics).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-xs">TCS Digital Track</h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Advanced numerical reasoning, sliding window patterns, prefix sums, hash maps, and 2D grid matrix traversals.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-xs">TCS Prime Track</h3>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Premier algorithmic challenges spanning dynamic programming, tree/graph logic, bit manipulation, and strict time constraints.
            </p>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 italic border-t border-slate-100 pt-3">
          Note: "Ninja", "Digital", and "Prime" are descriptive preparation categories reflecting commonly recognized assessment scopes. PrepPath is an independent educational tool and is not affiliated with, endorsed by, or sponsored by Tata Consultancy Services (TCS).
        </p>
      </div>

      {/* Core Preparation Workflow */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          The PrepPath Learning Methodology
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-slate-600">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Calendar className="w-4 h-4 text-indigo-600" />
              1. Goal-Oriented Study Planning
            </div>
            <p className="leading-relaxed">
              Rather than generic endless feeds, PrepPath constructs an immutable daily study plan customized to your target examination date, weekly schedule, and daily study budget.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Code2 className="w-4 h-4 text-indigo-600" />
              2. Sandboxed Coding & Custom Test Cases
            </div>
            <p className="leading-relaxed">
              Write solutions in Python 3, Java, C++, or C with an integrated browser editor. Execute code against public test cases or define custom inputs to test edge cases safely.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <CheckCircle2 className="w-4 h-4 text-indigo-600" />
              3. Research-Backed Question Catalog
            </div>
            <p className="leading-relaxed">
              Every question in the PrepPath repository is categorized by topic, verified solutions, time complexity bounds, and conceptual explanations, ensuring educational validity.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <BarChart2 className="w-4 h-4 text-indigo-600" />
              4. Spaced Retention & Topic Mastery
            </div>
            <p className="leading-relaxed">
              Automated spaced-repetition schedules identify concepts needing review over expanding intervals, preventing cramming and building long-term problem-solving fluency.
            </p>
          </div>
        </div>
      </div>

      {/* Educational Integrity & Commercial Restraint */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Integrity & Transparency Standards
        </h2>
        <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
          <p>
            • <strong>No Fabricated Statistics:</strong> PrepPath does not publish manufactured placement percentages, fictitious candidate numbers, or simulated employer endorsements. All learning analytics and completion rates reflect your verified account activity.
          </p>
          <p>
            • <strong>Progressive Pedagogy:</strong> Our progressive hint stages guide students to reason through algorithmic hurdles independently rather than encouraging rote answer memorization.
          </p>
          <p>
            • <strong>No Recruitment Guarantees:</strong> PrepPath provides practice software and curriculum roadmaps. Using the platform does not guarantee assessment clearance, interview invitations, or employment offers from any recruitment body.
          </p>
        </div>
      </div>

      <PlatformDisclaimer />
    </div>
  );
};
