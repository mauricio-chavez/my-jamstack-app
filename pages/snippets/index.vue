<template>
  <div class="container">
    <h1 class="title">Snippets</h1>
    <div class="columns">
      <div v-for="snippet in snippets" :key="snippet.slug" class="column is-6">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4 has-text-primary">{{ snippet.title }}</h2>
            <p class="subtitle is-5">{{ snippet.description }}</p>
            <b-button
              tag="nuxt-link"
              :to="`/snippets/${snippet.slug}`"
              type="is-primary"
            >
              Ir al snippet
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snippets',
  async asyncData({ $content }) {
    const snippets = await $content('snippets').fetch()
    return { snippets }
  },
}
</script>
