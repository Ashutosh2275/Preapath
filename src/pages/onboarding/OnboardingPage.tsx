import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Target, 
  Calendar, 
  Clock, 
  Code2, 
  Globe2, 
  Bell, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  AlertCircle,
  User,
  Shield,
  Layers,
  Check
} from 'lucide-react';
import { 
  TargetTrack, 
  ProgrammingLanguage, 
  ProficiencyLevel, 
  NotificationFrequency, 
  PrepIntensity,
  UserProfile
} from '../../types';
import { useUserStore } from '../../stores/useUserStore';
import { generateStudyPlan } from '../../lib/plannerEngine';
import { scheduleTimezoneAwareReminder } from '../../lib/notificationService';
import { Button } from '../../components/common/Button';

interface OnboardingDraft {
  step: number;
  displayName: string;
  targetTrack: TargetTrack | null;
  hasConfirmedExamDate: boolean;
  examDate: string;
  startDate: string;
  availableDays: number | null;
  dailyMinutes: number | null;
  daysAvailablePerWeek: number | null;
  preferredStudyHours: string;
  prepIntensity: PrepIntensity;
  preferredLanguage: ProgrammingLanguage | null;
  proficiency: ProficiencyLevel | null;
  selectedWeakTopics: string[];
  timezone: string;
  reminderEnabled: boolean;
  reminderTime: string;
  reminderFrequency: NotificationFrequency;
  quietHoursEnabled: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
  remindReviewsDue: boolean;
}

