import { isFirebaseConfigured, app } from './firebase';

export interface NotificationServiceResult {
  supported: boolean;
  permission: 'default' | 'granted' | 'denied' | 'unsupported';
  token?: string;
  error?: string;
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
 * Request notification permission upon explicit user action (e.g. clicking "Enable Reminders").
 * Never calls automatically on page load.
 */
export async function requestPushNotificationPermission(): Promise<NotificationServiceResult> {
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

    return {
      supported: true,
      permission: 'granted',
      token
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
