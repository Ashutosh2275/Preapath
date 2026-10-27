import React, { useState } from 'react';
import { User, Target, Code2, Clock, Calendar, Check, Save } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { TargetTrack, ProgrammingLanguage, ProficiencyLevel } from '../../types';
import { Button } from '../../components/common/Button';
import { TrackBadge } from '../../components/common/Badge';

export const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useUserStore();

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [targetTrack, setTargetTrack] = useState<TargetTrack>(user?.targetTrack || 'DIGITAL');
  const [preferredLanguage, setPreferredLanguage] = useState<ProgrammingLanguage>(user?.preferredLanguage || 'python');
  const [availableDays, setAvailableDays] = useState<number>(user?.availablePreparationDays || 21);
  const [dailyMinutes, setDailyMinutes] = useState<number>(user?.dailyAvailableMinutes || 90);
  const [proficiency, setProficiency] = useState<ProficiencyLevel>(user?.proficiency || 'INTERMEDIATE');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      displayName,
      targetTrack,
      preferredLanguage,
      availablePreparationDays: availableDays,
      dailyAvailableMinutes: dailyMinutes,
      proficiency,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <User className="w-7 h-7 text-primary" />
          Preparation Profile & Goals
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Update your target tier, daily study commitment, and coding preferences.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
        {isSaved && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-200 font-medium">
            <Check className="w-4 h-4 text-emerald-500" />
            Profile preferences updated successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Full Name or Preferred Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={user?.email || ''}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Target Track */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Target Hiring Track
              </label>
              <select
                value={targetTrack}
                onChange={(e) => setTargetTrack(e.target.value as TargetTrack)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              >
                <option value="NINJA">Ninja Track (Foundational)</option>
                <option value="DIGITAL">Digital Track (Advanced)</option>
                <option value="PRIME">Prime Track (Premier)</option>
              </select>
            </div>

            {/* Preferred Coding Language */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Programming Language
              </label>
              <select
                value={preferredLanguage}
                onChange={(e) => setPreferredLanguage(e.target.value as ProgrammingLanguage)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              >
                <option value="python">Python 3</option>
                <option value="cpp">C++ (GCC)</option>
                <option value="java">Java (17)</option>
                <option value="c">C (GCC)</option>
              </select>
            </div>

            {/* Daily Available Study Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Daily Available Study Time (Minutes)
              </label>
              <input
                type="number"
                min={30}
                max={480}
                value={dailyMinutes}
                onChange={(e) => setDailyMinutes(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
              />
            </div>

            {/* Preparation Timeline Days */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Total Preparation Days
              </label>
              <input
                type="number"
                min={3}
                max={120}
                value={availableDays}
                onChange={(e) => setAvailableDays(Number(e.target.value))}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
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
