<template>
    <div class="home">
        <van-notice-bar :text="homeDate.notice" mode="closeable"></van-notice-bar>
        <van-swipe class="home-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in images" :key="thumb">
                <img :src="thumb" />
            </van-swipe-item>
        </van-swipe>
        <div class="homeMSi">-今日推荐-</div>
        <div class="recommend">
            <div v-for="thumb in mcRecommendList" :key="index">
               <img :src="thumb.bannerAttachment" alt="">
            </div>
        </div>
        <div class="homeMSi">-好物推荐-</div>
        <Tabbars :actives="0"></Tabbars>
    </div>
</template>
<script>
import axios from 'axios';
import Tabbars from '../module/index.vue';
import { Loading, PullRefresh, Swipe, Lazyload, SwipeItem, NoticeBar, Icon } from 'vant';

export default {
    components: {
        Tabbars,
        [Loading.name]: Loading,
        [PullRefresh.name]: PullRefresh,
        [Lazyload.name]: Lazyload,
        [Swipe.name]: Swipe,
        [NoticeBar.name]: NoticeBar,
        [SwipeItem.name]: SwipeItem,
        [Icon.name]: Icon,
    },

    data() {
        return {
            time: new Date().toLocaleString(),
            homeDate: {},
            images: [],
            mcRecommendList:[]
        };
    },
    mounted() {
        this.onSubmit();
    },
    methods: {
        onSubmit() {
            var vm = this;
            axios({
                    method: 'post',
                    url: '/home'
                })
                .then(function(res) {
                    vm.homeDate = res.data;
                    vm.mcRecommendList = res.mcRecommendList;
                    console.log(vm.mcRecommendList);
                    if (res.data.bannerAttachment1 != "") {
                        vm.images.push(res.data.bannerAttachment1)
                    }
                    if (res.data.bannerAttachment2 != "") {
                        vm.images.push(res.data.bannerAttachment2)
                    }
                    if (res.data.bannerAttachment3 != "") {
                        vm.images.push(res.data.bannerAttachment3)
                    }
                    if (res.data.bannerAttachment4 != "") {
                        vm.images.push(res.data.bannerAttachment4)
                    }
                    if (res.data.bannerAttachment5 != "") {
                        vm.images.push(res.data.bannerAttachment5)
                    }
                    if (res.data.bannerAttachment6 != "") {
                        vm.images.push(res.data.bannerAttachment6)
                    }
                })
                .catch(function(err) {
                    alert(err)
                })
        }
    }
};
</script>
<style lang="less" scoped>
.home {
    background: #f2f2f2;

    .home-swipe {
        img {
            width: 100%;
        }
    }

    .homeMSi {
        font-size: 0.3rem;
        text-align: center;
        color: #666;
    }
}

// <link rel="stylesheet" type="text/css" href="${ctx}/static/weixin/big/icons/iconfont.css">
</style>