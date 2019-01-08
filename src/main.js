import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import { router } from './router';

import axios from 'axios' // 处理http请求
import loc from './view/module/localStorage.js';
//**vue-router*/
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.config.productionTip = false;

import { Dialog } from 'vant';


axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5be38f001a0b241d97ce443f/api';
// axios.defaults.timeout = 5000;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
new Vue({
    router,
    el: '#app',
    components: {
        [Dialog.name]: Dialog
    },
    render: h => h(App),
    data() {
        return {
            openId: loc.get('openId')
        };
    },
    updated(){
      // 
    },
    mounted() {
        let vm = this;
        // 添加请求拦截器
        axios.interceptors.request.use(function(config) {
           loc.set('openId',123)
           if (vm.openId==null) {
             Dialog.alert({
                className:'DialogCenter',
                title: '错误',
                message: '无法获取openId 请稍后再试！'
              })
             return false
           }else{
              config.data={
                 openId:vm.openId
              }
              return config;
           }
        }, function(error) {
            Dialog.alert({
                className:'DialogCenter',
                title: '错误',
                message: 'ajax error'
            })
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function(response) {
            if(response.data.state=="success"){
              return response.data;
            }else{
               Dialog.alert({
                className:'DialogCenter',
                title: '错误',
                message: 'ajax error'
              })
            }
            
        }, function(error) {

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