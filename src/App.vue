<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
.wrapper {
  max-width: 25rem;
  margin: 0 auto;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

h1, h2 {
  text-align: center;
}

a {
  background: grey;
  color: white;
  text-decoration: none;
  padding: 1.25rem;
  border-radius: 8px;
}
</style>
