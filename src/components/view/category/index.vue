<template>
    <section class="category_wrap">
        <section class="category_ul">
            <ul>
                <li v-for="(item,i) in categoryListArr" :id="item.categoryId">{{item.categoryName}}</li>
            </ul>
        </section>
        <section>

        </section>
    </section>
</template>

<script>
    import utils from '../../../common/utils'

    export default {
        data() {
            return {
                showMore: {
                    is: false,
                    info: '更多'
                },
                categoryListArr: [],
                categoryArr: []
            }
        },
        mounted: function () {
            const self = this,
                cateId = utils.getQuery('id');
            self.getCategory(cateId);
        },
        methods: {
            getCategory(id) {
                const self = this;
                //类目详细分类
                self.$api.get('/kl/category/list', {'fid': id}).then((resList) => {
                    const self = this;
                    self.categoryListArr = resList.data.result.dataList;
                    //分类下节目
                    self.$api.get('/kl/resource/search', {'cid': id, 'rtype': '20000'}).then((resDetail) => {
                        self.categoryArr = resDetail.data.result.dataList;
                    }).catch(e => alert(e))
                }).catch(e => alert(e));
            }
        }
    }
</script>

<style lang="scss">
    @import '../../style/category/index';
</style>