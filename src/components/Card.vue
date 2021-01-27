<template>
  <div :class="`card ${card.vendor}`" @click="selectCard">
    <div class="chip">
      <img
        :src="require(`../assets/chip-${this.vendorStyles[card.vendor].chipTone}.svg`)"
        alt="Card chip"
      />
    </div>
    <div class="vendor">
      <img :src="require(`../assets/vendor-${card.vendor}.svg`)" />
    </div>

    <div class="card-number">
      <h2 v-for="num in numberArray" :key="num">
        {{ num }}
      </h2>
    </div>
    <div class="card-holder">
      <h5>CARDHOLDER NAME</h5>
      <h3>{{ card.name }}</h3>
    </div>
    <div class="valid-thru">
      <h5>VALID THRU</h5>
      <h3>{{ card.date }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  computed: {
    numberArray () {
      return this.card.number.match(/.{1,4}/g) || []
    }
  },
  methods: {
    selectCard () {
      this.$emit('click', this.card)
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
  background: linear-gradient(.689turn,hsla(0,0%,100%,.15),hsla(0,0%,100%,0) 99.07%),#ffae34;
  color: black;
}

.none, .blockchain, .ninja, .evil {
  color: white;
}

.none {
  background: linear-gradient(237.75deg,hsla(0,0%,100%,.24),hsla(0,0%,100%,0)),#d0d0d0;
}

.blockchain {
  background: linear-gradient(248.52deg,rgba(0,0,0,.15) 1.49%,transparent),#8b58f9;
}

.ninja {
  background: linear-gradient(248.3deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0)),#222;
}

.evil {
  background: linear-gradient(248.3deg,rgba(0,0,0,.16),transparent),#f33355;
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
