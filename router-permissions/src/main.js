import Vue from 'vue';
import App from './App.vue';
// import router from './router/index';
//全局守卫beforeEach+meta
import {resetRouter} from './router/indexByAdd';
import router from './router/indexByAdd';
import store from "./store/store";
Vue.config.productionTip = false
const adminRouters=[
  {
    path: '/orderList',
    component: () => import('./components/order/order.vue'),
    name:"订单",
    meta: {
      title: '订单',
      icon: 'order',
      roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识

    }
  },
  {
    path: '/userList',
    component: () => import('./components/user/user.vue'),
    name:"个人中心",
    meta: {
      title: '个人中心',
      icon: 'user',
      roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识
    }
  },
];
//runtime

router.beforeEach((to, from, next) => {
  let hasRouter=store.state.routerList.some(item=>item.path===to.path)
  console.log('111',store.state.routerList.length,hasRouter);
    if(store.state.token){
      if (to.path !== "/login") {

        if(!store.state.initRouter){
          resetRouter();
          let addList=store.state.role==='admin'?adminRouters:[];
          router.addRoutes([...addList]); // vue-router提供的addRouter方法进行路由拼接
          store.dispatch("setRouterList", [...addList]);
          store.dispatch("setInitRouter", true);
          next({...to,replace:true})
        }
        else{
          if(!hasRouter){
            next({path:'/404'});
          }
          else{
            next();

          }
        }
      } else {
        console.log('已登录过1');
        next();
      }


    }
    else{
      if (to.path !== "/login") {
        next("/login");
      } else {
        next();
      }
    }


});





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
