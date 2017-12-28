import Vue from 'vue'
import App from './App.vue'
import router from './router'
//state management
// import vuex from 'vuex'
import store from './store/store'
//ajax
import axios from 'axios'
import api from './common/axios'
//base global css
import './components/style/base.scss'

Vue.prototype.$api = api;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    store,
    template: '<App/>',
    components: {App}
})
