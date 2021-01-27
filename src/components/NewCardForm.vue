<template>
  <form>
    <label for="number">CARD NUMBER</label>
    <input type="text" name="number" v-model="card.number" />
    <label for="name">CARDHOLDER NAME</label>
    <input type="text" name="name" v-model="card.name" />
    <label for="month">MONTH</label>
    <input type="text" name="month" v-model="card.month">
    <label for="year">YEAR</label>
    <input type="text" name="year" v-model="card.year">
    <label for="ccv">CCV</label>
    <input type="text" name="ccv" v-model="card.ccv">
    <label for="vendor">Vendor</label>
    <select name="vendor" v-model="card.vendor">
      <option :value="vendor.name" :key="vendor.name" v-for="vendor in vendors">{{ vendor.verboseName }}</option>
    </select>
  </form>
</template>

<script>
export default {
  data () {
    return {
      card: {
        number: '',
        name: '',
        month: '',
        year: '',
        ccv: '',
        vendor: ''
      },
      vendors: [
        {
          name: 'bitcoin',
          verboseName: 'BITCOIN INC'
        },
        {
          name: 'ninja',
          verboseName: 'NINJA BANK'
        },
        {
          name: 'blockchain',
          verboseName: 'BLOCK CHAIN INC'
        },
        {
          name: 'evil',
          verboseName: 'EVIL CORP'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
</style>
