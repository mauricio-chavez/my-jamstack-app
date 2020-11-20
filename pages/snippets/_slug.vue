<template>
  <div class="container">
    <h1 class="title has-text-primary">{{ snippet.title }}</h1>
    <h2 class="subtitle">{{ snippet.description }}</h2>
    <div class="card mt-4">
      <div class="card-content">
        <div class="content">
          <p>Aquí va mi snippet</p>
          <code> const { example } = object; </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snippet',
  data() {
    return {
      snippet: {
        title: 'Snippet genérico',
        description: 'Descripción genérica',
      },
    }
  },
}
</script>
