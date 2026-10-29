import React, { useState, useEffect } from 'react';
import { User, Check, Save, AlertCircle } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { TargetTrack, ProgrammingLanguage, ProficiencyLevel } from '../../types';
import { Button } from '../../components/common/Button';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useUserStore();

  const [displayName, setDisplayName] = useState('');
  const [targetTrack, setTargetTrack] = useState<TargetTrack | ''>('');
  const [preferredLanguage, setPreferredLanguage] = useState<ProgrammingLanguage | ''>('');
  const [availableDays, setAvailableDays] = useState<number | ''>('');
  const [dailyMinutes, setDailyMinutes] = useState<number | ''>('');
  const [isSaved, setIsSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync state whenever authoritative user profile is loaded or updated
  useEffect(() => {
    if (user) {
      if (user.displayName) setDisplayName(user.displayName);
      if (user.targetTrack) setTargetTrack(user.targetTrack);
      if (user.preferredLanguage) setPreferredLanguage(user.preferredLanguage);
      if (user.availablePreparationDays) setAvailableDays(user.availablePreparationDays);
      if (user.dailyAvailableMinutes) setDailyMinutes(user.dailyAvailableMinutes);
    }
  }, [user]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!displayName.trim()) {
      setErrorMessage('Please enter your full name or preferred name.');
      return;
    }
    if (!targetTrack) {
      setErrorMessage('Please select a target hiring track.');
      return;
    }
    if (!preferredLanguage) {
      setErrorMessage('Please choose a preferred programming language.');
      return;
    }
    if (!dailyMinutes || Number(dailyMinutes) < 15) {
      setErrorMessage('Daily study time must be at least 15 minutes.');
      return;
    }
    if (!availableDays || Number(availableDays) < 3) {
      setErrorMessage('Total preparation days must be at least 3 days.');
      return;
    }

    try {
      updateProfile({
        displayName: displayName.trim(),
        targetTrack: targetTrack as TargetTrack,
        preferredLanguage: preferredLanguage as ProgrammingLanguage,
        availablePreparationDays: Number(availableDays),
        dailyAvailableMinutes: Number(dailyMinutes),
      });
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3500);
    } catch (err: any) {
      setErrorMessage('Failed to save profile changes. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <User className="w-7 h-7 text-primary" />
          Preparation Profile & Goals
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Update your target tier, daily study commitment, and coding preferences.
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

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={user?.email || ''}
                placeholder="authenticated-user@example.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed select-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            {/* Target Track */}
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

            {/* Preferred Coding Language */}
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

            {/* Daily Available Study Time */}
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

            {/* Preparation Timeline Days */}
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

          <div className="pt-4 flex justify-end">
            <Button
              type="submit"
              variant="primary"
              size="md"
              leftIcon={<Save className="w-4 h-4" />}
            >
              Save Profile Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
