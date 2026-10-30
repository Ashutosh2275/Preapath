import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  Settings, 
  User, 
  Shield, 
  Bell, 
  FileText, 
  Check, 
  AlertCircle, 
  LogOut, 
  Trash2, 
  RotateCcw, 
  Clock, 
  Globe2, 
  Send, 
  Smartphone, 
  Monitor, 
  Calendar, 
  Code2, 
  Target,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { 
  TargetTrack, 
  ProgrammingLanguage, 
  ProficiencyLevel, 
  NotificationFrequency, 
  PrepIntensity,
  UserProfile
} from '../../types';
import { 
  isPushNotificationSupported, 
  getBrowserNotificationPermission, 
  requestPushNotificationPermission, 
  triggerBrowserNotification,
  isWithinQuietHours,
  scheduleTimezoneAwareReminder,
  getOrCreateDeviceId
} from '../../lib/notificationService';
import { DEFAULT_TIMEZONE } from '../../lib/dateUtils';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

type SettingsSection = 'profile' | 'security' | 'notifications' | 'privacy';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = (searchParams.get('section') as SettingsSection) || 'profile';

  const { 
    user, 
    updateProfile, 
    syncState,
    signOutUser,
    clearLocalCacheOnly,
    deleteAccountPermanently,
    notificationPreferences,
    updateNotificationPreferences,
    inAppNotifications,
    addInAppNotification,
    notificationDevices,
    loadNotificationDevices,
    toggleDeviceNotifications
  } = useUserStore();

  // Profile Section Form State
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [targetTrack, setTargetTrack] = useState<TargetTrack>(user?.targetTrack || 'NINJA');
  const [preferredLanguage, setPreferredLanguage] = useState<ProgrammingLanguage>(user?.preferredLanguage || 'python');
  const [proficiency, setProficiency] = useState<ProficiencyLevel>(user?.proficiency || 'INTERMEDIATE');
  const [availableDays, setAvailableDays] = useState<number>(user?.availablePreparationDays || 21);
  const [dailyMinutes, setDailyMinutes] = useState<number>(user?.dailyAvailableMinutes || 60);
  const [daysAvailablePerWeek, setDaysAvailablePerWeek] = useState<number>(user?.daysAvailablePerWeek || 6);
  const [preferredStudyHours, setPreferredStudyHours] = useState<string>(user?.preferredStudyHours || '');
  const [prepIntensity, setPrepIntensity] = useState<PrepIntensity>(user?.prepIntensity || 'STANDARD');
  const [hasConfirmedExamDate, setHasConfirmedExamDate] = useState<boolean>(Boolean(user?.examDate));
  const [examDate, setExamDate] = useState<string>(user?.examDate || '');
  const [timezone, setTimezone] = useState<string>(user?.timezone || DEFAULT_TIMEZONE);
  const [selectedWeakTopics, setSelectedWeakTopics] = useState<string[]>(user?.weakTopics || []);

  // UI Modals & State
  const [profileSuccessMsg, setProfileSuccessMsg] = useState<string | null>(null);
  const [profileErrorMsg, setProfileErrorMsg] = useState<string | null>(null);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showClearCacheModal, setShowClearCacheModal] = useState(false);
  const [deleteConfirmationText, setDeleteConfirmationText] = useState('');
  const [cacheClearSuccess, setCacheClearSuccess] = useState(false);

  // Notification Section State
  const [permissionState, setPermissionState] = useState(getBrowserNotificationPermission());
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const [testNotificationFeedback, setTestNotificationFeedback] = useState<string | null>(null);
  const currentDeviceId = getOrCreateDeviceId();

  // Sync state with authoritative store
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setTargetTrack(user.targetTrack || 'NINJA');
      setPreferredLanguage(user.preferredLanguage || 'python');
      setProficiency(user.proficiency || 'INTERMEDIATE');
      setAvailableDays(user.availablePreparationDays || 21);
      setDailyMinutes(user.dailyAvailableMinutes || 60);
      setDaysAvailablePerWeek(user.daysAvailablePerWeek || 6);
      setPreferredStudyHours(user.preferredStudyHours || '');
      setPrepIntensity(user.prepIntensity || 'STANDARD');
      setHasConfirmedExamDate(Boolean(user.examDate));
      setExamDate(user.examDate || '');
      setTimezone(user.timezone || DEFAULT_TIMEZONE);
      setSelectedWeakTopics(user.weakTopics || []);
    }
  }, [user]);

  // Load registered notification devices when switching to notifications section
  useEffect(() => {
    if (activeSection === 'notifications' && user?.uid) {
      loadNotificationDevices();
    }
  }, [activeSection, user?.uid, loadNotificationDevices]);

  const handleTabChange = (section: SettingsSection) => {
    setSearchParams({ section });
  };

  const syllabusTopics = [
    'Numerical Ability',
    'Reasoning Ability',
    'Verbal Ability',
    'Basic Number Theory',
    'Strings & Parsing',
    'Arrays & Prefix Sums',
    'Matrix Traversal',
    'Dynamic Programming',
  ];

  const toggleWeakTopic = (topic: string) => {
    if (selectedWeakTopics.includes(topic)) {
      setSelectedWeakTopics(selectedWeakTopics.filter(t => t !== topic));
    } else {
      setSelectedWeakTopics([...selectedWeakTopics, topic]);
    }
  };

  // Check if scheduling fields have changed compared to saved profile
  const hasSchedulingChanges = Boolean(
    user && (
      (examDate !== (user.examDate || '')) ||
      (dailyMinutes !== user.dailyAvailableMinutes) ||
      (availableDays !== user.availablePreparationDays)
    )
  );

  const handleSaveProfile = async (proposePlanRevision = false) => {
    setProfileErrorMsg(null);
    setProfileSuccessMsg(null);

    if (!displayName.trim() || displayName.trim().length < 2) {
      setProfileErrorMsg('Please enter your full name or preferred name (minimum 2 characters).');
      return;
    }
    if (!dailyMinutes || dailyMinutes < 15) {
      setProfileErrorMsg('Daily study commitment must be at least 15 minutes.');
      return;
    }
    if (!availableDays || availableDays < 7) {
      setProfileErrorMsg('Total preparation duration must be at least 7 days.');
      return;
    }

    setIsSavingProfile(true);

    try {
      const updates: Partial<UserProfile> = {
        displayName: displayName.trim(),
        targetTrack,
        preferredLanguage,
        proficiency,
        availablePreparationDays: Number(availableDays),
        dailyAvailableMinutes: Number(dailyMinutes),
        daysAvailablePerWeek: Number(daysAvailablePerWeek),
        preferredStudyHours: preferredStudyHours || undefined,
        prepIntensity,
        examDate: hasConfirmedExamDate && examDate ? examDate : undefined,
        timezone: timezone || DEFAULT_TIMEZONE,
        weakTopics: selectedWeakTopics,
      };

      await updateProfile(updates);
      setProfileSuccessMsg('Profile changes saved successfully and synced to your account.');

      if (proposePlanRevision) {
        navigate('/study-plan');
      } else {
        setTimeout(() => setProfileSuccessMsg(null), 4000);
      }
    } catch (err: any) {
      setProfileErrorMsg(err.message || 'Failed to save changes to PostgreSQL. Please try again.');
    } finally {
      setIsSavingProfile(false);
    }
  };

  // Notification actions
  const handleEnableReminders = async () => {
    setIsRequestingPermission(true);
    setTestNotificationFeedback(null);

    const res = await requestPushNotificationPermission(user?.uid);
    setPermissionState(res.permission);
    setIsRequestingPermission(false);

    if (res.permission === 'granted') {
      updateNotificationPreferences({
        enabled: true,
        pushToken: res.token,
        browserPermission: 'granted',
      });
      if (user?.uid) {
        await scheduleTimezoneAwareReminder({
          userId: user.uid,
          reminderTime: notificationPreferences.reminderTime || '19:00',
          timezone: timezone || DEFAULT_TIMEZONE,
        });
        loadNotificationDevices();
      }
      setTestNotificationFeedback('Study reminders enabled and registered for this device.');
    } else {
      updateNotificationPreferences({
        enabled: false,
        browserPermission: res.permission,
      });
      setTestNotificationFeedback(res.error || 'Notification permission was not granted.');
    }
  };

  const handleSendTestNotification = async () => {
    setTestNotificationFeedback(null);
    const title = 'PrepPath Study Reminder (Test)';
    const body = 'Your daily TCS preparation sequence is active. Solve today\'s 5 MCQs and Easy Coding problem!';

    const inQuiet = notificationPreferences.quietHoursEnabled && isWithinQuietHours(
      notificationPreferences.quietHoursStart,
      notificationPreferences.quietHoursEnd
    );

    // 1. In-app notification center fallback
    addInAppNotification({
      userId: user?.uid || 'guest',
      title,
      body: inQuiet ? `[Quiet Hours Active] ${body}` : body,
      type: 'DAILY_STUDY_REMINDER',
      targetUrl: '/study-plan',
      read: false,
      sentViaPush: false,
    });

    // 2. Browser native popup if granted
    if (permissionState === 'granted') {
      const delivered = await triggerBrowserNotification(title, {
        body,
        data: { url: '/study-plan' }
      });
      if (delivered) {
        setTestNotificationFeedback('Test notification delivered to your browser system notification center.');
      } else {
        setTestNotificationFeedback('Test notification logged in notification center. (Browser notification was quieted).');
      }
    } else {
      setTestNotificationFeedback('Test notification logged in your in-app notification bell. (Enable study reminders above for native OS popups).');
    }
  };

  const handleConfirmSignOut = async () => {
    setShowSignoutModal(false);
    await signOutUser();
    navigate('/');
  };

  const handleConfirmDeleteAccount = async () => {
    if (deleteConfirmationText !== 'DELETE') return;
    setShowDeleteModal(false);
    await deleteAccountPermanently();
    navigate('/');
  };

  const handleConfirmClearCache = async () => {
    setShowClearCacheModal(false);
    await clearLocalCacheOnly();
    setCacheClearSuccess(true);
    setTimeout(() => setCacheClearSuccess(false), 3500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
      {/* Page Title & Synchronized Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Settings className="w-7 h-7 text-primary" />
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your preparation profile, account security, notifications, and device data.
          </p>
        </div>

        {/* Real-time PostgreSQL Sync Status Pill */}
        <div className="flex items-center gap-2 text-xs">
          {syncState === 'SAVING' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              Saving to account...
            </span>
          )}
          {syncState === 'SAVED' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              Saved to account
            </span>
          )}
          {syncState === 'FAILED' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-medium">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              Synchronization failed
            </span>
          )}
        </div>
      </div>

      {/* Unified Tab Navigation */}
      <div className="border-b border-slate-200">
        <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto pb-px">
          {[
            { id: 'profile' as SettingsSection, label: 'Profile & Preparation', icon: User },
            { id: 'security' as SettingsSection, label: 'Account & Security', icon: Shield },
            { id: 'notifications' as SettingsSection, label: 'Notifications & Reminders', icon: Bell },
            { id: 'privacy' as SettingsSection, label: 'Privacy & Data', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  active
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* SECTION 1: Profile & Preparation */}
      {activeSection === 'profile' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in">
          {profileSuccessMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              {profileSuccessMsg}
            </div>
          )}

          {profileErrorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-800 font-medium">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              {profileErrorMsg}
            </div>
          )}

          {hasSchedulingChanges && (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Schedule Parameters Changed
              </div>
              <p className="text-xs text-amber-800">
                You modified examination date or study minutes. Would you like to review and propose a study plan revision?
              </p>
              <div className="flex gap-3 pt-1">
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => handleSaveProfile(true)}
                  className="text-xs font-semibold"
                >
                  Save & Propose Plan Revision
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleSaveProfile(false)}
                  className="text-xs font-medium"
                >
                  Save Profile Only
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              Personal & Track Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name or Preferred Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Target Hiring Track
                </label>
                <select
                  value={targetTrack}
                  onChange={(e) => setTargetTrack(e.target.value as TargetTrack)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="NINJA">TCS Ninja Track (Foundational)</option>
                  <option value="DIGITAL">TCS Digital Track (Advanced)</option>
                  <option value="PRIME">TCS Prime Track (Premier Algorithmic)</option>
                </select>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pt-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Examination & Availability Schedule
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Examination Date (If Confirmed)
                </label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => {
                    setExamDate(e.target.value);
                    setHasConfirmedExamDate(Boolean(e.target.value));
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Daily Study Time (Minutes)
                </label>
                <input
                  type="number"
                  min="15"
                  max="480"
                  value={dailyMinutes}
                  onChange={(e) => setDailyMinutes(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Preparation Days
                </label>
                <input
                  type="number"
                  min="7"
                  max="180"
                  value={availableDays}
                  onChange={(e) => setAvailableDays(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Days Available Per Week
                </label>
                <select
                  value={daysAvailablePerWeek}
                  onChange={(e) => setDaysAvailablePerWeek(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value={4}>4 Days / Week</option>
                  <option value={5}>5 Days / Week</option>
                  <option value={6}>6 Days / Week</option>
                  <option value={7}>7 Days / Week (Full Immersion)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preparation Intensity
                </label>
                <select
                  value={prepIntensity}
                  onChange={(e) => setPrepIntensity(e.target.value as PrepIntensity)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="RELAXED">Relaxed Pacing</option>
                  <option value="STANDARD">Standard Balanced</option>
                  <option value="INTENSIVE">Intensive Sprint</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Confirmed Local Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
                  <option value="Asia/Dubai">Asia/Dubai (GST)</option>
                  <option value="Europe/London">Europe/London (GMT/BST)</option>
                  <option value="America/New_York">America/New_York (ET)</option>
                  <option value="America/Chicago">America/Chicago (CT)</option>
                  <option value="America/Los_Angeles">America/Los_Angeles (PT)</option>
                  <option value="Asia/Singapore">Asia/Singapore (SGT)</option>
                  <option value="Australia/Sydney">Australia/Sydney (AEST)</option>
                </select>
              </div>
            </div>

            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider pt-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              Coding & Skill Preferences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Programming Language
                </label>
                <select
                  value={preferredLanguage}
                  onChange={(e) => setPreferredLanguage(e.target.value as ProgrammingLanguage)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="python">Python 3</option>
                  <option value="java">Java (OpenJDK 17)</option>
                  <option value="cpp">C++ (GCC 17)</option>
                  <option value="c">C (GCC 11)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Programming Proficiency
                </label>
                <select
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value as ProficiencyLevel)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="BEGINNER">Beginner (Basic Syntax & Loops)</option>
                  <option value="INTERMEDIATE">Intermediate (Core DSA & Problem Solving)</option>
                  <option value="ADVANCED">Advanced (Algorithmic Optimization & DP)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Prioritized Weak Topics
              </label>
              <div className="flex flex-wrap gap-2">
                {syllabusTopics.map((top) => {
                  const isSelected = selectedWeakTopics.includes(top);
                  return (
                    <button
                      key={top}
                      type="button"
                      onClick={() => toggleWeakTopic(top)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        isSelected
                          ? 'border-primary bg-indigo-50 text-indigo-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {isSelected ? `✓ ${top}` : `+ ${top}`}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={() => handleSaveProfile(false)}
                disabled={isSavingProfile}
                className="text-xs font-semibold px-6 shadow-xs"
              >
                {isSavingProfile ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Account & Security */}
      {activeSection === 'security' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in">
          <div>
            <h3 className="text-base font-bold text-slate-900">Account & Security</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Identity information, device sessions, and account management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Account Email</span>
              <span className="font-bold text-slate-900 text-sm truncate block">{user?.email || 'student@preppath.in'}</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Account Type</span>
              <span className="font-bold text-slate-900 text-sm capitalize">{user?.role || 'student'} Account</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Authentication Method</span>
              <span className="font-bold text-slate-900">Secure Managed Authentication Session</span>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">Session Status</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active Authenticated Session
              </span>
            </div>
          </div>

          {/* Session Termination / Sign Out */}
          <div className="p-5 rounded-2xl border border-slate-200 space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Sign out of this device</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                End your current PrepPath session on this device. Your saved profile, study plan and preparation progress will remain available when you sign in again.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSignoutModal(true)}
              className="text-xs font-semibold gap-2 border-slate-300"
            >
              <LogOut className="w-3.5 h-3.5 text-slate-500" />
              Sign Out of This Device
            </Button>
          </div>

          {/* Destructive Account Deletion */}
          <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/30 space-y-3">
            <div>
              <h4 className="text-sm font-bold text-rose-900">Delete my PrepPath account</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Permanently delete your PrepPath account and all associated records from our servers, including your profile, active study plans, coding submissions, drafts, and custom test cases. This action is irreversible.
              </p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setShowDeleteModal(true)}
              className="text-xs font-semibold gap-2"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete My Account
            </Button>
          </div>
        </div>
      )}

      {/* SECTION 3: Notifications & Reminders */}
      {activeSection === 'notifications' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in">
          <div>
            <h3 className="text-base font-bold text-slate-900">Notifications & Study Reminders</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Daily reminder scheduled for {notificationPreferences.reminderTime || '19:00'} ({user?.timezone || DEFAULT_TIMEZONE}).
            </p>
          </div>

          {testNotificationFeedback && (
            <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 font-medium">
              {testNotificationFeedback}
            </div>
          )}

          {/* Browser Permission Control */}
          <div className="p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Web Push Notifications</h4>
              <p className="text-xs text-slate-500">
                Current status:{' '}
                <span className="font-semibold capitalize text-slate-800">{permissionState}</span>.
                Receive notifications even when PrepPath is minimized.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={handleEnableReminders}
              disabled={isRequestingPermission || permissionState === 'granted'}
              className="text-xs font-semibold shrink-0"
            >
              {permissionState === 'granted' ? 'Reminders Enabled' : isRequestingPermission ? 'Requesting...' : 'Enable Study Reminders'}
            </Button>
          </div>

          {/* Reminder Schedule Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Local Reminder Time
              </label>
              <input
                type="time"
                value={notificationPreferences.reminderTime}
                onChange={(e) => updateNotificationPreferences({ reminderTime: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Reminder Frequency
              </label>
              <select
                value={notificationPreferences.frequency}
                onChange={(e) => updateNotificationPreferences({ frequency: e.target.value as NotificationFrequency })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              >
                <option value="DAILY">Daily Preparation Reminder</option>
                <option value="EVERY_OTHER_DAY">Every 2 Days</option>
                <option value="WEEKLY">Weekly Progress Summary</option>
                <option value="DISABLED">Disable Scheduled Reminders</option>
              </select>
            </div>
          </div>

          {/* Quiet Hours */}
          <div className="p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-900">Quiet Hours Protection</p>
                <p className="text-[11px] text-slate-500">Suppress study alerts during rest hours.</p>
              </div>
              <input
                type="checkbox"
                checked={notificationPreferences.quietHoursEnabled}
                onChange={(e) => updateNotificationPreferences({ quietHoursEnabled: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary"
              />
            </div>

            {notificationPreferences.quietHoursEnabled && (
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Quiet Start</label>
                  <input
                    type="time"
                    value={notificationPreferences.quietHoursStart}
                    onChange={(e) => updateNotificationPreferences({ quietHoursStart: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Quiet End</label>
                  <input
                    type="time"
                    value={notificationPreferences.quietHoursEnd}
                    onChange={(e) => updateNotificationPreferences({ quietHoursEnd: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Multi-Device Subscriptions List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Registered Devices ({notificationDevices.length})
              </h4>
              <button
                onClick={() => loadNotificationDevices()}
                className="text-[11px] text-primary hover:underline font-medium"
              >
                Refresh Devices
              </button>
            </div>

            <div className="space-y-2">
              {notificationDevices.map((dev) => (
                <div
                  key={dev.id}
                  className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                      {dev.platform?.includes('ios') || dev.platform?.includes('android') ? (
                        <Smartphone className="w-4 h-4" />
                      ) : (
                        <Monitor className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 flex items-center gap-2">
                        {dev.deviceName}
                        {dev.deviceId === currentDeviceId && (
                          <span className="text-[10px] px-1.5 py-0.2 bg-indigo-50 text-indigo-700 rounded font-semibold">
                            This Device
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {dev.timezone} • Last active {new Date(dev.lastActiveAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleDeviceNotifications(dev.deviceId, !dev.isActive)}
                    className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-colors ${
                      dev.isActive
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    {dev.isActive ? 'Active' : 'Disabled'}
                  </button>
                </div>
              ))}

              {notificationDevices.length === 0 && (
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 text-center text-xs text-slate-400">
                  No registered push devices yet. Click "Enable Study Reminders" above to register this browser.
                </div>
              )}
            </div>
          </div>

          {/* Test Notification Action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Verify your notification pipeline with a direct test alert.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSendTestNotification}
              className="gap-2 text-xs font-semibold"
            >
              <Send className="w-3.5 h-3.5 text-primary" />
              Send Test Notification
            </Button>
          </div>
        </div>
      )}

      {/* SECTION 4: Privacy & Data */}
      {activeSection === 'privacy' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in">
          <div>
            <h3 className="text-base font-bold text-slate-900">Privacy & Data Management</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Review your data rights, cached device storage, and legal policies.
            </p>
          </div>

          {cacheClearSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              Temporary browser cache cleared successfully. Account data re-verified from server.
            </div>
          )}

          {/* Clear Cached Data On This Device */}
          <div className="p-5 rounded-2xl border border-slate-200 space-y-3">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Clear cached data on this device</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Remove temporary files and cached content stored in this browser. Your saved profile, study plan, submissions and preparation history will remain in your PrepPath account.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowClearCacheModal(true)}
              className="text-xs font-semibold gap-2 border-slate-300"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              Clear Cached Data
            </Button>
          </div>

          {/* Legal Documents Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Legal & Policy Documentation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/privacy"
                className="p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-slate-50/50 transition-all flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-bold text-slate-900">Privacy Policy</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Data collection, hosting & subprocessor disclosures.</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                to="/terms"
                className="p-4 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-slate-50/50 transition-all flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-bold text-slate-900">Terms of Service</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Educational scope, acceptable use & platform disclaimer.</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sign Out Confirmation Modal */}
      <Modal
        isOpen={showSignoutModal}
        onClose={() => setShowSignoutModal(false)}
        title="Sign out of this device"
      >
        <div className="space-y-4 text-xs text-slate-600">
          <p>
            Are you sure you want to end your current PrepPath session on this device?
          </p>
          <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
            Your saved profile, study plan, and preparation progress will remain safely stored in your PrepPath account and will be immediately restored when you sign in again.
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSignoutModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleConfirmSignOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </Modal>

      {/* Clear Cache Confirmation Modal */}
      <Modal
        isOpen={showClearCacheModal}
        onClose={() => setShowClearCacheModal(false)}
        title="Clear cached data on this device"
      >
        <div className="space-y-4 text-xs text-slate-600">
          <p>
            This action will clear only temporary local browser cache and reload your authoritative state directly from PostgreSQL.
          </p>
          <p className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-indigo-900">
            No cloud records, study plans, or question submissions will be deleted from your PrepPath account.
          </p>
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowClearCacheModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleConfirmClearCache}
            >
              Clear Local Cache
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Account Confirmation Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        title="Delete my PrepPath account"
      >
        <div className="space-y-4 text-xs text-slate-600">
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-rose-800 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              Warning: Permanent & Irreversible Action
            </p>
            <p>
              All your saved profile records, active preparation plans, coding drafts, submissions, custom test cases, and bookmarks will be permanently deleted from our PostgreSQL database.
            </p>
          </div>
          <p>
            To confirm permanent deletion, please type <span className="font-mono font-bold text-slate-900">DELETE</span> below:
          </p>
          <input
            type="text"
            value={deleteConfirmationText}
            onChange={(e) => setDeleteConfirmationText(e.target.value)}
            placeholder="Type DELETE to confirm"
            className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-mono"
          />
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              disabled={deleteConfirmationText !== 'DELETE'}
              onClick={handleConfirmDeleteAccount}
            >
              Permanently Delete Account
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
