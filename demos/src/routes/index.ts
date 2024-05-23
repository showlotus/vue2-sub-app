export default [
  {
    path: '/child-one',
    component: () => import('../components/ChildOne.vue'),
  },
  {
    path: '/child-two',
    component: () => import('../components/ChildTwo.vue'),
  },
]
