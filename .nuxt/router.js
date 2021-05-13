import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _095bb843 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _9a7fb790 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _b506a9a0 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _12256fb0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _786ed208 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _04e642f4 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _0e209a06 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _095bb843,
    children: [{
      path: "",
      component: _9a7fb790,
      name: "home"
    }, {
      path: "/login",
      component: _b506a9a0,
      name: "login"
    }, {
      path: "/register",
      component: _b506a9a0,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _12256fb0,
      name: "profile"
    }, {
      path: "/settings",
      component: _786ed208,
      name: "settings"
    }, {
      path: "/editor",
      component: _04e642f4,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _0e209a06,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
