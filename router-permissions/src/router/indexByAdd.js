// addRouter配置

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store/store";

Vue.use(VueRouter);

//配置公共的组件
export const routes = [
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


const createRouter = () =>
    new VueRouter({
        routes:routes
    });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    console.log('bbbbbbbbbbbbbbb',newRouter);
    router.matcher = newRouter.matcher; // reset router
}

export default router;
