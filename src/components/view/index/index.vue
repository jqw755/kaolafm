<template>
    <section class="index_container">
        <!--logo-->
        <section class="logo_wrap">
            <router-link to="/index" class="logo_img"></router-link>
            <div class="menu_wrap">
                <p class="menu">搜索</p>
                <p>
                    <router-link to="/login" class="user">登录</router-link>
                </p>
            </div>
        </section>
        <!--banner-->
        <Banner></Banner>
        <!--category-->
        <Category></Category>
        <!--module-->

    </section>
</template>

<script>
    import Banner from './banner.vue'
    import Category from './category.vue'

    export default {
        data() {
            return {
            }
        },
        mounted: function () {},
        methods: {

        },
        components: {
            Banner, Category
        }
    }
</script>

<style lang="scss">
    @import '../../style/index/index';
    @import "../../style/sprites";
</style>
