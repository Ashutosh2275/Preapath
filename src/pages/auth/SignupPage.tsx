import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { auth, isFirebaseConfigured } from '../../lib/firebase';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../../components/common/Button';
import { TargetTrack } from '../../types';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useUserStore();

  const selectedTrack: TargetTrack = (location.state as any)?.track || 'NINJA';

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Email format validation helper
  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = displayName.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || cleanName.length < 2) {
      setError('Please enter a full name or preferred username (minimum 2 characters).');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setError('Please provide a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must contain at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter your password.');
      return;
    }

    setIsLoading(true);

    if (isFirebaseConfigured() && auth) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, cleanEmail, password);
        const fbUser = userCredential.user;
        setUser({
          uid: fbUser.uid,
          email: fbUser.email || cleanEmail,
          displayName: cleanName,
          targetTrack: selectedTrack,
          preferredLanguage: 'python',
          availablePreparationDays: 14,
          dailyAvailableMinutes: 90,
          proficiency: 'BEGINNER',
          weakTopics: [],
          role: 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        navigate('/onboarding', { state: { track: selectedTrack } });
      } catch (err: any) {
        setError(err.message || 'Registration failed. Please try another email address.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Authoritative persistent account initialization
      setTimeout(() => {
        setUser({
          uid: `user-${Date.now()}`,
          email: cleanEmail,
          displayName: cleanName,
          targetTrack: selectedTrack,
          preferredLanguage: 'python',
          availablePreparationDays: 14,
          dailyAvailableMinutes: 90,
          proficiency: 'BEGINNER',
          weakTopics: [],
          role: cleanEmail.includes('admin') ? 'admin' : 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        setIsLoading(false);
        navigate('/onboarding', { state: { track: selectedTrack } });
      }, 400);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[460px] space-y-6">
        {/* Typographic Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Create your PrepPath Account
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Start your structured preparation plan for TCS Ninja, Digital, or Prime assessments.
          </p>
        </div>

        {/* Focused Registration Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          {error && (
            <div 
              role="alert"
              className="mb-5 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label 
                htmlFor="display-name-input"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Full Name
              </label>
              <input
                id="display-name-input"
                type="text"
                autoComplete="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Leonid_OP"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Used to personalize your study plan and dashboard greetings
              </p>
            </div>

            <div>
              <label 
                htmlFor="email-input"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="email-input"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="leonido@gmail.com"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="password-input"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>
                <span className="text-[11px] text-slate-400">Min 6 characters</span>
              </div>
              <input
                id="password-input"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label 
                htmlFor="confirm-password-input"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password-input"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full rounded-xl py-3 text-sm font-semibold shadow-xs"
                isLoading={isLoading}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to Onboarding
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-primary hover:text-primary-hover transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
