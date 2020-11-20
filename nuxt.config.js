export default {
  target: 'static',
  head: {
    title: 'El Stack de la Mermelada',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Mis primeras apps con JAMstack',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/styles.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxt/content'],
  axios: {},
  content: {},
  build: {},
  generate: {
    fallback: true,
    routes() {
      const routes = []
      return routes
    },
  },
}
