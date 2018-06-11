import axios from 'axios'

let AUTH_TOKEN = window.localStorage.getItem('token') || window.sessionStorage.getItem('token') || ''

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3705/' : 'http://api.zhangzhenkai.com/'

axios.defaults.timeout = 30000

axios.defaults.responseType = 'json'

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 每一次请求前统一进行一些配置
axios.interceptors.request.use((config) => {
  if (localStorage.token) {
    config.headers = {'Authorization': localStorage.token}
  } else if (sessionStorage.token) {
    config.headers = {'Authorization': sessionStorage.token}
  }
  return config
})

// 响应结果状态码不为20000都为失败
axios.interceptors.response.use((res) => {
  if (res.data.statusCode !== 20000) {

  } else {
  }
  return res.data
}, (err) => {
  console.log(err)
  return Promise.reject(err)
})

export default axios
