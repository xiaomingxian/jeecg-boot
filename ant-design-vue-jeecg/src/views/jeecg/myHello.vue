<template>
  <!--页面展示区域-->
  <div>
    {{msg}},{{mm}}
    <p v-if="bol">{{s}}</p>
    <p v-for="i in list">{{i.v}}</p>

    <!--引入表单-->
    <!--<my-hello></my-hello>-->
    <!--<my-hello ref="modalForm" @ok="modalFormOk"></my-hello>-->

    <!--input test-->
    <a-input placeholder="请输入内容" v-model="msg"></a-input>
    <!--单向绑定，通过事件来实现双向绑定-->
    <a-input placeholder="单向绑定" defaultValue="msg" @change="double_bind"></a-input>


  </div>
</template>

<script>
  export default {
    name: "myHello",
    //数据
    data() {
      return {
        msg: '',
        mm: '',
        bol: true,
        s: 'value-test',
        list: [{'v': 1}, {'v': 2}, {'v': 3}, {'v': 4}]
      }
    },
    //方法调用
    methods: {
      yw() {
        var url = '/yw/ywTest'
        getAction(url).then((res) => {
          if (res.success) {
            console.log("-----------log test -----------")
            this.msg = res.result
            this.mm = res.result
          }
        })
      },
      double_bind(e) {
        //e:回掉参数
        this.msg = e.target.value

      }
    },
    //页面初始化的时候就执行   dom对象还没有加载完毕
    created() {
      //也可以直接在这里调用getAction()
      this.yw();
    }
  }
  //发送请求的方法   或者 @/api/manage
  import {getAction} from "../../api/manage";</script>

<style scoped>

</style>