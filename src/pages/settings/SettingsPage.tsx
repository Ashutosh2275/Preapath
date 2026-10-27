import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Trash2, LogOut, ShieldAlert, Check } from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser, resetAccountData } = useUserStore();
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSignoutModal, setShowSignoutModal] = useState(false);

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
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Settings className="w-7 h-7 text-primary" />
          Account Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Manage local session data, role assignments, and security settings.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-sm">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
            Account Role & Authentication
          </h3>
          <p className="text-xs text-slate-500">
            Current account is logged in as: <strong className="text-slate-700 dark:text-slate-300 font-mono">{user?.email}</strong> ({user?.role?.toUpperCase()})
          </p>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider text-xs">
            Danger Zone
          </h3>

          <div className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200">
                Clear Local Preparation Data
              </h4>
              <p className="text-xs text-rose-700 dark:text-rose-300">
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

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200">
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
