import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token:localStorage.getItem('token'),
        role:'',
        userInfo:{},

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
        }

    },
})