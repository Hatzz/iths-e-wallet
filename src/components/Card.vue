<template>
  <div :class="`card ${vendor}`">
    <div class="chip">
      <img
        :src="require(`../assets/chip-${this.vendorStyles[vendor].chipTone}.svg`)"
        alt="Card chip"
      />
    </div>
    <div class="vendor">
      <img :src="require(`../assets/vendor-${vendor}.svg`)" />
    </div>

    <div class="card-number">
      <h2 v-for="num in numberArray" :key="num">
        {{ num }}
      </h2>
    </div>
    <div class="card-holder">
      <h5>CARDHOLDER NAME</h5>
      <h3>{{ name }}</h3>
    </div>
    <div class="valid-thru">
      <h5>VALID THRU</h5>
      <h3>{{ date }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vendor: {
      type: String,
      default: 'none'
    },
    name: {
      type: String
    },
    date: {
      type: String
    },
    number: {
      type: String,
      default: 'XXXX XXXX XXXX XXXX'
    }
  },
  computed: {
    numberArray () {
      return this.number.split(' ')
    }
  },
  data () {
    return {
      vendorStyles: {
        bitcoin: {
          icon: 'vendor-bitcoin.svg',
          chipTone: 'dark'
        },
        none: {
          icon: '',
          chipTone: 'light'
        },
        ninja: {
          icon: 'vendor-ninja.svg',
          chipTone: 'light'
        },
        blockchain: {
          icon: 'vendor-blockchain.svg',
          chipTone: 'light'
        },
        evil: {
          icon: 'vendor-evil.svg',
          chipTone: 'light'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h2,
h3,
h4,
h5 {
  margin: 0;
}

.card {
  box-sizing: border-box;
  width: 25rem;
  height: 15.45rem;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "middle middle"
    "bottom-left bottom-right";
}

.bitcoin {
  background: goldenrod;
  color: black;
}

.none, .blockchain, .ninja, .evil {
  color: white;
}

.none {
  background: grey;
}

.blockchain {
  background: purple;
}

.ninja {
  background: black;
}

.evil {
  background: red;
}

.chip,
.vendor {
  display: flex;
  flex-direction: column;
}

.chip {
  grid-area: top-left;
  img {
    width: 3rem;
  }
}

.vendor {
  grid-area: top-right;
  align-items: flex-end;
  img {
    width: 2rem;
  }
}

.card-number {
  grid-area: middle;
  display: flex;
  justify-content: space-between;
}

.card-holder,
.valid-thru {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-holder {
  grid-area: bottom-left;
}

.valid-thru {
  grid-area: bottom-right;
  align-items: flex-end;
}
</style>
