// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import KelInput from './components/input/KelInput.vue'
import KelCheck from './components/input/KelCheck.vue'
import KelRadio from './components/input/KelRadio.vue'
import KelSelect from './components/input/KelSelect.vue'
import SideBar from './views/com/SideBar.vue'
import MainHeader from './views/com/MainHeader.vue'
import MainFooter from './views/com/MainFooter.vue'
import api from './api'
import tween from 'tween.js'

Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideBar', SideBar)
Vue.component('KelInput', KelInput)
Vue.component('KelCheck', KelCheck)
Vue.component('KelRadio', KelRadio)
Vue.component('KelSelect', KelSelect)

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.prototype.$tween = tween

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
