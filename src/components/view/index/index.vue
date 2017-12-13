<template>
    <div class="index_container">
        <!--logo-->
        <section class="logo_wrap">
            <div class="logo_img"></div>
            <div class="app_info">
                <p class="title">听你想听的</p>
            </div>
        </section>
        <!--banner-->
        <Banner></Banner>
        <!--category-->
        <Category></Category>
        <!--module-->

    </div>
</template>

<script>
    import Banner from './banner.vue'
    import Category from './category.vue'

    export default {
        data() {
            return {
                category: {}
            }
        },
        mounted: function () {
            this.getAllCategory();
        },
        methods: {
            getAllCategory() {
                const self = this;
                self.$api.get('/kl/category/list', {'fid': 0}).then((res) => {
                    self.category = res.data;
                    console.log(self.category)
                }).catch(e => alert(e))
            }
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
