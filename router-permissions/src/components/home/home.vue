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
             <router-link to="/order">订单</router-link> |
             <router-link to="/user">用户</router-link> |
             <router-link to="/auction">商品</router-link>|
             <router-link to="/login">登录</router-link>
     </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "home",
        data:function(){
            return{
            }
        },
        computed:{
            ...mapState(['role','token'])

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
