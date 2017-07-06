import axios from './axios.config'
// 用户登录
const login = function (name, pwd, cb) {
  axios.post('user/login', {
    username: name,
    password: pwd
  })
  .then((res) => {
    cb(res.data)
  })
  .catch((res) => {
    console.log(res)
  })
}
// 用户注册
const register = function (name, pwd, cb) {
  axios.post('user/signup', {
    username: name,
    password: pwd
  })
  .then((res) => {
    cb(res.data)
  })
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID获取单个用户数据
const fetchUserData = function (id, cb) {
  axios.get('user/' + id)
  .then((res) => {
    cb(res.data)
  })
  .catch((res) => {
    console.log(res)
  })
}
// 获取所有用户数据
const fetchUsers = function (cb) {
  axios.get('user/all')
  .then((res) => {
    cb(res.data)
  })
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID删除单个用户
const removeUser = function (id, cb) {
  axios.post('user/remove', {
    id: id
  })
  .then((res) => {
    cb(res.data)
  })
  .catch((res) => {
    console.log(res)
  })
}
// 根据ID修改单个用户数据
const updateUser = function (id, user, cb) {
  axios.post('user/update', {
    id: id,
    user: user
  }).then((res) => {
    cb(res.data)
  }).catch((res) => {
    console.log(res)
  })
}
// 新建用户
const insertUser = function (user, cb) {
  axios.post('user/insert', {
    user: user
  }).then((res) => {
    cb(res.data)
  }).catch((res) => {
    console.log(res)
  })
}

export default {
  login,
  register,
  fetchUserData,
  fetchUsers,
  removeUser,
  updateUser,
  insertUser
}
