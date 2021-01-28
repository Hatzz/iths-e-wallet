<template>
  <form @input="$emit('change', card)">
    <label class="col-2" for="number">CARD NUMBER</label>
    <input class="col-2" type="text" name="number" v-model="card.number" maxlength="16" />
    <label class="col-2" for="name">CARDHOLDER NAME</label>
    <input class="col-2" type="text" name="name" v-model="card.name" />
    <label class="col-1" for="month">MONTH</label>
    <label class="col-1" for="year">YEAR</label>
    <input class="col-1" type="text" name="month" v-model="card.month">
    <input class="col-1" type="text" name="year" v-model="card.year">
    <label class="col-2" for="ccv">CCV</label>
    <input class="col-2" type="text" name="ccv" v-model="card.ccv">
    <label class="col-2" for="vendor">Vendor</label>
    <select class="col-2" name="vendor" v-model="card.vendor">
      <option :value="vendor.name" :key="vendor.name" v-for="vendor in vendors">{{ vendor.verboseName }}</option>
    </select>
    <router-link class="col-2" @click.native="addCard" :to="{name: 'Home'}">ADD CARD</router-link>
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
        vendor: 'none'
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
  },
  methods: {
    addCard () {
      this.$root.cards.push(this.card)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 1rem;
  gap: 1rem;
}

a {
  text-align: center;
}

input, select {
  font-size: 1.25rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid grey;
  text-transform: uppercase;
}

.col-1 {
  grid-column: auto/span 1;
}

.col-2 {
  grid-column: auto/span 2;
}

</style>
