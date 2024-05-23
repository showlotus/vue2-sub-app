<script>
import { customRef, ref, watch } from 'vue'
import subRoutes from '../routes'
import ChildFour from './ChildFour'
import i18n from '../i18n'

export default {
  subRoutes: subRoutes,
  i18n: i18n,
  components: { ChildFour },
  mixins: [],
  provide() {
    return {
      msg: 'fromHelloWorldMsg',
    }
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showChildOne: !false,
      showChildTwo: false,
      count: 0,
      routes: [
        {
          path: '/child-one',
        },
        {
          path: '/child-two',
        },
      ],
    }
  },
  watch: {},
  created() {
    console.log(this.$i18n)
  },
  setup() {
    console.log('trigger setup')
  },
  methods: {
    t(...args) {
      return this.$i18n.t(...args)
    },
    toggleLanguage(lang) {
      this.$root.$i18n.locale = lang
    },
  },
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="header">
      <div>language: {{ $i18n.locale }}</div>

      <button @click="toggleLanguage('zh_CN')">to zh_CN</button>
      <button @click="toggleLanguage('en_US')">to en_US</button>
    </div>

    <SubRouterLink
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      :class="['route', { active: $subRoute.path === route.path }]"
    >
      {{ route.path }}
    </SubRouterLink>

    <br />
    <br />

    <div>$subRoute: {{ $subRoute }}</div>

    <div class="view">
      <keep-alive>
        <SubRouterView />
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.block {
  margin-bottom: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
}

.route {
  margin-right: 10px;
  cursor: pointer;
  border-bottom: 1px solid;
}

.view {
  padding: 16px;
  border: 1px dashed;
}
</style>
