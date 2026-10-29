import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
