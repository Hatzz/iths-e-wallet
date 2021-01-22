<template>
  <main>
    <h1>Hello world</h1>
    <Card
      v-for="card in this.$root.cards"
      :number="card.number"
      :name="card.name"
      :date="card.date"
      :vendor="card.vendor"
      :key="card.number"
    />
  </main>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
</style>
