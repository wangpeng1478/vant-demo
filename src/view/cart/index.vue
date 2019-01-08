<template>
    <div>
        <div class="cardView">
        <div class="card-list" v-for="item in goods" :key="item.id" :name="item.id">
            <div class="card-checkboxs">
                <van-checkbox v-model="item.checkbox" class="card-goods__item"></van-checkbox>
            </div>
            <div class="card-card">
                <van-card :title="item.title" :desc="item.desc" :price="formatPrice(item.price)" :thumb="item.thumb">
                     <div slot="footer">
                           <van-stepper v-model="item.num" /> 
                     </div>
                </van-card>
            </div>
        </div>
         </div>
        <van-submit-bar :disabled="disabledBar" :price="totalPrice" :button-text="submitBarText" @submit="onSubmit">
            <van-checkbox @change="checkboxAlls" v-model="checkedarr">全选</van-checkbox>
        </van-submit-bar>

        <Tabbars :actives="2"></Tabbars>
    </div>
</template>
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast , Stepper } from 'vant';
import Tabbars from '../module/index.vue';
export default {
    components: {
        [Card.name]: Card,
        [Checkbox.name]: Checkbox,
        [SubmitBar.name]: SubmitBar,
        [Stepper.name]: Stepper,
        [CheckboxGroup.name]: CheckboxGroup,
        Tabbars
    },

    data() {
        return {
            checkedarr:false,
            disabledBar:true,
            goods: [{
                id: '1',
                checkbox:true,
                title: '进口香蕉',
                desc: '约250g，2根',
                price: 2,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
            }, {
                id: '2',
                checkbox:false,
                title: '陕西蜜梨',
                desc: '约600g',
                price: 6.9,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
            }, {
                id: '3',
                checkbox:false,
                title: '美国伽力果',
                desc: '约680g/3个',
                price: 2.68,
                num: 1,
                thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
            }]
        };
    },
    computed: {
        submitBarText() {
            var numAll = 0;
            var vm = this;
            vm.goods.forEach(function(value) {
                if (value.checkbox) {
                    numAll++;
                }
            });
            if (numAll>0) {
                vm.disabledBar = false;
            }
            if (numAll === vm.goods.length) {
                vm.checkedarr = true;
            }else{
                vm.checkedarr = false;
            }
            return '结算('+numAll+')'
        },
        totalPrice() {
            var priceAll = 0;
            this.goods.forEach(function(value) {
                if (value.checkbox) {
                    priceAll= priceAll+ value.num*value.price
                }
            });
            return priceAll*100
        }
    },
    methods: {
        checkboxAlls(){
            var vm = this;
            var ches = vm.checkedarr;
            vm.goods.forEach(function(value) {
                if (ches) {
                    value.checkbox = true;
                }else{
                    value.checkbox = false;
                }
            });
        },
        isprice(arr, key){
            for (i in arr) {
                var v = arr[i];
                if (v[key] == "" || v[key] == null) {
                    return false;
                    continue;
                }
            }
            return true;
        },
        formatPrice(price) {
            return price.toFixed(2);
        },
        onSubmit() {
            Toast('点击结算');
        }
    }
};
</script>
<style lang="less" scoped>
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
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.68);
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
.cardView{
    background:#fff;
}
</style>