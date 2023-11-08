importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");
workbox.setConfig({
  debug: !0
});
workbox.precaching.precacheAndRoute([{"revision":null,"url":"assets/index-3cbbe2e0.css"},{"revision":null,"url":"assets/index-5e8d20b2.js"},{"revision":null,"url":"assets/webfontloader-523643f5.js"},{"revision":"f2b8bc6b99d41462c2cb8a316d01811f","url":"index.html"},{"revision":"8fb4017361a104442a7085923b945c2b","url":"registerSW.js"},{"revision":"605378503df6be2aa07587a1ab6fb6e9","url":"manifest.webmanifest"}]);
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
