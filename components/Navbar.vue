<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="~assets/logo.svg" alt="JAM logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        Inicio
      </b-navbar-item>
      <b-navbar-dropdown label="Apps">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/rick-and-morty' }">
          Otra app de Rick and Morty
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/snippets' }">
          Snippets con Markdown y Nuxt Content API
        </b-navbar-item>
        <b-navbar-item tag="nuxt-link" :to="{ path: '/blog' }">
          Blog con Prismic
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Referencias">
        <b-navbar-item href="https://jamstack.org/"> JAMstack </b-navbar-item>
        <b-navbar-item href="https://www.netlify.com/jamstack/">
          JAMstack by Netlify
        </b-navbar-item>
        <b-navbar-item href="https://vuejs.org/"> Vue </b-navbar-item>
        <b-navbar-item href="https://nuxtjs.org/"> NuxtJS </b-navbar-item>
        <b-navbar-item href="https://rickandmortyapi.com/">
          The Rick and Morty API
        </b-navbar-item>
        <b-navbar-item href="https://content.nuxtjs.org/">
          NuxtJS Content API
        </b-navbar-item>
        <b-navbar-item href="https://prismic.io/"> Prismic </b-navbar-item>
        <b-navbar-item href="https://www.netlify.com/"> Netlify </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
