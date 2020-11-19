<template>
  <div class="container">
    <h1 class="title has-text-primary">{{ post.title }}</h1>
    <div class="card mt-4">
      <div class="card-content">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="content" v-html="post.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'BlogPost',
  async asyncData({ $axios, params }) {
    const apiEndpoint = 'https://my-jamstack-apps.prismic.io/api/v2'
    const api = await Prismic.getApi(apiEndpoint)
    const result = await api.getByUID('blog_post', params.uid)
    return {
      post: {
        title: PrismicDOM.RichText.asText(result.data.title),
        content: PrismicDOM.RichText.asHtml(result.data.content),
      },
    }
  },
}
</script>
