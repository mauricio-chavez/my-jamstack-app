<template>
  <div>
    <Navbar />
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">El Stack de la Mermelada</h1>
          <h2 class="subtitle">JavaScript + APIs + Markup</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <nuxt />
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>
