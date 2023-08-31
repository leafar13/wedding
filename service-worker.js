// Define un nombre para el caché
const CACHE_NAME = 'mi-pwa-cache-v1';

// Lista de recursos a cachear
const urlsToCache = [
  '/',
  '/wedding.html',
  '/manifest.json',
  '/resources/boda.png',
  '/resources/estilos.css',
  '/resources/cuenta_regresiva.js',
  '/resources/The%20Seasons%20Light.ttf',
  '/resources/The%20Seasons%20Regular.ttf'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
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
        // Devuelve el recurso desde el caché si está disponible
        if (response) {
          return response;
        }
        // Si el recurso no está en el caché, realiza una solicitud de red
        return fetch(event.request);
      })
  );
});
