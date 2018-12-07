/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.png",
    "revision": "a4b23b386c55733d7beaf2f4448580db"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-transparent.webp",
    "revision": "926339f48e43301a3e6aec9d7052ef09"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.png",
    "revision": "305e5bc934d37a9314bd224ac8046b9a"
  },
  {
    "url": "assets/backgrounds/pattern-pixel-white.webp",
    "revision": "1dede19592d92f97ac0adf6c751c67f8"
  },
  {
    "url": "assets/blank.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "assets/blank.svg",
    "revision": "a618f05d0e890f40750109f67a2dcb7c"
  },
  {
    "url": "assets/blank.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "assets/common/icon-dark.png",
    "revision": "7b23ca6feabdf91b46c6264dc788b5ad"
  },
  {
    "url": "assets/common/icon-dark.svg",
    "revision": "abd93f8cf459fa9e67456d45953fa57c"
  },
  {
    "url": "assets/common/icon-dark.webp",
    "revision": "5efd812ccebfc6a4ab3c83dd853e1883"
  },
  {
    "url": "assets/common/icon-light.png",
    "revision": "e41fd0dcc2084b17c49b6da19c770ceb"
  },
  {
    "url": "assets/common/icon-light.svg",
    "revision": "7381c3a0c5e3c2b9170347d20b96ffe3"
  },
  {
    "url": "assets/common/icon-light.webp",
    "revision": "47367d47742df76b97e92abed9a74392"
  },
  {
    "url": "assets/common/icon-primary.png",
    "revision": "f15d79e505d4942f28303731b259aac5"
  },
  {
    "url": "assets/common/icon-primary.svg",
    "revision": "f312b747151ef1228035182eb0671398"
  },
  {
    "url": "assets/common/icon-primary.webp",
    "revision": "26c73cf23b61da10c8047e057fbdd6a7"
  },
  {
    "url": "assets/common/icon-secondary.png",
    "revision": "4cc1b5ad0ab1eb147930b8ec672cf474"
  },
  {
    "url": "assets/common/icon-secondary.svg",
    "revision": "1faf184458e8bf569268b5c2e3e23824"
  },
  {
    "url": "assets/common/icon-secondary.webp",
    "revision": "4db99c568ec1a4b2285b85876b70a58c"
  },
  {
    "url": "assets/common/logo-dark.png",
    "revision": "33ba5132a202855620f378a9745fcccf"
  },
  {
    "url": "assets/common/logo-dark.svg",
    "revision": "7a36a649fcee4b0c04280f3387a252aa"
  },
  {
    "url": "assets/common/logo-dark.webp",
    "revision": "0def1b1b34962573a0125356ec5d8d91"
  },
  {
    "url": "assets/common/logo-light.png",
    "revision": "7477a3ebf8c7ad421cd4284f8ead4951"
  },
  {
    "url": "assets/common/logo-light.svg",
    "revision": "01222ef363708fb1c2924126658b5ec7"
  },
  {
    "url": "assets/common/logo-light.webp",
    "revision": "2194e7ab749455e1cbf8a8193e9baba7"
  },
  {
    "url": "assets/common/logo-primary.png",
    "revision": "4dee710eb39c412e267a66e39d8e7a2b"
  },
  {
    "url": "assets/common/logo-primary.svg",
    "revision": "f2335f40166baac8c2a483b870dd1933"
  },
  {
    "url": "assets/common/logo-primary.webp",
    "revision": "892977effc31d5069292899b69427b96"
  },
  {
    "url": "assets/common/logo-secondary.png",
    "revision": "555048085d5269f4e81d58be3968825a"
  },
  {
    "url": "assets/common/logo-secondary.svg",
    "revision": "dbc754b8b0c1b91d0adddd9b174ad3a6"
  },
  {
    "url": "assets/common/logo-secondary.webp",
    "revision": "29ddef350517379e6ac28e6f74012c6a"
  },
  {
    "url": "assets/error.gif",
    "revision": "6f851662ad2fe92e38d93dbf1e31b84a"
  },
  {
    "url": "assets/icon-google.png",
    "revision": "f5b13163332abdcfc094bd4e73892a16"
  },
  {
    "url": "assets/icon-google.svg",
    "revision": "f16ad52d955fc63de49886ff657e88cd"
  },
  {
    "url": "assets/icon-google.webp",
    "revision": "e86c267bbcfe3bbeb350b8945f8fdf0c"
  },
  {
    "url": "assets/icons-nav.png",
    "revision": "cadcc65884d2995f8e81bbe70041e82f"
  },
  {
    "url": "assets/icons-nav.svg",
    "revision": "54c5e42c9b101ef67753192ca9862933"
  },
  {
    "url": "assets/icons-nav.webp",
    "revision": "4f371fb4386a0cc23b844e06c956301c"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "16ca991cee87847b9550dec0e94ba770"
  },
  {
    "url": "assets/icons/android-chrome-192x192.webp",
    "revision": "33e837b44e19432421c148f6d7d5eac1"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "cc14a48ccc329c03dfa66c0c73c54a49"
  },
  {
    "url": "assets/icons/android-chrome-512x512.webp",
    "revision": "9d69fc031e7292165b9e516a0def3e28"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "a5f0b8be0347425e8fea042d0a714da5"
  },
  {
    "url": "assets/icons/apple-touch-icon.webp",
    "revision": "4a8189a7b6ca405fae7284b8bb93f849"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "b8491df8ba33d6b3331966c5b6362389"
  },
  {
    "url": "assets/icons/favicon-16x16.webp",
    "revision": "af9ea87e240f6f7e9bf54282ef29b81d"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "b7d3906bc44f5f79071df36e129f9314"
  },
  {
    "url": "assets/icons/favicon-32x32.webp",
    "revision": "7c005d2744d8ee53135ad674ae578003"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "0a5a4a78977dd33720240411c40ff57d"
  },
  {
    "url": "assets/icons/icon.webp",
    "revision": "badaf8de1b40701c02649b073c079617"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "e06028be615c8569f15b6e9a6105050c"
  },
  {
    "url": "assets/icons/mstile-150x150.webp",
    "revision": "aab74e260cd1acee37debe9b72e87e66"
  },
  {
    "url": "assets/icons/safari-pinned-tab.png",
    "revision": "fbb39c09fb0955cc5346082c61add3a7"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "2c9c4b3fbed67ecd2932fe63cb0db2de"
  },
  {
    "url": "assets/icons/safari-pinned-tab.webp",
    "revision": "2c00b794fcf01aab101bd610c65f178f"
  },
  {
    "url": "assets/index/dr-wolffeld.png",
    "revision": "49d16fd8071a41bd8e0d53fc34301c17"
  },
  {
    "url": "assets/index/dr-wolffeld.webp",
    "revision": "bc35c93aabf132e2e7c80bbf8c7129e4"
  },
  {
    "url": "assets/index/media-01.jpg",
    "revision": "2bc284668b24c3126d34c2f4ad7b9729"
  },
  {
    "url": "assets/index/media-01.webp",
    "revision": "b44609bc0b70a286ecf7ed16a9a4978a"
  },
  {
    "url": "assets/index/media-02.jpg",
    "revision": "bcc480d0784f366258a814d0a6811333"
  },
  {
    "url": "assets/index/media-02.mp4",
    "revision": "e4219fcba98ccf16e08b80e86ffa5470"
  },
  {
    "url": "assets/index/media-02.webp",
    "revision": "592396ce9a540bd4a97426267ab51c5a"
  },
  {
    "url": "assets/index/render-01.png",
    "revision": "d0b6e8e4099f6ecfaae31ef68218c089"
  },
  {
    "url": "assets/index/render-01.webp",
    "revision": "c83b350255746cd013e20b3b26308759"
  },
  {
    "url": "assets/index/render-02.png",
    "revision": "920eb9a955b929a1f2510d91ab6d5f17"
  },
  {
    "url": "assets/index/render-02.webp",
    "revision": "c4b8a80b9d29566e4afc28e05432f0b8"
  },
  {
    "url": "assets/index/render-03.png",
    "revision": "f0c3e375793abe8457ac44844ca86497"
  },
  {
    "url": "assets/index/render-03.webp",
    "revision": "3113e0d6a0cd3f84cbd236a149b9a24b"
  },
  {
    "url": "assets/social/profile.png",
    "revision": "4d29ac288692e4cbd3af59261748b87f"
  },
  {
    "url": "assets/social/profile.webp",
    "revision": "9f9d9fe1fc705df67083af79cc8deccc"
  },
  {
    "url": "assets/social/social.png",
    "revision": "d8b679897428f27295a539081c76fb3c"
  },
  {
    "url": "assets/social/social.webp",
    "revision": "1b0078b988be4e27f93ad2bb0e55907b"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.png",
    "revision": "52760cc677cb46499a85ae5591174683"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.svg",
    "revision": "04ae0b5f7f6b2fa04c5ccef0333ae300"
  },
  {
    "url": "assets/sprites/press/bitcoin-exchange-guide.webp",
    "revision": "6d7ea02809802a4e9a977ee6c8c565f1"
  },
  {
    "url": "assets/sprites/press/bitcoininst.png",
    "revision": "576be22eb52d49162ed85d6fa151d12d"
  },
  {
    "url": "assets/sprites/press/bitcoininst.svg",
    "revision": "a7079ef65fc566ff82e93892a15723a0"
  },
  {
    "url": "assets/sprites/press/bitcoininst.webp",
    "revision": "ec5da2d0e183fd276889245e8c073b1e"
  },
  {
    "url": "assets/sprites/press/business-insider.png",
    "revision": "bf19ca10a4ccabc25d4212dc1a70303c"
  },
  {
    "url": "assets/sprites/press/business-insider.svg",
    "revision": "7a719d5ff905660ab2faacbbee5a11ab"
  },
  {
    "url": "assets/sprites/press/business-insider.webp",
    "revision": "f8e1ebeaf2e824eb86ef17a9cc485018"
  },
  {
    "url": "assets/sprites/press/ccn.png",
    "revision": "3934e6c03c3c9cd3fbda9271c4875299"
  },
  {
    "url": "assets/sprites/press/ccn.svg",
    "revision": "fcae88585f961694ed57222e4979ecb1"
  },
  {
    "url": "assets/sprites/press/ccn.webp",
    "revision": "b1d05578df784adf210c3a90e8e2867e"
  },
  {
    "url": "assets/sprites/press/coin-announcer.png",
    "revision": "112ada5624b72fa73e4837b63dce052f"
  },
  {
    "url": "assets/sprites/press/coin-announcer.svg",
    "revision": "43e193cd0dcaa8225f84f4563212518a"
  },
  {
    "url": "assets/sprites/press/coin-announcer.webp",
    "revision": "5c8e1cfa578bcbfd32f81d5af98cdb9a"
  },
  {
    "url": "assets/sprites/press/coinmercenary.png",
    "revision": "863d112e1f0bc2db1122e4cc43cd7334"
  },
  {
    "url": "assets/sprites/press/coinmercenary.svg",
    "revision": "8c52e1ba15c43ea6aa45c22f52f1b5db"
  },
  {
    "url": "assets/sprites/press/coinmercenary.webp",
    "revision": "c59da4d64756b31bffd877d2810bc111"
  },
  {
    "url": "assets/sprites/press/crains.png",
    "revision": "53f95f969dd455481d5acb6d1fe5166e"
  },
  {
    "url": "assets/sprites/press/crains.svg",
    "revision": "0fcfc5513f83dcb9dfbcdd802bb7d61d"
  },
  {
    "url": "assets/sprites/press/crains.webp",
    "revision": "4eb8d5a82e8b5d22e4887c031f0b69ce"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.png",
    "revision": "d6ca12722ecaa87e16c363771fbd8adf"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.svg",
    "revision": "5bc25a35ce772a5eb5b123b345573867"
  },
  {
    "url": "assets/sprites/press/e-crypto-news.webp",
    "revision": "7da9134bf5b14c07b58c89eb4f0b7190"
  },
  {
    "url": "assets/sprites/press/e27.png",
    "revision": "e062bdfd1fe6aba8c21e4df93810e6bc"
  },
  {
    "url": "assets/sprites/press/e27.svg",
    "revision": "0e057b78b0dfa488bfaf82c8010c3b52"
  },
  {
    "url": "assets/sprites/press/e27.webp",
    "revision": "5dded4cd8334dd7b1ad7414716941af7"
  },
  {
    "url": "assets/sprites/press/forbes.png",
    "revision": "36acd6067a2189ab2391acb3ddd5c220"
  },
  {
    "url": "assets/sprites/press/forbes.svg",
    "revision": "b1c734e23738a4097c1a27ed1732bf23"
  },
  {
    "url": "assets/sprites/press/forbes.webp",
    "revision": "c08bcf85e319f05a62603afbc532f66e"
  },
  {
    "url": "assets/sprites/press/kabn.png",
    "revision": "ba656339570930bcc23a523184e90404"
  },
  {
    "url": "assets/sprites/press/kabn.svg",
    "revision": "4563ddefe3f1f316aeee8e75b14fd7f3"
  },
  {
    "url": "assets/sprites/press/kabn.webp",
    "revision": "968438e2034066d1989e53f30e32a0d4"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.png",
    "revision": "ce6826c2af82c7d9dfb0d52193040f2b"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.svg",
    "revision": "77179d4f1ddab7143039f3063bf132a3"
  },
  {
    "url": "assets/sprites/press/las-vegas-business-press.webp",
    "revision": "4d800fd68d445037c89f2d4bc68083d0"
  },
  {
    "url": "assets/sprites/press/pcmag.png",
    "revision": "c1db5c39aefdb1ecc7d506a4106e8f0c"
  },
  {
    "url": "assets/sprites/press/pcmag.svg",
    "revision": "28749f6010aadfef336697c40a235b90"
  },
  {
    "url": "assets/sprites/press/pcmag.webp",
    "revision": "0c461d2a7676637e4721fbd3856bb9c5"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.png",
    "revision": "7b49c1b660a81061b08be16fb6f2df09"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.svg",
    "revision": "152f906324a8894f8e3a2b97c031c7d1"
  },
  {
    "url": "assets/sprites/press/popular-mechanics.webp",
    "revision": "a2e36d0f610e57906cd3945ffba15f30"
  },
  {
    "url": "assets/sprites/press/tech-bullion.png",
    "revision": "995fe44dcf69e3186a6d32771fee83b7"
  },
  {
    "url": "assets/sprites/press/tech-bullion.svg",
    "revision": "5f179574aa83906ae20147ce414ea52b"
  },
  {
    "url": "assets/sprites/press/tech-bullion.webp",
    "revision": "e9a66b88cb5a22079e90a9b0170711be"
  },
  {
    "url": "assets/sprites/press/techaeris.png",
    "revision": "ec1f930a4dd170f223e33d9567856350"
  },
  {
    "url": "assets/sprites/press/techaeris.svg",
    "revision": "54000aae24bd5e71689374dc92d07fec"
  },
  {
    "url": "assets/sprites/press/techaeris.webp",
    "revision": "818e3ba9676861d48b27c769cd19fdf2"
  },
  {
    "url": "assets/sprites/press/vegastech.png",
    "revision": "e64fb529cd878135fd094b3f2b24a45a"
  },
  {
    "url": "assets/sprites/press/vegastech.svg",
    "revision": "10fbdc6792ebfe8e1b6ba1cffa3b8344"
  },
  {
    "url": "assets/sprites/press/vegastech.webp",
    "revision": "8895342a263801c8f44149f4b9b1e098"
  },
  {
    "url": "assets/sprites/press/zcorum.png",
    "revision": "d128e09b5f098ecb69529eeecc214713"
  },
  {
    "url": "assets/sprites/press/zcorum.svg",
    "revision": "45df43f616a7a98b6ad5166bdf1d6fc0"
  },
  {
    "url": "assets/sprites/press/zcorum.webp",
    "revision": "abc41b9bee5e3e48cc336dc1801c8f8c"
  },
  {
    "url": "assets/styleguide/hero.png",
    "revision": "c39316f141fbae8e59221e94f85d8779"
  },
  {
    "url": "assets/styleguide/hero.svg",
    "revision": "a1aaea5c7ed6df6c80b5c5a9ccba687e"
  },
  {
    "url": "assets/styleguide/hero.webp",
    "revision": "9ddd41e90357ef268ea61f63b83f0059"
  },
  {
    "url": "dialog/privacy-policy.html",
    "revision": "e73c91db8712e8cfd576a06f4c71cc49"
  },
  {
    "url": "dialog/sample.html",
    "revision": "87c8c5790984101e9e56779337d5b562"
  },
  {
    "url": "error.html",
    "revision": "75c3850ad17c13ce82dd2dc6e5eecdf9"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/fontawesome-webfont.png",
    "revision": "9529390786a6bfeb4ea5197a39d2e410"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/fontawesome-webfont.webp",
    "revision": "d70f227bd3cda1d6ce7e55cc31022dcf"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "index.html",
    "revision": "523b5527016d144b84455b353431584c"
  },
  {
    "url": "sample.html",
    "revision": "f5ae7a01e4131477586d961e5be7e4a9"
  },
  {
    "url": "scripts/app.58e91439d8.min.css",
    "revision": "58e91439d8cb826e2652ed86a73df212"
  },
  {
    "url": "scripts/app.d2f2a6eafd.min.js",
    "revision": "d2f2a6eafd176e1acb5f74c6e6e5a6e2"
  },
  {
    "url": "scripts/styleguide.236aef3912.min.css",
    "revision": "236aef391200b2c040b941dcb57fd9c9"
  },
  {
    "url": "scripts/styleguide.9b1f71216a.min.js",
    "revision": "9b1f71216a8971c3ef5c799a1a644894"
  },
  {
    "url": "styleguide.html",
    "revision": "956398aedcdde38c2ee8e0be79137fd4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"font-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":10,"purgeOnQuotaError":false})] }), 'GET');
