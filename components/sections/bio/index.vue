<template>
  <section-base 
    class="biography" 
    title="About me"> 
    <div class="body">
      <div class="text">
        <p>
          My name is <span class="accent">Xabier Martinez Moreno</span>, I born in <span class="accent">Basque Country</span> in <span class="accent">1993</span>, but I moved to <span class="accent">Barcelona</span> some years ago.
        </p>
        <p>
          I'm <span class="accent">Software Developer</span>, mainly focused on <span class="accent">backend development</span>, but I dont discard any opportunity to learn and work with new tools.
          About my personality, I'm an <span class="accent">ambitious</span> developer, always looking for new challenges. I also love work in team.
        </p>
        <p>
          I spend my free time between <span class="accent">learning new things</span> to improve my self as developer, and doing <span class="accent">sport</span>, as it gives me the opportunity to <span class="accent">beat myself</span>.
        </p>
      </div>
      <div class="info">
        <info-box
          text="Xabier Martinez Moreno"
          icon="smile"
        />
        <info-box
          :text="age"
          icon="birthday-cake"
        />
        <info-box
          text="Barcelona, Spain"
          icon="home"
        />
        <info-box
          text="Software developer"
          icon="keyboard"
        />
      </div>
    </div>
  </section-base>
</template>

<script>
import SectionBase from '../section'
import InfoBox from './info-box'
export default {
  components: {
    SectionBase,
    InfoBox
  },
  data(){
    return {
      birthday: new Date(1993, 2, 17),
      currentDate: new Date()
    }
  },
  computed: {
    photosLoaded(){
      return Object.keys(this.photos).length > 0
    },
    age(){
      return (this.currentDate.getTime() - this.birthday.getTime())/31536000000
    }
  },
  mounted(){
    setInterval(() => {
      this.currentDate = new Date()
    }, 1000);
  }
}
</script>

<style lang="scss" >
.biography {
  .body{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .text {
      width: 65%;
      font-size: 1.5em;
      .accent {
        color: #ff5733;
      }
    }
    .info {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}

@media screen and (max-width: 768px) {
  .biography {
    .body{
      .text{
        width: 100%;
      }
      .info {
        width: 100%;
      }
    }
  }
}

</style>
