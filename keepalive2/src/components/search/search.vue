<template>
  <div>
      <button @click="getList">获取数据</button>

      <div class="list-div">
          <div v-for="(item,index) in list" :key="index" class="list-item" @click="goDetail">
                 {{item.name}}
          </div>
      </div>
  </div>
</template>

<script>
    import {Http} from '../../view/util/api';
    import {mapActions,mapState} from 'vuex'
    export default {
        name: "Search",
        data(){
            return{
                list:[],
            }
        },
        computed:{
            ...mapState(['keepAliveList'])
        },

        methods:{
           async getList(){
               let body = await Http.get('/getList/')
               if (body.status === 200) {
                   this.list = body.data.data || [];
               }
               console.log('1111111111111',this.list,[...this.keepAliveList]);
            },
            goDetail(){
               this.$router.push('/detail');
            },
            ...mapActions(['splitKeepList','addKeepList'])
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                if(from.name==='Home'){
                }
            });
        },
        beforeRouteLeave(to, from, next){
            if(to.name==='Home'){
                this.splitKeepList({name:from.name});
            }
            next();
        },
    }
</script>

<style scoped>
 .list-div{
     width: 100%;
     margin-top: 20px;
 }
    .list-item{
        height: 100px;
        border-bottom: 1px solid #ededed;
       display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
