export default {
  name: 'SubRouterLink',
  props: {
    to: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'a',
    },
  },
  render(this: any, h: any) {
    return h(
      this.tag,
      {
        on: {
          click: () => {
            this.$subRouter.push(this.to)
          },
        },
      },
      this.$slots.default
    )
  },
}
