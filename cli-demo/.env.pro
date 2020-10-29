
NODE_ENV = "production"
BASE_URL = "https://cliDemo.com"
#BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
VUE_APP_API = "https://cliDemo/api"
#只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中
