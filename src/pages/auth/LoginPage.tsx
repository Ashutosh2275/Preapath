import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Code2, ArrowRight, AlertCircle, Sparkles, ShieldAlert } from 'lucide-react';
import { auth, isFirebaseConfigured } from '../../lib/firebase';
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

    if (isFirebaseConfigured() && auth) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const fbUser = userCredential.user;
        setUser({
          uid: fbUser.uid,
          email: fbUser.email || email,
          displayName: fbUser.displayName || email.split('@')[0],
          targetTrack: 'NINJA',
          preferredLanguage: 'python',
          availablePreparationDays: 14,
          dailyAvailableMinutes: 90,
          proficiency: 'INTERMEDIATE',
          weakTopics: ['Numerical Ability'],
          role: email.includes('admin') ? 'admin' : 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        navigate(from, { replace: true });
      } catch (err: any) {
        setError(err.message || 'Failed to sign in. Please check credentials.');
      } finally {
        setIsLoading(false);
      }
    } else {
      // Local authentication mode when Firebase project keys are not configured
      setTimeout(() => {
        const isAdmin = email.toLowerCase().includes('admin');
        setUser({
          uid: `local-user-${Date.now()}`,
          email,
          displayName: email.split('@')[0],
          targetTrack: 'DIGITAL',
          preferredLanguage: 'cpp',
          availablePreparationDays: 21,
          dailyAvailableMinutes: 120,
          proficiency: 'INTERMEDIATE',
          weakTopics: ['Dynamic Programming', 'Prefix Sum'],
          role: isAdmin ? 'admin' : 'student',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        setIsLoading(false);
        navigate(from, { replace: true });
      }, 400);
    }
  };

  const handleDemoStudent = () => {
    setUser({
      uid: 'demo-student-uid',
      email: 'student@preppath.dev',
      displayName: 'Aarav Sharma',
      targetTrack: 'DIGITAL',
      preferredLanguage: 'cpp',
      availablePreparationDays: 21,
      dailyAvailableMinutes: 90,
      proficiency: 'INTERMEDIATE',
      weakTopics: ['Dynamic Programming', 'Advanced Quant'],
      role: 'student',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    navigate('/dashboard');
  };

  const handleDemoAdmin = () => {
    setUser({
      uid: 'demo-admin-uid',
      email: 'admin@preppath.dev',
      displayName: 'PrepPath Admin',
      targetTrack: 'PRIME',
      preferredLanguage: 'python',
      availablePreparationDays: 30,
      dailyAvailableMinutes: 120,
      proficiency: 'ADVANCED',
      weakTopics: [],
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    navigate('/admin');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shadow-md">
            <Code2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Welcome back to PrepPath
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Sign in to access your personalized study roadmap, saved drafts, and submissions.
          </p>
        </div>

        {/* Quick Demo Access Bar */}
        <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 p-3.5 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-indigo-900 dark:text-indigo-200">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Instant Demo Evaluation
            </span>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded font-mono">
              1-Click
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDemoStudent}
              className="text-xs w-full bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
            >
              Demo Student
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDemoAdmin}
              leftIcon={<ShieldAlert className="w-3 h-3 text-purple-600" />}
              className="text-xs w-full bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800"
            >
              Demo Admin
            </Button>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-start gap-2 text-xs text-rose-700 dark:text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@college.edu"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-primary hover:text-primary-hover"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full mt-2"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            Don't have an account yet?{' '}
            <Link to="/signup" className="font-semibold text-primary hover:text-primary-hover">
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
