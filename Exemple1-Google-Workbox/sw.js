importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js'
  );
  if (workbox) {
    console.log(`Super ! Workbox est chargé 🎉`);
    
    workbox.precaching.precacheAndRoute([
      '/watch-20-01/'
    ]);
}