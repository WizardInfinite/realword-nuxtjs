import { request } from '@/plugins/request'
// 用户登录
export const login = (data) => {
      return request({
            method: "POST",
            url: "/api/users/login",
            data: data
      })
}
// 用户注册
export const register = (data) => {
      return request({
            method: "POST",
            url: "/api/users",
            data: data
      })
}
// 用户更新
export const updateUser = (data) => {
      return request({
            method: "PUT",
            url: "/api/user",
            data: data
      })
}

