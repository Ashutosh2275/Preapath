import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { ProtectedRoute } from './components/common/ProtectedRoute';

// Public Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { AboutPage } from './pages/static/AboutPage';
import { PrivacyPage } from './pages/static/PrivacyPage';
import { TermsPage } from './pages/static/TermsPage';

// Authenticated Student Pages
import { OnboardingPage } from './pages/onboarding/OnboardingPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { StudyPlanPage } from './pages/study-plan/StudyPlanPage';
import { ProblemListPage } from './pages/problems/ProblemListPage';
import { ProblemDetailPage } from './pages/problems/ProblemDetailPage';
import { SubmissionsPage } from './pages/submissions/SubmissionsPage';
import { AssessmentListPage } from './pages/assessments/AssessmentListPage';
import { AssessmentDetailPage } from './pages/assessments/AssessmentDetailPage';
import { ProgressPage } from './pages/progress/ProgressPage';
import { BookmarksPage } from './pages/bookmarks/BookmarksPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { SettingsPage } from './pages/settings/SettingsPage';

// Admin Pages
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminQuestionEditorPage } from './pages/admin/AdminQuestionEditorPage';
import { AdminAuditLogPage } from './pages/admin/AdminAuditLogPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Public Routes */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        
        {/* Problem Bank is publicly browsable */}
        <Route path="problems" element={<ProblemListPage />} />

        {/* Authenticated Student Routes */}
        <Route
          path="onboarding"
          element={
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="study-plan"
          element={
            <ProtectedRoute>
              <StudyPlanPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="problems/:problemId"
          element={
            <ProtectedRoute>
              <ProblemDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="submissions"
          element={
            <ProtectedRoute>
              <SubmissionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="assessments"
          element={
            <ProtectedRoute>
              <AssessmentListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="assessments/:assessmentId"
          element={
            <ProtectedRoute>
              <AssessmentDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="progress"
          element={
            <ProtectedRoute>
              <ProgressPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="bookmarks"
          element={
            <ProtectedRoute>
              <BookmarksPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Administrative Routes */}
        <Route
          path="admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/questions"
          element={
            <ProtectedRoute requireAdmin>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/questions/new"
          element={
            <ProtectedRoute requireAdmin>
              <AdminQuestionEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/questions/:questionId"
          element={
            <ProtectedRoute requireAdmin>
              <AdminQuestionEditorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/audit-log"
          element={
            <ProtectedRoute requireAdmin>
              <AdminAuditLogPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
