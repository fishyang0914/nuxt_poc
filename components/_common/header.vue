<script>
import lib from 'lib'
export default {
    props: {
        isHeaderBg: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            activeIdx: 0,
            navList: [
                { name: 'index',                title: '首页',      left: 0 },
                { name: 'cooperationService',   title: '合作服务',  left: 20 },
                { name: 'lotteryType',          title: '彩种介绍',  left: 44 },
                { name: 'productAdvantage',     title: '产品优势',  left: 67 },
                { name: 'contactUs',            title: '联系我们',  left: 91 },
            ],
            mobileNavActive: false,
            playUrl: 'http://f1.swhy369888.xyz/',
        }
    },
    computed: {
        navBaseLineLeft() {
            return this.navList[this.activeIdx].left
        },
    },
    watch: {
        '$route.name'(v) {
            this.activeIdx = this.navList.map(obj => obj.name).indexOf(this.$route.name)
        }
    },
    methods: {
        goTo(idx) {
            // 首頁點擊logo回首頁vue router不會動作，無法觸發往上滾
            if(idx === 0) document.getElementById('app').scrollTop = 0
            this.activeIdx = idx
            this.$router.push({ name: this.navList[idx].name })
        },
        mobileNavOpen() {
            this.mobileNavActive = true
        },
        mobileNavClose() {
            this.mobileNavActive = false
        },
        mobileNavClick(idx) {
            this.mobileNavClose()
            this.goTo(idx)
        }
    },
    mounted() {
        this.activeIdx = this.navList.map(obj => obj.name).indexOf(this.$route.name)
    }
}
</script>
<template>
    <header class="header" :class="{headerBg: isHeaderBg}">
        <a class="logo" @click="mobileNavClick(0)"></a>
        <nav class="nav">
            <a class="navLink" v-for="(v, i) in navList" :key="i" @click="goTo(i)">{{v.title}}</a>
        </nav>
        <div class="navBase">
            <div class="navBaseLine" :style="{left: `${navBaseLineLeft}%`}"></div> 
        </div>
        <a class="tryIt" :href="playUrl">试玩体验</a>
        <!-- mobile -->
        <a class="mobileNavBtn" @click="mobileNavOpen"></a>
        <div class="mobileNavSidebar" :class="{active: mobileNavActive}">
            <a class="mobileNavClose" @click="mobileNavClose"></a>
            <div class="mobileNav">
                <a class="mobileNavLink" v-for="(v, i) in navList" :key="i" @click="mobileNavClick(i)">{{v.title}}</a>
            </div>
        </div>
    </header>
