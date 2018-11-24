<template>
  <div>
    <h2>{{name}}</h2>
    <Tabbars :actives="1"></Tabbars>
  </div>
</template>
<script>
import axios from 'axios';
import Tabbars from '../module/index.vue';
export default {
  components: {
    Tabbars,
  },
  data() {
    return {
      time: new Date().toLocaleString(),
      name:'列表'
    };
  },
  methods: {
    onSubmit() {

    }
  }
};
</script>

<style lang="less" scoped>

</style>
