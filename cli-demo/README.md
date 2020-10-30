#### cli-demo vue-cli3+版本配置
  * 基本配置
    * 配置dev环境proxy跨域，
    * hmr失效对应配置
    * 添加应用别名 resolve =》 alias
    * 图片压缩 image-webpack-loader
    * 去掉无效的css
    * 去掉 console.log
      * babel.config中配置（使用 babel-plugin-transform-remove-console 插件）
      * vue.config.js中配置 (uglifyjs-webpack-plugin)
      
      
      
  * 修改
    * import '@babel/polyfill' babel7.4.0废弃
    * vue-cli4 css;false 改为  requireModuleExtension: false
    
    
  * bug
    * 打包报错 typeError: Class constructor Extractor cannot be invoked without 'new'
      可能是包兼容性问题
