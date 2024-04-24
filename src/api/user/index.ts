// 统一管理咱们项目用户相关的接口
import request from "@/utils/request";
// 引入类型限制
import { logRsponseData, loginfom, userRespanseData } from "./type";
enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = '/user/info'
}
// 暴露请求函数
// 登录请求接口方法
export const reqLogin = (data: loginfom) => request.post<any, logRsponseData>(API.LOGIN_URL, data)
// 获取用户数据接口
export const reqUserInfo = () => request.get<any, userRespanseData>(API.USERINFO_URL);