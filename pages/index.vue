<template>
  <div class="container">
    <div class="content">
      <h2>¿Qué es JAMstack?</h2>
      <p>
        Una arquitectura de desarrollo web moderna basada en JavaScript del lado
        del cliente, APIs reutilizables y Markup predefinido
      </p>
      <h2>Apps</h2>
      <ul>
        <li>
          <nuxt-link :to="{ path: '/rick-and-morty' }">
            Otra app de Rick and Morty
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/snippets' }">
            Snippets con Markdown y Nuxt Content API
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/blog' }"> Blog con Prismic </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'home',
}
</script>

<style scoped>
img {
  height: 50px;
}
</style>
