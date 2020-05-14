<script>
export default {
    props: {
        feature: {
            type: Object,
            default: () => {},
        },
        delay: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            isActive: false,
        };
    },
    computed: {},
    methods: {},
    mounted() {
        setTimeout(() => {
            this.isActive = true;
        }, this.delay * 100);
    },
};
</script>
<template>
    <article class="feature" :class="{ active: isActive }">
        <div class="img" :class="feature.imgClass"></div>
        <section class="subFeature">
            <h3 class="subTitle">{{ feature.title }}</h3>
            <p class="subDesc">{{ feature.desc }}</p>
            <h3 class="mobileSubTitle">{{ feature.mobileTitle }}</h3>
            <p class="mobileSubDesc">{{ feature.mobileDesc }}</p>
        </section>
    </article>
</template>
<style lang="scss" scoped>
.feature {
    position: relative;
    width: 100%;
    background-color: rgba(17, 68, 100, 0.4);
    transition: opacity 0.5s;
    opacity: 0;
    left: 0;
    @media screen and (max-width: 414px) {
        transition: left 0.5s;
        opacity: 1;
        left: 100%;
    }
    &.active {
        opacity: 1;
        @media screen and (max-width: 414px) {
            left: 0;
        }
    }
    .img {
        position: absolute;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        height: pxToVw_1920(226);
        width: 100%;
        top: -20%;
        @media screen and (max-width: 1200px) {
            height: pxToVw_1200(226);
        }
        @media screen and (max-width: 414px) {
            height: pxToVw_414(130);
            margin-top: pxToVw_414(10);
            top: 0;
            left: -34%;
        }
        @media screen and (max-width: 375px) {
            height: pxToVw_375(130);
            margin-top: pxToVw_375(10);
            left: -32%;
        }
        &.imgCS1 {
            background-image: url('~img_cs-1.png');
        }
        &.imgCS2 {
            background-image: url('~img_cs-2.png');
        }
        &.imgLT1 {
            background-image: url('~img_li-1.png');
        }
        &.imgLT2 {
            background-image: url('~img_li-2.png');
        }
        &.imgLT3 {
            background-image: url('~img_li-3.png');
        }
        &.imgPA1 {
            background-image: url('~img_pa-1.png');
        }
        &.imgPA2 {
            background-image: url('~img_pa-2.png');
        }
        &.imgPA3 {
            background-image: url('~img_pa-3.png');
        }
        &.imgPA4 {
            background-image: url('~img_pa-4.png');
        }
        &.imgPA5 {
            background-image: url('~img_pa-5.png');
        }
        &.imgPA6 {
            background-image: url('~img_pa-6.png');
        }
    }
    .subFeature {
        text-align: center;
        padding-top: pxToVw_1920(150);
        @media screen and (max-width: 1200px) {
            padding-top: pxToVw_1200(150);
        }
        @media screen and (max-width: 414px) {
            padding-top: pxToVw_414(30);
            padding-left: pxToVw_414(142);
            padding-right: pxToVw_414(10);
        }
        @media screen and (max-width: 375px) {
            padding-top: pxToVw_375(30);
            padding-left: pxToVw_375(142);
            padding-right: pxToVw_375(10);
        }
        .subTitle {
            color: #eeb636;
            font-size: pxToVw_1920(22);
            margin-top: pxToVw_1920(10);
            margin-bottom: pxToVw_1920(10);
            @media screen and (max-width: 1200px) {
                font-size: pxToVw_1200(22);
                margin-top: pxToVw_1200(10);
                margin-bottom: pxToVw_1200(10);
            }
            @media screen and (max-width: 414px) {
                display: none;
            }
        }
        .subDesc {
            color: #fff;
            margin-left: pxToVw_1920(20);
            margin-right: pxToVw_1920(20);
            font-size: pxToVw_1920(16);
            line-height: pxToVw_1920(30);
            @media screen and (max-width: 1200px) {
                margin-left: pxToVw_1200(20);
                margin-right: pxToVw_1200(20);
                font-size: pxToVw_1200(16);
                line-height: pxToVw_1200(30);
            }
            @media screen and (max-width: 414px) {
                display: none;
            }
        }
        .mobileSubTitle {
            display: none;
            color: #eeb636;
            text-align: left;
            @media screen and (max-width: 414px) {
                display: block;
                font-size: pxToVw_414(16);
                padding-bottom: pxToVw_414(5);
            }
            @media screen and (max-width: 375px) {
                font-size: pxToVw_375(16);
                padding-bottom: pxToVw_375(5);
            }
        }
        .mobileSubDesc {
            display: none;
            color: #fff;
            text-align: left;
            @media screen and (max-width: 414px) {
                display: block;
                font-size: pxToVw_414(14);
                line-height: pxToVw_414(24);
            }
            @media screen and (max-width: 375px) {
                font-size: pxToVw_375(14);
                line-height: pxToVw_375(24);
            }
        }
    }
}
</style>
