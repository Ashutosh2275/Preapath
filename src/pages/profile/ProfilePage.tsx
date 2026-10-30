import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Check, Save, AlertCircle, Calendar, Sliders } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { TargetTrack, ProgrammingLanguage, ProficiencyLevel } from '../../types';
import { Button } from '../../components/common/Button';
import { DEFAULT_TIMEZONE } from '../../lib/dateUtils';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateProfile, studyPlan } = useUserStore();

  const [displayName, setDisplayName] = useState('');
  const [targetTrack, setTargetTrack] = useState<TargetTrack | ''>('');
  const [preferredLanguage, setPreferredLanguage] = useState<ProgrammingLanguage | ''>('');
  const [proficiency, setProficiency] = useState<ProficiencyLevel | ''>('');
  const [availableDays, setAvailableDays] = useState<number | ''>('');
  const [dailyMinutes, setDailyMinutes] = useState<number | ''>('');
  const [examDate, setExamDate] = useState<string>('');
  const [timezone, setTimezone] = useState<string>(DEFAULT_TIMEZONE);

  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync state whenever authoritative user profile is loaded or updated
  useEffect(() => {
    if (user) {
      if (user.displayName) setDisplayName(user.displayName);
      if (user.targetTrack) setTargetTrack(user.targetTrack);
      if (user.preferredLanguage) setPreferredLanguage(user.preferredLanguage);
      if (user.proficiency) setProficiency(user.proficiency);
      if (user.availablePreparationDays) setAvailableDays(user.availablePreparationDays);
      if (user.dailyAvailableMinutes) setDailyMinutes(user.dailyAvailableMinutes);
      if (user.examDate) setExamDate(user.examDate);
      if (user.timezone) setTimezone(user.timezone);
    }
  }, [user]);

  // Check if scheduling-related attributes differ from saved profile
  const hasSchedulingChanges = Boolean(
    user && (
      (examDate && examDate !== user.examDate) ||
      (dailyMinutes !== '' && dailyMinutes !== user.dailyAvailableMinutes) ||
      (availableDays !== '' && availableDays !== user.availablePreparationDays)
    )
  );

  const validateInputs = () => {
    if (!displayName.trim()) {
      setErrorMessage('Please enter your full name or preferred name.');
      return false;
    }
    if (!targetTrack) {
      setErrorMessage('Please select a target hiring track.');
      return false;
    }
    if (!preferredLanguage) {
      setErrorMessage('Please choose a preferred programming language.');
      return false;
    }
    if (!dailyMinutes || Number(dailyMinutes) < 15) {
      setErrorMessage('Daily study time must be at least 15 minutes.');
      return false;
    }
    if (!availableDays || Number(availableDays) < 3) {
      setErrorMessage('Total preparation days must be at least 3 days.');
      return false;
    }
    return true;
  };

  const handleSaveProfileOnly = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateInputs()) return;

    try {
      updateProfile({
        displayName: displayName.trim(),
        targetTrack: targetTrack as TargetTrack,
        preferredLanguage: preferredLanguage as ProgrammingLanguage,
        proficiency: (proficiency || 'INTERMEDIATE') as ProficiencyLevel,
        availablePreparationDays: Number(availableDays),
        dailyAvailableMinutes: Number(dailyMinutes),
        examDate: examDate || undefined,
        timezone: timezone || DEFAULT_TIMEZONE,
      });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3500);
    } catch {
      setErrorMessage('Failed to save profile changes. Please try again.');
    }
  };

  const handlePreviewAndReviseSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateInputs()) return;

    // Save profile attributes first
    updateProfile({
      displayName: displayName.trim(),
      targetTrack: targetTrack as TargetTrack,
      preferredLanguage: preferredLanguage as ProgrammingLanguage,
      proficiency: (proficiency || 'INTERMEDIATE') as ProficiencyLevel,
      availablePreparationDays: Number(availableDays),
      dailyAvailableMinutes: Number(dailyMinutes),
      examDate: examDate || undefined,
      timezone: timezone || DEFAULT_TIMEZONE,
    });

    // Navigate to study-plan where the confirmed revision modal can be reviewed and applied
    navigate('/study-plan');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <User className="w-7 h-7 text-primary" />
          Preparation Profile & Goals
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure your target tier, examination date, daily study commitment, and coding preferences.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        {isSaved && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800 font-medium">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            Profile changes saved successfully and persisted to database.
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-800 font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            {errorMessage}
          </div>
        )}

        <form className="space-y-8">
          {/* Group 1: Personal Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              1. Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name or Preferred Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ashutosh Mishra"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address (Read-Only)
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ''}
                  placeholder="authenticated-user@example.com"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed select-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  User Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="Asia/Kolkata">Asia/Kolkata (IST - UTC+5:30)</option>
                  <option value="Asia/Dubai">Asia/Dubai (GST - UTC+4:00)</option>
                  <option value="Europe/London">Europe/London (GMT/BST)</option>
                  <option value="America/New_York">America/New_York (EST/EDT)</option>
                  <option value="UTC">UTC (Universal Coordinated Time)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Group 2: Preparation Target & Exam Timeline */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              2. Preparation Target & Timeline
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Hiring Track
                </label>
                <select
                  value={targetTrack}
                  onChange={(e) => setTargetTrack(e.target.value as TargetTrack)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="" disabled>Select target track...</option>
                  <option value="NINJA">Ninja Track (Foundational)</option>
                  <option value="DIGITAL">Digital Track (Advanced)</option>
                  <option value="PRIME">Prime Track (Premier)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Examination Date
                </label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>

          {/* Group 3: Study Availability */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-purple-600" />
              3. Study Availability
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Daily Available Study Time (Minutes)
                </label>
                <input
                  type="number"
                  min={15}
                  max={480}
                  placeholder="e.g. 90"
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Preparation Days
                </label>
                <input
                  type="number"
                  min={3}
                  max={120}
                  placeholder="e.g. 21"
                  value={availableDays}
                  onChange={(e) => setAvailableDays(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>

          {/* Group 4: Programming Preferences */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-600" />
              4. Programming Preferences & Proficiency
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Programming Language
                </label>
                <select
                  value={preferredLanguage}
                  onChange={(e) => setPreferredLanguage(e.target.value as ProgrammingLanguage)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="" disabled>Select preferred language...</option>
                  <option value="python">Python 3</option>
                  <option value="cpp">C++ (GCC)</option>
                  <option value="java">Java (17)</option>
                  <option value="c">C (GCC)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Initial Coding Proficiency
                </label>
                <select
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value as ProficiencyLevel)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  <option value="" disabled>Select proficiency level...</option>
                  <option value="BEGINNER">Beginner (Foundations & Syntax)</option>
                  <option value="INTERMEDIATE">Intermediate (Data Structures & Core Patterns)</option>
                  <option value="ADVANCED">Advanced (High-Order Algorithmic Optimization)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Actions with Dual Options for Scheduling Changes */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              {studyPlan 
                ? `Active study plan v${studyPlan.version || 1} will not be modified unless explicitly revised.`
                : 'Configure preferences to guide your preparation plan.'
              }
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={handleSaveProfileOnly}
                leftIcon={<Save className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Save Profile Only
              </Button>

              {hasSchedulingChanges && (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={handlePreviewAndReviseSchedule}
                  leftIcon={<Sliders className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-xs"
                >
                  Preview & Revise Schedule
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
