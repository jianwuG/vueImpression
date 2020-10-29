const path = require("path");
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const resolve = dir => path.join(__dirname, dir);

const IS_PROD = ["production"].includes(process.env.NODE_ENV);

module.exports = {
    publicPath: IS_PROD ? process.env.NODE_ENV : "./", // 默认'/'，部署应用包时的基本 URL
    // outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    // assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
    indexPath: 'index.html',//指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    pages: {//pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {//除了 entry 之外都是可选的
            entry: 'src/main.js',// page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
            template: 'public/index.html',// 模板来源
            filename: 'index.html',// 在 dist/index.html 的输出
            title: 'Index Page',// 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        },
        subpage: 'src/subpage/main.js'//官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
    },
    lintOnSave: true,// 是否在保存的时候检查
    productionSourceMap: !IS_PROD,// 生产环境是否生成 sourceMap 文件

    css: {
        extract: IS_PROD,// 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,// 开启 CSS source maps
        loaderOptions: {},// css预设器配置项
        modules: false// 启用 CSS modules for all css / pre-processor files.
    },
    //去除多余的css

    configureWebpack: config => {
        const plugins = [];
        if (IS_PROD) {
            plugins.push(
                new PurgecssPlugin({
                    paths: glob.sync([resolve("./**/*.vue")]),
                    extractors: [
                        {
                            extractor: class Extractor {
                                static extract(content) {
                                    const validSection = content.replace(
                                        /<style([\s\S]*?)<\/style>+/gim,
                                        ""
                                    );
                                    return (
                                        validSection.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
                                    );
                                }
                            },
                            extensions: ["html", "vue"]
                        }
                    ],
                    whitelist: ["html", "body"],
                    whitelistPatterns: [
                        /el-.*/,
                        /-(leave|enter|appear)(|-(to|from|active))$/,
                        /^(?!cursor-move).+-move$/,
                        /^router-link(|-exact)-active$/
                    ],
                    whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
                })
            );
        }
        config.plugins = [...config.plugins, ...plugins];
    },


    chainWebpack: config => {
        // 修复HMR失效
        config.resolve.symlinks(true);
        if (IS_PROD) {
            config.module
                .rule("images")
                .use("image-webpack-loader")
                .loader("image-webpack-loader")
                .options({
                    mozjpeg: { progressive: true, quality: 65 },
                    optipng: { enabled: false },
                    pngquant: { quality: [0.65, 0.9], speed: 4 },
                    gifsicle: { interlaced: false }
                    // webp: { quality: 75 }
                });
        }
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
        proxy: {
            "/api": {
                target:
                    "https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets", // 目标代理接口地址
                secure: false,
                changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
}
