<template >
  <div id="app">
    <div class="center">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />
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
    width: 300px;
    height: 200px;
    border:1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
