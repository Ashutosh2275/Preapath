import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { auth, isFirebaseConfigured } from '../../lib/firebase';
import { supabase, isPostgresConfigured } from '../../lib/supabase';
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

    try {
      // 1. Preferred Production Path: Supabase Auth (UUID matches PostgreSQL auth.uid())
      if (isPostgresConfigured() && supabase) {
        const { data, error: supaError } = await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              displayName: cleanName,
              targetTrack: selectedTrack,
            },
          },
        });

        if (supaError) {
          throw supaError;
        }

        if (data.user) {
          setUser({
            uid: data.user.id,
            email: data.user.email || cleanEmail,
            displayName: cleanName,
            targetTrack: selectedTrack,
            preferredLanguage: 'python',
            availablePreparationDays: 14,
            dailyAvailableMinutes: 90,
            proficiency: 'BEGINNER',
            weakTopics: [],
            role: 'student', // Roles are never client-assigned
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
          navigate('/onboarding', { state: { track: selectedTrack } });
          return;
        }
      }

      // 2. Alternative Auth: Firebase Auth
      if (isFirebaseConfigured() && auth) {
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
          role: 'student', // Roles are never client-assigned
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        navigate('/onboarding', { state: { track: selectedTrack } });
        return;
      }

      // 3. Neither provider configured: Honest configuration error instead of fake user
      setError(
        'Authentication provider is not configured. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or Firebase) in your .env environment file to register genuine persistent accounts.'
      );
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please check your network connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[460px] space-y-6">
        {/* Typographic Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Create your PrepPath Account
          </h1>
          <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            Start your structured preparation plan for TCS Ninja, Digital, or Prime assessments.
          </p>
        </div>

        {/* Focused Registration Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          {error && (
            <div 
              role="alert"
              className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label 
                htmlFor="display-name-input"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
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
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Used to personalize your study plan and dashboard greetings
              </p>
            </div>

            <div>
              <label 
                htmlFor="email-input"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
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
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="password-input"
                  className="block text-xs font-semibold text-slate-700"
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
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label 
                htmlFor="confirm-password-input"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
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
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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

          <div className="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-500">
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
