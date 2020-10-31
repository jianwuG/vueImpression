<template >
  <div id="app">
    <div class="center">
      <router-link to="/home">Home</router-link> |
      <router-link to="/menuList">Menu</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>

  </div>
</template>
<script>
  export default {
    name:"app"
  }
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
  .center{
    width: 600px;
    height: 50vh;
    border:1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .view{
    width:600px;
    height: 50vh;
    background-color:pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
