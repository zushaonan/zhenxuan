// 登录接口需要的携带的ts参数类型
export interface loginfom {
    username: string,
    password: string
}
interface dataType {
    token: string
}
// 登录接口返回值类型
export interface logRsponseData {
    code: number,
    data: dataType
}
// 定义服务器返回用户信息相关的数据类型
interface userInfoP {
    userId: number,
    avatar: string,
    username: string,
    password: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: string,
}
interface user {
    checkUser: userInfoP
}
export interface userRespanseData {
    code: number,
    data: user
}