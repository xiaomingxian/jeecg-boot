const path = require('path')


//node语法，webpack基于node
//这个配置文件，通过node中的模块操作，向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口，打那个包
    output: {
        path: path.join(__dirname, './src/dist'),
        filename: 'main2.js'
    }
}
//直接运行webpack打包
//