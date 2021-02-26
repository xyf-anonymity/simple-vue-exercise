import axios from 'axios'
const myAxios = axios.create({
    timeout: 1000,
    baseURL:'https://api.github.com' //  /search/users
})

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
})

// 添加响应拦截器
myAxios.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data;
    },
    error => {
        throw error
        // return new Promise(()=>{}) //中断 promise链 在这里统一处理错误
    }
)

export default myAxios