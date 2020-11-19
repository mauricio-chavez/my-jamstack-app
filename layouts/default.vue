<template>
  <div>
    <Navbar />
    <template>
      <section class="section">
        <nuxt />
      </section>
    </template>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
}
</script>
