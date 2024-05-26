<template>
  <div>
    ChildTwo
    <ChildThree />
  </div>
</template>

<script>
import { defineSubRoot } from 'vue2-sub-app'
import ChildThree from './ChildThree.vue'

export default defineSubRoot({
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
})
</script>

<style scoped></style>
