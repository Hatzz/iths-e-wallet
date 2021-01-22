<template>
  <div class="card">
    <div class="chip">
      <img src="../assets/chip-dark.svg" alt="Card chip" />
    </div>
    <div class="vendor">
      <img
        src="../assets/vendor-bitcoin.svg"
        alt="Bitcoin vendor"
        class="vendor"
      />
    </div>

    <div class="card-number">
      <h2>1232</h2>
      <h2>5678</h2>
      <h2>9123</h2>
      <h2>2567</h2>
    </div>
    <div class="card-holder">
      <h5>CARDHOLDER NAME</h5>
      <h3>Elias Lundgren</h3>
    </div>
    <div class="valid-thru">
      <h5>VALID THRU</h5>
      <h3>12/22</h3>
    </div>
  </div>
</template>

<script>
export default {}
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
  background: goldenrod;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  display: grid;
  grid-template-areas:
    "top-left top-right"
    "middle middle"
    "bottom-left bottom-right";
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
