import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  Calendar, 
  Code2, 
  Target, 
  BrainCircuit,
  AlertCircle
} from 'lucide-react';
import { TargetTrack, ProgrammingLanguage, ProficiencyLevel } from '../../types';
import { useUserStore } from '../../stores/useUserStore';
import { generateStudyPlan } from '../../lib/plannerEngine';
import { Button } from '../../components/common/Button';

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, updateProfile, setStudyPlan, updateNotificationPreferences } = useUserStore();

  const initialTrackFromState = (location.state as any)?.track;
  const [step, setStep] = useState(1);
  const [targetTrack, setTargetTrack] = useState<TargetTrack>(initialTrackFromState || user?.targetTrack || 'NINJA');
  const [availableDays, setAvailableDays] = useState<number>(user?.availablePreparationDays || 14);
  const [dailyMinutes, setDailyMinutes] = useState<number>(user?.dailyAvailableMinutes || 60);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [reminderTime, setReminderTime] = useState<string>('19:00');
  const [examDate, setExamDate] = useState<string>(user?.examDate || '');
  const [preferredLanguage, setPreferredLanguage] = useState<ProgrammingLanguage>(user?.preferredLanguage || 'python');
  const [proficiency, setProficiency] = useState<ProficiencyLevel>(user?.proficiency || 'BEGINNER');
  const [selectedWeakTopics, setSelectedWeakTopics] = useState<string[]>(user?.weakTopics || []);

  const topicsList = [
    'Numerical Ability (Time-Work, Percentages)',
    'Reasoning Ability (Syllogisms, Seating)',
    'Verbal Ability (Grammar, Comprehension)',
    'Basic Number Theory (Primes, GCD)',
    'Strings & Run-Length Encoding',
    'Prefix Sums & Subarrays',
    'Matrix & 2D Grid Traversal',
    'Dynamic Programming & Knapsack',
  ];

  const toggleTopic = (topic: string) => {
    if (selectedWeakTopics.includes(topic)) {
      setSelectedWeakTopics(selectedWeakTopics.filter(t => t !== topic));
    } else {
      setSelectedWeakTopics([...selectedWeakTopics, topic]);
    }
  };

  const handleComplete = () => {
    if (!user) return;

    // Update User Profile
    updateProfile({
      targetTrack,
      preferredLanguage,
      availablePreparationDays: availableDays,
      dailyAvailableMinutes: dailyMinutes,
      examDate: examDate || undefined,
      proficiency,
      weakTopics: selectedWeakTopics,
    });

    // Generate personalized study plan
    const plan = generateStudyPlan({
      userId: user.uid,
      targetTrack,
      availablePreparationDays: availableDays,
      dailyAvailableMinutes: dailyMinutes,
      proficiency,
      weakTopics: selectedWeakTopics,
      examDate: examDate || undefined,
      startDate,
    });

    updateNotificationPreferences({
      reminderTime,
      enabled: true,
    });

    setStudyPlan(plan);
    navigate('/dashboard');
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Progress Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Step {step} of 3</span>
          <span>{step === 1 ? 'Select Target Track' : step === 2 ? 'Schedule & Study Limits' : 'Skill Assessment & Weak Topics'}</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Select Your Target Preparation Track
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Choose the role tier that aligns with your placement goals and preparation scope.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  id: 'NINJA' as TargetTrack,
                  name: 'TCS Ninja Track',
                  badge: 'Foundation Pathway',
                  scope: 'Numerical, Verbal & Foundational Coding',
                  desc: 'Structured syllabus focusing on core quantitative aptitude, reasoning patterns, and standard array/string problems.',
                },
                {
                  id: 'DIGITAL' as TargetTrack,
                  name: 'TCS Digital Track',
                  badge: 'Advanced Pathway',
                  scope: 'Advanced Quant & Core Data Structures',
                  desc: 'Rigorous preparation on advanced mathematical logic, prefix sums, hash maps, sliding windows, and 2D grid matrix traversals.',
                },
                {
                  id: 'PRIME' as TargetTrack,
                  name: 'TCS Prime Track',
                  badge: 'Premier Pathway',
                  scope: 'Complex Algorithms & Optimization',
                  desc: 'Deep algorithmic focus spanning dynamic programming, tree/graph algorithms, bit manipulation, and strict time-complexity constraints.',
                },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => setTargetTrack(t.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all relative flex flex-col justify-between ${
                    targetTrack === t.id
                      ? 'border-primary ring-2 ring-primary/20 bg-indigo-50/40'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {t.badge}
                      </span>
                      {targetTrack === t.id && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {t.name}
                    </h4>
                    <p className="text-xs font-medium text-indigo-600">
                      {t.scope}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                variant="primary"
                onClick={() => setStep(2)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Next: Study Schedule
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Define Your Schedule & Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                The planner distributes topics realistically without overcommitting your daily calendar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preparation Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Total Preparation Timeline (Days)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[7, 14, 21, 30].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setAvailableDays(days)}
                      className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                        availableDays === days
                          ? 'border-primary bg-primary text-white font-bold'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {days} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Available Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Daily Available Study Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[45, 90, 120].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDailyMinutes(mins)}
                      className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                        dailyMinutes === mins
                          ? 'border-primary bg-primary text-white font-bold'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {mins} mins / day
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Preparation Start Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preparation Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Exam Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Exam Date (Optional)
                </label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Preferred Reminder Time */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Daily Study Reminder Time
                </label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <Button variant="ghost" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                variant="primary"
                onClick={() => setStep(3)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Next: Language & Proficiency
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BrainCircuit className="w-6 h-6 text-primary" />
                Language & Self-Assessed Strengths
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                We'll prioritize practice problems in your preferred language and strengthen weaker topics first.
              </p>
            </div>

            {/* Programming Language */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Preferred Coding Language
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'python' as ProgrammingLanguage, label: 'Python 3' },
                  { id: 'cpp' as ProgrammingLanguage, label: 'C++ (GCC)' },
                  { id: 'java' as ProgrammingLanguage, label: 'Java (17)' },
                  { id: 'c' as ProgrammingLanguage, label: 'C (GCC)' },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setPreferredLanguage(lang.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                      preferredLanguage === lang.id
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Proficiency Level */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Current Coding & Aptitude Proficiency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] as ProficiencyLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setProficiency(lvl)}
                    className={`py-2 rounded-lg text-xs font-medium border capitalize transition-colors ${
                      proficiency === lvl
                        ? 'border-primary bg-primary text-white font-bold'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {lvl.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Weak Topics */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Select Any Topics Needing Extra Attention
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topicsList.map((topic) => {
                  const isChecked = selectedWeakTopics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      className={`text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-colors ${
                        isChecked
                          ? 'border-indigo-400 bg-indigo-50/50 text-indigo-900 font-medium'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span>{topic}</span>
                      {isChecked && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <Button variant="ghost" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button
                variant="primary"
                onClick={handleComplete}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Generate My Preparation Plan
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
