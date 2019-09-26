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
    <!--select-->
    <a-select defaultValue="Bluce" style="width: 100px">
      <a-select-option value="jack">jack</a-select-option>
      <a-select-option value="tom">tom</a-select-option>
      <a-select-option value="Alice">Alice</a-select-option>
    </a-select>
    <!--v-for遍历动态select-->
    <a-select v-model="testData" defaultValue="Jerry" style="width: 100px">
      <a-select-option v-for="(item,index) in options" :key="index" :value="item.value">{{item.text}}</a-select-option>
    </a-select>
    <br>
    被选中的属性：{{testData}}
    <a-input placeholder="disable测试，几种写法：disabled,:disabled,disable='true'" disabled></a-input>
    <!--多选-->
    <a-select mode="multiple" style="width: 500px" v-model="mulData">
      <a-select-option value="tom">tom</a-select-option>
      <a-select-option value="jerry">jerry</a-select-option>
      <a-select-option value="alice">alice</a-select-option>
      <a-select-option value="justin" disabled>justin</a-select-option>
    </a-select>

    <hr>
    <h4>文件上传</h4>
    <a-upload name="file" :multiple="true" :action="url.fileUpload" :headers="headers" @change="handleChange">
      <a-button>
        <a-icon typeof="upload"/>
        点击上传(file)
      </a-button>
    </a-upload>
    <br>
    <a-upload
      :action="url.fileUpload"
      list-type="picture-card"
      :fileList="fileList"
      :headers="headers"
      @preview="handlePreview2"
      @change="handleChange2">
      <div v-if="fileList.length<3">
        <a-icon type="plus"/>
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <!--弹框-->
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage"></img>
    </a-modal>

  </div>
</template>

<script>

  import Vue from 'vue'
  import {ACCESS_TOKEN} from "../../store/mutation-types";
  //发送请求的方法   或者 @/api/manage
  import {getAction} from "../../api/manage";

  export default {
    name: "myHello",
    //数据
    data() {
      return {
        msg: '',
        mm: '',
        bol: true,
        s: 'value-test',
        list: [{'v': 1}, {'v': 2}, {'v': 3}, {'v': 4}],
        options: [
          {text: 'mike', value: 'mike'}, {text: 'jerry', value: 'jerry'}, {text: 'alice', value: 'alice'}
        ],
        testData: 'Bob',
        mulData: ['tom', 'jerry', 'alice'],
        headers: {},
        url: {
          fileUpload: 'sys/common/upload'
        },
        previewImage: false,
        previewVisible: true,
        fileList: [
          {
            uid: 1,
            name: 'naikesesi.png',
            status: 'done',
            url: 'http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20181215/3b4bb23235ca4e1eab4243053c19130e.jpeg'
          }
        ]

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
      },
      //上传相关
      handlePreview2(file) {
        //图片预览
        this.previewImage = file.url || file.thumbUrl//标准url或者缩略图
        this.previewVisible = true
      },
      handleChange(info) {
        if (info.file.status != 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status == 'done') {
          this.$message.success(`${info.file.name} 文件上传成功`)
        } else if (info.file.status == 'error') {
          this.$message.error(`${info.file.name} 文件上传失败`)
        }

      },
      handleChange2({fileList}) {
        this.fileList = fileList
      },
      handleCancel() {
        this.previewVisible = false
      },
    },
    //页面初始化的时候就执行   dom对象还没有加载完毕
    created() {
      //也可以直接在这里调用getAction()
      this.yw();
      // 设置请求头信息
      const token = Vue.ls.get(ACCESS_TOKEN)
      this.headers = {'X-Access-Token': token}

    }
  }
</script>
<style scoped>

</style>