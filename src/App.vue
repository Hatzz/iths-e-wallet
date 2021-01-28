<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 25rem;
  margin: 0 auto;
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
</style>
