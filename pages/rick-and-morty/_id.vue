<template>
  <div class="container has-text-centered">
    <figure class="image is-128x128">
      <img :src="character.image" :alt="character.name" />
    </figure>
    <h1 class="title mt-5 has-text-primary">{{ character.name }}</h1>
    <h2 class="subtitle">
      {{ character.species }} |
      <span
        :class="{
          'has-text-success': character.status === 'Alive',
          'has-text-danger': character.status === 'Dead',
          'has-text-grey':
            character.status !== 'Alive' && character.status !== 'Dead',
        }"
      >
        {{ character.status }}
      </span>
    </h2>
    <p>Gender: {{ character.gender }}</p>
    <p>Origin: {{ character.origin.name }}</p>
    <p>Location: {{ character.location.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'RickAndMorty',
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      `https://rickandmortyapi.com/api/character/${params.id}`
    )
    return { character: data }
  },
}
</script>

<style scoped>
figure {
  margin: auto;
}
</style>
