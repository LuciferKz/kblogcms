import axios from 'axios'

let AUTH_TOKEN = window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || ''

axios.defaults.baseURL = 'http://zhangzhenkai.com:3705/'

axios.defaults.timeout = 3000

axios.defaults.responseType = 'json'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 每一次请求前统一进行一些配置
axios.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers = {'Authorization': localStorage.token}
  } else if (sessionStorage.token) {
    config.headers = {'Authorization': sessionStorage.token}
  }
  return config
})

export default axios
