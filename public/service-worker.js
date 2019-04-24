
// Name our cache
var CACHE_NAME = 'pwa-cache-v1';

// Delete old caches that are not our current one!
window.self.addEventListener("activate", event => {
   console.log('Service Worker: Activating....');

  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

 CACHE_NAME = 'pwgen-cache-v1';
var urlsToCache = [
'/',
'index.html',
'../src/App.js',
'manifest.json',
'serviceWorker.js'
];
console.log('loading sw');

window.self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('installing service worker');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        var x = cache.addAll(urlsToCache);
        return x;
      })
  );
});

/**
 * fetch
 */
window.self.addEventListener('fetch', function (event) {
    console.log('Service Worker: Fetch', event.request.url);
    console.log("Url", event.request.url);

  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return  fetch(event.request);
      }
      )
  );
});
