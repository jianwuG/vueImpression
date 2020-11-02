const routes=[
    {
        path:'/home',
        component:()=>import('./../components/home/home.vue')
    },
    {
        path:'/search',
        component:()=>import('./../components/search/search.vue')
    },
    {
        path:'/list',
        component:()=>import('./../components/list/list.vue')
    },
    {
        path:'/detail',
        component:()=>import('./../components/detail/detail.vue')
    },
];

export default routes;
