import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Code2, ArrowRight, AlertCircle } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../../lib/firebase';
import { supabase, isPostgresConfigured } from '../../lib/supabase';
import { getPostgresProfile } from '../../lib/db';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../../components/common/Button';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useUserStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    setIsLoading(true);

    try {
      // 1. Try Supabase Auth if configured
      if (isPostgresConfigured() && supabase) {
        const { data, error: supaError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (supaError) {
          throw supaError;
        }

        if (data.user) {
          const profile = await getPostgresProfile(data.user.id);
          setUser(profile || {
            uid: data.user.id,
            email: data.user.email || email,
            displayName: data.user.user_metadata?.displayName || email.split('@')[0],
            targetTrack: 'NINJA',
            preferredLanguage: 'python',
            availablePreparationDays: 21,
            dailyAvailableMinutes: 90,
            proficiency: 'INTERMEDIATE',
            weakTopics: [],
            role: 'student',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
          navigate(from, { replace: true });
          return;
        }
      }

      // 2. Fallback to Firebase Auth if configured
      if (isFirebaseConfigured() && auth) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const fbUser = userCredential.user;
        const profile = await getPostgresProfile(fbUser.uid);
        setUser(profile || {
          uid: fbUser.uid,
          email: fbUser.email || email,
          displayName: fbUser.displayName || email.split('@')[0],
          targetTrack: 'NINJA',
          preferredLanguage: 'python',
          availablePreparationDays: 21,
          dailyAvailableMinutes: 90,
          proficiency: 'INTERMEDIATE',
          weakTopics: [],
          role: 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        navigate(from, { replace: true });
        return;
      }

      // 3. Honest configuration error if no real auth provider is configured
      setError(
        'Authentication provider is not configured. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or Firebase) in your .env environment file to sign in.'
      );
    } catch (err: any) {
      setError(err.message || 'Invalid email or password. Please verify your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-10 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[440px] space-y-6">
        {/* Typographic Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sign In to PrepPath
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Access your personalized study roadmap, saved drafts, and submissions.
          </p>
        </div>

        {/* Clean, minimal login card */}
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
                htmlFor="login-email-input"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email Address
              </label>
              <input
                id="login-email-input"
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
                  htmlFor="login-password-input"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[11px] font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="login-password-input"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                Sign In
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-primary hover:text-primary-hover transition-colors">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
