<template>
  <div>
    GO
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  method:{
    goSearch:function(){
      console.log('11111111',this.$router);
      this.$router.push({path:'/search'});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
