<template>
    <section class="logo_wrap">
        <router-link to="/index" class="logo_img"></router-link>
        <div class="menu_wrap">
            <p class="menu">搜索</p>
            <p>
                <router-link to="/login" class="user">登录</router-link>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .logo_wrap {
        border-bottom: 1px solid #e7e7e7;
        padding: 9px 0 9px 11px;
        .logo_img {
            display: inline-block;
            width: 2.25rem;
            height: 0.8rem;
            background: url("../../image/logo.png") no-repeat;
            background-size: 100% 100%;
        }
        .menu_wrap {
            float: right;
            p {
                display: inline-block;
                width: 1rem;
                height: 100%;
                text-align: center;
                color: #999;
                font-size: 0.3rem;
                &:before {
                    display: block;
                    content: '';
                    width: 100%;
                    height: 0.5rem;
                }
            }
            .menu {
                //padding-top: 0.4rem;
            }
            .user {
                color: #999;
                //padding-top: 0.4rem;
            }
        }
    }
</style>