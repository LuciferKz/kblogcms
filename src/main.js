// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import api from './api'
import tween from 'tween.js'
import setComponentTo from './components'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.prototype.$tween = tween

setComponentTo(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// "karma-phantomjs-launcher": "^1.0.2",
// "karma-phantomjs-shim": "^1.4.0",
// "phantomjs-prebuilt": "^2.1.14",
