<template>
   <div class="home-div">
       <div class="home-page">主页</div>
       <button @click="goSearch"> goSerach</button>
   </div>
</template>

<script>
export default {
  name: 'Home',
    methods:{
        goSearch:function(){
            console.log('11111111',this.$router);
            this.$router.push({path:'/search'});
        }
    }

}
</script>

<style scoped>
    .home-div{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .home-page{
        font-size: 48px;

    }
    button{
        margin-top: 200px;
    }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
