import axios from './axios.config'

const fetchAll = function () {
  return axios.get('/category/all')
}

const fetchById = function (id) {
  return axios.get('/category/' + id)
}

const insert = function (category) {
  return axios.post('/category/new', {
    category: category
  })
}

const removeById = function (id) {
  return axios.post('/category/remove', {
    id: id
  })
}

const updateById = function (id, category) {
  return axios.post('/category/update', {
    id: id,
    category: category
  })
}

export default {
  fetchAll,
  fetchById,
  insert,
  removeById,
  updateById
}
