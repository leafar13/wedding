// Define un nombre para el caché
const CACHE_NAME = 'mi-pwa-cache-v1';

// Lista de recursos a cachear
const urlsToCache = [
    '/',
    '/index.html',
    '/resources/boda.png',
    '/boda.png',
    '/resources/estilos.css',
    '/resources/cuenta_regresiva.js',
    '/resources/The%20Seasons%20Light.ttf',
    '/resources/The%20Seasons%20Regular.ttf'
  ];
  
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache);
        })
    );
  });

// Activación del Service Worker y limpieza de cachés antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        );
      })
  );
});


// Intercepción de solicitudes y manejo de caché
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
  
          const url = new URL(event.request.url);
          if (url.pathname === '/index.html') {
            const mensaje = url.searchParams.get('mensaje');
            const espacios = url.searchParams.get('espacios');
            const cacheKey = `${url.pathname}?mensaje=${mensaje}&espacios=${espacios}`;
            
            return caches.open(CACHE_NAME)
              .then(cache => {
                return fetch(event.request)
                  .then(response => {
                    cache.put(cacheKey, response.clone());
                    return response;
                  });
              });
          } else {
            return fetch(event.request);
          }
        })
    );
  });


  
  
  