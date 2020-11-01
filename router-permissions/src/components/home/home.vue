<template>
     <div>
        <div class="role-info">
            当前角色：
            <span v-if="role&&token">{{role}}</span>
            <span v-else>未登录</span>
        </div>
         <div class="role-btn">
             <button class="clear-role" @click="clearRole" v-if="role&&token">登出角色</button>
             <button class="toLogin" @click="goLogin" >去登陆/更换角色</button>
         </div>

         <template v-for="(menu,index) of menuList">
             <router-link :to="menu.path" :key="index">{{menu.name}}</router-link> |
         </template>

     </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex';
    import router from "../../router/indexByAdd";
    export default {
        name: "home",
        data:function(){
            return{
            }
        },
        computed:{
            menuList(){
              return   router.options.routes
            },
            ...mapState(['role','token'])

        },
        mounted() {
            console.log('ssssssssssssssss',router);
        },
        methods:{
            clearRole(){
               this.clearToken('')
            },
            goLogin(){
                this.$router.push('/login');
            },
            ...mapActions(['clearToken'])
        }

    }
</script>

<style scoped>
 .role-info{
     width: 100%;
     height: 20px;
     display: flex;
     flex-direction: row;
 }
 button{
     margin-left: 10px;
 }
    .role-btn{
        margin-top: 20px;
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
    }
</style>
