workbox.precaching.precacheAndRoute([{
    "revision": "17ecfaee522eaf5b3ad9c9aa1b2973cc",
    "url": "/manifest.json"
}]);

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});


const placeholderHandler = workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache',
});

workbox.routing.registerRoute('https://jsonplaceholder.typicode.com/todos/1', args => {
    return placeholderHandler.handle(args).then(response => {
        console.log("Online: Fetch was called successful");
        return response;
    }).catch(err => {
        console.log("no cache data");
    });
});

