<template>
    <section class="category_wrap">
        <Logo></Logo>
        <section class="category_ul">
            <ul>
                <li class="active">全部</li>
                <li v-for="(item,i) in categoryListArr" :id="item.categoryId">{{item.categoryName}}</li>
            </ul>
        </section>
        <section class="program">
            <ul>
                <li v-for="(item,i) in categoryArr" :id="item.categoryId" class="list">
                   <router-link :to="`program?pid=`+item.id">
                       <p class="img"><img :src="item.pic" alt=""></p>
                       <p class="desc">
                           <img src="../../image/category/listen-w.png" alt="">
                           {{item.listenNum | formatListen}}
                       </p>
                       <p class="name">{{item.name}}</p>
                   </router-link>
                </li>
            </ul>
        </section>
        <LoadMore></LoadMore>
    </section>
</template>

<script>
    import utils from '../../../common/utils'
    import Logo from '../index/logo'
    import LoadMore from './loadMore'

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
                //类目下分类
                self.$api.get('/kl/category/list', {'fid': id}, true).then((resList) => {
                    self.categoryListArr = resList.data.result.dataList;
                }).catch(e => alert(e));
                //分类下节目
                self.$api.get('/kl/resource/search', {'cid': id, 'rtype': '20000'}).then((resDetail) => {
                    self.categoryArr = resDetail.data.result.dataList;
                }).catch(e => alert(e))
            }
        },
        components: {
            Logo, LoadMore
        },
        filters: {
            formatListen(n) {
                return utils.formatBigVal(n);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/category/index';
</style>