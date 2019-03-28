// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import api from './api'
import tween from 'tween.js'
import kmodal from 'kmodal'
import './components/index'
import './directives/index'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.prototype.$tween = tween

Vue.use(kmodal)

Vue.filter('formatDate', function (date) {
  return date.split('.')[0].replace('T', ' ')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
