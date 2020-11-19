<template>
  <div class="container">
    <h1 class="title">Rick and Morty</h1>
    <p class="subtitle">Todos los personajes</p>
    <div class="columns is-multiline">
      <div
        v-for="character in characters"
        :key="character.id"
        class="column is-3"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <img :src="character.image" :alt="character.name" />
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <h4 class="title is-4">
              <nuxt-link :to="`rick-and-morty/${character.id}`">
                {{ character.name }}
              </nuxt-link>
            </h4>
            <p class="subtitle is-6">
              {{ character.location.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RickAndMorty',
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      'https://rickandmortyapi.com/api/character'
    )
    return { characters: data.results }
  },
}
</script>
