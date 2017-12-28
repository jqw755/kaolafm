<template>
    <section class="category_wrap">
        <!--类目-->
        <div class="category_list">
            <div class="cate_ul clear_fix">
                <router-link :to="`category?id=`+item.categoryId" class="cate_list" v-for="( item,i) in cateArr.fewCate" :key="i">
                    <span><img :src="item.logo" alt=""></span>
                    <span>{{item.categoryName}}</span>
                </router-link>
                <ul class="cate_ul more_cate " v-show="showMore.is">
                    <router-link :to="`category?id=`+item.categoryId" class="cate_list"
                                 v-for="( item,i) in cateArr.moreCate" :key="i">
                        <span><img :src="item.logo" alt=""></span>
                        <span>{{item.categoryName}}</span>
                    </router-link>
                </ul>
                <a href="javascript:;" class="cate_list more_btn" @click="moreCate">
                    <span v-if="!showMore.is"><img src="../../image/index/more.png" alt=""></span>
                    <span v-else><img src="../../image/index/few.png" alt=""></span>
                    <span>{{showMore.info}}</span>
                </a>

            </div>
        </div>
        <!--首页推荐-->
        <div class="recommend_list">
            <ul class="recommend_ul">
                <li class="recommend_li" v-for="(item,i) in recommends" :key="i">
                    <p class="re_img">
                        <img :src="item.album.cover.urls[0].url" alt="">
                    </p>
                    <p class="re_info">
                        <span>{{item.album.name}}</span>
                        <span>所属专辑：{{item.album.categoryName}}</span>
                        <span>详细：{{item.album.desc}}</span>
                    </p>
                </li>
            </ul>
        </div>
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
                cateArr: {
                    fewCate: [],
                    moreCate: []
                },
                recommends: []
            }
        },
        mounted: function () {
            this.getAllCategory();
        },
        methods: {
            getAllCategory() {
                const self = this;
                self.$api.get('/kl/category/list', {'fid': 0}).then((res) => {
                    const data = res.data.result,
                        cateLen = data.dataList.length;
                    self.cateArr.fewCate = data.dataList.slice(0, 7);
                    self.cateArr.moreCate = data.dataList.slice(8, cateLen);
                }).catch(e => alert(e))
            },
            moreCate() {
                const self = this;
                if (self.showMore.is) {
                    self.showMore.is = false;
                    self.showMore.info = '更多';
                } else {
                    self.showMore.is = true;
                    self.showMore.info = '收起';
                }
            },
            getModule(){

            }
        }
    }
</script>
