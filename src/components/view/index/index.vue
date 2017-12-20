<template>
    <section class="index_container">
        <!--logo-->
        <Logo></Logo>
        <!--banner-->
        <Banner></Banner>
        <!--category-->
        <Category></Category>
        <!--module-->

    </section>
</template>

<script>
    import Logo from './logo.vue'
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
            Banner, Category, Logo
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/index/index';
    @import "../../style/sprites";
</style>
