// PrepPath Service Worker — Web Push Notifications & Deep Links

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle incoming Web Push notifications
self.addEventListener('push', (event) => {
  let data = {
    title: 'PrepPath Study Reminder',
    body: 'Your daily TCS preparation sequence is ready. Keep your streak alive!',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    data: { url: '/study-plan' }
  };

  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch (e) {
      data.body = event.data.text() || data.body;
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || '/favicon.svg',
    badge: data.badge || '/favicon.svg',
    data: data.data || { url: '/study-plan' },
    actions: [
      { action: 'open_plan', title: 'Open Daily Plan' },
      { action: 'open_review', title: 'Review Queue' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle Notification Click & Navigation
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  let targetUrl = '/study-plan';
  if (event.action === 'open_review') {
    targetUrl = '/bookmarks';
  } else if (event.notification.data && event.notification.data.url) {
    targetUrl = event.notification.data.url;
  }

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url && 'focus' in client) {
          client.navigate(targetUrl);
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
