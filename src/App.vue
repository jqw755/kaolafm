<template>
    <div id="app">
        <Loading v-show="$store.state.showLoading"></Loading>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    //  loading
    import Loading from './components/view/loading/loading'

    export default {
        name: 'app',
        components: {
            Loading
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