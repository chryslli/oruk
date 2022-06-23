const ORRUK = "ORRUK"
const assets = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/img/logo.png",
  "/img/logo.svg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(ORRUK).then(cache => {
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
