import Vue from 'nativescript-vue'
import Main from './components/Main'
import store from './store';
import routes from '~/router'

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
Vue.prototype.$routes = routes

new Vue({
  store,
  render: h => h('frame', [h(Main)])
}).$start()
