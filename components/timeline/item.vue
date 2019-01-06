<template>
  <li 
    :class="{ 'in-view': inView }" 
    class="item">
    <div class="content">
      <div class="header">
        <time v-text="dateInterval"/>
        <span class="title">{{ title }}</span> at {{ location }}
      </div>
      <div class="body">
        <slot/>
      </div>
      <a 
        :href="link" 
        :rel="location"
        class="link"
        target="_blank">
        <fa 
          icon="link"
          size="xs"
        />
        {{ location }}
      </a>
    </div>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    dateStart: {
      type: [String],
      required: true
    },
    dateEnd: {
      type: [String],
      default: null
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      inView: false
    };
  },
  computed: {
    dateInterval() {
      return this.dateEnd ? `${this.dateStart} - ${this.dateEnd}` : this.dateStart
    }
  },
  mounted() {
    window.addEventListener("load", this.isInViewport);
    window.addEventListener("resize", this.isInViewport);
    window.addEventListener("scroll", this.isInViewport);
  },
  destroyed() {
    window.removeEventListener("load", this.isInViewport);
    window.removeEventListener("resize", this.isInViewport);
    window.removeEventListener("scroll", this.isInViewport);
  },
  methods: {
    isInViewport() {
      var rect = this.$el.getBoundingClientRect();
      this.inView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
    }
  }
};
</script>

<style lang="scss">
.item {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #fff;
  transition: background 0.5s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: inherit;
  }
  .content {
    position: relative;
    bottom: 0;
    width: 350px;
    padding: 15px;
    border: 2px solid #ff5733;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;
      .header {
        font-weight: bold;
        time {
          display: block;
        }
        .title {
          color: #ff5733;
          font-weight: bold;
        }
      }
      .body {
        margin: 10px 0;
      }
      .link {
        color: #00ffff;
        text-decoration: none;
      } 
  }

  &:nth-child(odd) {
    .content {
      left: 40px;
      transform: translate3d(200px, 0, 0);
      &::before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent #ff5733 transparent transparent;
      }
    }
  }
  &:nth-child(even) {
    .content {
      left: -414px;
      transform: translate3d(-200px, 0, 0);
      &::before {
        right: -15px;
        border-width: 8px 0 8px 16px;
        border-color: transparent transparent transparent #ff5733;
      }
    }
  }

  &.in-view {
    &::after {
      background: #ff5733;
    }
    .content {
      transform: none;
      visibility: visible;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 900px) {
  .item {
    .content {
      width: 250px;
    }
  }
  &:nth-child(even) {
    .content {
      left: -289px;
    }
  }
}

@media screen and (max-width: 600px) {
  .item {
    margin-left: 20px;
    .content {
      width: calc(100vw - 91px);
    }
    &:nth-child(even){
      .content {
        left: 40px;
      }
      &::before {
        left: -15px;
        border-width: 8px 16px 8px 0;
        border-color: transparent #F45B69 transparent transparent;
      }
    }
  }
}
</style>
