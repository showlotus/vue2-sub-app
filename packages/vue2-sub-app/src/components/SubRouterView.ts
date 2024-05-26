export default {
  name: 'SubRouterView',
  functional: true,
  render(_: any, options: any) {
    const { parent, data, children } = options
    const { $subRoute, $subRouter, $createElement: h } = parent
    const component = $subRouter.getMatchComponent($subRoute.path)
    if (!component) {
      return h()
    }

    return h(component, data, children)
  },
}
