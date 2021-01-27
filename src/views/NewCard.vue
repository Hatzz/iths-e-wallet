<template>
  <main>
    <NewCardForm/>
  </main>
</template>

<script>
import NewCardForm from '@/components/NewCardForm.vue'
export default {

  name: 'NewCard',
  components: {
    NewCardForm
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 25rem;
}
</style>
