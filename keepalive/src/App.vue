<template>
      <keep-alive include="Search">
        <router-view></router-view>
      </keep-alive>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      keepAliveComponents:['search']
    }
  },
  mounted(){
    console.log('路由',this.$router);
  },
  activated(){
    console.log('aaaaaaaaaaaaaaaaaaaaaaa');
  },
  deactivated(){
    console.log('bbbbbbbbbbbbbbbbbbbbbbb');
  },
  method:{
    goSearch:function(){
      console.log('11111111',this.$router,$route.meta.keepAlive);
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
}
</style>
