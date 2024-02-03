// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt3-leaflet',
    '@nuxtjs/sitemap',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '96353822',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      }
    ]
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      }
    }
  },
  site: {
    url: 'https://get-info-about.me',
  },
  nitro: {
    compressPublicAssets: true,
  }
})
