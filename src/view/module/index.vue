<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item to="home" icon="shop">首页</van-tabbar-item>
            <van-tabbar-item to="list" icon="pending-deliver">列表</van-tabbar-item>
            <van-tabbar-item to="cart" icon="cart" :info="cartInfo">购物车</van-tabbar-item>
            <van-tabbar-item to="user" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Badge, Tabbar, TabbarItem } from 'vant';
import loc from '../module/localStorage.js';
export default {
    components: {
        [Badge.name]: Badge,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },
    props: {
        actives: Number
    },
    data() {
        return {
            active: this.actives,
            cartInfo:loc.get('cart')
        }
    },
    mounted:function() {
        if (loc.get('cart') == null) {
            loc.set('cart',1)
        }else{
            loc.set('cart',loc.get('cart')+1)
        }
    }
};
</script>
<style lang="less" scoped>
   .van-tabbar--fixed{
      border-top:1px solid #dfdfdf;
   }
</style>