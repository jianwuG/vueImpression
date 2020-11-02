<template>
   <div>
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
