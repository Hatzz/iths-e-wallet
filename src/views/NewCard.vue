<template>
  <main>
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
    }
  },
  data () {
    return {
      newCard: {
        vendor: 'none',
        number: '',
        name: '',
        cvv: '',
        month: '',
        year: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
