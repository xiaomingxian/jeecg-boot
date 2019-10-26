//入口js

//导入jquery--$:变量名;jquery:nodel_model中的jquery模块
//import ** from ** 是es6导入模块的方式
import $ from 'jquery'
//隔行变色
$(function () {
    //odd偶数，even奇数
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function () {//另一种方式
        return '#' + 'D97634'
    })
})

//webpack：1 能够处理js文件相互依赖关系 2 能够处理js兼容问题，把高级的浏览器不支持的语法(es6),转为低级的，浏览器能识别的语法
//webpack xxxx 打包到dist默认位置