let cache_name = "Watch";

const ASSETS = [
    "/offline.html",
    "/index.js",
    "/index.html",
    "/images/",
    "/assets/",
    "/"
];

self.addEventListener("install", event => {
    console.log("installing...");
    event.waitUntil(
        caches
            .open(cache_name)
            .then(cache => {
                return cache.addAll(assets);
            })
            .catch(err => console.log(err))
    );
});

// Chrome et d'autres navigateurs refusent l'install d'un PWA si un event listener fetch n'existe pas.
self.addEventListener("fetch", event => {
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/offline.html"))
            )
        );

});