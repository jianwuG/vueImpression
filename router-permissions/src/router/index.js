import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)

let routers=[

    {
        path: '/auction/auction',
        component: () => import('../components/auction/auction.vue'),
        meta: {
            title: 'auction',
            icon: 'auction'
        }
    },
    {
        path: '/order/order',
        component: () => import('../components/order/order.vue'),

        meta: {
            title: 'order',
            icon: 'order',
            role: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    },
    {
        path: '/user/user',
        component: () => import('../components/user/user.vue'),

        meta: {
            title: '个人中心',
            icon: 'user',
            role: 'admin' // 在需要登录的路由的meta中添加响应的权限标识
        }
    },
    {
        path: '/other/404',
        component: () => import('../components/other/404.vue'),
    }
    ,{
      path:'*',
      redirect: './login'
    }
];
const router=new Router(...routers);

//假设有两种角色：admin 和 user
//从后台获取的用户角色
const role = 'user'
//当进入一个页面是会触发导航守卫 router.beforeEach 事件
router.beforeEach((to,from,next)=>{
    console.log('111111111111111',to);
    if(to.meta.roles===role){
        next('/')	//放行
    }
})


export default router;
