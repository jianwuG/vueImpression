const routes=[
    {
      path:'/',
      redirect:{
          name:'Home'
      }
    },
    {
        path:'/home',
        name:'Home',
        component:()=>import('./../components/home/home.vue'),
        meta:{
            title:'首页'
        }
    },
    {
        path:'/search',
        name:'Search',
        component:()=>import('./../components/search/search.vue'),
        meta:{
            title:'列表',
            keepAlive:true,
        }

    },
    {
        path:'/detail',
        name:'Detail',
        component:()=>import('./../components/detail/detail.vue'),
        meta:{
            title:'详情',
        }
    },
];

export default routes;
