export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "stimmrych",
    htmlAttrs: {
      lang: "de-ch",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Unter dem Namen Stimmrych besteht ein gemischter Chor aus Winterthur, gegründet 2015. Erfahren Sie mehr über uns und unsere Musik." },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "google-site-verification",
        content: "peoRvRuxuFC8acoa92mWIm7LZt4AqlY32x_j2UEzNLQ",
      },
    ],
    link: [
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,700&display=swap",
      },
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "vue-plausible",
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: "smooth",
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    middleware: 'authenticated'
  },


  fontawesome: {
    icons: {
      regular: ["faEnvelope"],
      solid: ["faMapMarkerAlt", "faCalendarDay", "faChevronUp", "faFileDownload"],
      brands: ["faFacebook", "faInstagram"],
    },
  },

  serverMiddleware: [
   
    { path: '/api', handler: '~/server-middleware/auth.js' },
  ],

  axios: {
    baseURL: 'http://localhost:3000',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

};
