import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../../stores/useUserStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
}) => {
  const { user } = useUserStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Redirect new users who have not completed mandatory preparation onboarding
  if (!user.onboardingCompleted && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  // Prevent returning users with completed onboarding from re-running initial onboarding
  if (user.onboardingCompleted && location.pathname === '/onboarding') {
    return <Navigate to="/dashboard" replace />;
  }

  // Admin access validation
  if (requireAdmin && user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
