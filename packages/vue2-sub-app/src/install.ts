import _Vue from 'vue'
import SubRouterLink from './components/SubRouterLink'
import SubRouterView from './components/SubRouterView'
import SubRouter from './SubRouter'

export function defineSubRoot(options: any, Vue = _Vue) {
  options.isSubRoot = true
  if (defineSubRoot.prototype.hasDefine) {
    return options
  }

  defineSubRoot.prototype.hasDefine = true

  const version = (Vue.version && Number(Vue.version.split('.')[0])) || -1
  if (process.env.NODE_ENV !== 'production' && version !== 2) {
    console.warn(
      `vue2-sub-app need to use Vue 2.0 or later (Vue: ${Vue.version}).`
    )
    return
  }

  Vue.mixin({
    beforeCreate(this: any) {
      if (this.$options.isSubRoot || this.$options.subRoutes) {
        this._subAppRoot = this
        this._subAppRouterRoot = this
        this._subAppRouter = new SubRouter(this.$options.subRoutes || [])
        // add prop: _subAppRoute
        this._subAppRouter.init(this)
      } else {
        this._subAppRoot = (this.$parent && this.$parent._subAppRoot) || this
        this._subAppRouterRoot =
          (this.$parent && this.$parent._subAppRouterRoot) || this
      }
    },
  })

  Object.defineProperty(Vue.prototype, '$subRoot', {
    get() {
      return this._subAppRoot
    },
  })

  Object.defineProperty(Vue.prototype, '$subRouter', {
    get() {
      return this._subAppRouterRoot._subAppRouter
    },
  })

  Object.defineProperty(Vue.prototype, '$subRoute', {
    get() {
      return this._subAppRouterRoot._subAppRoute
    },
  })

  return options
}

export function install(Vue: any) {
  if (install.prototype.installed) return

  install.prototype.installed = true

  defineSubRoot({}, Vue)

  Vue.component('SubRouterLink', SubRouterLink)
  Vue.component('SubRouterView', SubRouterView)
}
