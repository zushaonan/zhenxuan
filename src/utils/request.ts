// 引入axios进行二次封装，使用请求，响应拦截器
import axios from "axios";
// 引入element-plus消息提示
import { ElMessage } from "element-plus";
// 第一步：利用axios的create方法，去创建axios实例(其他配置：基础路径，超时的时间)
let request = axios.create({
    // 基础路径
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000 //超时时间

})
// 使用请求拦截器
request.interceptors.request.use((config) => {
    return config;
})
// 配置相应拦截器，有两个参数都是回调函数，第一个回调函数是处理相应过来的数据，第二个回调函数是处理错误
request.interceptors.response.use((response) => {
    // 成功回调函数
    // 简化数据集
    return response;
}, (error) => {
    // 错误回调处理http请求错误

    // 提示信息
    let message = "";
    // 拿到状态码
    let status = error.response.status;
    switch (status) {
        case 401:
            message = "TOKEN过期"
            break;
        case 403:
            message = "无权访问"
            break;
        case 404:
            message = "请求地址错误"
            break;
        case 500:
            message = "服务器内部错误"
            break;
        default:
            message = "网路出现问题"
            break;

    }
    // 提示错误信息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(error)
})
// 对外暴露
export default request;