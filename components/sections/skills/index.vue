<template>
  <section-base 
    class="skills" 
    title="Skills">
    <skills-table>
      <skill-section title="Languages">
        <skill tech-name="go"/>
        <skill tech-name="php"/>
        <skill tech-name="javascript"/>
        <skill tech-name="postgresql"/>
        <skill tech-name="mysql"/>
        <skill tech-name="java"/>
        <skill tech-name="css3"/>
      </skill-section>
      <skill-section title="Technologies">
        <skill tech-name="symfony"/>
        <skill tech-name="doctrine"/>
        <skill tech-name="laravel"/>
        <skill tech-name="vuejs"/>
        <skill tech-name="nodejs"/>
        <skill tech-name="zend"/>
      </skill-section>
      <skill-section title="Version control">
        <skill tech-name="git"/>
      </skill-section>
      <skill-section title="Automatization">
        <skill tech-name="webpack"/>
        <skill tech-name="docker"/>
      </skill-section>
    </skills-table>
  </section-base>
</template>

<script>
import SectionBase from '../section'
import SkillsTable from './skills-table'
import SkillSection from './skills-table/section'
import Skill from './skills-table/skill'

export default {
  components: {
    SectionBase,
    SkillsTable,
    SkillSection,
    Skill
  },
  data(){
    return {
      icon: require('~/node_modules/devicon/icons/go/go-original.svg?inline')
    }
  }
}
</script>
 