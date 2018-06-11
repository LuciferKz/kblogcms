import axios from './axios.config'

const fetchAll = function () {
  return axios.get('/role/all')
}

const fetchById = function (id) {
  return axios.get('/role/' + id)
}

const insert = function (role) {
  return axios.post('/role/new', {
    role: role
  })
}

const removeById = function (id) {
  return axios.post('/role/remove', {
    id: id
  })
}

const updateById = function (id, role) {
  return axios.post('/role/update', {
    id: id,
    role: role
  })
}

export default {
  fetchAll,
  fetchById,
  insert,
  removeById,
  updateById
}
