<script>
import cooperationService from 'assets/cooperationService.json';
import lotteryType from 'assets/lotteryType.json';
import productAdvantage from 'assets/productAdvantage.json';
import contactUs from 'assets/contactUs.json';
export default {
    data() {
        return {
            navList: [cooperationService, lotteryType, productAdvantage],
            contactUs,
        };
    },
    computed: {},
    methods: {
        goTo(name) {
            this.$router.push({ name });
        },
    },
    mounted() {},
};
</script>
<template>
    <footer class="footer">
        <nav class="nav">
            <article v-for="(obj, i) in navList" :key="i">
                <a class="navTitle" @click="goTo(obj.name)">{{ obj.title }}</a>
                <p
                    class="navSubTitle"
                    v-for="(subList, i) in obj.sub"
                    :key="obj.name + i"
                >
                    {{ subList.title }}
                </p>
            </article>
            <article>
                <a class="navTitle" @click="goTo(contactUs.name)">{{
                    contactUs.title
                }}</a>
                <a
                    class="navSubTitle mail"
                    :href="`mailto:${contactUs.mail}`"
                    >{{ contactUs.mail }}</a
                >
                <a
                    class="navSubTitle webSite"
                    :href="`http://${contactUs.webSite}`"
                    target="_blank"
                    >{{ contactUs.webSite }}</a
                >
                <a
                    class="navSubTitle skype"
                    :href="`skype:${contactUs.skype}?chat`"
                    >{{ contactUs.skype }}</a
                >
            </article>
        </nav>
        <p class="copyright">
            {{ contactUs.copyright1 }}{{ contactUs.copyright2 }}
        </p>
        <p class="mobileCopyright">{{ contactUs.copyright1 }}</p>
        <p class="mobileCopyright">{{ contactUs.copyright2 }}</p>
    </footer>
</template>
<style lang="scss" scoped>
.footer {
    background-color: #051c38;
    margin-left: pxToVw_1920(360);
    width: pxToVw_1920(1100);
    height: pxToVw_1920(360);
    @media screen and (max-width: 1200px) {
        margin-left: 0;
        width: pxToVw_1200(1100);
        height: pxToVw_1200(360);
    }
    @media screen and (max-width: 414px) {
        margin-left: pxToVw_414(40);
        margin-right: pxToVw_414(38);
        width: pxToVw_414(337);
    }
    @media screen and (max-width: 375px) {
        margin-left: pxToVw_375(20);
        margin-right: pxToVw_375(18);
        width: pxToVw_375(337);
    }
    .nav {
        margin-left: pxToVw_1920(100);
        margin-top: pxToVw_1920(30);
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 414px) {
            flex-wrap: wrap;
            width: pxToVw_414(140);
            margin-top: pxToVw_414(54);
            margin-bottom: pxToVw_414(54);
            margin-left: pxToVw_414(95);
        }
        @media screen and (max-width: 375px) {
            width: pxToVw_375(140);
            margin-top: pxToVw_375(54);
            margin-left: pxToVw_375(95);
        }
        .navTitle {
            display: block;
            color: #eeb636;
            font-size: pxToVw_1920(16);
            margin-bottom: pxToVw_1920(20);
            @media screen and (max-width: 414px) {
                font-size: pxToVw_414(14);
                margin-bottom: pxToVw_414(20);
            }
        }
        .navSubTitle {
            display: block;
            color: #fff;
            font-size: pxToVw_1920(14);
            margin-bottom: pxToVw_1920(18);
            @media screen and (max-width: 414px) {
                display: none;
            }
            &.mail::before {
                content: '';
                display: block;
                width: 14px;
                height: 14px;
                margin-top: 2px;
                margin-right: 4px;
                float: left;
                background-image: url('~img_footer-2.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            &.webSite::before {
                content: '';
                display: block;
                width: 14px;
                height: 14px;
                margin-top: 2px;
                margin-right: 4px;
                float: left;
                background-image: url('~img_footer-3.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            &.skype::before {
                content: '';
                display: block;
                width: 14px;
                height: 14px;
                margin-top: 2px;
                margin-right: 4px;
                float: left;
                background-image: url('~img_footer-4.png');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }
    .copyright {
        color: #65707e;
        text-align: center;
        font-size: pxToVw_1920(13);
        margin-top: pxToVw_1920(60);
        @media screen and (max-width: 414px) {
            display: none;
        }
    }
    .mobileCopyright {
        display: none;
        @media screen and (max-width: 414px) {
            display: block;
            color: #65707e;
            text-align: center;
            font-size: pxToVw_414(13);
        }
        &:last-child {
            margin-bottom: 20px;
        }
    }
}
</style>
