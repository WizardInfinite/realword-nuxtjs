exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users/login",
    data: data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users",
    data: data
  });
}; // 用户更新

const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "PUT",
    url: "/api/user",
    data: data
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=40733525&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-40733525><div class=\"row\" data-v-40733525><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-40733525><h1 class=\"text-xs-center\" data-v-40733525>Your Settings</h1> <ul class=\"error-messages\" data-v-40733525>"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li data-v-40733525>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form data-v-40733525><fieldset data-v-40733525><fieldset class=\"form-group\" data-v-40733525><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.userInfo.image)))+" class=\"form-control\" data-v-40733525></fieldset> <fieldset class=\"form-group\" data-v-40733525><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.userInfo.username)))+" class=\"form-control form-control-lg\" data-v-40733525></fieldset> <fieldset class=\"form-group\" data-v-40733525><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-40733525>"+_vm._ssrEscape(_vm._s(_vm.userInfo.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-40733525><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.userInfo.email)))+" class=\"form-control form-control-lg\" data-v-40733525></fieldset> <fieldset class=\"form-group\" data-v-40733525><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.userInfo.password)))+" class=\"form-control form-control-lg\" data-v-40733525></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-40733525>\n              Update Settings\n            </button></fieldset></form> <hr data-v-40733525> "+((_vm.user)?("<button class=\"btn btn-outline-danger\" data-v-40733525>\n          Or click here to logout.\n        </button>"):"<!---->")+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=40733525&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
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

 // 仅在客户端加载

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  name: "SettingsIndex",
  middleware: "authenticated",

  data() {
    return {
      userInfo: {
        bio: "",
        email: "",
        image: "",
        password: "",
        username: ""
      },
      errors: []
    };
  },

  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    // 更新用户信息
    async updataSettings() {
      try {
        const {
          data
        } = await Object(user["c" /* updateUser */])({
          user: this.userInfo
        });
        console.log(1111111, data);
        this.$router.push({
          name: 'profile',
          params: {
            username: data.user.username
          }
        });
      } catch (error) {
        console.log(error);
        this.errors = error.response.data.errors;
      }
    },

    // 登出
    loginOut() {
      this.$store.commit("setUser", null);
      Cookie.remove("user");
      this.$router.push("/login");
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "40733525",
  "616a3a23"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map