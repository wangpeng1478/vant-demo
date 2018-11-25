<template>
    <div>
        <h2 @click="onSubmit">{{name}}</h2>
        <Tabbars :actives="0"></Tabbars>
        <div v-for="(item,idnex) in list" :key="item.id">
          <p>{{idnex}}</p>
          <p>{{item.id}}</p>
          <p>{{item.title}}</p>
          <img :src="item.image" :alt="item.title" :title="item.title">
        </div>
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
            name: '首页',
            list:[]
        };
    },
    methods: {
        onSubmit() {
          var vm = this;
            axios({
                    method: 'post',
                    url: '/test'
                })
                .then(function(res) {
                    console.log(res)
                    vm.list = res.data.data.wpppp
                })
                .catch(function(err) {

                })
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