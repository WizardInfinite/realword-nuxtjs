import axios from 'axios'
// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io',
})
// 通过插件机制获取到上下文
export default ({store})=>{
    request.interceptors.request.use(function (config) {
        const {user} = store.state
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    }, function (error) {
        return Promise.reject(error)
    })
}
    

// export default request