</template>
<style lang='scss' scoped>
.header {
    position: absolute;
    z-index: 99;
    left: pxToVw_1920(360);
    width: pxToVw_1920(1200);
    @media screen and (max-width: 1200px) {
        left: 0;
        width: pxToVw_1200(1200);
    }
    @media screen and (max-width: 414px) {
        position: fixed;
        padding-left: pxToVw_414(20);
        padding-right: pxToVw_414(18);
        padding-bottom: pxToVw_414(20);
    }
    @media screen and (max-width: 375px) {
        padding-left: pxToVw_375(20);
        padding-right: pxToVw_375(18);
        padding-bottom: pxToVw_375(20);
    }
    &.headerBg {
        @media screen and (max-width: 414px) {
            background-color: #051c38;
        }
        @media screen and (max-width: 375px) {
            background-color: #051c38;
        }
    }
    .logo {
        position: relative;
        top: pxToVw_1920(30);
        width: pxToVw_1920(220);
        height: pxToVw_1920(78);
        background-image: url('~img_logo.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        float: left;
        z-index: 100;
        @media screen and (max-width: 1200px) {
            top: pxToVw_1200(30);
            width: pxToVw_1200(220);
            height: pxToVw_1200(78);
        }
        @media screen and (max-width: 414px) {
            top: pxToVw_414(17);
            width: pxToVw_414(167);
            height: pxToVw_414(60);
        }
        @media screen and (max-width: 375px) {
            top: pxToVw_375(17);
            width: pxToVw_375(167);
            height: pxToVw_375(60);
        }
    }
    .nav {
        margin-left: pxToVw_1920(310);
        margin-top: pxToVw_1920(57);
        width: pxToVw_1920(530);
        height: pxToVw_1920(34);
        float: left;
        display: flex;
        justify-content: space-between;
        color: #fdc544;
        @media screen and (max-width: 1200px) {
            margin-left: pxToVw_1200(290);
            margin-top: pxToVw_1200(57);
            width: pxToVw_1200(530);
            height: pxToVw_1200(34);
        }
        @media screen and (max-width: 414px) {
            display: none;
        }
        .navLink {
            width: pxToVw_1920(530) / 5;
            font-size: pxToVw_1920(16);
            @media screen and (max-width: 1200px) {
                width: pxToVw_1200(530) / 5;
                font-size: pxToVw_1200(16);
            }
            @media screen and (max-width: 414px) {
                display: none;
            }
            &:hover {
                color: #009ea4;
            }
        }
    }
    .navBase {
        width: pxToVw_1920(530);
        height: pxToVw_1920(2);
        top: pxToVw_1920(95);
        left: pxToVw_1920(515);
        position: absolute;
        @media screen and (max-width: 1200px) {
            width: pxToVw_1200(530);
            height: pxToVw_1200(2);
            top: pxToVw_1200(95);
            left: pxToVw_1200(495);
        }
        @media screen and (max-width: 414px) {
            display: none;
        }
        .navBaseLine {
            position: absolute;
            width: pxToVw_1920(60);
            height: pxToVw_1920(2);
            background-color: #fdc544;
            transition: left .3s;
            @media screen and (max-width: 1200px) {
                width: pxToVw_1200(60);
                height: pxToVw_1200(2);
            }
            @media screen and (max-width: 414px) {
                display: none;
            }
        }
    }
    .tryIt {
        width: pxToVw_1920(100);
        height: pxToVw_1920(34);
        margin-left: pxToVw_1920(8);
        font-size: pxToVw_1920(16);
        margin-top: pxToVw_1920(50);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #051c38;
        background-color: #fdc544;
        float: right;
        font-weight: bold;
        @media screen and (max-width: 1200px) {
            width: pxToVw_1200(100);
            height: pxToVw_1200(34);
            margin-left: pxToVw_1200(5);
            margin-right: pxToVw_1200(27);
            font-size: pxToVw_1200(16);
            margin-top: pxToVw_1200(50);
        }
        @media screen and (max-width: 414px) {
            display: none;
        }
    }
    .mobileNavBtn {
        display: none;
        @media screen and (max-width: 414px) {
            display: inline-block;
            background-image: url('~img_mobile-open.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            float: right;
            margin-top: pxToVw_414(35);
            width: pxToVw_414(30);
            height: pxToVw_414(30);
        }
        @media screen and (max-width: 375px) {
            margin-top: pxToVw_375(35);
            width: pxToVw_375(30);
            height: pxToVw_375(30);
        }
    }
    .mobileNavSidebar {
        display: none;
        @media screen and (max-width: 414px) {
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            padding-left: pxToVw_414(20);
            padding-right: pxToVw_414(20);
            background-color: #051c38;
            z-index: 50;
            top: 0;
            left: 100%;
            transition: left .3s;
            &.active {
                left: 0;
            }
        }
        @media screen and (max-width: 375px) {
            padding-left: 0;
            padding-right: 0;
        }
        .mobileNavClose {
            display: none;
            @media screen and (max-width: 414px) {
                display: inline-block;
                background-image: url('~img_mobile-close.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                width: pxToVw_414(30);
                height: pxToVw_414(30);
                top: pxToVw_414(30);
                right: pxToVw_414(18);
                margin-right: pxToVw_414(20);
            }
            @media screen and (max-width: 375px) {
                width: pxToVw_375(30);
                height: pxToVw_375(30);
                top: pxToVw_375(30);
                right: pxToVw_375(18);
                margin-right: 0;
            }
        }
        .mobileNav {
            display: none;
            @media screen and (max-width: 414px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
            @media screen and (max-width: 375px) {

            }
            .mobileNavLink {
                display: none;
                @media screen and (max-width: 414px) {
                    display: inline;
                    color: #fdc544;
                    font-size: pxToVw_414(20);
                    margin-top: pxToVw_414(33);
                    margin-bottom: pxToVw_414(33);
                }
                @media screen and (max-width: 375px) {
                    font-size: pxToVw_375(20);
                    margin-top: pxToVw_375(33);
                    margin-bottom: pxToVw_375(33);
                }
            }
        }
    }   
}
</style>