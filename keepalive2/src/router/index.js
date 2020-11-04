import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './config'
import store from "./../store";

const router=new VueRouter({routes})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    if(to.meta&&to.meta.keepAlive){
        store.dispatch("addKeepList",{name:to.name});
    }
    next();
});
export default router;
