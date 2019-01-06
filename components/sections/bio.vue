<template>
  <section-base 
    class="biography" 
    title="About me"> 
    <div class="body">
      <div class="text">
        <p>
          My name is <span class="accent">Xabier Martinez Moreno</span>, a guy from <span class="accent">Basque Country</span> who moved to <span class="accent">Barcelona</span> some years ago.
          I'm <span class="accent">Software Developer</span>, I have coded in different programming languages, but I'm mainly focused in <span class="accent">backend development</span>.
          About my personality, I'm an <span class="accent">ambitious</span> developer, always looking for new challenges.
        </p>
        <p>
          I almost spend all my free time doing <span class="accent">sport</span>, as it gives me the opportunity to <span class="accent">beat myself</span>, now I'm involved in obstacle races.
        </p>
      </div>
      <div
        v-if="photosLoaded"
        class="photos">
        <carousel
          :pagination-enabled="false"
          :per-page="1"
          :autoplay-timeout="5000"
          :touch-drag="false"
          :mouse-drag="false"
          loop
          autoplay
        >
          <slide 
            v-for="(photo, i) in photos" 
            :key="i"
          >
            <div class="photo-container">
              <img :src="photo">
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section-base>
</template>

<script>
import SectionBase from './section'

export default {
  components: {
    SectionBase
  },
  data(){
    return {
      photos: {}
    }
  },
  computed: {
    photosLoaded(){
      return Object.keys(this.photos).length > 0
    }
  },
  created(){
    const files = require.context("~/static/photos", true)
    let imgs = {}
    files.keys().forEach(key => (imgs[key] = files(key)))
    this.photos = imgs
  }
}
</script>

<style lang="scss">
.biography {
  .body{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .text {
      width: 65%;
      font-size: 1.2em;
      .accent {
        color: #ff5733;
      }
    }
    .photos {
      width: 30%;
      .photo-container {
        max-height: 75vh;
        img {
          max-width: 100%;
          max-height: auto;
          overflow:auto;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .biography {
    .body{
      .text{
        width: 100%;
      }
      .photos {
        width: 100%;
      }
    }
  }
}

</style>
