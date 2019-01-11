<template>
  <div class="hi">
    <div class="hello">
      <div class="salute">
        Hi! I'm
      </div>
      <div class="name">
        Xabi
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
.hi {
  display: flex;
  width: 100%;
  max-width: none;
  height: 100vh;
  justify-content: center;
  align-items: center;
  
  background-image: url("~static/me.jpg");
  background-size: cover;
  background-position: 85% 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;

  .hello {
    color: #ffffff;
    text-align: center;
    font-weight: 800;
    font-style: normal;
    font-size: 300%;
    border: solid;
    padding: 5%;
    .name {
      color: #ff5733;
    }
  }
}

@media screen and (max-width: 600px) {
  .hi {
    background-attachment: scroll;
  }
}
</style>
