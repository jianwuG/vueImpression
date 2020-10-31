import Vue from 'vue'
import VueRouter from "vue-router";
import store from "../store/store";
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        redirect:'/home'
    },

    {
        path: '/home',
        component: () => import('../components/home/home.vue'),
        name:'Home',
        meta: {
            title: 'home',
            icon: 'home',
            roles: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识
        }
    },
      {
        path: '/auction',
        component: () => import('../components/auction/auction.vue'),
        name:'Auction',
        meta: {
            title: 'auction',
            icon: 'auction',
             roles: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    },
    {
        path: '/order',
        component: () => import('../components/order/order.vue'),
        name:"Order",
        meta: {
            title: 'order',
            icon: 'order',
            roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    },
    {
        path: '/user',
        component: () => import('../components/user/user.vue'),
        name:"user",
        meta: {
            title: '个人中心',
            icon: 'user',
            roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识
        }
    },
    {
        path: '/login',
        component: () => import('../components/login/login.vue'),
        name:"login",
        meta: {
            title: '登录',
            icon: 'login',
            // roles: ['admin' ,'user'] // 在需要登录的路由的meta中添加响应的权限标识
        }
    },
    {
         path: '/404',
        component: () => import('../components/others/404.vue'),
        name:"Order",
        meta: {
            title: '404',
            icon: '404',
              roles: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    },
    {
        path: '/menuList',
        name:"MenuList",
        component: () => import('../components/menuList/menuList.vue'),
    }
];
const router=new VueRouter({routes});

//假设有两种角色：admin 和 user
//从后台获取的用户角色
//当进入一个页面是会触发导航守卫 router.beforeEach 事件
router.beforeEach((to,from,next)=>{
    if(!store.state.role){
        if(store.state.token){
            store.dispatch('login',{"userInfo":{name:'普通用户',age:'12'},"token":'ssssswewew',"role":'user'});
            next();
        }
        else{
          // window.alert('请登录');
          next();
        }
        // next({name:'login'})
    }
    else{
        if(to.meta.roles&&to.meta.roles.includes(store.state.role)){
            next();
        }
        else{
            next({path:"/404"});
        }
    }

})


export default router;
