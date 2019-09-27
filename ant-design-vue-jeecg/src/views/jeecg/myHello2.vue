<template>
  <div>
    <h4>时间框</h4>
    <!--方法一[v-model数据双向绑定]:-->
    <j-date v-model="dateStr" placeholder="请选择时间"></j-date>
    <br>

    <div>
      <!--方法二[v-decorator结合form表单]:-->
      <a-form :form="form123">
        <a-form-item label="日期">
          <j-date :trigger-change="true" v-decorator="['dateStr2',{}]" placeholder="请选择时间"></j-date>

          <!--未测通-->
          <j-date v-decorator="['dateStr3',{trigger:'input'}]" placeholder="请选择时间"></j-date>

        </a-form-item>
      </a-form>
    </div>
    <hr>
    <a-table>
      <a-row>
        <a-collapse></a-collapse>

      </a-row>

    </a-table>

  </div>
</template>

<script>

  import JDate from "../../components/jeecg/JDate";
  import ARow from "ant-design-vue/es/grid/Row";

  export default {
    name: "myHello2",
    components: {ARow, JDate},
    data() {
      return {
        dateStr: '',
        form123: this.$form.createForm(this)

      }
    },
    methods: {},
    created() {
      // this.form123 = this.$form.createForm(this)
    }
  }
</script>

<style scoped>

</style>