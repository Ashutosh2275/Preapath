import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Calendar, 
  BarChart2, 
  ShieldAlert, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Settings,
  Sparkles,
  Bell
} from 'lucide-react';
import { useUserStore } from '../../stores/useUserStore';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, inAppNotifications, markNotificationRead } = useUserStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const unreadCount = (inAppNotifications || []).filter(n => !n.read).length;

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

  // Section 2: Consolidated Minimal Navigation Structure
  const studentLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: Sparkles },
    { label: 'Practice', path: '/practice', icon: Code2 },
    { label: 'Study Plan', path: '/study-plan', icon: Calendar },
    { label: 'Progress', path: '/progress', icon: BarChart2 },
    { label: 'Profile', path: '/profile', icon: User },
  ];

  const isActive = (path: string) => {
    if (path === '/practice') {
      return location.pathname.startsWith('/practice') || location.pathname.startsWith('/problems');
    }
    if (path === '/study-plan') return location.pathname.startsWith('/study-plan');
    if (path === '/progress') {
      return location.pathname.startsWith('/progress') || location.pathname.startsWith('/submissions');
    }
    if (path === '/profile') return location.pathname.startsWith('/profile');
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:bg-primary-hover group-hover:scale-105 transition-all">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                  PrepPath
                </span>
                <span className="hidden sm:block text-[11px] font-medium text-slate-400 tracking-wide mt-1">
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
                          ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
                        ? 'bg-purple-50 text-purple-700 font-semibold shadow-xs'
                        : 'text-purple-600 hover:bg-purple-50'
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
                  to="/practice"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/practice') || location.pathname.startsWith('/problems')
                      ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  Practice
                </Link>
              </div>
            )}
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* In-App Notifications Drawer / Popup */}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                  aria-label="Open notifications"
                  className="p-2.5 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {notifDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in"
                    onMouseLeave={() => setNotifDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
                      <span className="font-bold text-slate-900">
                        Study Reminders ({unreadCount} unread)
                      </span>
                      <Link 
                        to="/settings" 
                        onClick={() => setNotifDropdownOpen(false)}
                        className="text-primary hover:underline text-[11px]"
                      >
                        Settings
                      </Link>
                    </div>

                    <div className="space-y-1.5 max-h-60 overflow-y-auto">
                      {(inAppNotifications || []).slice(0, 5).map((notif) => (
                        <div
                          key={notif.id}
                          onClick={() => {
                            markNotificationRead(notif.id);
                            setNotifDropdownOpen(false);
                            navigate(notif.targetUrl || '/study-plan');
                          }}
                          className={`p-2.5 rounded-xl text-left cursor-pointer transition-colors ${
                            notif.read
                              ? 'text-slate-500 hover:bg-slate-50'
                              : 'bg-primary/5 text-slate-900 font-medium hover:bg-primary/10'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-semibold mb-0.5">
                            <span className="truncate max-w-[200px]">{notif.title}</span>
                            {!notif.read && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-2">
                            {notif.body}
                          </p>
                        </div>
                      ))}

                      {(!inAppNotifications || inAppNotifications.length === 0) && (
                        <div className="py-6 text-center text-xs text-slate-400">
                          No notifications yet.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium text-slate-700 max-w-[130px] truncate">
                    {user.displayName || user.email}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in slide-in-from-top-1"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-3.5 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-900 truncate">
                        {user.displayName || 'PrepPath Student'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Profile & Goals
                    </Link>

                    <Link
                      to="/settings"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      <Settings className="w-3.5 h-3.5 text-slate-400" />
                      Account Preferences
                    </Link>

                    {user.role === 'admin' && (
                      <Link
                        to="/admin"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-3.5 py-2 text-xs text-purple-600 hover:bg-purple-50"
                      >
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Admin Content Portal
                      </Link>
                    )}

                    <div className="border-t border-slate-100 my-1" />

                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full text-left px-3.5 py-2 text-xs text-rose-600 hover:bg-rose-50"
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
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
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
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
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
                to="/practice"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <Code2 className="w-4 h-4" />
                Practice
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
