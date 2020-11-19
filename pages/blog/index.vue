<template>
  <div class="container">
    <h1 class="title">Mis publicaciones</h1>
    <div v-for="post in posts" :key="post.id" class="card mt-5">
      <div class="card-content">
        <h2 class="title is-5">{{ post.title }}</h2>
        <b-button tag="nuxt-link" :to="`/blog/${post.uid}`" type="is-primary">
          Ver post
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'Blog',
  async asyncData() {
    const apiEndpoint = 'https://my-jamstack-apps.prismic.io/api/v2'
    const api = await Prismic.getApi(apiEndpoint)
    const { results } = await api.query('')
    const posts = results.map((post) => ({
      id: post.id,
      title: PrismicDOM.RichText.asText(post.data.title),
      uid: post.uid,
    }))

    return { posts }
  },
}
</script>
