import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router';

import axios from 'axios' // 处理http请求

//**vue-router*/
import VueRouter from 'vue-router';
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
  mounted() {
    axios.interceptors.response.use(function (response) {
      console.log('成功')
      return response;
    }, function (error) {
      console.log('失败')
      console.log(error)
      return Promise.reject(error);
    });
    

    //  axios({
    //   method:'post',
    //   url:'/api/webupend',
    //   data:{}
    //   })
    //   .then(function (res) {
        
    //   })
    //   .catch(function (err) {
          
    //   })

  }
});