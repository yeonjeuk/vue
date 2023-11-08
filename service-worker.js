importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
workbox.setConfig({
  debug: !0
});
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-37ba3694.css"},{"revision":null,"url":"assets/index-ab28d993.js"},{"revision":null,"url":"assets/webfontloader-523643f5.js"},{"revision":"1b8e752a4ec130c4663cc42a04fd60ea","url":"index.html"},{"revision":"a7382d8e655c7b4c85f2b522e6463da2","url":"registerSW.js"},{"revision":"e6761a2cc94b464d67d2fbedad1892ae","url":"manifest.webmanifest"}]);
workbox.routing.registerRoute(
  new RegExp("https://firebasestorage.googleapis.com/v0/b/pwa-camera.appspot.com/.*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "camera-images",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // <-- ExpirationPlugin로 대문자 'E' 변경
        maxEntries: 60,
        maxAgeSeconds: 365 * 24 * 60 * 60
        // 1년 지정
      })
    ]
  })
);
