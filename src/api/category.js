import axios from './axios.config'

const fetchAll = function (cb) {
  axios.get('/category/all')
  .then(function (res) {
    cb(res.data)
  })
}

const fetchById = function (id, cb) {
  axios.get('/category/' + id)
  .then(function (res) {
    cb(res.data)
  })
}

const insert = function (category, cb) {
  axios.post('/category/new', {
    category: category
  })
  .then(function (res) {
    cb(res.data)
  })
}

const removeById = function (id, cb) {
  axios.post('/category/remove', {
    id: id
  })
  .then(function (res) {
    cb(res.data)
  })
}

const updateById = function (id, category, cb) {
  axios.post('/category/update', {
    id: id,
    category: category
  })
  .then(function (res) {
    cb(res.data)
  })
}

export default {
  fetchAll,
  fetchById,
  insert,
  removeById,
  updateById
}
