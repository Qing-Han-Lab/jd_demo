import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Access-Control-Allow-Origin'] = '*';
    if (window.localStorage.getItem('token')) {
        config.headers['token'] = window.localStorage.getItem('token')
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})

function fetch(method, api, data) {
    return new Promise((resolve, reject) => {
        const ajaxOption = {
            timeout: 5000,
            headers: {
                'content-type': 'application/json' // 默认值
            },
            method : method,
            url : api
        }
        if(method.toLocaleUpperCase()==='GET'){
            ajaxOption.params = data
        }else{
            ajaxOption.data = data;
        }
        axios(ajaxOption).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

export default fetch