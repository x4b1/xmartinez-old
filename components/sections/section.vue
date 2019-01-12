<template>
  <section class="section">
    <div class="bounds">
      <h2 
        class="title" 
        v-text="title" />
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
.section {
  padding: 5% 2%;
  height: 100%;
  .bounds {
    padding: 10px;
    border: 0.5px solid #ffffff;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.25);
    .title {
      text-align: center;
    }
  }
}
</style>
