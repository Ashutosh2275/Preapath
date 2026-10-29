import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useUserStore } from '../stores/useUserStore';
import { TargetTrack } from '../types';
import { Button } from '../components/common/Button';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  const handleStartPreparation = (track?: TargetTrack) => {
    if (!user) {
      navigate('/signup', { state: { track } });
    } else if (!user.targetTrack || !user.proficiency) {
      navigate('/onboarding', { state: { track: track || user.targetTrack } });
    } else {
      navigate('/dashboard');
    }
  };

  const tracks: {
    id: TargetTrack;
    name: string;
    focus: string;
    description: string;
  }[] = [
    {
      id: 'NINJA',
      name: 'Ninja Track',
      focus: 'Foundational preparation',
      description: 'Covers core quantitative skills, logical reasoning, verbal clarity and fundamental coding problems.',
    },
    {
      id: 'DIGITAL',
      name: 'Digital Track',
      focus: 'Advanced problem-solving',
      description: 'Focuses on complex data structures, algorithms, advanced mathematics and competitive programming concepts.',
    },
    {
      id: 'PRIME',
      name: 'Prime Track',
      focus: 'Elite algorithmic challenges',
      description: 'Designed for top-tier opportunities with emphasis on systems-level logic and complex algorithmic implementations.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* A. Hero Section */}
      <section className="text-center space-y-6 pt-4 sm:pt-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700">
          TCS Placement Preparation
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Your preparation. Your progress. <br />
          <span className="text-primary">Your next opportunity.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Build a personalized preparation plan, practise coding problems and track your progress toward your placement goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            size="lg"
            onClick={() => handleStartPreparation()}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Start Preparation Now
          </Button>

          <Link to="/problems">
            <Button variant="outline" size="lg" leftIcon={<Code2 className="w-4 h-4" />}>
              Explore Problems
            </Button>
          </Link>
        </div>
      </section>

      {/* B. Preparation Tracks */}
      <section className="space-y-8">
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Preparation Pathways
          </h2>
          <p className="text-sm text-slate-500">
            Select a pathway aligned with your test pattern and placement requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    {track.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                    {track.id}
                  </span>
                </div>

                <p className="text-xs font-semibold text-primary">
                  {track.focus}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => handleStartPreparation(track.id)}
                >
                  Select {track.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* C. Question-Source Transparency */}
      <section className="rounded-xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-base text-slate-900">
              Verified Question Sources
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Every question indicates its background and evidence standard
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {[
            { label: 'Official Information', desc: 'Directly from official TCS placement syllabus & sample papers' },
            { label: 'Candidate Recalled', desc: 'Recollected by students after actual hiring drives' },
            { label: 'Recurring Pattern', desc: 'Frequently encountered problem formats in recent cycles' },
            { label: 'Original Practice', desc: 'Engineered exercises designed to reinforce core skills' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                {item.label}
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* D. Core Platform Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 text-primary flex items-center justify-center mb-3">
            <span className="font-mono text-sm font-bold">01</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Structured Learning Plans
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Create an immutable day-by-day practice schedule tailored to your available timeline and preferred target track.
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
            <span className="font-mono text-sm font-bold">02</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Real Sandboxed Coding
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Monaco-powered clean coding workspace supporting C, C++, Java, and Python with custom test cases.
          </p>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
            <span className="font-mono text-sm font-bold">03</span>
          </div>
          <h3 className="text-base font-bold text-slate-900">
            Spaced Repetition Engine
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Evidence-based recall queue automatically schedules reviews of incorrect and slow questions to maximize retention.
          </p>
        </div>
      </section>
    </div>
  );
};
