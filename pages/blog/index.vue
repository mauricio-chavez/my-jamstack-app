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
export default {
  name: 'Blog',
  data() {
    return {
      posts: [
        { id: 1, title: 'Mi publicación', uid: 'my-post' },
        { id: 2, title: 'Otra publicación', uid: 'oher-post' },
        { id: 3, title: 'JAMstack', uid: 'jamstack' },
      ],
    }
  },
}
</script>
