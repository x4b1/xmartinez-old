<template>
  <div class="social">
    <a
      v-for="(network, i) in networks"
      :key="i"
      :href="network.href"
      class="bubble"
      target="_blank"
    >
      <fa
        :icon="network.icon"
        size="lg"
        class="icon" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data: () => ({
    networks: [
      {href: "https://twitter.com/xabi_03", icon: ['fab', 'twitter']},
      {href: "https://www.instagram.com/xabi_93", icon: ['fab', 'instagram']},
      {href: "https://www.linkedin.com/in/xmartinez", icon: ['fab', 'linkedin']},
      {href: "https://github.com/xabi93", icon: ['fab', 'github']},
    ]
  })
}
</script>

<style lang="scss" scoped>
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 2%;
    .bubble {
      display: block;
      text-align: center;
      margin: 0px 10px;
      border: 2.5px solid #ff5733;
      border-radius: 50%;
      height: 5em;
      width: 5em;
      text-decoration: none;
      :hover {
        color: #ff5733;
      }
      .icon {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
        height: 2.5em;
        width: 2.5em;
      }
    }
  }
</style>
