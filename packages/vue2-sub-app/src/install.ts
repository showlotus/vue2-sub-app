import SubRouterLink from './components/SubRouterLink'
import SubRouterView from './components/SubRouterView'
import SubRouter from './SubRouter'

export function install(Vue: any) {
  if (install.prototype.installed) return

  install.prototype.installed = true

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
        this._subAppRouterRoot = (this.$parent && this.$parent._subAppRouterRoot) || this
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

  Vue.component('SubRouterLink', SubRouterLink)
  Vue.component('SubRouterView', SubRouterView)
}
