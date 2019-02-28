// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import api from './api'
import tween from 'tween.js'
import kmodal from 'kmodal'
import './components'
import validate from './utils/validate'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.prototype.$tween = tween

for (let funcName in validate) {
  Vue.prototype[funcName] = validate[funcName]
}

Vue.use(kmodal)

Vue.filter('formatDate', function (date) {
  return date.split('.')[0].replace('T', ' ')
})

// 响应结果状态码不为20000都为失败
// axios.interceptors.response.use((res) => {
//   if (res.data.statusCode !== 20000) {

//   } else {
//     return res.data
//   }
// }, (err) => {
//   console.log(err)
//   return Promise.reject(err)
// })

Vue.directive('check-img', {
  inserted: function (el) {
    let _img = document.createElement('img')
    _img.src = el.dataset.src
    _img.onload = function () {
      el.src = el.dataset.src
    }
  },
  update: function (el) {
    let _img = document.createElement('img')
    _img.src = el.dataset.src
    _img.onload = function () {
      el.src = el.dataset.src
    }
  }
})

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