const STORAGE_KEY = 'preppath_onboarding_draft';

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, updateProfile, setStudyPlan, updateNotificationPreferences } = useUserStore();

  const initialTrackFromState = (location.state as any)?.track as TargetTrack | undefined;

  // Auto-detect browser timezone
  const detectedTimezone = typeof Intl !== 'undefined' && Intl.DateTimeFormat
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'Asia/Kolkata';

  // Load existing draft if present, otherwise start without fabricated defaults
  const [draft, setDraft] = useState<OnboardingDraft>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return {
      step: 1,
      displayName: user?.displayName || '',
      targetTrack: initialTrackFromState || (user?.targetTrack && user.onboardingCompleted ? user.targetTrack : null),
      hasConfirmedExamDate: Boolean(user?.examDate),
      examDate: user?.examDate || '',
      startDate: new Date().toISOString().split('T')[0],
      availableDays: user?.onboardingCompleted ? user.availablePreparationDays : null,
      dailyMinutes: user?.onboardingCompleted ? user.dailyAvailableMinutes : null,
      daysAvailablePerWeek: user?.daysAvailablePerWeek || null,
      preferredStudyHours: user?.preferredStudyHours || '',
      prepIntensity: user?.prepIntensity || 'STANDARD',
      preferredLanguage: user?.onboardingCompleted ? user.preferredLanguage : null,
      proficiency: user?.onboardingCompleted ? user.proficiency : null,
      selectedWeakTopics: user?.weakTopics || [],
      timezone: user?.timezone || detectedTimezone || 'Asia/Kolkata',
      reminderEnabled: false,
      reminderTime: '19:00',
      reminderFrequency: 'DAILY',
      quietHoursEnabled: true,
      quietHoursStart: '22:00',
      quietHoursEnd: '08:00',
      remindReviewsDue: true,
    };
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync draft to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // ignore
    }
  }, [draft]);

  const updateDraft = (updates: Partial<OnboardingDraft>) => {
    setValidationError(null);
    setDraft((prev) => ({ ...prev, ...updates }));
  };

  const syllabusTopics = [
    { id: 'Numerical Ability', name: 'Numerical Ability', desc: 'Percentages, ratios, time & work, probability' },
    { id: 'Reasoning Ability', name: 'Reasoning Ability', desc: 'Syllogisms, seating arrangements, coding-decoding' },
    { id: 'Verbal Ability', name: 'Verbal Ability', desc: 'Para jumbles, sentence correction, reading comprehension' },
    { id: 'Basic Number Theory', name: 'Basic Number Theory', desc: 'Prime factorization, GCD/LCM, modular arithmetic' },
    { id: 'Strings & Parsing', name: 'Strings & Parsing', desc: 'Anagrams, frequency counting, pattern matching' },
    { id: 'Arrays & Prefix Sums', name: 'Arrays & Prefix Sums', desc: 'Subarrays, sliding window, prefix sums' },
    { id: 'Matrix Traversal', name: 'Matrix Traversal', desc: '2D grid rotations, spirals, boundary traversals' },
    { id: 'Dynamic Programming', name: 'Dynamic Programming', desc: 'Knapsack, subsequence optimization, memoization' },
  ];

  const toggleWeakTopic = (topicId: string) => {
    const current = draft.selectedWeakTopics;
    if (current.includes(topicId)) {
      updateDraft({ selectedWeakTopics: current.filter((t) => t !== topicId) });
    } else {
      updateDraft({ selectedWeakTopics: [...current, topicId] });
    }
  };

  // Step Validation rules (no proceeding with unchosen values)
  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!draft.displayName.trim() || draft.displayName.trim().length < 2) {
        setValidationError('Please enter your full name or preferred name (minimum 2 characters).');
        return false;
      }
    } else if (currentStep === 2) {
      if (!draft.targetTrack) {
        setValidationError('Please choose a preparation track to align your study scope.');
        return false;
      }
    } else if (currentStep === 3) {
      if (draft.hasConfirmedExamDate) {
        if (!draft.examDate) {
          setValidationError('Please select your confirmed examination date.');
          return false;
        }
        const examTime = new Date(draft.examDate).getTime();
        const startTime = new Date(draft.startDate).getTime();
        if (examTime < startTime) {
          setValidationError('Examination date cannot be before your preparation start date.');
          return false;
        }
      } else {
        if (!draft.availableDays || draft.availableDays < 7) {
          setValidationError('Please specify your planned preparation duration (minimum 7 days).');
          return false;
        }
      }
    } else if (currentStep === 4) {
      if (!draft.dailyMinutes || draft.dailyMinutes < 15) {
        setValidationError('Please select or enter your daily available study time (minimum 15 minutes).');
        return false;
      }
      if (!draft.daysAvailablePerWeek || draft.daysAvailablePerWeek < 1 || draft.daysAvailablePerWeek > 7) {
        setValidationError('Please specify how many days per week you can study (1 to 7 days).');
        return false;
      }
    } else if (currentStep === 5) {
      if (!draft.preferredLanguage) {
        setValidationError('Please choose your preferred programming language for coding problems.');
        return false;
      }
      if (!draft.proficiency) {
        setValidationError('Please indicate your current programming proficiency level.');
        return false;
      }
    } else if (currentStep === 6) {
      if (!draft.timezone) {
        setValidationError('Please confirm your local timezone identifier.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(draft.step)) return;
    updateDraft({ step: draft.step + 1 });
  };

  const handleBack = () => {
    setValidationError(null);
    if (draft.step > 1) {
      updateDraft({ step: draft.step - 1 });
    }
  };

  // Final Submission: Authoritative write to PostgreSQL and study plan generation
  const handleFinalSubmit = async () => {
    if (!user) return;
    setIsSubmitting(true);
    setValidationError(null);

    try {
      const calculatedDays = draft.hasConfirmedExamDate && draft.examDate
        ? Math.max(7, Math.ceil((new Date(draft.examDate).getTime() - new Date(draft.startDate).getTime()) / (1000 * 60 * 60 * 24)))
        : (draft.availableDays || 30);

      const targetTrack = draft.targetTrack || 'NINJA';
      const preferredLanguage = draft.preferredLanguage || 'python';
      const proficiency = draft.proficiency || 'INTERMEDIATE';
      const dailyMinutes = draft.dailyMinutes || 60;
      const daysPerWeek = draft.daysAvailablePerWeek || 6;

      const profilePayload: Partial<UserProfile> = {
        displayName: draft.displayName.trim(),
        targetTrack,
        preferredLanguage,
        availablePreparationDays: calculatedDays,
        dailyAvailableMinutes: dailyMinutes,
        examDate: draft.hasConfirmedExamDate && draft.examDate ? draft.examDate : undefined,
        proficiency,
        weakTopics: draft.selectedWeakTopics,
        timezone: draft.timezone,
        daysAvailablePerWeek: daysPerWeek,
        preferredStudyHours: draft.preferredStudyHours || undefined,
        preparationStartDate: draft.startDate,
        prepIntensity: draft.prepIntensity,
        onboardingCompleted: true,
        onboardingVersion: 1,
      };

      // 1. Authoritative update of user profile in PostgreSQL
      await updateProfile(profilePayload);

      // 2. Authoritative generation of study plan
      const plan = generateStudyPlan({
        userId: user.uid,
        targetTrack,
        availablePreparationDays: calculatedDays,
        dailyAvailableMinutes: dailyMinutes,
        proficiency,
        weakTopics: draft.selectedWeakTopics,
        examDate: draft.hasConfirmedExamDate && draft.examDate ? draft.examDate : undefined,
        startDate: draft.startDate,
      });

      setStudyPlan(plan);

      // 3. Update notification preferences
      updateNotificationPreferences({
        enabled: draft.reminderEnabled,
        reminderTime: draft.reminderTime,
        frequency: draft.reminderFrequency,
        timezone: draft.timezone,
        quietHoursEnabled: draft.quietHoursEnabled,
        quietHoursStart: draft.quietHoursStart,
        quietHoursEnd: draft.quietHoursEnd,
        remindReviewsDue: draft.remindReviewsDue,
      });

      // 4. Queue scheduled notification if reminders are enabled
      if (draft.reminderEnabled) {
        await scheduleTimezoneAwareReminder({
          userId: user.uid,
          reminderTime: draft.reminderTime,
          timezone: draft.timezone,
        });
      }

      // 5. Clean up temporary onboarding draft
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }

      navigate('/dashboard');
    } catch (err: any) {
      console.error('Onboarding submission error:', err);
      setValidationError(err.message || 'Failed to save preparation preferences to your account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsList = [
    { number: 1, title: 'Personal Profile' },
    { number: 2, title: 'Target Preparation' },
    { number: 3, title: 'Examination Schedule' },
    { number: 4, title: 'Study Availability' },
    { number: 5, title: 'Technical Preferences' },
    { number: 6, title: 'Timezone' },
    { number: 7, title: 'Study Reminders' },
    { number: 8, title: 'Review & Confirm' },
  ];

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Wizard Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Step {draft.step} of 8</span>
          <span className="text-slate-900 font-bold">{stepsList[draft.step - 1]?.title}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${(draft.step / 8) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        {validationError && (
          <div 
            role="alert"
            className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 animate-in fade-in"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{validationError}</span>
          </div>
        )}

        {/* STEP 1: Personal Profile */}
        {draft.step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Personal Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Confirm your account name and email address.
              </p>
            </div>

            <div className="space-y-4 max-w-lg">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name or Preferred Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ashutosh Mishra"
                  value={draft.displayName}
                  onChange={(e) => updateDraft({ displayName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Authenticated Email (Read-Only)
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ''}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500 cursor-not-allowed"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Connected to your authenticated PrepPath account.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Target Preparation Track */}
        {draft.step === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Select Your Target Preparation Track
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                These represent structured preparation curriculums, not guaranteed employment outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  id: 'NINJA' as TargetTrack,
                  name: 'TCS Ninja Track',
                  badge: 'Foundation Curriculum',
                  desc: 'Focuses on foundational quantitative aptitude, verbal patterns, and fundamental coding (arrays, math, strings).',
                },
                {
                  id: 'DIGITAL' as TargetTrack,
                  name: 'TCS Digital Track',
                  badge: 'Advanced Curriculum',
                  desc: 'Rigorous preparation spanning advanced numerical logic, hash maps, two pointers, prefix sums, and 2D grid matrix traversals.',
                },
                {
                  id: 'PRIME' as TargetTrack,
                  name: 'TCS Prime Track',
                  badge: 'Premier Curriculum',
                  desc: 'Comprehensive algorithmic mastery covering dynamic programming, graph/tree traversals, and strict time-complexity limits.',
                },
              ].map((t) => (
                <div
                  key={t.id}
                  onClick={() => updateDraft({ targetTrack: t.id })}
                  className={`cursor-pointer rounded-xl border p-5 transition-all flex flex-col justify-between ${
                    draft.targetTrack === t.id
                      ? 'border-primary ring-2 ring-primary/20 bg-indigo-50/40'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {t.badge}
                      </span>
                      {draft.targetTrack === t.id && (
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{t.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Examination Schedule */}
        {draft.step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Examination Schedule
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Let us know if you have a confirmed assessment date or if your test has not yet been announced.
              </p>
            </div>

            <div className="space-y-5 max-w-lg">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Do you have a confirmed examination date?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => updateDraft({ hasConfirmedExamDate: true })}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all ${
                      draft.hasConfirmedExamDate
                        ? 'border-primary bg-indigo-50/50 text-indigo-700 ring-2 ring-primary/20'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Yes, date is confirmed
                  </button>
                  <button
                    type="button"
                    onClick={() => updateDraft({ hasConfirmedExamDate: false })}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all ${
                      !draft.hasConfirmedExamDate
                        ? 'border-primary bg-indigo-50/50 text-indigo-700 ring-2 ring-primary/20'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Not yet announced
                  </button>
                </div>
              </div>

              {draft.hasConfirmedExamDate ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Confirmed Examination Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={draft.examDate}
                    min={draft.startDate}
                    onChange={(e) => updateDraft({ examDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Your study plan will distribute tasks evenly up to this date.
                  </p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Planned Preparation Duration (Days) <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {[14, 21, 30, 45].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => updateDraft({ availableDays: d })}
                        className={`py-2 rounded-lg border text-xs font-medium transition-colors ${
                          draft.availableDays === d
                            ? 'border-primary bg-indigo-50 text-indigo-700 font-bold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {d} Days
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min="7"
                    max="180"
                    placeholder="Or enter custom days (e.g. 60)"
                    value={draft.availableDays || ''}
                    onChange={(e) => updateDraft({ availableDays: e.target.value ? Number(e.target.value) : null })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preparation Start Date
                </label>
                <input
                  type="date"
                  value={draft.startDate}
                  onChange={(e) => updateDraft({ startDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Study Availability */}
        {draft.step === 4 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                Study Availability & Pace
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Configure your realistic daily and weekly study commitment.
              </p>
            </div>

            <div className="space-y-5 max-w-lg">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Daily Available Study Time (Minutes) <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[30, 45, 60, 90].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => updateDraft({ dailyMinutes: m })}
                      className={`py-2 rounded-lg border text-xs font-medium transition-colors ${
                        draft.dailyMinutes === m
                          ? 'border-primary bg-indigo-50 text-indigo-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {m} min
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="15"
                  max="480"
                  placeholder="Or enter custom minutes (e.g. 120)"
                  value={draft.dailyMinutes || ''}
                  onChange={(e) => updateDraft({ dailyMinutes: e.target.value ? Number(e.target.value) : null })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Days Available Per Week <span className="text-rose-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[4, 5, 6, 7].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => updateDraft({ daysAvailablePerWeek: days })}
                      className={`flex-1 py-2.5 rounded-xl border text-xs font-semibold transition-colors ${
                        draft.daysAvailablePerWeek === days
                          ? 'border-primary bg-indigo-50 text-indigo-700 ring-2 ring-primary/20'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {days} Days / Week
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preparation Intensity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'RELAXED' as PrepIntensity, label: 'Relaxed', desc: 'Even pacing' },
                    { id: 'STANDARD' as PrepIntensity, label: 'Standard', desc: 'Balanced focus' },
                    { id: 'INTENSIVE' as PrepIntensity, label: 'Intensive', desc: 'Rapid sprint' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => updateDraft({ prepIntensity: p.id })}
                      className={`p-3 rounded-xl border text-left transition-colors ${
                        draft.prepIntensity === p.id
                          ? 'border-primary bg-indigo-50/50 ring-2 ring-primary/20'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold text-slate-900">{p.label}</p>
                      <p className="text-[11px] text-slate-500">{p.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Technical Preferences & Weak Topics */}
        {draft.step === 5 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Technical Preferences & Skill Areas
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Select the programming language you will write coding solutions in and highlight topics needing review.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Preferred Programming Language <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'python' as ProgrammingLanguage, label: 'Python 3', sub: 'Standard' },
                    { id: 'java' as ProgrammingLanguage, label: 'Java', sub: 'OpenJDK 17' },
                    { id: 'cpp' as ProgrammingLanguage, label: 'C++', sub: 'GCC C++17' },
                    { id: 'c' as ProgrammingLanguage, label: 'C', sub: 'GCC C11' },
                  ].map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => updateDraft({ preferredLanguage: l.id })}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        draft.preferredLanguage === l.id
                          ? 'border-primary bg-indigo-50/50 text-indigo-700 ring-2 ring-primary/20 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold">{l.label}</p>
                      <p className="text-[10px] text-slate-400">{l.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Current Programming Proficiency <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'BEGINNER' as ProficiencyLevel, label: 'Beginner', desc: 'Familiar with basic syntax and loops' },
                    { id: 'INTERMEDIATE' as ProficiencyLevel, label: 'Intermediate', desc: 'Comfortable with arrays, strings & standard logic' },
                    { id: 'ADVANCED' as ProficiencyLevel, label: 'Advanced', desc: 'Experienced in DSA, recursion & optimization' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => updateDraft({ proficiency: p.id })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        draft.proficiency === p.id
                          ? 'border-primary bg-indigo-50/50 ring-2 ring-primary/20'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <p className="text-xs font-bold text-slate-900">{p.label}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{p.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Weak Topics (Optional - We prioritize these in your study plan)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {syllabusTopics.map((t) => {
                    const isSelected = draft.selectedWeakTopics.includes(t.id);
                    return (
                      <div
                        key={t.id}
                        onClick={() => toggleWeakTopic(t.id)}
                        className={`p-3 rounded-xl border cursor-pointer text-left transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'border-primary bg-indigo-50/40 text-indigo-950 ring-1 ring-primary/20'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                          isSelected ? 'bg-primary border-primary text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <p className="text-xs font-semibold">{t.name}</p>
                          <p className="text-[11px] text-slate-400">{t.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Timezone Confirmation */}
        {draft.step === 6 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Globe2 className="w-6 h-6 text-primary" />
                Confirm Your Timezone
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                PrepPath uses your local timezone for daily assignment cut-offs, examination countdowns, and study reminders.
              </p>
            </div>

            <div className="space-y-4 max-w-lg">
              <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 space-y-1">
                <p className="text-xs font-semibold text-indigo-900">Auto-detected Browser Timezone</p>
                <p className="text-base font-bold text-indigo-700">{draft.timezone}</p>
                <p className="text-[11px] text-slate-500">
                  Detected from your browser via standard Intl.DateTimeFormat (no GPS tracking used).
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Change Timezone If Inaccurate
                </label>
                <select
                  value={draft.timezone}
                  onChange={(e) => updateDraft({ timezone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="Asia/Kolkata">Asia/Kolkata (Indian Standard Time, UTC+05:30)</option>
                  <option value="Asia/Dubai">Asia/Dubai (Gulf Standard Time, UTC+04:00)</option>
                  <option value="Europe/London">Europe/London (GMT / BST)</option>
                  <option value="America/New_York">America/New_York (Eastern Time)</option>
                  <option value="America/Chicago">America/Chicago (Central Time)</option>
                  <option value="America/Los_Angeles">America/Los_Angeles (Pacific Time)</option>
                  <option value="Asia/Singapore">Asia/Singapore (SGT, UTC+08:00)</option>
                  <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: Study Reminders Preferences */}
        {draft.step === 7 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Bell className="w-6 h-6 text-primary" />
                Daily Study Reminders
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Choose when you want to be reminded. (Native push notifications can be explicitly enabled anytime in Settings).
              </p>
            </div>

            <div className="space-y-5 max-w-lg">
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div>
                  <p className="text-xs font-bold text-slate-900">Enable Daily Preparation Reminders</p>
                  <p className="text-[11px] text-slate-500">Scheduled reminders for your daily preparation queue.</p>
                </div>
                <input
                  type="checkbox"
                  checked={draft.reminderEnabled}
                  onChange={(e) => updateDraft({ reminderEnabled: e.target.checked })}
                  className="w-4 h-4 rounded text-primary focus:ring-primary"
                />
              </div>

              {draft.reminderEnabled && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Reminder Time ({draft.timezone})
                    </label>
                    <input
                      type="time"
                      value={draft.reminderTime}
                      onChange={(e) => updateDraft({ reminderTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Reminder Frequency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'DAILY' as NotificationFrequency, label: 'Every Day' },
                        { id: 'EVERY_OTHER_DAY' as NotificationFrequency, label: 'Every 2 Days' },
                        { id: 'WEEKLY' as NotificationFrequency, label: 'Weekly Summary' },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => updateDraft({ reminderFrequency: f.id })}
                          className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                            draft.reminderFrequency === f.id
                              ? 'border-primary bg-indigo-50 text-indigo-700 font-bold'
                              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Quiet Hours Protection</p>
                        <p className="text-[11px] text-slate-500">Suppress study alerts during rest hours.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={draft.quietHoursEnabled}
                        onChange={(e) => updateDraft({ quietHoursEnabled: e.target.checked })}
                        className="w-4 h-4 rounded text-primary focus:ring-primary"
                      />
                    </div>
                    {draft.quietHoursEnabled && (
                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                        <div>
                          <label className="block text-[10px] text-slate-500 mb-1">Quiet Start</label>
                          <input
                            type="time"
                            value={draft.quietHoursStart}
                            onChange={(e) => updateDraft({ quietHoursStart: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-500 mb-1">Quiet End</label>
                          <input
                            type="time"
                            value={draft.quietHoursEnd}
                            onChange={(e) => updateDraft({ quietHoursEnd: e.target.value })}
                            className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* STEP 8: Final Review & Confirmation */}
        {draft.step === 8 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                Review & Confirm Your Preparation Plan
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Please verify your selections. Confirming will generate your personalized study roadmap in PostgreSQL.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Student Name</span>
                <span className="font-bold text-slate-900 text-sm">{draft.displayName}</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Target Track</span>
                <span className="font-bold text-indigo-700 text-sm">TCS {draft.targetTrack} Track</span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Exam Schedule</span>
                <span className="font-bold text-slate-900">
                  {draft.hasConfirmedExamDate ? `Confirmed: ${draft.examDate}` : `Duration: ${draft.availableDays || 30} Days`}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Daily Commitment</span>
                <span className="font-bold text-slate-900">
                  {draft.dailyMinutes} mins/day • {draft.daysAvailablePerWeek || 6} days/week ({draft.prepIntensity})
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Coding Language</span>
                <span className="font-bold text-slate-900 uppercase">
                  {draft.preferredLanguage} ({draft.proficiency})
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Confirmed Timezone</span>
                <span className="font-bold text-slate-900">{draft.timezone}</span>
              </div>
            </div>

            {draft.selectedWeakTopics.length > 0 && (
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-slate-400 font-semibold block uppercase text-[10px]">Prioritized Topics</span>
                <div className="flex flex-wrap gap-1.5">
                  {draft.selectedWeakTopics.map((top) => (
                    <span key={top} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                      {top}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Wizard Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          {draft.step > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleBack}
              disabled={isSubmitting}
              className="gap-2 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          {draft.step < 8 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleNext}
              className="gap-2 text-xs font-semibold px-6 shadow-sm"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
              className="gap-2 text-xs font-semibold px-6 shadow-sm bg-emerald-600 hover:bg-emerald-700"
            >
              {isSubmitting ? (
                <>
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Saving to Account...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Confirm & Create Study Plan
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
