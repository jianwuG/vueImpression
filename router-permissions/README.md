# 菜单权限管理

* 方法1 控制权全在前端
  * 全局守卫beforeEach
  * router.js配置 meta元信息
  * vuex
  
* 方法2 控制权在前端+后端
  * 全局守卫beforeEach
  * router.js配置 meta元信息
  * vuex(vuex-persistedstate 实现刷新后数据持久化)
  * addRouter

* 方法3 登录页和菜单也分离

* 方法4 菜单由后端提供

* 方法5 菜单和路由都由后端提供
