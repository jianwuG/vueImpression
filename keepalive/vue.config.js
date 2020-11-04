const path = require("path");


module.exports = {
    publicPath: './',
    lintOnSave: false,// 是否在保存的时候检查
    configureWebpack: {
        resolve: {
            //配置路径别名
            alias: {
                'src': '@/src',

            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 直接覆盖变量
                        'text-color': '#111',
                        'border-color': '#eee',
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "your-less-file-path.less";`,
                    },
                },
            },
        },
    },
    devServer: {
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        open: true, // 是否打开浏览器
        host: "localhost",
        port: "8080", // 代理断就
        https: false,
        hotOnly: true, // 热更新

    }
}
