# <center>Vue2-Sub-App</center>

<p align='center'>
  简体中文 ｜ <a href='./README.en-US.md'>English</a>
</p>

## 介绍

当我在使用 [Vue2](https://github.com/vuejs/vue) 开发公司项目时，由于是卡片式的开发，每个组件都可以单独打包成一个 _JS_ 资源，通过卡片加载器加载到当前页面中。当卡片功能特别复杂时（复杂到它可以单独作为一个应用），而我又想在当前卡片的后代组件中，获取当前卡片根组件实例（类似 `$root` 属性），以及组件 _RouterLink_ 和 _RouterView_ 类似的功能时，就不得不另辟蹊径。当然，这些完全可以通过 `provide` + `inject`、`v-if` 等去模拟。但是，我想再简单一点，于是，这个插件就这样来啦！

## 安装

```shell
# npm
npm install vue2-sub-app --save

# yarn
yarn add vue2-sub-app

# pnpm
pnpm install vue2-sub-app
```

## 使用

### 全局导入

```js
// main.js
import Vue from 'vue'
import Vue2SubApp from 'vue2-sub-app'

Vue.use(Vue2SubApp)

new Vue({
  /* ... */
})
```

### 按需导入

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

## 方法

### defineSubRoot(config)

- `config`: 组件选项对象。

将当前组件定义成一个子根组件，该组件的所有后代组件都可以通过 `this.$subRoot` 得到当前组件的实例。

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

## 配置项

### isSubRoot

type: `boolean`

在 [全局引入](#全局导入) 的场景下，在导出的组件选项中配置该属性，可将当前组件作为一个子根组件。

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

在导出的组件选项中配置子路由相关信息。

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

## 属性

### $subRoot

type: `VueComponent`

距离当前组件最近的子根组件实例。

### $subRoute

type: `SubRoute`

当前的子路由。

#### 属性

##### $subRoute.path

当前子路由的地址。

##### $subRoute.params

当前子路由的参数。

### $subRouter

type: `SubRouter`

子路由实例。

#### 方法

##### $subRouter.push(path, params?)

导航到新的子路由地址。

##### $subRouter.replace(path, params?)

替换当前子路由地址。

##### $subRouter.pop()

后退到上一级子路由。

## 组件

### SubRouterLink

#### 属性

##### to

type: `string`

表示目标子路由的链接。

##### tag

type: `string`

default: `"a"`

指定 `<SubRouterLink>` 渲染成哪个标签。

### SubRouterView

渲染当前子路由对应的组件。
