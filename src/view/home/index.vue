<template>
  <div>
    <h2 @click="onSubmit">{{name}}</h2>
    <Tabbars :actives="0"></Tabbars>
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
      name:'首页'
    };
  },
  methods: {
    onSubmit() {
      // axios({
      // method:'post',
      // url:'/api/webupend',
      // data:{}
      // })
      // .then(function (res) {
        
      // })
      // .catch(function (err) {
          
      // })
    }
  }
};
</script>

<style lang="less" scoped>
.card-goods {
  padding: .2rem 0;
  background-color: #fff;

  &__item {
    position: relative;
    background-color: #fafafa;

    .van-checkbox__label {
      width: 100%;
      padding: 0 .2rem 0 15px;
      box-sizing: border-box;
    }

    .van-checkbox__icon {
      top: 50%;
      left: .2rem;
      z-index: 1;
      position: absolute;
      margin-top: -.2rem;
    }

    .van-card__price {
      color: #f44;
    }
  }
}
</style>
