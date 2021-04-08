workbox.precaching.precacheAndRoute([{
    "revision": "17ecfaee522eaf5b3ad9c9aa1b2973cc",
    "url": "/manifest.json"
}]);

workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/', workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
}));

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

