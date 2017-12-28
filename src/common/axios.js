import axios from 'axios'
import qs from 'qs'
import store from '../store/store'

function displayNotice(o) {
    let options = {
        isShow: true,
        message: o.message,
        noCancel: true,
        // cancelFun: function () {
        //     console.log('cancel')
        // },
        confirmFun: function () {
            o.fun()
        }
    };
    store.commit('SHOWNOTICE', options);
}

//请求拦截
axios.interceptors.request.use(config => {
    // loading
    store.commit('LOADING', true);
    return config
}, error => {
    return Promise.reject(error);
})

//响应拦截
axios.interceptors.response.use(response => {
    store.commit('LOADING', false);
    return response
}, error => {
    // console.log('响应出错,测试下面的return promise.resolve');
    let o = {
        message: '数据返回出错,请重试',
        fun(){}
    };
    displayNotice(o);
    return Promise.resolve(error.response);
})

//检查响应状态
function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        // 如果不需要除了data之外的数据，可以直接 return response.data
        return response;
    }
    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

//检查状态码
function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，弹窗提示
    let o = {
        message: '发生错误,没有找到你想要的',
        fun(){}
    };
    if (res.status === -404) {
        //console.log('发生错误,没有找到你想要的');
        displayNotice(o);
    }
    if (res && (res.data.code < 0)) {
        // console.log(res.data.msg)
        o.message = res.data.msg;
        displayNotice(o);
    }
    return res;
}

function post(url, data) {
    return axios({
        method: 'post',
        // baseURL: 'https://api.imjad.cn/qqfm/',
        url,
        data: qs.stringify(data),
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
        return checkCode(res)
    })
}

function get(url, params, uneedDefaultParams) {
    if (!uneedDefaultParams) {
        if (!params.pagenum) {
            params.pagenum = 1;
        }
        if (!params.pagesize) {
            params.pagesize = 18;
        }
    }
    return axios({
        method: 'get',
        // baseURL: 'https://api.imjad.cn/qqfm/',
        url,
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    }).then((response) => {
            return checkStatus(response)
        }
    ).then((res) => {
            return checkCode(res)
        }
    )
}

//导出调用
export default {post, get};
