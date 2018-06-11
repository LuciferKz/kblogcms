import axios from './axios.config.js'

const fetchAll = function () {
  return axios.get('/article/all')
}

const fetchById = function (id) {
  return axios.get('/article/' + id)
}

const insert = function (article) {
  return axios.post('/article/new', {
    article: article
  })
}

const updateById = function (id, article) {
  return axios.post('/article/update', {
    id: id,
    article: article
  })
}

const removeById = function (id) {
  return axios.post('/article/remove', {
    id: id
  })
}

export default {
  fetchAll,
  fetchById,
  insert,
  updateById,
  removeById
}
