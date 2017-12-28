<template>
    <section class="login_wrap">
        <div class="login_content">
            <div class="head">
                <p class="login_default">
                    <router-link to="/">
                        <img src="../image/public/logo_default.png" alt="">
                    </router-link>
                </p>
                <p class="title">登录</p>
            </div>
            <div class="form_content">
                <p class="input_wrap">
                    <input type="text" placeholder="请输入您注册的邮箱或手机号" class="ipt account" v-model="userInfo.account"
                           @input="accountEvt">
                </p>
                <div class="input_wrap">
                    <input :type="pwdType" placeholder="请输入密码" class="ipt pwd" v-model="userInfo.pwd" @input="pwdEvt">
                    <p class="showPwd" @click="eyeShow">
                        <img src="../image/public/eye_close.png" alt="" v-show="!showPassword">
                        <img src="../image/public/eye_show.png" alt="" v-show="showPassword">
                    </p>
                </div>
                <p class="input_wrap">
                    <input type="button" value="登录" :disabled="isDisabled" class="ipt login_btn"
                           @click="loginEvt()">
                    <!--showToast(toastOpt)-->
                    <!--showNotice(noticeOptions)-->
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                pwdType: 'password',
                isDisabled: true,
                showPassword: false,
                userInfo: {
                    account: '',
                    pwd: ''
                },
                noticeOptions: {},
                toastOpt: {}
            }
        },
        mounted() {
            const self = this;
            //设置title
            self.setTitle('登录');
        },
        methods: {
            ...mapActions([
                'showNotice',
                'showToast',
                'setTitle'
            ]),
            accountEvt() {
                const self = this;
                if (self.userInfo.account.length > 0 && self.userInfo.pwd.length > 0) {
                    self.isDisabled = false;
                } else {
                    self.isDisabled = true;
                }
            },
            pwdEvt() {
                const self = this;
                if (self.userInfo.account.length > 0 && self.userInfo.pwd.length > 0) {
                    self.isDisabled = false;
                } else {
                    self.isDisabled = true;
                }
            },
            eyeShow() {
                const self = this;
                if (self.showPassword) {
                    self.pwdType = 'password';
                    self.showPassword = false;
                    return;
                }
                self.pwdType = 'text';
                self.showPassword = true;
            },
            loginEvt() {
                const self = this;
                self.toastOpts = {
                    isShow: true,
                    message: ''
                };
                if (!self.userInfo.account.length > 0) {
                    self.toastOpts.message = '请输入账号';
                    self.showToast(self.toastOpt);
                    return;
                } else if (!self.userInfo.pwd.length > 0) {
                    self.toastOpts.message = '请输入密码';
                    self.showToast(self.toastOpt);
                    return;
                } else {
                    let username = self.userInfo.account,
                        password = self.userInfo.pwd;
                    self.$api.post('/login/userv4/web/login', {
                        type: 5,
                        username: username,
                        password: password,
                        vcode: ''
                    }).then((res) => {
                        const data = res.data.result;

                    }).catch(e => {
                        let options = {
                            isShow: true,
                            message: e.msg,
                            noCancel: true,
                        };
                        self.showNotice(options);
                    })
                }
            }
        },
        components: {}
    }
</script>

<style lang="scss" scoped>
    @import '../style/loginAregist/login';

</style>
