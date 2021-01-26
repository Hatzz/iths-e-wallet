<template>
  <main>
    <h1>E-WALLET</h1>
    <h2>ACTIVE CARD</h2>
    <Card class="active-card" :card="$root.cards[0]"/>
    <div class="cards">
      <Card
      v-for="card in this.$root.cards"
      :card="card"
      :key="card.number"
    />
    </div>
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
  .active-card {
    margin-bottom: 2rem;
  }
  .cards {
    display: grid;
    grid-auto-rows: 4rem;
  }
</style>
