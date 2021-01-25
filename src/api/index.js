/*
包含所有接口函数
*/
import ajax from './ajax'

// export function reqLogin(username, password) {
// 	return ajax('/login', {username, password}, 'POST')
// }
const BASE = ''

export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')


export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')