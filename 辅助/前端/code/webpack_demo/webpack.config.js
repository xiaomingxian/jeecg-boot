const path = require('path')
//热部署第二部
// const webpack=require('webpack')
//在内存中生成html的插件
// const htmlwp= require('html-webpack-plugin')

//node语法，webpack基于node
//这个配置文件，通过node中的模块操作，向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口，打那个包
    output: {
        path: path.join(__dirname, './src/dist'),
        filename: 'main2.js'
    },
    devServer: {
        open: true,
        port: 4000,
        contentBase: '/',
        hot: true//热部署第一步
    },
    //热部署第三部
    plugins:[
        //为定义？？？？
        // new webpack.HotModuleReolacementPlugin(),//
        // new htmlwp({
        //     template:path.join(__dirname,'./src/index.html'),
        //     filename: 'index2.html'
        // })
    ]
}
//直接运行webpack打包
//