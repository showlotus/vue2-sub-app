# Vue2-Sub-App

English | <a  href='/packages/vue2-sub-app/README-zh_CN.md'>简体中文</a>

When I was developing a company project using [Vue2](https://github.com/vuejs/vue), because of the card-style development, each component can be individually packaged into a _JS_ resource that is loaded into the current page via the card loader. When the card functionality is particularly complex (so complex that it can stand alone as an application), I want to get the current card root component instance in the descendant component of the current card (Similar to `$root` attribute), and components like _RouterLink_ and _RouterView_ have to take a different approach. Of course, these can be completely simulated by `provide` + `inject`, `v-if`, etc. However, I wanted to make it simpler, so here it is!

## Install

```shell
# npm
npm install vue2-sub-app --save

# yarn
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

### defineSubRoot(config)

`config`: component option object.

The current component is defined as a child-root component, and all descendant components of the component can get an instance of the current component through `this.$subRoot`.

```html
<!-- Parent.vue -->
<template>
  <Child />
</template>
<script>
  import Child from 'Child.vue'

  export default defineSubRoot({
    components: { Child },
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

```html
<!-- Child.vue -->
<script>
  export default {
    created() {
      console.log(this.$subRoot) // this.$subRoot == the instance of Parent.vue
    },
  }
</script>
```

## Options

### isSubRoot

type: `boolean`

If **Manually Import** is used, configure this property in the exported component options to make the current component a child-root component.

```js
export default {
  isSubRoot: true, // <---
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
}
```

### subRoutes

type: `Array<{ path: string, component: VueComponent }>`

Configure subrouting information in the exported component options.

```js
export default defineSubRoot({
  subRoutes: [
    {
      path: '/child-one',
      component: () => import('./components/ChildOne.vue'),
    },
    {
      path: '/child-two',
      component: () => import('./components/ChildTwo.vue'),
    },
  ],
  props: {},
  data() {
    return {
      /* ... */
    }
  },
  methods: {},
})
```

## Instance

### $subRoot

type: `VueComponent`

The child-root component instance closest to the current component.

### $subRoute

type: `SubRoute`

The current subroute.

#### Props

##### $subRoute.path

Location of the current subroute.

##### $subRoute.params

Parameter of the current subroute.

### $subRouter

type: `SubRouter`

The subrouter instance.

#### Methods

##### $subRouter.push(path, params?)

Navigate to the new subrouting location.

##### $subRouter.replace(path, params?)

Replace the current subroute location.

##### $subRouter.pop()

Back up to the next subroute.

## Components

### SubRouterLink

#### Props

##### to

type: `string`

The location of the target subroute.

##### tag

type: `string`

default: `"a"`

Specify which tag `<SubRouterLink>` is rendered to.

### SubRouterView

Renders the component corresponding to the current subroute.
