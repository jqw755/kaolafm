<template>
    <section class="detail_wrap">
        <Logo></Logo>
    </section>
</template>

<script>
    import utils from '../../../common/utils'
    import Logo from '../index/logo'

    export default {
        data() {
            return {}
        },
        mounted: function () {
            const self = this,
                pId = utils.getQuery('pid');
//            self.getProgramDetail(pId);
        },
        methods: {
            getProgramDetail(pid) {
                const self = this;
                //节目
                self.$api.get('/kl/audiodetail/get', {'id': pid}).then((res) => {
                    self.audioObj.audioArr = res.data.result.dataList;
                    self.audioObj.count = res.data.result.count;
                    // 专辑及作者信息
                    self.albumInfo = self.audioObj.audioArr[0];
                    self.currentAudioUrl = self.albumInfo.mp3PlayUrl;
                }).catch(e => alert(e))
            }
        },
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>


</style>