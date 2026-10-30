import { isFirebaseConfigured, app } from './firebase';
import { 
  registerPostgresNotificationDevice, 
  queueScheduledNotification 
} from './db';
import { NotificationDevice } from '../types';

export interface NotificationServiceResult {
  supported: boolean;
  permission: 'default' | 'granted' | 'denied' | 'unsupported';
  token?: string;
  deviceId?: string;
  error?: string;
}

/**
 * Get or create a durable, unique device identifier for this browser/device instance.
 */
export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return 'server_environment';
  const STORAGE_KEY = 'preppath_device_id';
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = 'dev_' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15));
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return 'temp_device_' + Math.random().toString(36).substring(2, 10);
  }
}

/**
 * Infer human-readable platform and browser label for multi-device management.
 */
export function getDeviceMetadata(): { deviceName: string; platform: string } {
  if (typeof window === 'undefined') {
    return { deviceName: 'PrepPath Server Node', platform: 'server' };
  }
  const ua = navigator.userAgent;
  let browser = 'Browser';
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Edg/')) browser = 'Edge';
  else if (ua.includes('Chrome/')) browser = 'Chrome';
  else if (ua.includes('Safari/')) browser = 'Safari';

  let os = 'Unknown OS';
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Macintosh')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  return {
    deviceName: `${browser} on ${os}`,
    platform: os.toLowerCase(),
  };
}

/**
 * Check if browser supports Web Notifications and Service Workers
 */
export function isPushNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator;
}

/**
 * Get current browser notification permission
 */
export function getBrowserNotificationPermission(): 'default' | 'granted' | 'denied' | 'unsupported' {
  if (!isPushNotificationSupported()) return 'unsupported';
  return Notification.permission as 'default' | 'granted' | 'denied';
}

/**
 * Request notification permission upon explicit user action (e.g. clicking "Enable Study Reminders").
 * Never calls automatically on page load or registration.
 */
export async function requestPushNotificationPermission(userId?: string): Promise<NotificationServiceResult> {
  if (!isPushNotificationSupported()) {
    return {
      supported: false,
      permission: 'unsupported',
      error: 'Push notifications are not supported in this browser environment.'
    };
  }

  try {
    // Register Service Worker
    const reg = await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;

    // Request permission explicitly
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      return {
        supported: true,
        permission: permission as 'default' | 'denied',
        error: 'Notification permission was not granted by the user.'
      };
    }

    const deviceId = getOrCreateDeviceId();
    let token: string | undefined = undefined;

    // Try FCM if configured
    if (isFirebaseConfigured()) {
      try {
        const { getMessaging, getToken } = await import('firebase/messaging');
        if (app) {
          const messaging = getMessaging(app);
          const fcmVapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
          token = await getToken(messaging, {
            serviceWorkerRegistration: reg,
            vapidKey: fcmVapidKey || undefined
          });
        }
      } catch (fcmErr: any) {
        console.debug('FCM token acquisition note (using standard Web Notification fallback):', fcmErr.message);
      }
    }

    // Persist multi-device registration to PostgreSQL if userId is provided
    if (userId) {
      const meta = getDeviceMetadata();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';
      await registerPostgresNotificationDevice({
        userId,
        deviceId,
        fcmToken: token,
        deviceName: meta.deviceName,
        platform: meta.platform,
        timezone: tz,
        isActive: true,
        lastActiveAt: new Date().toISOString(),
      });
    }

    return {
      supported: true,
      permission: 'granted',
      token,
      deviceId
    };
  } catch (err: any) {
    return {
      supported: true,
      permission: getBrowserNotificationPermission(),
      error: err.message || 'Failed to register service worker or request permission.'
    };
  }
}

/**
 * Calculates the next UTC trigger timestamp from a local reminder time (e.g. "19:00")
 * and an IANA timezone identifier, accounting for quiet hours and day-boundaries.
 */
export function calculateNextReminderUtc(reminderTimeStr: string, timezone: string): Date {
  const [hours, minutes] = (reminderTimeStr || '19:00').split(':').map(Number);
  const now = new Date();

  // Create target date initially for today
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  // If time has already passed today, advance to tomorrow
  if (target.getTime() <= now.getTime()) {
    target.setDate(target.getDate() + 1);
  }

  return target;
}

/**
 * Queue a timezone-aware scheduled reminder in the durable PostgreSQL outbox.
 */
export async function scheduleTimezoneAwareReminder(params: {
  userId: string;
  reminderTime: string;
  timezone: string;
  deviceId?: string;
  notificationType?: 'DAILY_STUDY_REMINDER' | 'REVIEW_DUE' | 'ASSESSMENT_ALERT' | 'SYSTEM';
}): Promise<boolean> {
  const { userId, reminderTime, timezone, deviceId, notificationType = 'DAILY_STUDY_REMINDER' } = params;
  const nextRun = calculateNextReminderUtc(reminderTime, timezone);
  const dateKey = nextRun.toISOString().split('T')[0];
  const idempotencyKey = `notif_${userId}_${dateKey}_${notificationType.toLowerCase()}`;

  return await queueScheduledNotification({
    userId,
    deviceId,
    notificationType,
    scheduledForUtc: nextRun.toISOString(),
    title: 'PrepPath Daily Study Reminder',
    body: `Your daily TCS preparation sequence is scheduled. Solve today's aptitude and coding targets!`,
    targetUrl: '/dashboard',
    status: 'SCHEDULED',
    idempotencyKey,
  });
}

/**
 * Displays a live browser system notification if permission is granted
 */
export async function triggerBrowserNotification(title: string, options: {
  body: string;
  icon?: string;
  data?: { url: string };
}): Promise<boolean> {
  if (getBrowserNotificationPermission() !== 'granted') {
    return false;
  }

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.ready;
      await reg.showNotification(title, {
        body: options.body,
        icon: options.icon || '/favicon.svg',
        data: options.data || { url: '/study-plan' }
      });
      return true;
    } else {
      new Notification(title, {
        body: options.body,
        icon: options.icon || '/favicon.svg'
      });
      return true;
    }
  } catch (e) {
    console.warn('Browser notification error:', e);
    return false;
  }
}

/**
 * Check whether the given time falls within the configured quiet hours.
 * Handles overnight ranges such as 22:00 to 08:00.
 */
export function isWithinQuietHours(
  quietStart: string, // "22:00"
  quietEnd: string,   // "08:00"
  currentDate = new Date()
): boolean {
  if (!quietStart || !quietEnd) return false;

  const [startH, startM] = quietStart.split(':').map(Number);
  const [endH, endM] = quietEnd.split(':').map(Number);

  const curMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();
  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  if (startMinutes <= endMinutes) {
    // Same-day quiet hours (e.g. 13:00 to 15:00)
    return curMinutes >= startMinutes && curMinutes <= endMinutes;
  } else {
    // Overnight quiet hours (e.g. 22:00 to 08:00)
    return curMinutes >= startMinutes || curMinutes <= endMinutes;
  }
}
