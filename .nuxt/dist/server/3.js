exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getDetailArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCommentsArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return publishArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return publishArticleEdit; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共的文章

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
}; // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY4NDk2LCJ1c2VybmFtZSI6InNhZHNhZHNhZHNhZGFzIiwiZXhwIjoxNjI1ODg1MjAxfQ.Xbpc81o0k1PjY3ufRc4kR73R0kblTAnK-bMQ38vesUw"
// 获取关注的文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    params
  });
}; // 文章详情页

const getDetailArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getCommentsArticles = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}/comments`
  });
}; // 添加点赞 

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞 

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
}; // 文章发表

const publishArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: 'api/articles',
    data
  });
}; // 发布文章编辑---回显

const publishArticleEdit = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `api/articles/${slug}`
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=93aae9b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-93aae9b4><div class=\"container\" data-v-93aae9b4><h1 class=\"logo-font\" data-v-93aae9b4>conduit</h1> <p data-v-93aae9b4>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-93aae9b4>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-93aae9b4>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  },
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-93aae9b4>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                  },
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.$route.query.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-93aae9b4>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'tag' },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: _vm.$route.query.tag,
                  },
                }}},[_vm._v("#"+_vm._s(_vm.$route.query.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-93aae9b4>","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username,
                },
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-93aae9b4>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  name: 'profile',
                  params: {
                    username: article.author.username,
                  },
                }}},[_vm._v("\n                "+_vm._s(article.author.username)+"\n              ")]),_vm._ssrNode(" <span class=\"date\" data-v-93aae9b4>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,"MMM DD, YYYY")))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoritedDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited,
              }))+" data-v-93aae9b4><i class=\"ion-heart\" data-v-93aae9b4></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: article.slug,
              },
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav data-v-93aae9b4>","</nav>",[_vm._ssrNode("<ul class=\"pagination\" data-v-93aae9b4>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page,
              }))+" data-v-93aae9b4>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'home',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.$route.query.tab,
                  },
                }}},[_vm._v("\n                "+_vm._s(item)+"\n              ")])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-93aae9b4>","</div>",[_vm._ssrNode("<p data-v-93aae9b4>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-93aae9b4>","</div>",_vm._l((_vm.tagsData),function(tag,tagIndex){return _c('nuxt-link',{key:tagIndex,staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tag: tag,
                  tab: 'tag',
                },
              }}},[_vm._v("\n              "+_vm._s(tag)+"\n            ")])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=93aae9b4&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
 // 获取标签列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: "GET",
    url: "/api/tags"
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",
  watchQuery: ["page", "tag", "tab"],

  async asyncData({
    query,
    store
  }) {
    const page = Number.parseInt(query.page || 1);
    const limit = 20;
    const tab = query.tab || "global_feed";
    const loadArticles = store.state.user && tab === "your_feed" ? api_article["f" /* getFeedArticles */] : api_article["c" /* getArticles */];
    const [articlesRes, tagRes] = await Promise.all([loadArticles({
      limit,
      offset: (page - 1) * limit,
      tag: query.tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articlesRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => article.favoritedDisabled = false);
    return {
      articles,
      articlesCount,
      limit,
      page,
      tagsData: tags,
      tab: query.tab || "global_feed"
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"]),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit); //向上取整
    }

  },
  methods: {
    async onFavorite(article) {
      article.favoritedDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["b" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api_article["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoritedDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93aae9b4",
  "3c78be42"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map