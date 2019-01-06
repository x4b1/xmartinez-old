<template>
  <div class="skills-section">
    <h2 class="title">Skills</h2>
    <div class="body">
      <div class="text">
        <p>
          My name is <span class="accent">Xabier Martinez Moreno</span>, a guy from <span class="accent">Basque Country</span> who moved to <span class="accent">Barcelona</span> some years ago.
          I'm a <span class="accent">Software Developer</span>, I have coded in different programming languages, but I'm mainly focused in <span class="accent">backend development</span>.
          About my personality, I'm <span class="accent">ambitious</span> developer, always looking for new challenges.
        </p>
        <p>
          I almost spend my free time doing <span class="accent">sports</span>, as it gives me the oportunity to <span class="accent">success myself</span>, now I'm involved in obstacle races.
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
  </div>
</template>