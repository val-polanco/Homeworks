const CACHE_NAME = "contactos-cache-v1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                "/",
                "/manifest.json",
                "/icons.svg"
            ]);
        })
    );

    self.skipWaiting();
});


self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            );
        })
    );

    self.clients.claim();
});


self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }


    // HTML - NETWORK FIRST
    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copia = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, copia);
                    });

                    return response;
                })
                .catch(() => {
                    return caches.match(request)
                        .then((cached) => cached || caches.match("/"));
                })
        );

        return;
    }


    // JAVASCRIPT Y CSS - CACHE FIRST
    if (
        request.destination === "script" ||
        request.destination === "style"
    ) {
        event.respondWith(
            caches.match(request).then((cached) => {
                if (cached) {
                    return cached;
                }

                return fetch(request).then((response) => {
                    const copia = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, copia);
                    });

                    return response;
                });
            })
        );

        return;
    }


    // IMÁGENES - STALE WHILE REVALIDATE
    if (request.destination === "image") {
        event.respondWith(
            caches.match(request).then((cached) => {

                const networkResponse = fetch(request)
                    .then((response) => {
                        const copia = response.clone();

                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(request, copia);
                        });

                        return response;
                    })
                    .catch(() => cached);

                return cached || networkResponse;
            })
        );

        return;
    }


    // RESTO DE RECURSOS - NETWORK FIRST
    event.respondWith(
        fetch(request)
            .catch(() => caches.match(request))
    );
});