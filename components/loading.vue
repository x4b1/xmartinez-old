<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="loader">
      <div
        class="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loader {
  background-color: #353535;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  overflow: show;
  margin: auto;
}
.lds-ripple {
  width: 64px;
  height: 64px;
  position: fixed;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #ff5733;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
