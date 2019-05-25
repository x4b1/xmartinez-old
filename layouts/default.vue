<template>
  <div v-show="!loading">
    <nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  created() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      window.addEventListener('load', this.loaded)
    })
  },
  methods: {
    loaded() {
      this.loading = false
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

