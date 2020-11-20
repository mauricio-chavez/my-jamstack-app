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
export default {
  name: 'BlogPost',
  data() {
    return {
      post: {
        title: 'Mi post genérico',
        content: `<div>
                    <h1>Este es mi post</h1>
                    <p>Opinión de mi contenido</p>
                    <a href="https://prismic.io">Ir a la liga</a>
                  </div>`,
      },
    }
  },
}
</script>
