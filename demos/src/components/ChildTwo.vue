<template>
  <div>
    ChildTwo
    <ChildThree />
  </div>
</template>

<script>
import ChildThree from './ChildThree.vue'

export default {
  name: 'ChildTwo',
  components: { ChildThree },
  data() {
    return {}
  },
  activated() {
    console.log('ChildTwo Activated...')
  },
  deactivated() {
    console.log('ChildTwo Deactivated...')
  },
  created() {},
  mounted() {},
}
</script>

<style scoped></style>
