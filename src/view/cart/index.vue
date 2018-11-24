<template>
    <div>
         <div class="card-list" v-for="item in goods" :key="item.id" :name="item.id">
                <div class="card-checkboxs">
                    <van-checkbox class="card-goods__item"></van-checkbox>
                </div>
                <div class="card-card">
                    <van-card :title="item.title" :desc="item.desc" :num="item.num" :price="formatPrice(item.price)" :thumb="item.thumb"></van-card>
                </div>
        </div>

        <van-submit-bar :price="totalPrice" disabled="true" :button-text="submitBarText" @submit="onSubmit">
            <van-checkbox v-model="checkedarr">全选</van-checkbox>
        </van-submit-bar>
        <Tabbars :actives="2"></Tabbars>
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
import Tabbars from '../module/index.vue';
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [CheckboxGroup.name]: CheckboxGroup,
        Tabbars
    },

    data() {
        return {
            checkedGoods: ['1', '2', '3'],
            checkedarr:true,
            goods: [{
                id: '1',
                title: '进口香蕉',
                desc: '约250g，2根',
                price: 200,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
            }, {
                id: '2',
                title: '陕西蜜梨',
                desc: '约600g',
                price: 690,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
            }, {
                id: '3',
                title: '美国伽力果',
                desc: '约680g/3个',
                price: 2680,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
            }]
        };
    },

    computed: {
        submitBarText() {
            return '结算'
        },
        totalPrice() {
            return 100
        }
    },

    methods: {
        formatPrice(price) {
            return (price / 100).toFixed(2);
        },
        onSubmit() {
            Toast('点击结算');
        }
    }
};
</script>
<style lang="less">
// scoped
.card-goods {
    padding: .2rem;
    background-color: #fff;
}

.van-submit-bar {
    bottom: 51px;
}
.card-list{
  position: relative;
  .card-checkboxs{
    position: absolute;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    top: 50%;
    left: 0;
    margin-top: -12.5px;
  }
  .card-card{
    margin-left:30px;
  }
}
</style>