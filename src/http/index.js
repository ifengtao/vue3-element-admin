import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    // baseURL 会在请求url中自动添加前置链接
    baseURL: '/api'
})


// 请求拦截器
service.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

// 响应拦截器
service.interceptors.response.use((response) => {
    return response.data;
})


// 抛出 axios 实例
export default service