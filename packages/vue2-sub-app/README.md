# Vue2-Sub-App

Make any component can be used as the Root-like component.

## Install

```shell
# NPM
npm install vue2-sub-app --save

# Yarn
yarn add vue2-sub-app

# pnpm
pnpm install vue2-sub-app
```

## Usage

### Full Import

```js
// main.js
import Vue from 'vue'
import Vue2SubApp from 'vue2-sub-app'

Vue.use(Vue2SubApp)

new Vue({
  /* ... */
})
```

### Manually Import

```js
<script>
import { defineSubRoot, SubRouterLink, SubRouterView } from 'vue2-sub-app'

export default defineSubRoot({
  subRoutes: [
    {
      path: '/some',
      component: () => import('./**/some.vue'),
    },
  ],
  components: { SubRouterLink, SubRouterView },
  props: {},
  data() {
    return {
      /* ... */
    }
  },
  methods: {},
})
</script>
```

## APIs

### defineSubRoot

## Components

### SubRouterLink

### SubRouterView

## Props

### $subRoot

### $subRoute

### $subRouter
