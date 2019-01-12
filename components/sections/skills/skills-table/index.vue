<template>
  <div class="box">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
  }
</style>
