import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PlatformDisclaimer } from '../common/PlatformDisclaimer';

export const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors">
      <PlatformDisclaimer compact />
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
