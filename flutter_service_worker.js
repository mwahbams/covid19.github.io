'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0b092bfd2cb757babea78f427b990257",
"assets/assets/fonts/NoorRegular.ttf": "98d53fceb20571beedae4af6f229af4e",
"assets/assets/fonts/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/assets/fonts/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/assets/images/corona.jpg": "df79c5d718294d69a771afa03ae25ff1",
"assets/assets/languages/ar-EG.json": "0be271c68f1a4d6543a5b590f046b575",
"assets/assets/languages/en-US.json": "9aa476808d6a768b3b33d4ab0fb5c454",
"assets/assets/languages/fr-FR.json": "44c7af9946bf538d6f77126eb483d018",
"assets/FontManifest.json": "76a946aa03a876aaf8fcba3b5812ace5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "b2b793ffc3c759a277e0c882545ab7e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/easy_localization/i18n/ar-DZ.json": "d7bfa13f9a386d7a5384f427589606e1",
"assets/packages/easy_localization/i18n/ar.json": "d7bfa13f9a386d7a5384f427589606e1",
"assets/packages/easy_localization/i18n/en-US.json": "a12aacc63370299cbba2d3d26443ed49",
"assets/packages/easy_localization/i18n/en.json": "22c4a70dccdb4f00acce24acd7483d02",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "abbf726b1d1f59697bf6b6cd768a341d",
"/": "abbf726b1d1f59697bf6b6cd768a341d",
"main.dart.js": "70592002b08356716725f5b072848631",
"manifest.json": "5c6de99a7db22dea50670606a231e351"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
