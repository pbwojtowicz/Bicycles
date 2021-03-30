const staticBicyclePwa = "BicyclesPWA"
const assets = [
    "resources/index.html",
    "app.js",
    "/bmx.jpg",
    "/gorski.jpg",
    "/szosowy.jpg"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBicyclePwa).then(cache => {
            cache.addAll(assets)
        })
    )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})