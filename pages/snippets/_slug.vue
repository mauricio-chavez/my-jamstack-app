<template>
  <div class="container">
    <h1 class="title has-text-primary">{{ snippet.title }}</h1>
    <h2 class="subtitle">{{ snippet.description }}</h2>
    <div class="card mt-4">
      <div class="card-content">
        <nuxt-content :document="snippet" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snippet',
  async asyncData({ $content, params }) {
    const snippets = await $content('snippets')
      .where({ slug: params.slug })
      .fetch()
    return { snippet: snippets[0] }
  },
}
</script>
