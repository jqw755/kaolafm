<template>
    <section class="banner_wrap">
        <swiper :options="banner.swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,i) in banner.images" :key="i">
                <img :src="item.img" :alt="item.info" class="banner_img">
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                banner: {
                    swiperOption: {
                        // 所有的参数同 swiper 官方 api 参数
                        autoplay: true,
                        direction: 'horizontal',
                        effect: "effect",
                        loop: true
                    },
                    images: [
                        {
                            img: '/src/components/image/index/banner/banner_01.jpg',
                            info: '郭德纲单对口相声集（郭德纲）'
                        }, {
                            img: '/src/components/image/index/banner/banner_02.jpg',
                            info: '“不想上班”这种病，生个娃就治好了'
                        }, {
                            img: '/src/components/image/index/banner/banner_03.jpg',
                            info: '幼儿园事故频发，如何彻底根绝？'
                        }, {
                            img: '/src/components/image/index/banner/banner_04.jpg',
                            info: '慈禧太后为什么被称为“老佛爷”？'
                        }, {
                            img: '/src/components/image/index/banner/banner_05.jpg',
                            info: '乱世红颜'
                        }
                    ]
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
