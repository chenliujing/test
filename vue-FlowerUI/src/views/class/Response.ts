import  UserInfo  from "./UserInfo";

// 定义 UserToken 类
export default class Response {
    token: string;
    user: UserInfo;

    constructor(token: string, user: UserInfo) {
        this.token = token;
        this.user = user;
    }
}