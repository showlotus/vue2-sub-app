import Vue from 'vue'

interface SubRoute {
  path: string
  component: () => Promise<any>
}

interface SubRouteParams {
  path: string
  params?: Record<string, any>
}

export default class SubRouter {
  routes: SubRoute[]
  maxRecords: number
  currentHistoryIndex: number
  history: Array<SubRouteParams>
  _subAppRoute: any
  constructor(routes: SubRoute[], maxRecords = 100) {
    this.routes = routes
    this.currentHistoryIndex = -1
    this.history = []
    this.maxRecords = maxRecords
    this._subAppRoute = Vue.observable({
      path: '',
      params: {},
    })
  }

  init(subApp: any) {
    subApp._subAppRoute = this._subAppRoute
  }

  push(path: string, params?: Record<string, any>) {
    if (path === this._subAppRoute.path) {
      return
    }

    const route = { path, params }
    this.update(route)
    this.currentHistoryIndex = (this.currentHistoryIndex + 1) % this.maxRecords
    this.history[this.currentHistoryIndex] = route
  }

  replace(path: string, params?: Record<string, any>) {
    const route = { path, params }
    this.update(route)
    this.history[this.currentHistoryIndex] = route
  }

  pop() {
    if (!this.history.length) {
      return
    }

    this.history.splice(this.currentHistoryIndex, 1)
    this.currentHistoryIndex =
      (this.currentHistoryIndex - 1 + this.maxRecords) % this.maxRecords
    this.update(this.history[this.currentHistoryIndex] || {})
  }

  update(routeParams: SubRouteParams) {
    const { path, params } = routeParams
    this._subAppRoute.path = path
    this._subAppRoute.params = params
  }

  getMatchComponent(path: string) {
    return this.routes.find((v) => v.path === path)?.component
  }
}
