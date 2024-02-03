// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt3-leaflet',
    '@nuxtjs/sitemap'
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
