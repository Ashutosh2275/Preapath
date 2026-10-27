import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Calendar, 
  Award, 
  BarChart2, 
  Bookmark, 
  ShieldAlert, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Settings,
  Sparkles
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('preppath_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('preppath_theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('preppath_theme', 'dark');
      setIsDark(true);
    }
  };

  const handleSignOut = () => {
    setUserDropdownOpen(false);
    setUser(null);
    navigate('/');
  };

  const handleGetStarted = () => {
    if (!user) {
      navigate('/signup');
    } else if (!user.targetTrack || !user.proficiency) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  const studentLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: Sparkles },
    { label: 'Study Plan', path: '/study-plan', icon: Calendar },
    { label: 'Problems', path: '/problems', icon: Code2 },
    { label: 'Mock Tests', path: '/assessments', icon: Award },
    { label: 'Progress', path: '/progress', icon: BarChart2 },
    { label: 'Revision', path: '/bookmarks', icon: Bookmark },
  ];

  const isActive = (path: string) => {
    if (path === '/problems') return location.pathname.startsWith('/problems');
    if (path === '/assessments') return location.pathname.startsWith('/assessments');
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:bg-primary-hover group-hover:scale-105 transition-all">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight leading-none">
                  PrepPath
                </span>
                <span className="hidden sm:block text-[11px] font-medium text-slate-400 dark:text-slate-500 tracking-wide mt-1">
                  TCS Preparation
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            {user ? (
              <div className="hidden md:flex items-center gap-1.5 ml-2">
                {studentLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  );
                })}

                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname.startsWith('/admin')
                        ? 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 font-semibold shadow-xs'
                        : 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30'
                    }`}
                  >
                    <ShieldAlert className="w-4 h-4" />
                    Admin
                  </Link>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center ml-2">
                <Link
                  to="/problems"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/problems')
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  Problems
                </Link>
              </div>
            )}
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2.5 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-sm">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-slate-700 dark:text-slate-300 max-w-[130px] truncate">
                    {user.displayName || user.email}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-52 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-1 z-50 animate-in fade-in slide-in-from-top-1"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-3.5 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                        {user.displayName || 'PrepPath Student'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Profile Settings
                    </Link>

                    <Link
                      to="/settings"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    >
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                      Account Preferences
                    </Link>

                    {user.role === 'admin' && (
                      <Link
                        to="/admin"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-3.5 py-2 text-xs text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30"
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Admin Content Portal
                      </Link>
                    )}

                    <div className="border-t border-slate-100 dark:border-slate-800 my-1" />

                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full text-left px-3.5 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <Button variant="ghost" size="md" className="text-sm font-medium px-4 py-2 rounded-xl">
                    Sign In
                  </Button>
                </Link>
                <Button variant="primary" size="md" className="text-sm font-semibold px-5 py-2.5 rounded-xl shadow-xs" onClick={handleGetStarted}>
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1">
          {user ? (
            studentLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium ${
                    active
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })
          ) : (
            <>
              <Link
                to="/problems"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <Code2 className="w-4 h-4" />
                Problems
              </Link>
              <div className="pt-2 flex flex-col gap-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Sign In
                  </Button>
                </Link>
                <Button variant="primary" size="sm" className="w-full text-xs" onClick={() => { setMobileMenuOpen(false); handleGetStarted(); }}>
                  Get Started
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
