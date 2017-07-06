import axios from './axios.config.js'

const fetchAll = function (cb) {
  axios.get('/article/all')
  .then(function (res) {
    cb(res.data)
  })
}

const fetchById = function (id, cb) {
  axios.get('/article/' + id)
  .then(function (res) {
    cb(res.data)
  })
}

const insert = function (article, cb) {
  axios.post('/article/new', {
    article: article
  })
  .then(function (res) {
    cb(res.data)
  })
}

const updateById = function (id, article, cb) {
  axios.post('/article/update', {
    id: id,
    article: article
  })
  .then(function (res) {
    cb(res.data)
  })
}

const removeById = function (id, cb) {
  axios.post('/article/remove', {
    id: id
  })
  .then(function (res) {
    cb(res.data)
  })
}

export default {
  fetchAll,
  fetchById,
  insert,
  updateById,
  removeById
}
