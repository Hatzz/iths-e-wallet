<template>
  <main>
    <h1>E-WALLET</h1>
    <h2>ACTIVE CARD</h2>
    <Card class="active-card" :card="activeCard"/>
    <div class="cards">
      <Card
      v-for="card in this.$root.cards"
      :card="card"
      :key="card.number"
      @click="changeActiveCard(card)"
    />
    </div>
    <router-link :to="{name: 'NewCard'}">New Card</router-link>
  </main>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
      activeCard: this.$root.cards[0]
    }
  },
  components: {
    Card
  },
  methods: {
    changeActiveCard (card) {
      this.activeCard = card
    }
  }
}
</script>

<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
  }
  h1, h2, a {
    text-align: center;
  }
  .active-card {
    margin-bottom: 2rem;
  }
  .cards {
    display: grid;
    grid-auto-rows: 4rem;
    margin-bottom: 15rem;
  }
</style>
