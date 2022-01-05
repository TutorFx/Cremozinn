import colors from 'vuetify/es5/util/colors'

export default async () => {
  // example async function here to grab data
  // theoretically needed for other elements in the config
  //const data = await axios.get('https://api.nuxtjs.dev/posts')
  const config = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      titleTemplate: '%s - Cremozin',
      title: 'Cremozin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `Veja onde estamos presentes no Mapa` },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    ssr: true,
    // Global CSS: https://go.nuxtjs.dev/config-css
    scss: ["@/assets/style.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/vuetify
      '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
      ['nuxt-gmaps', {
        key: 'AIzaSyAnRCnSdRI8MS7AWWZIVeTSU93TeBpm4kI',
        libraries: ['places']
      }],
      '@nuxtjs/sitemap'
    ],
    sitemap: {
      hostname: process.env.baseURL,
      gzip: true,
      routes: async () => {
        if (process.env.NODE_ENV !== 'production') return
        
        // ajuda => https://jackwhiting.co.uk/posts/generating-sitemap-entries-for-nuxt-content/
  
        const { $content } = require('@nuxt/content')
      
        const posts = await $content('blog').fetch()
        const produtos = await $content('produtos').fetch()
      
        const routes = []
      
        produtos.forEach((w) =>
          routes.push({
            url: w.path,
            priority: 0.8,
            lastmod: w.updatedAt
          })
        )
      
        posts.forEach((p) =>
          routes.push({
            url: p.path,
            priority: 0.8,
            lastmod: p.updatedAt
          })
        )
      
        // return all routes
        return routes
      }
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
      manifest: {
        lang: 'en'
      }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        dark: false,
        themes: {
          light:{
            primary: colors.red.darken3,
          }
        }
      }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    loading: {
      color: '#c62828',
      height: '4px',
      continuous: true,
      duration: 1000,
      throttle: 0,
    },
    env: {
      baseURL: (process.env.NODE_ENV === 'production' ? 'https://cremozinn.vercel.app' : 'http://localhost:3000'),
      googlekey: 'AIzaSyAnRCnSdRI8MS7AWWZIVeTSU93TeBpm4kI'
    }
  }
  return config
}