<template>
    <section class="program_wrap">
        <Logo></Logo>
        <div class="program_content">
            <div class="album_wrap">
                <div class="bg">
                    <img :src="albumInfo.albumPic" alt="" class="album_pic">
                    <div class="bg_mask"></div>
                </div>
                <div class="author">
                    <div class="author_item clear_fix">
                        <img :src="albumInfo.albumPic" alt="" class="album_author">
                        <div class="author_desc">
                            <p>{{albumInfo.albumName}}</p>
                            <p>上传者: {{albumInfo.uploaderName}}</p>
                        </div>
                    </div>
                    <div class="author_item album_desc">
                        {{albumInfo.audioDes}}
                    </div>
                </div>
            </div>
            <audio :src="currentAudioUrl" id="remoteAudio"></audio>
            <div class="program_list">
                <div class="title">节目<span>（{{audioObj.count}}）</span></div>
                <p v-for="(item, i) in audioObj.audioArr" :key="i" class="clear_fix">
                    <router-link :to="`programDetail?aId=`+ item.audioId" :id="item.audioId" class="audio_href">
                        {{item.audioName}}
                    </router-link>
                    <span class="audio_action" v-show="currentAudioIdx==i?true:false">
                        <img src="../../image/program/pause.png" alt="" @click="playAudio" :id="i"
                             :data-url="item.mp3PlayUrl">
                    </span>
                    <span class="audio_action" v-show="currentAudioIdx==i?false:true">
                        <img src="../../image/program/play.png" alt="" @click="playAudio" :id="i"
                             :data-url="item.mp3PlayUrl">
                    </span>
                </p>
            </div>
        </div>
        <LoadMore></LoadMore>
    </section>
</template>

<script>
    import utils from '../../../common/utils'
    import Logo from '../index/logo'
    import LoadMore from '../category/loadMore'

    export default {
        data() {
            return {
                currentAudioUrl: '',
                currentAudioIdx: -1,
                albumInfo: {},
                audioObj: {
                    audioArr: [],
                    count: 0
                },
                audioPlaying: false
            }
        },
        mounted: function () {
            const self = this,
                pId = utils.getQuery('pid');
            self.getProgram(pId);
        },
        methods: {
            getProgram(pid) {
                const self = this;
                //节目
                self.$api.get('/kl/audios/list', {'id': pid, 'sorttype': 1, 'pagesize': 15}).then((res) => {
                    self.audioObj.audioArr = res.data.result.dataList;
                    self.audioObj.count = res.data.result.count;
                    // 专辑及作者信息
                    self.albumInfo = self.audioObj.audioArr[0];
                    self.currentAudioUrl = self.albumInfo.mp3PlayUrl;
                }).catch(e => alert(e))
            },
            //把此方法分离出去到utils公用
            playAudio(e) {
                const self = this;
                let audioEle = document.getElementById('remoteAudio'),
                    id = parseInt(e.target.id);
                let designUrl = e.target.dataset.url;
//                if (self.audioPlaying) {
//                    self.currentAudioIdx = -1;
//                    self.audioPlaying = false;
//                    audioEle.pause();
//                    console.log(self.audioPlaying)
//                } else {
//                    self.currentAudioIdx = id;
//                    self.currentAudioUrl = designUrl;
//                    self.audioPlaying = true;
//                    audioEle.play();
//                    console.log(self.audioPlaying)
//                }
                console.log()
                //暂停当前正在播放的音频
                if (self.currentAudioIdx === id) {
                    audioEle.pause();
                    self.audioPlaying = false;
                    self.currentAudioIdx = -1;
                    return;
                }
                self.currentAudioIdx = id;
                self.currentAudioUrl = designUrl;
                audioEle.preload = true;
                audioEle.play();
                self.audioPlaying = true;
            }
        },
        watch: {
            audioPlaying(b) {
                const self = this,
                    audioEle = document.getElementById('remoteAudio');
                audioEle.addEventListener('ended', function () {
                    audioEle.pause();
                    self.audioPlaying = false;
                    self.currentAudioIdx = -1;
                });
            }
        },
        components: {
            Logo, LoadMore
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/program/index';
</style>