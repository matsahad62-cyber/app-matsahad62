self.addEventListener('install', function(e) {

e.waitUntil(

caches.open('cbt-store').then(function(cache) {

return cache.addAll([
'/',
'/index.html',
'/dashboard.html',
'/ujian.html',
'/riwayat.html',
'/akun.html',
'/soal.html',
'/logo.png',
'/banner.png'
]);

})

);

});

self.addEventListener('fetch', function(e) {

e.respondWith(

caches.match(e.request).then(function(response) {

return response || fetch(e.request);

})

);

});
