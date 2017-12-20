<template>
    <div class="notice_wrap" >
        <transition name="mask-bg-fade">
            <div class="model">
                <div class="mask" v-show="isShow"></div>
                <transition name="slide-fade">
                    <div :class="['modelBox',isShow?'rollIn':'rollOut']">
                        <!--<p class="closeModel" @click="closeModel"></p>-->
                        <p class="title">{{noticeOptions.title || "提示"}}</p>
                        <p class="message">{{noticeOptions.message || " "}}</p>
                        <div class="model_btnBox" v-if="noticeOptions.noCancel">
                            <p @click="modelConfirm">确定</p>
                        </div>
                        <div class="model_btnBox" v-else>
                            <button class="btn btn_cancel" @click="modelCancel">
                                {{noticeOptions.btnCancelText || "取消"}}
                            </button>
                            <span>|</span>
                            <button class="btn btn_confirm" @click="modelConfirm">
                                {{noticeOptions.btnConfirmText || "确定"}}
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            noticeOptions: {}
        },
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            closeModel: function () {
                const self = this;
                self.isShow = false;
            },
            showModel: function () {
                const self = this;
                self.isShow = true;
            },
            modelCancel: function () {
                const self = this;
                self.isShow = false;
                if (typeof (self.noticeOptions.cancelFun) === 'function') {
                    self.noticeOptions.cancelFun()
                }
            },
            modelConfirm: function () {
                const self = this;
                self.isShow = false;
                if (typeof (self.noticeOptions.confirmFun) === 'function') {
                    self.noticeOptions.confirmFun()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/notice/notice';
</style>