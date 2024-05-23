<script>
import Main from './components/Main.vue'

export default {
  components: {
    Main,
  },
}
</script>

<template>
  <div id="app">
    <Main msg="Vue2-Sub-App" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
