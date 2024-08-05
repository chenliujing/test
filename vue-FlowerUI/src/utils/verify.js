//正则校验的正则表达式，这里注意正则表达式中的‘\’要使用‘\\’转义
const patterns = {
    "name": "^[a-zA-Z_][0-9a-zA-Z_]{0,}$",
    "phone": "^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$",
    "tel": "^(0\\d{2,3}-\\d{7,8}(-\\d{1,6})?)$",
    "email": "^[\\w\\.-]+@[a-zA-Z\\d\\.-]+\\.[a-zA-Z]{2,}$",
    "pwd": "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\\(\\)])+$)([^(0-9a-zA-Z)]|[\\(\\)]|[a-z]|[A-Z]|[0-9]){8,}$",
    "ip": "^(?=(\\b|\\D))(((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))\\.){3}((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))(?=(\\b|\\D))$",
    "IDCard": "(^\\d{15}$)|(^\\d{17}([0-9]|X)$)",
    "url": "^https?://([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$"
}

//对应正则表达式的提示信息
const patternMsg_US = {
    "name": "请以字母、下划线开头并包括数字、字母、下划线组成",
    "phone": "手機號碼格式不正確",
    "tel": "電話號碼格式不正確",
    "email": "郵箱地址不正確",
    "pwd": "密码至少由8位包含字母、数字、特殊字符两种组合",
    "ip": "IP地址不正確",
    "IDCard": "身份證號碼不正確",
    "url": "鏈接格式不正確"
}
const patternMsg_CN = {
    "name": "请以字母、下划线开头并包括数字、字母、下划线组成",
    "phone": "手机号码格式不正确",
    "tel": "电话号码格式不正确",
    "email": "邮箱地址不正确",
    "pwd": "密码至少由8位包含字母、数字、特殊字符两种组合",
    "ip": "IP地址不正确",
    "IDCard": "身份证号码不正确",
    "url": "链接格式不正确"
}
const patternMsg_TW = {
    "name": "Please start with a letter and an underscore and include a number, a letter, and an underscore",
    "phone": "Mobile phone number is not in the correct format",
    "tel": "The phone number is not in the correct format",
    "email": "The email address is incorrect",
    "pwd": "The password consists of at least 8 characters, including letters, numbers, and special characters".
    "ip": "IP address is incorrect",
    "IDCard": "ID number is incorrect",
    "url": "Incorrect link format"
}
// 获取当前多语言类型
const defaultLang = 'zh-TW'
const lang = localStorage.getItem('lang') || defaultLang
const msgObj = {
    'en-US': { ...patternMsg_US },
    'zh-CN': { ...patternMsg_CN },
    'zh-TW': { ...patternMsg_TW }
}
//根据使用的正则返回对应的正则和信息对象
const pattern = (name, para = 'g', type = 'blur') => {
    return {
        pattern: new RegExp(patterns[name], para),
        message: msgObj[lang][name],
        trigger: type
    }
}

export default pattern;
