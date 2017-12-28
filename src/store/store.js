/**
 * Created by jingqw on 17/11/24.
 * 统一状态管理store
 */
import Vue from 'vue'
import Vuex from 'vuex'

// import actions from './actions'
// import mutations from './mutations'
// import * as types from './type'

Vue.use(Vuex);
export default new Vuex.Store({
    //公用状态
    state: {
        user: {},
        token: null,
        title: 'kaola-',
        showLoading: false,
        noticeOptions: {},
        toastOptions: {}
    },
    mutations: {
        //被actions触发对应的事件,改变state中的状态
        LOADING: (state, b) => {
            state.showLoading = b;
        },
        SETTITLE: (state, t) => {
            state.title += t;
            document.title = state.title;
        },
        SHOWNOTICE: (state, params) => {
            state.noticeOptions = {
                isShow: params.isShow,  //显示/隐藏
                title: params.title,  //弹窗标题
                message: params.message,  //内容
                btnCancelText: params.btnCancelText,  //取消按钮文案
                btnConfirmText: params.btnConfirmText,  //确定按钮文案
                noCancel: params.noCancel,  //是否显示取消按钮
                cancelFun: params.cancelFun,  //取消回调
                confirmFun: params.confirmFun  //确定回调
            }
        },
        SHOWTOAST: (state, p) => {
            state.toastOptions = {
                isShow: p.isShow,  //是否显示
                message: p.message,  //内容
                // toastFun: p.toastFun  //回调
            }
        }

    },
    getters: {
        changeState: state => {
            //相当于vue实例中的methods,用于处理公用data
            //自vuex 面向组件的数据处理
            console.log(state)
        }
    },
    actions: {
        //注意:actions中的方法a由用户触发,该方法再去触发mutations中的方法A,再由mutations中的方法A去改变state中的状态变量

        //模板: increment ({ commit }, payload) {
        //     commit('突变方法名')
        //     //payload应该是一个对象，可通过模板方法调用传入对象的方式将数据从组件传入vuex
        // },
        showNotice: ({commit}, params) => {
            commit('SHOWNOTICE', params);
        },
        showToast: ({commit}, p) => {
            commit('SHOWTOAST', p);
        },
        setTitle: ({commit}, t) => {
            commit('SETTITLE', t);
        }
    },

});
