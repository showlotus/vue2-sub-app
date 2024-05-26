# vue2-sub-app

> - 参考文档格式：https://github.com/vuejs/vue-router/blob/3f346d09ced494ae2a23f77fa60b5eeacf5f8e0a/docs/api/README.md

vue-router 源码中一段很精妙的代码：[->](https://github.com/vuejs/vue-router/blob/3f346d09ced494ae2a23f77fa60b5eeacf5f8e0a/src/install.js#L29)

```js
Vue.mixin({
  beforeCreate() {
    if (isDef(this.$options.router)) {
      this._routerRoot = this
      this._router = this.$options.router
      this._router.init(this)
      Vue.util.defineReactive(this, '_route', this._router.history.current)
    } else {
      this._routerRoot = (this.$parent && this.$parent._routerRoot) || this // <- this
    }
    registerInstance(this, this)
  },
})
```
