import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Code2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Terminal, 
  History,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { useUserStore } from '../stores/useUserStore';
import { TargetTrack } from '../types';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useUserStore();

  const handleStartPreparation = (preferredTrack?: TargetTrack) => {
    if (!user) {
      navigate('/signup', { state: preferredTrack ? { track: preferredTrack } : undefined });
    } else if (!user.targetTrack || !user.proficiency) {
      if (preferredTrack) updateProfile({ targetTrack: preferredTrack });
      navigate('/onboarding');
    } else {
      if (preferredTrack) updateProfile({ targetTrack: preferredTrack });
      navigate('/dashboard');
    }
  };

  const tracks: { id: TargetTrack; name: string; focus: string; description: string }[] = [
    {
      id: 'NINJA',
      name: 'TCS Ninja',
      focus: 'Foundational Aptitude & Core Coding',
      description: 'Covers numerical ability, logical reasoning, verbal comprehension, programming logic, and essential string and arithmetic coding.',
    },
    {
      id: 'DIGITAL',
      name: 'TCS Digital',
      focus: 'Advanced Problem Solving & Algorithms',
      description: 'Focuses on advanced quantitative analysis, advanced reasoning, data structures, prefix sums, and 2D matrix algorithms.',
    },
    {
      id: 'PRIME',
      name: 'TCS Prime',
      focus: 'Complex Data Structures & Optimization',
      description: 'Targets advanced dynamic programming, tree and graph traversals, bit manipulation, and optimal time-space algorithmic bounds.',
    },
  ];

  const evidenceSources = [
    { label: 'Official Syllabus', desc: 'Curricular structure aligned with published notifications.' },
    { label: 'Recurring Pattern', desc: 'Algorithmic archetypes observed across test cycles.' },
    { label: 'Candidate Recalled', desc: 'Themes recalled by students with verified test bounds.' },
    { label: 'Original Practice', desc: 'Independently authored practice problems to build skills.' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* A. Hero Section */}
      <section className="text-center space-y-6 pt-4 sm:pt-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          TCS Placement Preparation
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Your preparation. Your progress. <br />
          <span className="text-primary">Your next opportunity.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Preparation Pathways
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Select a pathway aligned with your test pattern and placement requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {track.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    {track.id}
                  </span>
                </div>

                <p className="text-xs font-semibold text-primary">
                  {track.focus}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6">
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
      <section className="rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Question Provenance Transparency
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            Every problem includes a verified origin label.
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {evidenceSources.map((source) => (
            <div key={source.label} className="space-y-1">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                {source.label}
              </span>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {source.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* D. Feature Summary (Exactly 3 Groups, One Sentence Each) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-2">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-primary flex items-center justify-center mb-3">
            <Calendar className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Personalized Study Plans
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Generates an adaptive daily schedule structured around your target track, preparation timeline, and self-identified weak areas.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-2">
          <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 flex items-center justify-center mb-3">
            <Terminal className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Interactive Coding Practice
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Monaco Editor coding environment with standard I/O starter templates, syntax validation, and draft autosaving for C, C++, Java, and Python.
          </p>
        </div>

        <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-2">
          <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center mb-3">
            <History className="w-4 h-4" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Hints, Test Cases & Submissions
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Multi-tiered progressive hints, private custom test cases, and persistent submission snapshots with one-click code restoration.
          </p>
        </div>
      </section>

      {/* E. Final CTA Section (Guaranteed Visible Button Text) */}
      <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 text-center space-y-5 border border-slate-800 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Ready to start your preparation?
        </h2>
        <p className="text-slate-300 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
          Get a study plan based on your target, available time and current skills.
        </p>
        <div className="pt-2 flex justify-center">
          <Button
            variant="inverted"
            size="lg"
            onClick={() => handleStartPreparation()}
            rightIcon={<ArrowRight className="w-4 h-4 text-slate-950" />}
          >
            Start Preparation Now
          </Button>
        </div>
      </section>
    </div>
  );
};
