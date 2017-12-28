<template>
    <div id="app">
        <Loading v-show="showLoading"></Loading>
        <Notice :noticeOptions="noticeOptions"></Notice>
        <Toast :toastOptions="toastOptions"></Toast>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    //  loading
    import Loading from './components/view/loading/loading.vue'
    import Notice from './components/view/notice/notice'
    import Toast from './components/view/notice/toast'

    export default {
        name: 'app',
        components: {
            Loading, Notice, Toast
        },
//        methods: {
//            ...mapActions([
//                'showLoading',
//                'noticeOptions'
//            ])
//        },
        computed: {
            ...mapState([
                'showLoading',
                'noticeOptions',
                'toastOptions'
            ])
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100%;
        margin: 0 auto;
        max-width: 640px;
        background: #fffffd;
    }
</style>