<template>
  <div class="info-box">
    <div 
      class="text" 
      v-text="text"/>
    <div class="icon">
      <fa
        :icon="icon"
        size="lg"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.info-box {
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  margin-bottom: 10px;
  .text {
    color: #ff5733;
    font-weight: bold;
    padding: 10px;
  }
  .icon {
    display: flex;
    width: 4.5rem;
    justify-content: center;
    svg {
      height: 100%;
    }
  }
}
</style>

