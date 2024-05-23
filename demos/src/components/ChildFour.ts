export default {
  name: 'ChildFour',
  render(h: any) {
    console.log('ChildFour', this.$subRoot)
    return h(
      'div',
      {
        style: {
          color: 'red',
        },
      },
      'ChildFour'
    )
  },
}
