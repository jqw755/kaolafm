<template>
    <div class="">
        login
        <Notice :noticeOptions="noticeOptions"></Notice>
    </div>
</template>

<script>
    import Notice from './notice/notice.vue';

    export default {
        data() {
            return {
                noticeOptions: {
                    title: 'TIP',
                    message: '12121211212121sdsdsdsdsdsdsd2121212sdsd1212121',
                    btnCancelText: 'cancel',
                    btnConfirmText: 'ok',
                    noCancel: false,
                    cancelFun: function () {
                        console.log('cancel')
                    },
                    confirmFun: function () {
                        console.log('confirm')
                    }
                }
            }
        },
        methods: {},
        components: {
            Notice
        }
    }
</script>

<style lang="scss" scoped>


</style>
