<template>
  <div class="item">
    <i 
      v-tooltip.bottom="techName" 
      :class="iconClass"/>
  </div>
</template>

<script>
import VTooltip from 'v-tooltip'

export default {
  components: {
    VTooltip
  },
  props: {
    techName: {
      type: String,
      required: true
    }
  },
  computed: {
    iconClass() {
      return `devicon-${this.techName}-plain`
    }
  }
}
</script>


<style lang="scss" scoped>
  .item {
    padding: 10px 10px;
    i{
      color: #ffffff;
      font-size: 2.5rem;
      &:hover{
        color:#ff5733;
      }
    }
  }
</style>

