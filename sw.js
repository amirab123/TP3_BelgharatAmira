const CACHE_NAME = 'caquebec-cache-v1';
const urlsToCache = [
  
  '/TP3_BelgharatAmira/index.html',
  '/TP3_BelgharatAmira/style/css/main.css',
  '/TP3_BelgharatAmira/main.js',
  '/TP3_BelgharatAmira/manifest.json',
  '/TP3_BelgharatAmira/img/icon-192x192.png',
  '/TP3_BelgharatAmira/img/icon-512x512.png'
  
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        urlsToCache.map(url =>
          fetch(url)
            .then(response => {
              if (!response.ok) throw new Error(`Erreur fetch ${url}`);
              return cache.put(url, response.clone()); // ✅ clone obligatoire
            })
            .catch(err => console.warn('Impossible de mettre en cache', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ------------------------
// ACTIVATE
// ------------------------
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// ------------------------
// FETCH
// ------------------------
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      if (cacheRes) return cacheRes;

      return fetch(e.request)
        .then(networkRes => {
          if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
            return networkRes; // réponse non-cacheable
          }

          // On clone pour le cache
     const responseClone = networkRes.clone();
return caches.open(CACHE_NAME)
  .then(cache => cache.put(e.request, responseClone))
  .then(() => networkRes);
  
        })
        .catch(() => {
          // Fallback pour documents HTML
          if (e.request.destination === 'document') {
            return caches.match('/TP3_index.html');
          }
        });
    })
  );
});