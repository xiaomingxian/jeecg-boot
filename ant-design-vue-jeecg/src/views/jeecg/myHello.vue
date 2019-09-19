<template>
  <div>{{msg}}</div>
</template>

<script>
  export default {
    name: "myHello"
    , data() {
      return {msg: ''}
    }
    , methods: {
      yw() {
        var url = '/yw/ywTest'
        getAction(url).then((res) => {
          if (res.success) {
            this.msg = res.result
          }
        })
      }
    },
    created() {
      this.yw();
    }
  }
  import {getAction} from "../../api/manage";
</script>

<style scoped>

</style>