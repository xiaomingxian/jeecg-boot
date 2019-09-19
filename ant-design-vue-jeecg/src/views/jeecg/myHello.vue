<template>
  <!--页面展示区域-->
  <div>
    {{msg}},{{mm}}
    <p v-if="bol">{{s}}</p>
    <p v-for="i in list">{{i.v}}</p>

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