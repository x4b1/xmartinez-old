<template>
  <div class="hi">
    <div class="hello">
      <img
        src="~/static/me.png"
        alt="Avatar"
        class="avatar">
      <div class="salute">
        Hi! I'm <span class="name">Xabi</span>
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

  .hello {
    color: #ffffff;
    text-align: center;
    font-weight: 800;
    font-style: normal;
    font-size: 300%;
    border: solid;
    padding: 5%;
    .avatar {
      border-radius: 50%;
    }
    .salute {
      margin-top: 10%;
      .name {
        color: #ff5733;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .hi {
    background-attachment: scroll;
  }
}
</style>
