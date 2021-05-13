const cookieParser = process.server?require('cookieparser'):undefined
export const state = ()=>{
    return{
        user:null
    }
}
export const mutations ={
    setUser(state,userInfo){
        state.user = userInfo
    }
}
export const actions = {
    // 初始化容器以及需要传递给客户端的数据
    // 这个特殊的action，只会在服务端渲染期间运行
    // 初始化容器数据，传递数据给客户端使用
    nuxtServerInit({commit},{req}){
        let user = null
        if(req.headers.cookie){
            // 使用cookirparse将cookie转为对象
            const parsed = cookieParser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (error) {
                
            }
        }
        // 
        commit('setUser',user)
    }
}