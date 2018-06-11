import axios from './axios.config'
// 用户token验证
const auth = function (id) {
  return axios.post('user/auth', {
    id: id
  })
  .catch((res) => {
    console.log(res)
  })
}
// 用户登录
const login = function (user) {
  return axios.post('user/login', user)
  .catch((res) => {
    console.log(res)
  })
}
// 用户注册
const register = function (name, pwd) {
  return axios.post('user/signup', {
    username: name,
    password: pwd
  })
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID获取单个用户数据
const fetchUserData = function (id) {
  return axios.get('user/' + id)
  .catch((res) => {
    console.log(res)
  })
}
// 获取所有用户数据
const fetchUsers = function () {
  return axios.get('user/all')
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID删除单个用户
const removeUser = function (id) {
  return axios.post('user/remove', {
    id: id
  })
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID修改单个用户数据
const updateUser = function (id, user) {
  return axios.post('user/update', {
    id: id,
    user: user
  }).catch((res) => {
    console.log(res)
  })
}
// 新建用户
const insertUser = function (user) {
  return axios.post('user/insert', {
    user: user
  }).catch((res) => {
    console.log(res)
  })
}

export default {
  auth,
  login,
  register,
  fetchUserData,
  fetchUsers,
  removeUser,
  updateUser,
  insertUser
}
