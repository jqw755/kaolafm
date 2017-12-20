<template>
    <section class="more_wrap">
        <button class="more_btn">加载更多...</button>
    </section>
</template>

<script>
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
            const self = this;
        },
        methods: {
            getCategory(id) {
                const self = this;
                //类目下分类
                self.$api.get('/kl/category/list', {'fid': id}, true).then((resList) => {
                    const self = this;
                    self.categoryListArr = resList.data.result.dataList;
                }).catch(e => alert(e));
                //分类下节目
                self.$api.get('/kl/resource/search', {'cid': id, 'rtype': '20000'}).then((resDetail) => {
                    self.categoryArr = resDetail.data.result.dataList;
                }).catch(e => alert(e))
            }
        }

    }
</script>

<style lang="scss" scoped>
    .more_wrap {
        margin-bottom: 2rem;
        .more_btn {
            width: 90%;
            height: 0.9rem;
            line-height: 0.9rem;
            background: #fff;
            border: 1px solid #f84e4e;
            text-align: center;
            border-radius: 4px;
            color: #f84e4e;
            font-size: 0.35rem;
            margin-left: 5%;
            outline: none;
        }
    }
</style>