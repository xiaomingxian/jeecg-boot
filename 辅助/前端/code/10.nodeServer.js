////node 服务运行方式  node 服务文件

//导入http内置模块
const http = require('http')
//解析url  拿到 pathname query
const urlModule = require('url')

//创建一个http服务器
const server = http.createServer()

//监听http服务器的request请求
server.on('request', function (req, res) {
    // const url = req.url


    //pathname:url 将解析的pathname重命名为url
    const {pathname: url, query} = urlModule.parse(req.url, true)


    var data = {
        name: '跨域返回信息',
        date: new Date(),
        address: 'beijing'
    }


    if (url === '/getscript') {
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用----也可执行本服务器上的方法返回一些数据/或者其他处理方式
        // var script = 'show()'

        //动态获取
        var script = `${query.callback}(${JSON.stringify(data)})`
        //返回数据
        res.end(script)
    } else {
        res.end('404')
    }
})


//指定端口号并启动服务器监听
server.listen(3000, function () {
    console.log('server listen at  http://localhost:3000')
})
