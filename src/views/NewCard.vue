<template>
  <main>
    <img src="../assets/back.svg" class="back" @click="goBack"/>
    <h1>ADD NEW CARD</h1>
    <Card :card="newCard"/>
    <NewCardForm @change="updateNewCard($event)"/>
  </main>
</template>

<script>
import NewCardForm from '@/components/NewCardForm.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'NewCard',
  components: {
    NewCardForm,
    Card
  },
  methods: {
    updateNewCard (card) {
      this.newCard = card
    },
    goBack () {
      window.history.back()
    }
  },
  data () {
    return {
      newCard: {
        vendor: 'none',
        number: '',
        name: '',
        ccv: '',
        month: '',
        year: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  position: absolute;
  margin-right: 23rem;
  margin-top: 1.75rem;
  width: 1.5rem;
  cursor: pointer;
}
</style>
