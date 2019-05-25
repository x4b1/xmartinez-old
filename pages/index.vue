<template>
  <div>
    <hi-section />
    <social />
    <bio-section />
    <skills-section />
    <experience-section />
  </div>
</template>

<script>
import HiSection from '~/components/sections/hi'
import BioSection from '~/components/sections/bio'
import SkillsSection from '~/components/sections/skills'
import ExperienceSection from '~/components/sections/experience'
import Social from '~/components/sections/social'

export default {
  components:{
    HiSection,
    BioSection,
    SkillsSection,
    ExperienceSection,
    Social
  }
}
</script>
<style lang="scss" >
@import "@/node_modules/normalize.css";

@font-face {
  font-family: 'Dosis';
  font-display: fallback;
  src: url('~assets/fonts/Dosis/Dosis-Regular.ttf') format('truetype');
}


body {
  font-family: "Dosis", sans-serif;
  color: #ffffff;

  background-image: url("~static/background.png");
  background-attachment: scroll;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

@media screen and (max-width: 600px) {
  body {

  }
}
</style>
