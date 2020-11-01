import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token:localStorage.getItem('token'),
        role:'',
        userInfo:{},
        addRouters:[],//根据角色权限获取到的附加路由
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

        }

    },
    mutations:{
        setToken(state,token){
            state.token=token;
            localStorage.setItem('token',token);
            console.log('22222222222222',state.token,token
            );
        },
        setUserInfo(state,userInfo){
            state.userInfo={...userInfo};
        },
        setRole(state,role){
            state.role=role;
        },
        // getUserRouter(state,role){
        //     let list=[];
        //     if(role==='user'){
        //         list=[]
        //     }
        //     else{
        //         list=[{
        //             "path": "'/order'",
        //             component: () => import('../components/order/order.vue'),
        //             name:"Order",
        //             meta: {
        //                 title: 'order',
        //                 icon: 'order',
        //                 roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识
        //
        //             }
        //         },
        //             {
        //                 path: '/user',
        //                 component: () => import('../components/user/user.vue'),
        //                 name:"user",
        //                 meta: {
        //                     title: '个人中心',
        //                     icon: 'user',
        //                     roles: ['admin'] // 在需要登录的路由的meta中添加响应的权限标识
        //                 }
        //             },
        //         ];
        //     }
        //     state.addRouters=[...list];
        //     console.log('111111111111111',role,[...state.addRouters]);
        //
        // }

    },
})