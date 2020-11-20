import axios from 'axios'
import Prismic from 'prismic-javascript'

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
    async routes() {
      const routes = []
      // Rick and Morty API
      const { data } = await axios.get(
        'https://rickandmortyapi.com/api/character'
      )
      const rickAndMortyRoutes = data.results.map(
        (character) => `/rick-and-morty/${character.id}`
      )
      routes.push(...rickAndMortyRoutes)

      // Prismic API
      const apiEndpoint = 'https://my-jamstack-apps.prismic.io/api/v2'
      const api = await Prismic.getApi(apiEndpoint)
      const { results } = await api.query('')
      const blogRoutes = results.map((post) => `/blog/${post.uid}`)
      routes.push(...blogRoutes)
      return routes
    },
  },
}
