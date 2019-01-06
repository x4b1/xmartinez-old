<template>
  <div>
    <hi-section />
    <bio-section />
    <!-- <skills-section /> -->
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
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Dosis");
@import "@/node_modules/normalize.css";

body {
  font-family: "Dosis", sans-serif;
  color: #ffffff;

  background-image: url("~static/background.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
