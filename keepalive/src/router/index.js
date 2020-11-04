import { createRouter, createWebHashHistory ,createWebHistory} from "vue-router";
import routes from './config'


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach((to, from, next) => {
    console.log('11111',to);
    next();

});
export default router;
