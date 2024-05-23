import Vue from 'vue'
import './style.css'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Vue2SubApp from 'vue2-sub-app'

Vue.use(VueI18n)
Vue.use(Vue2SubApp)

new Vue({
  i18n: new VueI18n({
    locale: 'zh_CN',
  }),
  el: '#app',
  render: h => h(App),
})
