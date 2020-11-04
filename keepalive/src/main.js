import { createApp } from 'vue'
// import store from "./store";
import Vuex from 'vuex'
import App from './App.vue'
import router from "./router";
import { Search,Loading,List,Cell,Image as VanImage} from 'vant';
import 'vant/lib/index.css';
createApp(App).
use(router).
// use(store).
// use(Vuex).
use(Search).
use(Loading).
use(List).
use(Cell).
use(VanImage).
mount('#app');
