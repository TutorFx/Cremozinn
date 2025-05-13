import colors from "vuetify/es5/util/colors";
import minifyTheme from "minify-css-string";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Cremozin",
    title: "Cremozin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: `Se comprar agora com o preço promocional direto da fábrica, lucre de até 100%. Postamos sua entrega em 24 horas.`,
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://cdn.jsdelivr.net",
      },
      // {
      //   rel: "dns-prefetch",
      //   href: "https://www.googletagmanager.com",
      // },
    ],
  },
  ssr: true,
  // Global CSS: https://go.nuxtjs.dev/config-css
  scss: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~components/',
    '~components/product/',
    '~components/shared/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/pwa",
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    [
      "nuxt-gmaps",
      {
        key: "AIzaSyAnRCnSdRI8MS7AWWZIVeTSU93TeBpm4kI",
        libraries: ["places"],
      },
    ],
    "@nuxtjs/sitemap",
  ],
  sitemap: {
    hostname: "https://cremozinn.com.br/",
    gzip: true,
    routes: async () => {
      // thanks for https://jackwhiting.co.uk/posts/generating-sitemap-entries-for-nuxt-content/
      const { $content } = require("@nuxt/content");

      const posts = await $content("blog").fetch();
      const produtos = await $content("produtos").fetch();
      const pages = await $content("pagina").fetch();

      // Setup an empty array we will push to.
      const routes = [];

      // Add an entry for the item including lastmod and priorty
      produtos.forEach((w) =>
        routes.push({
          url: w.path,
          priority: 0.8,
          lastmod: w.updatedAt,
        })
      );

      posts.forEach((p) =>
        routes.push({
          url: p.path,
          priority: 0.8,
          lastmod: p.updatedAt,
        })
      );

      pages.forEach((a) =>
        routes.push({
          url: a.path,
          priority: 0.8,
          lastmod: a.updatedAt,
        })
      );

      // return all routes
      return routes;
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Cremozinn",
      lang: "pt-BR",
      useWebmanifestExtension: false,
    },
  },
  workbox: {
    dev: false,
    debug: false,
  },
  manifest: {
    viewport: "width=device-width, initial-scale=1",
    theme_color: "#fff",
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      options: { minifyTheme },
      dark: false,
      themes: {
        light: {
          primary: colors.red.darken3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
        aggressiveCodeRemoval: true,
      },
    },
  },
  features: {
    store: true,
    layouts: true,
    meta: true,
    middleware: true,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: true,
    fetch: false,
    clientOnline: true,
    clientPrefetch: true,
    componentAliases: true,
    componentClientOnly: true,
  },

  loading: {
    color: "#c62828",
    height: "4px",
    continuous: true,
    duration: 1000,
    throttle: 0,
  },
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://cremozinn.com.br/"
        : "http://localhost:3000",
    googlekey: "AIzaSyAnRCnSdRI8MS7AWWZIVeTSU93TeBpm4kI",
  },
};
