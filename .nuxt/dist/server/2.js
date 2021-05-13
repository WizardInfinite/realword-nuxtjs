exports.ids = [2];
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=1ef8a798&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\" data-v-1ef8a798><div class=\"row\" data-v-1ef8a798><div class=\"col-md-10 offset-md-1 col-xs-12\" data-v-1ef8a798><form data-v-1ef8a798><fieldset data-v-1ef8a798><fieldset class=\"form-group\" data-v-1ef8a798><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\" data-v-1ef8a798></fieldset> <fieldset class=\"form-group\" data-v-1ef8a798><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\" data-v-1ef8a798></fieldset> <fieldset class=\"form-group\" data-v-1ef8a798><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\" data-v-1ef8a798>"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-1ef8a798><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.tagValue)))+" class=\"form-control\" data-v-1ef8a798> <div class=\"tag-list\" data-v-1ef8a798>"+(_vm._ssrList((_vm.article.tagList),function(tag,tagIndex){return ("<span class=\"tag-default tag-pill\" data-v-1ef8a798><i class=\"ion-close-round\" data-v-1ef8a798></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\" data-v-1ef8a798>\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=1ef8a798&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  middleware: "authenticated",
  //在路由匹配组件渲染之前会先执行中间件进行处理
  name: "EditorIndex",

  data() {
    return {
      article: {
        body: "",
        description: "",
        tagList: [],
        title: ""
      },
      tagValue: ""
    };
  },

  methods: {
    // 发布文章事件
    async publishArticle() {
      const {
        data
      } = await Object(article["g" /* publishArticle */])(this.article);
      console.log(data);
      this.$router.push({
        name: "article",
        params: {
          slug: data.article.slug
        }
      });
    },

    // 按回车生成标签
    generateTage(e) {
      if (e.keyCode === 13) {
        this.article.tagList.push(this.tagValue);
        this.tagValue = "";
      }
    },

    // 删除标签
    removeTag(index) {
      this.article.tagList.splice(index, 1);
    }

  },

  async mounted() {
    // 编辑文章回显
    if (this.$route.query.slug) {
      const {
        data
      } = await Object(article["h" /* publishArticleEdit */])(this.$route.query.slug);
      this.article.body = data.article.body;
      this.article.description = data.article.description;
      this.article.tagList = data.article.tagList;
      this.article.title = data.article.title;
    }
  }

});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ef8a798",
  "4cc72126"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map