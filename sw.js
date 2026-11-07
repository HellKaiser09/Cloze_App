// Guarda la app en el dispositivo para que funcione sin internet.
// Si cambias algún archivo, sube también este con un número de versión nuevo.
const CACHE = "cloze-v1";
const ASSETS = [
  "./",
  "index.html",
  "fonts.css",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png",
  "fonts/atkinson-hyperlegible-latin-400-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-700-normal.woff2",
  "fonts/atkinson-hyperlegible-latin-400-italic.woff2",
  "fonts/bricolage-grotesque-latin-600-normal.woff2",
  "fonts/bricolage-grotesque-latin-800-normal.woff2",
  "fonts/jetbrains-mono-latin-500-normal.woff2",
  "fonts/jetbrains-mono-latin-700-normal.woff2",
  "fonts/baloo-2-latin-700-normal.woff2",
  "fonts/oswald-latin-600-normal.woff2",
  "fonts/abril-fatface-latin-400-normal.woff2",
  "fonts/playfair-display-latin-700-italic.woff2",
  "fonts/archivo-black-latin-400-normal.woff2",
  "fonts/righteous-latin-400-normal.woff2",
  "fonts/caveat-latin-700-normal.woff2",
  "fonts/josefin-sans-latin-700-normal.woff2",
  "fonts/orbitron-latin-700-normal.woff2",
  "fonts/fira-code-latin-600-normal.woff2",
  "fonts/bungee-latin-400-normal.woff2",
  "fonts/anton-latin-400-normal.woff2",
  "fonts/fraunces-latin-700-normal.woff2",
  "fonts/comfortaa-latin-700-normal.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // La página: primero internet (para recibir mejoras), si no hay, la copia guardada.
    e.respondWith(fetch(req).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put("index.html", cp)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }
  // Fuentes, íconos y demás: primero la copia guardada.
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return res;
  })));
});
