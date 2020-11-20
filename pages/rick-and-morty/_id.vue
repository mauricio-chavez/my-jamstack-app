<template>
  <div class="container has-text-centered">
    <template v-if="loading">
      <p>Cargando...</p>
    </template>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
export default {
  name: 'RickAndMortyCharacter',
  data() {
    return {
      character: null,
      loading: true,
    }
  },
  async created() {
    const { data } = await this.$axios.get(
      `https://rickandmortyapi.com/api/character/${this.$route.params.id}`
    )
    this.character = data
    this.loading = false
  },
}
</script>

<style scoped>
figure {
  margin: auto;
}
</style>
