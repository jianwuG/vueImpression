<template>

    <div class="login">
        <button class="login-user" @click="setUserInfo">获取user权限(普通用户登录)</button>
        <button class="login-admin" @click="setAdminInfo">获取admin权限(管理员登录)</button>
    </div>

</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "login",
        data:function () {
            return{
               ...mapState,
            }
        },
        methods:{
            setUserInfo(){
                this.login({"userInfo":{name:'普通用户',age:'12'},"token":'ssssswewew',"role":'user'});
                this.$router.push('/home');

            },
            setAdminInfo(){
                this.login({userInfo:{name:'管理员',age:'12'},token:'szzz',"role":'admin'});
                this.$router.push('/home');

            },
            ...mapActions(['login'])
        }

    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        width: 120px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }


</style>
