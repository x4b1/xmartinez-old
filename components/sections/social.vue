<template>
  <div class="social">
    <a
      class="bubble"
      href="https://twitter.com/xabi_03"
      target="_blank"
    >
      <fa 
        :icon="['fab', 'twitter']" 
        size="lg"
        class="icon" />
    </a>
    <a
      class="bubble"
      href="https://www.instagram.com/xabi_93/"
      target="_blank"
    >
      <fa 
        :icon="['fab', 'instagram']" 
        size="lg"
        class="icon" />
    </a>
    <div
      class="bubble"
      href="https://www.linkedin.com/in/xmartinez"
      target="_blank"
    >
      <fa 
        :icon="['fab', 'linkedin']" 
        size="lg"
        class="icon" />
    </div>
  </div>
</template>



<style lang="scss" scoped>
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% 2% 5%;
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
