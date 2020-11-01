import Vue from 'vue';
import App from './App.vue';
// import router from './router/index';
//全局守卫beforeEach+meta
import router from './router/indexByAdd';
import store from "./store/store";
Vue.config.productionTip = false

//runtime

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
