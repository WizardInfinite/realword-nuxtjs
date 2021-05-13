import {request} from '@/plugins/request'
// 获取公共的文章
export const getArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles",
    params
  })
}
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY4NDk2LCJ1c2VybmFtZSI6InNhZHNhZHNhZHNhZGFzIiwiZXhwIjoxNjI1ODg1MjAxfQ.Xbpc81o0k1PjY3ufRc4kR73R0kblTAnK-bMQ38vesUw"
// 获取关注的文章列表
export const getFeedArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles/feed",
    params
  })
}
// 文章详情页
export const getDetailArticles = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`,
  })
}
// 获取文章评论
export const getCommentsArticles = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}/comments`,
  })
}
// 添加点赞 
export const addFavorite = (slug) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/favorite`,
  })
}
// 取消点赞 
export const deleteFavorite = (slug) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`,
  })
}
// 文章发表
export const publishArticle = (data) => {
  return request({
    method: "POST",
    url: 'api/articles',
    data
  })
}
// 发布文章编辑---回显
export const publishArticleEdit= (slug) => {
  return request({
    method: "GET",
    url: `api/articles/${slug}`,
  })
}