// addRouter配置

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store/store";

Vue.use(VueRouter);

//配置公共的组件
let routes = [
    {
        path: '/',
        redirect:{
            name:"home"
        }
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('./../components/login/login.vue')
    },
    {
        path: '/auction',
        component: () => import('../components/auction/auction.vue'),
        name:'商品',
        meta: {
            title: 'auction',
            icon: 'auction',
            roles: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    },


    {
        path: '/home',
        component: () => import('../components/home/home.vue'),
        name: 'home',
    },
    {
        path: '/menuList',
        name: "菜单列表",
        component: () => import('../components/menuList/menuList.vue'),
    },
    {
        path: '/404',
        name: '错误',
        component: () => import('./../components/others/404.vue'),
        meta: {
            title: '错误',
            icon: '404',
            roles: ['admin','user'] // 在需要登录的路由的meta中添加响应的权限标识

        }
    }
];

    const adminRouters=[
        {
            path: '/orderList',
            component: () => import('../components/order/order.vue'),
            name:"订单",
            meta: {
                title: '订单',
                icon: 'order',
                roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识

            }
        },
        {
            path: '/userList',
            component: () => import('../components/user/user.vue'),
            name:"个人中心",
            meta: {
                title: '个人中心',
                icon: 'user',
                roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识
            }
        },
    ];

const router = new VueRouter({routes});



router.beforeEach((to, form, next) => {
        if (!store.state.role) {
            next();
        } else {
            router.matcher = new VueRouter({
                routes
            }).matcher;
            router.addRoutes([...adminRouters]);
            //  if(store.state.role==='admin'){
            //      // router.$addRoutes([...adminRouters])
                 next({...to,replace:true})
            //      // console.log('11111111sssssssssss1111',router.options.routes)
            // }
            // else{
            //     next()
            // }
        }
    }
);


export default router;