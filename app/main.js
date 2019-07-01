import Vue from 'nativescript-vue'
import Main from './components/Main'
import store from './store';
import routes from '~/router'
import VueDevtools from 'nativescript-vue-devtools'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import { languages } from './i18n/index.js'
import { defaultLocale } from './i18n/index.js'
const messages = Object.assign(languages)

var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'es',
  messages
})

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$routes = routes

new Vue({
  i18n,
  store,
  render: h => h('frame', [h(Main)])
}).$start()
