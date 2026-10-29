import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, 
  Trash2, 
  LogOut, 
  ShieldAlert, 
  Check, 
  Bell, 
  Clock, 
  Moon, 
  RotateCcw,
  Sparkles,
  Send,
  AlertCircle
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { 
  isPushNotificationSupported, 
  getBrowserNotificationPermission, 
  requestPushNotificationPermission, 
  triggerBrowserNotification,
  isWithinQuietHours 
} from '../../lib/notificationService';
import { NotificationFrequency } from '../../types';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    user, 
    setUser, 
    resetAccountData, 
    notificationPreferences, 
    updateNotificationPreferences,
    inAppNotifications,
    addInAppNotification,
    markNotificationRead,
    clearAllNotifications
  } = useUserStore();

  const [showResetModal, setShowResetModal] = useState(false);
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [permissionState, setPermissionState] = useState(getBrowserNotificationPermission());
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const [testNotificationFeedback, setTestNotificationFeedback] = useState<string | null>(null);

  const handleEnableNotifications = async () => {
    setIsRequestingPermission(true);
    setTestNotificationFeedback(null);

    const res = await requestPushNotificationPermission();
    setPermissionState(res.permission);
    setIsRequestingPermission(false);

    if (res.permission === 'granted') {
      updateNotificationPreferences({
        enabled: true,
        pushToken: res.token,
        browserPermission: 'granted',
      });
      setTestNotificationFeedback('Study reminders enabled successfully!');
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
    
    // Check quiet hours
    const inQuiet = notificationPreferences.quietHoursEnabled && isWithinQuietHours(
      notificationPreferences.quietHoursStart,
      notificationPreferences.quietHoursEnd
    );

    // Add In-App notification
    addInAppNotification({
      userId: user?.uid || 'guest-user',
      title,
      body: inQuiet ? `[Quiet Hours Active] ${body}` : body,
      type: 'DAILY_STUDY_REMINDER',
      targetUrl: '/study-plan',
      read: false,
      sentViaPush: false,
    });

    // Fire browser system notification if granted
    if (permissionState === 'granted') {
      const delivered = await triggerBrowserNotification(title, {
        body,
        data: { url: '/study-plan' }
      });
      if (delivered) {
        setTestNotificationFeedback('Test notification sent to your browser and in-app bell!');
      } else {
        setTestNotificationFeedback('In-app reminder logged. Browser notification was quieted or blocked.');
      }
    } else {
      setTestNotificationFeedback('In-app notification created! (Enable browser permissions to receive native system popups).');
    }
  };

  const handleConfirmReset = () => {
    resetAccountData();
    setShowResetModal(false);
    navigate('/');
  };

  const handleConfirmSignout = () => {
    setUser(null);
    setShowSignoutModal(false);
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
          <Settings className="w-7 h-7 text-primary" />
          Account & Notification Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure study reminders, quiet hours, push notifications, and local session preferences.
        </p>
      </div>

      {/* Push Notifications & Study Reminders Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primary flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Study Reminders & Push Notifications
              </h3>
              <p className="text-xs text-slate-500">
                Receive proactive reminders for your daily study plan and due spaced revision items.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold uppercase px-2.5 py-1 rounded-full border ${
              permissionState === 'granted'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : permissionState === 'denied'
                ? 'bg-rose-50 text-rose-700 border-rose-200'
                : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
              Permission: {permissionState}
            </span>
          </div>
        </div>

        {/* Enable / Request Permission CTA */}
        {permissionState !== 'granted' && (
          <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-indigo-950">
                Enable Browser Push Notifications
              </h4>
              <p className="text-xs text-indigo-800">
                Explicit permission is required to send background reminder alerts even when PrepPath is minimized.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={handleEnableNotifications}
              isLoading={isRequestingPermission}
              className="text-xs shrink-0"
            >
              Enable Study Reminders
            </Button>
          </div>
        )}

        {/* Configuration Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          {/* Reminder Frequency */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">
              Reminder Cadence
            </label>
            <select
              value={notificationPreferences.frequency}
              onChange={(e) => updateNotificationPreferences({ frequency: e.target.value as NotificationFrequency })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900"
            >
              <option value="DAILY">Daily Study Reminder</option>
              <option value="EVERY_OTHER_DAY">Every Other Day (Default)</option>
              <option value="WEEKLY">Weekly Preparation Digest</option>
              <option value="DISABLED">Disabled</option>
            </select>
          </div>

          {/* Reminder Time */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Preferred Reminder Time
            </label>
            <input
              type="time"
              value={notificationPreferences.reminderTime}
              onChange={(e) => updateNotificationPreferences({ reminderTime: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900"
            />
          </div>

          {/* Quiet Hours */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-semibold text-slate-700 flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-slate-400" />
                Quiet Hours (No Notifications)
              </label>
              <input
                type="checkbox"
                checked={notificationPreferences.quietHoursEnabled}
                onChange={(e) => updateNotificationPreferences({ quietHoursEnabled: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">Start:</span>
                <input
                  type="time"
                  disabled={!notificationPreferences.quietHoursEnabled}
                  value={notificationPreferences.quietHoursStart}
                  onChange={(e) => updateNotificationPreferences({ quietHoursStart: e.target.value })}
                  className="w-full px-2 py-1.5 text-xs rounded border border-slate-300 bg-white text-slate-900 disabled:opacity-50"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block mb-0.5">End:</span>
                <input
                  type="time"
                  disabled={!notificationPreferences.quietHoursEnabled}
                  value={notificationPreferences.quietHoursEnd}
                  onChange={(e) => updateNotificationPreferences({ quietHoursEnd: e.target.value })}
                  className="w-full px-2 py-1.5 text-xs rounded border border-slate-300 bg-white text-slate-900 disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Due Review Check */}
          <div className="flex flex-col justify-center space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={notificationPreferences.remindReviewsDue}
                onChange={(e) => updateNotificationPreferences({ remindReviewsDue: e.target.checked })}
                className="w-4 h-4 rounded text-primary focus:ring-primary"
              />
              <span className="font-semibold text-slate-700">
                Remind when Spaced Reviews are Due or Overdue
              </span>
            </label>
            <p className="text-[11px] text-slate-400">
              Timezone: <strong className="text-slate-600 font-mono">{notificationPreferences.timezone}</strong>
            </p>
          </div>
        </div>

        {/* Test Notification Feedback */}
        {testNotificationFeedback && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0" />
            <span>{testNotificationFeedback}</span>
          </div>
        )}

        {/* Action to test notification */}
        <div className="pt-2 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSendTestNotification}
            leftIcon={<Send className="w-3.5 h-3.5" />}
            className="text-xs"
          >
            Send Test Study Reminder
          </Button>
        </div>
      </div>

      {/* In-App Notification Center & History */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" />
            <h3 className="text-base font-bold text-slate-900">
              In-App Notification History ({inAppNotifications.length})
            </h3>
          </div>
          {inAppNotifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="space-y-2.5 max-h-[300px] overflow-y-auto">
          {inAppNotifications.length > 0 ? (
            inAppNotifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => markNotificationRead(notif.id)}
                className={`p-3.5 rounded-xl border text-xs flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                  notif.read
                    ? 'border-slate-100 bg-slate-50/50 text-slate-600'
                    : 'border-primary/30 bg-primary/5 text-slate-900 font-medium'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{notif.title}</span>
                    {!notif.read && (
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {notif.body}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0 font-mono">
                  {new Date(notif.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-xs text-slate-400 border border-dashed rounded-xl">
              No notifications recorded yet.
            </div>
          )}
        </div>
      </div>

      {/* Account Role & Danger Zone */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-sm">
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Account Role & Authentication
          </h3>
          <p className="text-xs text-slate-500">
            Current account is logged in as: <strong className="text-slate-700 font-mono">{user?.email || 'Student'}</strong> ({user?.role?.toUpperCase() || 'STUDENT'})
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-4">
          <h3 className="text-sm font-bold text-rose-600 uppercase tracking-wider text-xs">
            Danger Zone
          </h3>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-rose-900">
                Clear Local Preparation Data
              </h4>
              <p className="text-xs text-rose-700">
                Resets all local drafts, test cases, and custom study plans back to default initial state.
              </p>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => setShowResetModal(true)}
              leftIcon={<Trash2 className="w-3.5 h-3.5" />}
              className="text-xs shrink-0"
            >
              Reset Data
            </Button>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-slate-900">
                Sign Out of Current Session
              </h4>
              <p className="text-xs text-slate-500">
                Terminates active session on this device.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSignoutModal(true)}
              leftIcon={<LogOut className="w-3.5 h-3.5" />}
              className="text-xs shrink-0"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Local Data?"
        description="Are you sure you want to reset all preparation data? This will clear custom test cases, progress records, and local drafts."
      >
        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="ghost" size="sm" onClick={() => setShowResetModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" size="sm" onClick={handleConfirmReset}>
            Yes, Reset Data
          </Button>
        </div>
      </Modal>

      {/* Sign Out Modal */}
      <Modal
        isOpen={showSignoutModal}
        onClose={() => setShowSignoutModal(false)}
        title="Sign Out of PrepPath?"
        description="You will be returned to the home screen. Your persistent progress remains preserved in your user account."
      >
        <div className="flex items-center justify-end gap-2 pt-4">
          <Button variant="ghost" size="sm" onClick={() => setShowSignoutModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleConfirmSignout}>
            Sign Out
          </Button>
        </div>
      </Modal>
    </div>
  );
};
