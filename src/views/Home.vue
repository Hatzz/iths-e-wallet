<template>
  <div class="home">
    <h1>Hello world</h1>
    <Card vendor="bitcoin" name="Elias Lundgren" date="12/32" number="1255 5678 9123 4567"/>
  </div>
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
