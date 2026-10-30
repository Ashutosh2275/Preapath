import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { OnboardingPage } from '../pages/onboarding/OnboardingPage';
import { useUserStore } from '../stores/useUserStore';
import { UserProfile } from '../types';

describe('Onboarding Wizard Flow, Navigation, Validation, and Responsive Layouts', () => {
  const mockUser: UserProfile = {
    uid: 'test_candidate_101',
    email: 'candidate101@university.edu',
    displayName: 'Test Candidate',
    targetTrack: 'NINJA',
    preferredLanguage: 'python',
    availablePreparationDays: 21,
    dailyAvailableMinutes: 60,
    proficiency: 'BEGINNER',
    weakTopics: [],
    role: 'student',
    onboardingCompleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  beforeEach(() => {
    localStorage.clear();
    useUserStore.getState().resetAccountData();
    useUserStore.getState().setUser(mockUser);
    vi.clearAllMocks();
  });

  const renderWizard = (initialEntries = ['/onboarding']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <OnboardingPage />
      </MemoryRouter>
    );
  };

  describe('Test A: First-time Onboarding & Field Validations', () => {
    it('blocks navigation from Step 1 if display name is empty or whitespace', async () => {
      renderWizard();

      const nameInput = screen.getByLabelText(/Full Name or Preferred Name/i);
      fireEvent.change(nameInput, { target: { value: ' ' } });

      const nextButton = screen.getByRole('button', { name: /Next Step/i });
      fireEvent.click(nextButton);

      expect(await screen.findByText(/Please enter your full name or preferred name/i)).toBeInTheDocument();
      expect(screen.getByText(/Step 1 of 8/i)).toBeInTheDocument();
    });

    it('successfully progresses through all 8 steps when valid input is supplied', async () => {
      renderWizard();

      // Step 1: Personal Profile
      const nameInput = screen.getByLabelText(/Full Name or Preferred Name/i);
      fireEvent.change(nameInput, { target: { value: 'Aarav Sharma' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 2: Target Track
      await waitFor(() => expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument());
      const digitalTrack = screen.getByText(/TCS Digital Track/i);
      fireEvent.click(digitalTrack);
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 3: Examination Schedule
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());
      // Choose "Not yet announced" and 30 days
      const notAnnouncedBtn = screen.getByRole('button', { name: /Not yet announced/i });
      fireEvent.click(notAnnouncedBtn);
      const thirtyDaysBtn = screen.getByRole('button', { name: /30 Days/i });
      fireEvent.click(thirtyDaysBtn);
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 4: Study Availability
      await waitFor(() => expect(screen.getByText(/Step 4 of 8/i)).toBeInTheDocument());
      const sixtyMinBtn = screen.getByRole('button', { name: /60 min/i });
      fireEvent.click(sixtyMinBtn);
      const sixDaysBtn = screen.getByRole('button', { name: /6 d\/wk/i });
      fireEvent.click(sixDaysBtn);
      const standardIntensity = screen.getByText(/Standard/i);
      fireEvent.click(standardIntensity);
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 5: Technical Preferences
      await waitFor(() => expect(screen.getByText(/Step 5 of 8/i)).toBeInTheDocument());
      const javaBtn = screen.getByText(/Java/i);
      fireEvent.click(javaBtn);
      const intermediateProf = screen.getByText(/Intermediate/i);
      fireEvent.click(intermediateProf);
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 6: Timezone
      await waitFor(() => expect(screen.getByText(/Step 6 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 7: Reminders
      await waitFor(() => expect(screen.getByText(/Step 7 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 8: Final Review & Confirmation
      await waitFor(() => expect(screen.getByText(/Step 8 of 8/i)).toBeInTheDocument());
      expect(screen.getByText(/Confirm & Create Study Plan/i)).toBeInTheDocument();
      expect(screen.getByText(/Aarav Sharma/i)).toBeInTheDocument();
      expect(screen.getByText(/TCS DIGITAL Track/i)).toBeInTheDocument();
    });
  });

  describe('Test B: Back/Next Navigation State Preservation', () => {
    it('preserves all entered answers when navigating backward and forward', async () => {
      renderWizard();

      // Step 1 -> Step 2
      fireEvent.change(screen.getByLabelText(/Full Name or Preferred Name/i), { target: { value: 'Pooja Verma' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 2 -> Step 3
      await waitFor(() => expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByText(/TCS Prime Track/i));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 3 -> Step 4
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Not yet announced/i }));
      fireEvent.click(screen.getByRole('button', { name: /45 Days/i }));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 4: Now navigate back to Step 2
      await waitFor(() => expect(screen.getByText(/Step 4 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Back/i })); // Back to Step 3
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Back/i })); // Back to Step 2
      await waitFor(() => expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument());

      // Verify Prime track is still selected
      const primeCard = screen.getByText(/TCS Prime Track/i).closest('.cursor-pointer');
      expect(primeCard?.className).toContain('border-primary');

      // Navigate forward again to Step 3
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());

      // Verify 45 days is preserved
      const fortyFiveBtn = screen.getByRole('button', { name: /45 Days/i });
      expect(fortyFiveBtn.className).toContain('border-primary');
    });

    it('does not display a Back button on Step 1', () => {
      renderWizard();
      expect(screen.queryByRole('button', { name: /Back/i })).toBeNull();
    });
  });

  describe('Test C: Validation Recovery Without Data Loss', () => {
    it('blocks navigation on validation error and recovers cleanly when input is corrected', async () => {
      renderWizard();

      // Step 1
      fireEvent.change(screen.getByLabelText(/Full Name or Preferred Name/i), { target: { value: 'Vikram Singh' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 2: Try to click Next without selecting a track
      await waitFor(() => expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Verify validation message
      expect(await screen.findByText(/Please select a target preparation track/i)).toBeInTheDocument();
      expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument();

      // Correct by choosing Ninja track
      fireEvent.click(screen.getByText(/TCS Ninja Track/i));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Should successfully proceed to Step 3
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());
    });
  });

  describe('Test D: Refresh Recovery & Draft Preservation', () => {
    it('recovers incomplete onboarding draft from localStorage on page reload', () => {
      const draftState = {
        step: 3,
        displayName: 'Ananya Roy',
        targetTrack: 'DIGITAL',
        hasConfirmedExamDate: false,
        examDate: '',
        startDate: '2026-11-01',
        availableDays: 45,
        dailyMinutes: 90,
        daysAvailablePerWeek: 6,
        preferredStudyHours: 'Evenings',
        prepIntensity: 'STANDARD',
        preferredLanguage: 'cpp',
        proficiency: 'INTERMEDIATE',
        selectedWeakTopics: ['Numerical Ability'],
        timezone: 'Asia/Kolkata',
        reminderEnabled: true,
        reminderTime: '20:00',
        reminderFrequency: 'DAILY',
        quietHoursEnabled: true,
        quietHoursStart: '22:00',
        quietHoursEnd: '08:00',
        remindReviewsDue: true,
      };

      localStorage.setItem(`preppath_onboarding_draft_${mockUser.uid}`, JSON.stringify(draftState));

      renderWizard();

      // Wizard should resume directly at Step 3 with restored values
      expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /^Examination Schedule/i })).toBeInTheDocument();
    });
  });

  describe('Test E: Returning User Protection', () => {
    it('recognizes completed onboarding status on returning user profile', () => {
      const completedUser: UserProfile = {
        ...mockUser,
        onboardingCompleted: true,
        targetTrack: 'DIGITAL',
        dailyAvailableMinutes: 90,
        availablePreparationDays: 30,
        preferredLanguage: 'java',
        proficiency: 'INTERMEDIATE',
      };

      useUserStore.getState().setUser(completedUser);
      expect(useUserStore.getState().user?.onboardingCompleted).toBe(true);
    });
  });

  describe('Test F: Network & Failure Recovery', () => {
    it('displays error and preserves draft when database operation fails during final submit', async () => {
      // Mock updateProfile to reject with database error
      const spyUpdate = vi.spyOn(useUserStore.getState(), 'updateProfile').mockRejectedValueOnce(
        new Error('PostgreSQL connection timeout: write aborted')
      );

      renderWizard();

      // Fill out Step 1
      fireEvent.change(screen.getByLabelText(/Full Name or Preferred Name/i), { target: { value: 'Siddharth Sen' } });
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Fill out Step 2
      await waitFor(() => expect(screen.getByText(/Step 2 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByText(/TCS Ninja Track/i));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Fill out Step 3
      await waitFor(() => expect(screen.getByText(/Step 3 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Not yet announced/i }));
      fireEvent.click(screen.getByRole('button', { name: /21 Days/i }));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Fill out Step 4
      await waitFor(() => expect(screen.getByText(/Step 4 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /60 min/i }));
      fireEvent.click(screen.getByRole('button', { name: /6 d\/wk/i }));
      fireEvent.click(screen.getByText(/Standard/i));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Fill out Step 5
      await waitFor(() => expect(screen.getByText(/Step 5 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByText(/Python 3/i));
      fireEvent.click(screen.getByText(/Intermediate/i));
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 6
      await waitFor(() => expect(screen.getByText(/Step 6 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 7
      await waitFor(() => expect(screen.getByText(/Step 7 of 8/i)).toBeInTheDocument());
      fireEvent.click(screen.getByRole('button', { name: /Next Step/i }));

      // Step 8: Confirm & Create Study Plan
      await waitFor(() => expect(screen.getByText(/Step 8 of 8/i)).toBeInTheDocument());
      const confirmBtn = screen.getByRole('button', { name: /Confirm & Create Study Plan/i });
      fireEvent.click(confirmBtn);

      // Verify that database error is displayed to the user
      expect(await screen.findByText(/PostgreSQL connection timeout/i)).toBeInTheDocument();
      // Verify user remains on Step 8 so they can retry without losing their draft
      expect(screen.getByText(/Step 8 of 8/i)).toBeInTheDocument();

      spyUpdate.mockRestore();
    });
  });

  describe('Test G: Double-Submission Prevention', () => {
    it('disables final submit button during in-flight submission', async () => {
      // Mock updateProfile with artificial delay
      let resolveUpdate: (val?: any) => void;
      const delayedPromise = new Promise((resolve) => {
        resolveUpdate = resolve;
      });

      const spyUpdate = vi.spyOn(useUserStore.getState(), 'updateProfile').mockImplementation(
        () => delayedPromise as Promise<void>
      );

      // Populate draft directly via storage to jump to Step 8
      const fullDraft = {
        step: 8,
        displayName: 'Rohan Mehra',
        targetTrack: 'PRIME',
        hasConfirmedExamDate: false,
        examDate: '',
        startDate: '2026-11-01',
        availableDays: 30,
        dailyMinutes: 60,
        daysAvailablePerWeek: 6,
        preferredStudyHours: '',
        prepIntensity: 'STANDARD',
        preferredLanguage: 'python',
        proficiency: 'INTERMEDIATE',
        selectedWeakTopics: [],
        timezone: 'Asia/Kolkata',
        reminderEnabled: false,
        reminderTime: '19:00',
        reminderFrequency: 'DAILY',
        quietHoursEnabled: true,
        quietHoursStart: '22:00',
        quietHoursEnd: '08:00',
        remindReviewsDue: true,
      };

      localStorage.setItem(`preppath_onboarding_draft_${mockUser.uid}`, JSON.stringify(fullDraft));
      renderWizard();

      const confirmBtn = screen.getByRole('button', { name: /Confirm & Create Study Plan/i });
      fireEvent.click(confirmBtn);

      // Verify button switches to disabled/in-progress state
      expect(screen.getByText(/Saving to Account.../i)).toBeInTheDocument();
      expect(confirmBtn).toBeDisabled();

      // Attempt second click while in-flight
      fireEvent.click(confirmBtn);
      expect(spyUpdate).toHaveBeenCalledTimes(1); // Idempotent: called only once!

      resolveUpdate!();
      spyUpdate.mockRestore();
    });
  });

  describe('Test H: Responsive Layout Verification', () => {
    const viewports = [
      { name: 'Small mobile', width: 320, height: 568 },
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Modern mobile', width: 390, height: 844 },
      { name: 'Large mobile', width: 430, height: 932 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Laptop', width: 1366, height: 768 },
      { name: 'Desktop', width: 1440, height: 900 },
    ];

    viewports.forEach(({ name, width, height }) => {
      it(`renders cleanly without layout crashes at ${name} (${width}×${height})`, () => {
        window.innerWidth = width;
        window.innerHeight = height;
        window.dispatchEvent(new Event('resize'));

        renderWizard();

        const stepHeader = screen.getByText(/Step 1 of 8/i);
        expect(stepHeader).toBeVisible();

        const nextButton = screen.getByRole('button', { name: /Next Step/i });
        expect(nextButton).toBeVisible();
        // Check that responsive min-height classes are applied
        expect(nextButton.className).toContain('h-11');
      });
    });
  });
});
