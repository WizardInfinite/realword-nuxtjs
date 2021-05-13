/**
 * 如果已经登陆了还想要登录就跳转到首页
 */
 export default function({store,redirect}){
    if(store.state.user){
        return redirect('/')
    }
}