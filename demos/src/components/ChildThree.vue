<template>
  <div>ChildThree</div>
</template>

<script>
export default {
  name: 'ChildThree',
  data() {
    return {}
  },
  mounted() {
    console.log('ChildThree mounted, $subRoot:', this.$subRoot)
    console.log(this.$subRoute, this.$subRouter)
  }
}
</script>

<style scoped></style>
