<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data() {
        return {
            swiper: null
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
            loop: true, // 無限循環
            grabCursor: true, // 游標為手掌
            autoplay: {
                disableOnInteraction: false,    // 触碰后自动切换也不会停止
            },
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}
</script>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide banner banner1"></div>
            <div class="swiper-slide banner banner2"></div>
            <div class="swiper-slide banner banner3"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>
<style lang='scss'>
// 拿掉scoped，才可以覆蓋掉swiper的css
.swiper-container {
    // 輪播容器寬高度
    width: pxToVw_1920(1920);
    height: pxToVw_1920(370);
    @media screen and (max-width: 1200px) {
        width: pxToVw_1200(1200);
        height: pxToVw_1200(315);
    }
    @media screen and (max-width: 414px) {
        width: pxToVw_414(414);
        height: pxToVw_414(410);
    }
    @media screen and (max-width: 375px) {
        width: pxToVw_375(375);
        height: pxToVw_375(410);
    }
}
.swiper-pagination-bullet{
    width: pxToVw_1920(28);
    height: pxToVw_1920(5);
    background-color: #00a8ad;
    border-radius: 5px;
    @media screen and (max-width: 1200px) {
        width: pxToVw_1200(28);
        height: pxToVw_1200(5);
    }
    @media screen and (max-width: 414px) {
        width: pxToVw_414(28);
        height: pxToVw_414(5);
    }
    @media screen and (max-width: 375px) {
        width: pxToVw_375(28);
        height: pxToVw_375(5);
    }
}
.swiper-pagination-bullet-active{
    background: #4BDAD3;
}
</style>
<style lang='scss' scoped>
.banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: pxToVw_1920(324);
    @media screen and (max-width: 1200px) {
        height: pxToVw_1200(324);
    }
    @media screen and (max-width: 414px) {
        height: pxToVw_414(374);
    }
    @media screen and (max-width: 375px) {
        height: pxToVw_375(374);
    }
    &.banner1 {
        background-image: url('~img_banner-1.png');
        @media screen and (max-width: 414px) {
            background-image: url('~img_banner_mobile-1.png');
        }
    }
    &.banner2 {
        background-image: url('~img_banner-2.png');
        @media screen and (max-width: 414px) {
            background-image: url('~img_banner_mobile-2.png');
        }
    }
    &.banner3 {
        background-image: url('~img_banner-3.png');
        @media screen and (max-width: 414px) {
            background-image: url('~img_banner_mobile-3.png');
        }
    }
}
</style>