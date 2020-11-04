# keepalive2

* 实现页面缓存(A->B->C) A->B不缓存 B->C C返回B缓存
  * 实现方案
    * vuex+vueRouter(beforeEach+meta+beforeRouteLeave+vuex) 
  * 当前基于vueRouter3.4.8,项目keepalive中路由版本^4.0.0-rc.1似乎不支持keep-alive
