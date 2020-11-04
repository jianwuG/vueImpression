import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
   state:{
     keepAliveList:[],
   },
    getters:{

    },
    mutations:{
        setKeepList(state,name){
            let hasOne=this.state.keepAliveList.some(item=>item===name);
            if(!hasOne){
                this.state.keepAliveList.push(name);
            }
        },
        splitKeepList(state,name){

            let index=this.state.keepAliveList.indexOf(name);
            index>-1&&this.state.keepAliveList.splice(index,1)
        },
    },
    actions:{
        addKeepList(ctx,{...info}){
            ctx.commit('setKeepList',info.name);
        },
        splitKeepList(ctx,{...info}){
            ctx.commit('splitKeepList',info.name);

        }
    }
});
