<template>
  <div class="section">
    <div class="title">
      {{ title }}
    </div>
    <div class="list">
      <slot />
    </div>
  </div>
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
  width: 45%;
  border-radius: 10px;
  margin: 10px;
  .title {
    padding-bottom: 5px;
    border-bottom: #ffffff solid 1px;
    text-align: center;
  }
  .list {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

@media screen and (max-width: 600px) {
  .section {
    width: 100%;
  }
}
</style>

