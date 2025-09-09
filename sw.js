const CACHE_NAME = 'caquebec-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style/css/main.css',
  '/main.js',
  '/manifest.json',
  '/img/icon-192x192.png',
  '/img/icon-512x512.png'
  
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.map(key => !cacheWhitelist.includes(key) ? caches.delete(key) : null))
  ));
});
