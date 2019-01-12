<template>
  <div>
    <hi-section />
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

export default {
  components:{
    HiSection,
    BioSection,
    SkillsSection,
    ExperienceSection
  }
}
</script>
<style lang="scss" >
@import "@/node_modules/normalize.css";

@font-face {
  font-family: 'Dosis';
  src: url('~assets/fonts/Dosis/Dosis-Regular.ttf') format('truetype');
}


body {
  font-family: "Dosis", sans-serif;
  color: #ffffff;

  background-image: url("~static/background.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
