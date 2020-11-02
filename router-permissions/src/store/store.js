import Vue from 'vue';
import Vuex from 'vuex';
import { routes } from './../router/indexByAdd'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state:{
        token:localStorage.getItem('token'),
        role:'',
        userInfo:{},
        initRouter:false,//是否已获取到动态路由
        routerList: [] // 动态路由
    },
    getter:{

    },
    actions:{

        login(ctx,{...loginInfo}){
            // return login().then(response=>{
            //
            // })
            ctx.commit('setUserInfo',{...loginInfo.userInfo});
            ctx.commit('setToken',loginInfo.token);
            ctx.commit('setRole',loginInfo.role);
        },
        getUserInfo(ctx,{...userInfo}){
            ctx.commit('setUserInfo',{...userInfo});
        },
        clearToken(ctx,token){
            ctx.commit('setToken',token);
        },
        getUserRouter(ctx,role){
            ctx.commit('getUserRouter',role);

        },
        // 动态设置路由 此为设置设置途径
        setRouterList({ commit }, routerList) {
            commit('setRouter', routes.concat([...routerList])) // 进行路由拼接并存储
        },
        clearRouterList({ commit},list){
            commit('clearRouter',[...list]) // 进行路由拼接并存储
        },

        setInitRouter({ commit }, status) {
            commit('setInitRouter', status)
        },

    },
    mutations:{
        setToken(state,token){
            state.token=token;
            localStorage.setItem('token',token);
        },
        setUserInfo(state,userInfo){
            state.userInfo={...userInfo};
        },
        setRole(state,role){
            state.role=role;
        },
        setInitRouter(state,status){
            state.initRouter=status;
        },
        setRouter: (state, routerList) => {
            state.routerList = [...routerList]
        },
        clearRouter:(state,list)=>{
            state.routerList = [...list]

        }

    },
})
