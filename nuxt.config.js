import routerConfig from './router.config'
import pkg from './package'

export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Instadapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/icons/favicon.ico`,
      },
      {
        rel: 'apple-touch-icon',
        href: `/icons/apple-touch-icon.png?v=${pkg.version}`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: `/icons/android-icon-192x192.png?v=${pkg.version}`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: `/icons/android-icon-512x512.png?v=${pkg.version}`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/icons/favicon-32x32.png?v=${pkg.version}`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/icons/favicon-16x16.png?v=${pkg.version}`,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/directives'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/composition-api',
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  router: routerConfig,
}
