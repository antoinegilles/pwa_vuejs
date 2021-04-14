self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.precacheAndRoute([{
    "revision": "17ecfaee522eaf5b3ad9c9aa1b2973cc",
    "url": "/manifest.json"
}]);

workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/', workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
}));

const bgSyncPlugin = new workbox.backgroundSync.Plugin('queueExample', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});
workbox.routing.registerRoute(
    'https://jsonplaceholder.typicode.com/posts',
    workbox.strategies.networkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

self.addEventListener("message", msg => {
    if (msg.data.action == "skipWaiting") {
        self.skipWaiting()
    }
})
