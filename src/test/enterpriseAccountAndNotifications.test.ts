import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUserStore } from '../stores/useUserStore';
import { 
  getOrCreateDeviceId, 
  getDeviceMetadata, 
  calculateNextReminderUtc, 
  isWithinQuietHours 
} from '../lib/notificationService';
import { UserProfile, TargetTrack, ProgrammingLanguage } from '../types';

describe('Enterprise Account Management, Mandatory Onboarding, and Notifications', () => {
  beforeEach(() => {
    localStorage.clear();
    useUserStore.getState().resetAccountData();
    vi.clearAllMocks();
  });

  describe('1. Mandatory First-Time Onboarding & Flow Control', () => {
    it('initializes a newly registered student with onboardingCompleted = false', () => {
      const newUser: UserProfile = {
        uid: 'user_new_101',
        email: 'student1@university.edu',
        displayName: 'New Candidate',
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

      useUserStore.getState().setUser(newUser);
      const user = useUserStore.getState().user;

      expect(user).not.toBeNull();
      expect(user?.onboardingCompleted).toBe(false);
      expect(user?.role).toBe('student');
    });

    it('marks onboardingCompleted = true only upon explicit user confirmation and save', async () => {
      const newUser: UserProfile = {
        uid: 'user_onboard_202',
        email: 'priya.sharma@college.in',
        displayName: 'Priya Sharma',
        targetTrack: 'NINJA',
        preferredLanguage: 'python',
        availablePreparationDays: 30,
        dailyAvailableMinutes: 90,
        proficiency: 'INTERMEDIATE',
        weakTopics: ['Numerical Ability', 'Matrix Traversal'],
        role: 'student',
        onboardingCompleted: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      useUserStore.getState().setUser(newUser);

      // Student completes onboarding selections
      await useUserStore.getState().updateProfile({
        targetTrack: 'DIGITAL',
        preferredLanguage: 'java',
        availablePreparationDays: 45,
        dailyAvailableMinutes: 90,
        daysAvailablePerWeek: 6,
        prepIntensity: 'INTENSIVE',
        onboardingCompleted: true,
        onboardingVersion: 1,
      });

      const updated = useUserStore.getState().user;
      expect(updated?.onboardingCompleted).toBe(true);
      expect(updated?.targetTrack).toBe('DIGITAL');
      expect(updated?.preferredLanguage).toBe('java');
      expect(updated?.daysAvailablePerWeek).toBe(6);
      expect(updated?.prepIntensity).toBe('INTENSIVE');
    });

    it('preserves returning account preferences without resetting to onboarding defaults', () => {
      const returningUser: UserProfile = {
        uid: 'user_veteran_303',
        email: 'rohit.kumar@institute.edu',
        displayName: 'Rohit Kumar',
        targetTrack: 'PRIME',
        preferredLanguage: 'cpp',
        availablePreparationDays: 60,
        dailyAvailableMinutes: 120,
        daysAvailablePerWeek: 7,
        proficiency: 'ADVANCED',
        weakTopics: ['Dynamic Programming'],
        role: 'student',
        timezone: 'Asia/Kolkata',
        onboardingCompleted: true,
        createdAt: '2026-09-01T00:00:00Z',
        updatedAt: '2026-10-15T00:00:00Z',
      };

      useUserStore.getState().setUser(returningUser);
      const current = useUserStore.getState().user;

      expect(current?.onboardingCompleted).toBe(true);
      expect(current?.targetTrack).toBe('PRIME');
      expect(current?.preferredLanguage).toBe('cpp');
      expect(current?.dailyAvailableMinutes).toBe(120);
    });
  });

  describe('2. Provider-Backed Sign Out & Cache Clearance', () => {
    it('signOutUser terminates local state and removes account-specific localStorage cache', async () => {
      const user: UserProfile = {
        uid: 'user_session_404',
        email: 'test@preppath.in',
        displayName: 'Test Student',
        targetTrack: 'NINJA',
        preferredLanguage: 'python',
        availablePreparationDays: 21,
        dailyAvailableMinutes: 60,
        proficiency: 'INTERMEDIATE',
        weakTopics: [],
        role: 'student',
        onboardingCompleted: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      useUserStore.getState().setUser(user);
      localStorage.setItem('preppath_user_storage_v2', JSON.stringify({ state: { user } }));
      localStorage.setItem('preppath_onboarding_draft', JSON.stringify({ step: 3 }));

      expect(useUserStore.getState().user).not.toBeNull();

      // Execute actual sign out
      await useUserStore.getState().signOutUser();

      expect(useUserStore.getState().user).toBeNull();
      expect(localStorage.getItem('preppath_onboarding_draft')).toBeNull();
    });

    it('clearLocalCacheOnly clears browser storage while preserving user state for re-sync', async () => {
      const user: UserProfile = {
        uid: 'user_cache_505',
        email: 'sync@preppath.in',
        displayName: 'Cached Student',
        targetTrack: 'DIGITAL',
        preferredLanguage: 'python',
        availablePreparationDays: 30,
        dailyAvailableMinutes: 60,
        proficiency: 'INTERMEDIATE',
        weakTopics: [],
        role: 'student',
        onboardingCompleted: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      useUserStore.getState().setUser(user);
      localStorage.setItem('preppath_onboarding_draft', '{"temp":true}');

      await useUserStore.getState().clearLocalCacheOnly();

      // Local draft is removed
      expect(localStorage.getItem('preppath_onboarding_draft')).toBeNull();
      // Server-backed in-memory state remains available
      expect(useUserStore.getState().user?.email).toBe('sync@preppath.in');
    });
  });

  describe('3. Multi-Device Registration & Subscription Isolation', () => {
    it('generates a durable device identifier per browser instance', () => {
      const deviceId1 = getOrCreateDeviceId();
      expect(deviceId1).toBeTruthy();
      expect(typeof deviceId1).toBe('string');

      // Subsequent calls return the same cached device ID
      const deviceId2 = getOrCreateDeviceId();
      expect(deviceId2).toBe(deviceId1);
    });

    it('detects platform metadata without crashing', () => {
      const meta = getDeviceMetadata();
      expect(meta).toHaveProperty('deviceName');
      expect(meta).toHaveProperty('platform');
      expect(typeof meta.deviceName).toBe('string');
    });
  });

  describe('4. Timezone-Aware Notification Scheduling & Quiet Hours', () => {
    it('calculates the next UTC trigger time correctly', () => {
      const timezone = 'Asia/Kolkata';
      const reminderTime = '19:00'; // 7:00 PM

      const targetDate = calculateNextReminderUtc(reminderTime, timezone);
      expect(targetDate instanceof Date).toBe(true);
      expect(targetDate.getHours()).toBe(19);
      expect(targetDate.getMinutes()).toBe(0);
      expect(targetDate.getTime()).toBeGreaterThan(Date.now() - 1000); // In the future or exact
    });

    it('correctly evaluates overnight quiet hours (e.g. 22:00 to 08:00)', () => {
      const quietStart = '22:00';
      const quietEnd = '08:00';

      // 23:30 is in quiet hours
      const midnightDate = new Date();
      midnightDate.setHours(23, 30, 0, 0);
      expect(isWithinQuietHours(quietStart, quietEnd, midnightDate)).toBe(true);

      // 03:00 is in quiet hours
      const earlyMorningDate = new Date();
      earlyMorningDate.setHours(3, 0, 0, 0);
      expect(isWithinQuietHours(quietStart, quietEnd, earlyMorningDate)).toBe(true);

      // 14:00 is NOT in quiet hours
      const afternoonDate = new Date();
      afternoonDate.setHours(14, 0, 0, 0);
      expect(isWithinQuietHours(quietStart, quietEnd, afternoonDate)).toBe(false);
    });

    it('correctly evaluates daytime quiet hours (e.g. 13:00 to 15:00)', () => {
      const quietStart = '13:00';
      const quietEnd = '15:00';

      const duringNap = new Date();
      duringNap.setHours(14, 0, 0, 0);
      expect(isWithinQuietHours(quietStart, quietEnd, duringNap)).toBe(true);

      const afterNap = new Date();
      afterNap.setHours(16, 0, 0, 0);
      expect(isWithinQuietHours(quietStart, quietEnd, afterNap)).toBe(false);
    });
  });
});
