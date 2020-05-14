<script>
import cooperationService from 'assets/cooperationService.json';
import lotteryType from 'assets/lotteryType.json';
import productAdvantage from 'assets/productAdvantage.json';
import banner from '~/components/index/banner';
export default {
    components: {
        banner,
    },
    data() {
        return {
            navList: [cooperationService, lotteryType, productAdvantage],
        };
    },
    computed: {},
    mounted() {},
    methods: {
        goTo(name) {
            this.$router.push({ name });
        },
    },
};
</script>
<template>
    <div class="index">
        <div class="main">
            <div class="bannerContainer">
                <banner />
            </div>
        </div>
        <div class="mobileContent">
            <article v-for="(obj, i) in navList" :key="i" class="feature">
                <section class="mainFeature">
                    <h2 class="title">{{ obj.title }}</h2>
                    <a class="more" @click="goTo(obj.name)">了解更多</a>
                </section>
                <div class="featureInfo">
                    <section
                        v-for="(subList, j) in obj.sub"
                        :key="obj.name + j"
                        class="subFeature"
                    >
                        <div class="icon" :class="subList.iconClass"></div>
                        <h3 class="subTitle">{{ subList.mobileTitle }}</h3>
                        <p class="subInfo">{{ subList.mobileInfo }}</p>
                    </section>
                </div>
            </article>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// @import '@/assets/scss/global/_mixin.scss';
.index {
    position: relative;
    width: 100%;
    .main {
        height: pxToVw_1920(550);
        background-image: url('~static/images/img_banner-1.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        @media screen and (max-width: 1200px) {
            height: pxToVw_1200(550);
        }
        @media screen and (max-width: 414px) {
            height: pxToVw_414(550);
        }
        @media screen and (max-width: 375px) {
            height: pxToVw_375(550);
        }
        .bannerContainer {
            position: relative;
            top: pxToVw_1920(170);
            @media screen and (max-width: 1200px) {
                top: pxToVw_1200(170);
            }
            @media screen and (max-width: 414px) {
                top: pxToVw_414(130);
            }
            @media screen and (max-width: 375px) {
                top: pxToVw_375(130);
            }
        }
    }
    .mobileContent {
        display: none;
        @media screen and (max-width: 414px) {
            display: block;
        }
        .feature {
            background-color: #002b55;
            .mainFeature {
                @media screen and (max-width: 414px) {
                    padding-top: pxToVw_414(21);
                    padding-bottom: pxToVw_414(21);
                    padding-left: pxToVw_414(14);
                    padding-right: pxToVw_414(14);
                }
                @media screen and (max-width: 375px) {
                    padding-top: pxToVw_375(21);
                    padding-bottom: pxToVw_375(21);
                    padding-left: pxToVw_375(14);
                    padding-right: pxToVw_375(14);
                }
                .title {
                    color: #fff;
                    font-weight: 100;
                    display: inline;
                    @media screen and (max-width: 414px) {
                        font-size: pxToVw_414(18);
                    }
                    @media screen and (max-width: 375px) {
                        font-size: pxToVw_375(18);
                    }
                }
                .more {
                    color: #a4a4a4;
                    float: right;
                    @media screen and (max-width: 414px) {
                        font-size: pxToVw_414(14);
                    }
                    @media screen and (max-width: 375px) {
                        font-size: pxToVw_375(14);
                    }
                }
            }
            .featureInfo {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .subFeature {
                    position: relative;
                    background-color: #00153b;
                    display: inline-block;
                    margin-bottom: 1px;
                    @media screen and (max-width: 414px) {
                        width: 49.8%;
                        padding-top: pxToVw_414(38);
                        padding-bottom: pxToVw_414(38);
                        padding-left: pxToVw_414(50);
                    }
                    @media screen and (max-width: 375px) {
                        padding-top: pxToVw_375(38);
                        padding-bottom: pxToVw_375(38);
                        padding-left: pxToVw_375(43);
                    }
                    .icon {
                        position: absolute;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        @media screen and (max-width: 414px) {
                            width: pxToVw_414(30);
                            height: pxToVw_414(30);
                            top: pxToVw_414(50);
                            left: pxToVw_414(15);
                        }
                        @media screen and (max-width: 375px) {
                            width: pxToVw_375(30);
                            height: pxToVw_375(30);
                            top: pxToVw_375(50);
                            left: pxToVw_375(10);
                        }
                        &.iconCS1 {
                            background-image: url('~static/images/ico_mobile-1.png');
                        }
                        &.iconCS2 {
                            background-image: url('~static/images/ico_mobile-2.png');
                        }
                        &.iconLT1 {
                            background-image: url('~static/images/ico_mobile-3.png');
                        }
                        &.iconLT2 {
                            background-image: url('~static/images/ico_mobile-4.png');
                        }
                        &.iconLT3 {
                            background-image: url('~static/images/ico_mobile-5.png');
                        }
                        &.iconLT4 {
                            background-image: url('~static/images/ico_mobile-6.png');
                        }
                        &.iconPA1 {
                            background-image: url('~static/images/ico_mobile-7.png');
                        }
                        &.iconPA2 {
                            background-image: url('~static/images/ico_mobile-8.png');
                        }
                        &.iconPA3 {
                            background-image: url('~static/images/ico_mobile-9.png');
                        }
                        &.iconPA4 {
                            background-image: url('~static/images/ico_mobile-10.png');
                        }
                        &.iconPA5 {
                            background-image: url('~static/images/ico_mobile-11.png');
                        }
                        &.iconPA6 {
                            background-image: url('~static/images/ico_mobile-12.png');
                        }
                    }
                    .subTitle {
                        color: #fff;
                        font-weight: 100;
                        @media screen and (max-width: 414px) {
                            font-size: pxToVw_414(16);
                            margin-bottom: pxToVw_414(2);
                        }
                        @media screen and (max-width: 375px) {
                            font-size: pxToVw_375(16);
                            margin-bottom: pxToVw_375(2);
                        }
                    }
                    .subInfo {
                        color: #a4a4a4;
                        white-space: pre-line;
                        @media screen and (max-width: 414px) {
                            font-size: pxToVw_414(14);
                            line-height: pxToVw_414(18);
                        }
                        @media screen and (max-width: 375px) {
                            font-size: pxToVw_375(14);
                            line-height: pxToVw_375(18);
                        }
                    }
                }
            }
        }
    }
}
</style>
