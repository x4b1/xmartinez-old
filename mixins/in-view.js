export default {
  data(){
    return {
      inView: false,
    }
  },
  mounted(){
    window.addEventListener("load", this.isInViewport);
    window.addEventListener("resize", this.isInViewport);
    window.addEventListener("scroll", this.isInViewport);
  },
  destroyed(){
    window.removeEventListener("load", this.isInViewport);
    window.removeEventListener("resize", this.isInViewport);
    window.removeEventListener("scroll", this.isInViewport);
  },
  methods: {
    isInViewport(){
      var rect = this.$el.getBoundingClientRect();
      this.inView = (
        rect.top >= 0 ||
        rect.left >= 0 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ||
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  }
}