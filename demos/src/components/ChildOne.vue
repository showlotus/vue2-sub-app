<template>
  <div>
    <div>ChildOne</div>
    {{ $subRoot.t('test') }}
    <button @click="$subRouter.push('/child-one')">show ChildOne</button>
    <button @click="$subRouter.push('/child-two')">show ChildTwo</button>
  </div>
</template>

<script>
export default {
  name: 'ChildOne',
  data() {
    return {}
  },
  watch: {
    '$subRoute.path'(newVal, oldVal) {
      console.log('watch $subRoute.path', newVal, oldVal)
    },
    '$subRoute.params'(newVal, oldVal) {
      console.log('watch $subRoute.params', newVal, oldVal)
    },
  },
  activated() {
    console.log('ChildOne Activated...')
  },
  deactivated() {
    console.log('ChildOne Deactivated...')
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
