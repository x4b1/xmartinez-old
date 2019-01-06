<template>
  <section-base 
    class="experience" 
    title="Experiences"> 
    <timeline>
      <item
        date-start="Nov 2018"
        date-end="Present"
        title="Software developer"
        location="Arex"
        link="https://arex.io/">
        Working as a software developer on Node.js and Golang microservices as back-end and Vue.js front-end. Now, we are working on migrate a monolith into microservices while we improve current functionalities. 
        At first this was challenging because I changed from PHP to Node.js and Golang.
      </item>
      <item
        date-start="Feb 2018"
        date-end="Nov 2018"
        title="Backend developer"
        location="Holaluz"
        link="https://www.holaluz.com/en/">
        At Holaluz I was hired as PHP backend developer but finally I worked as Full Stack developer, also I had the opportunity to play with system automation stuff like Ansible. I worked in the team that developments were for the sales team. Apart from made new features in the current platform and fix some legacy code. We started to create a new platform that will handle all sales requirements.
        I used different PHP frameworks, as Symphony, Laravel and Zend, and PostgreSQL for DB 
      </item>
      <item
        date-start="Jun 2017"
        date-end="Feb 2018"
        title="Squad Leader"
        location="Inbenta"
        link="https://www.inbenta.com/en/">
        Later Inbenta tech department was restructured, and some of us were promoted to a new team to productivize company. I was assigned the "Content Digest", a massive importer from different data sources, like, web crawling, Zendesk, Salesforce, Shopify. Also, I created a UI with Vue.js, allowing clients easily to set up his own importer.
      </item>
      <item
        date-start="Feb 2016"
        date-end="Jun 2017"
        title="Full-stack developer"
        location="Inbenta"
        link="https://www.inbenta.com/en/">
        At Inbenta, a company that provides solutions to bussines with natural processing language integrating in clients websites, I had the opportunity to apply my knowledge of PHP, JS and SQL. 
        I worked for many projects of South American countries and Spain. 
        I created custom chatbots, integrations with facebook and imports from client data to allow process by Inbenta's engine and some ticketing functionalities.
      </item>
      <item
        date-start="Oct 2014"
        date-end="Jan 2016"
        title="Intern Developer"
        location="Arin Innovation"
        link="http://www.arin-innovation.com/en/">
        I did my first internship at Arin Innovation, a consulting services company. 
        My daily work was to talk with clients to get the requirements and develop them. 
        There I learned to apply the knowledge learned to develop with Oracles tools, such as JD Edwards and Oracle DB. First I was contracted for one year, when it finished they proposed me to extend the contract.
      </item>
      <item
        date-start="2011"
        date-end="2015"
        title="B.S. In Computer Science"
        location="UPV/EHU"
        link="https://www.ehu.eus/es/grado-ingenieria-informatica-de-gestion-y-sistemas-de-informacion-bizkaia">
        During my time in college, I learned, algorithms, modelling (UML, sequence diagrams), testing... but I think the most important I learned to find a way to solve problems. The main technologies I used was Java and MySQL, but also I made some projects with JS, PHP and C.
      </item>
    </timeline>
  </section-base>
</template>
 
<script>
import Timeline from '../timeline'
import Item from '../timeline/item'
import SectionBase from './section'

export default {
  components: {
    SectionBase,
    Timeline,
    Item
  }
}
</script>
 