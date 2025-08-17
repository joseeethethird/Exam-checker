self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("exam-checker").then(cache => {
      return cache.addAll(["/", "/index.html", "/app.js", "/style.css"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
