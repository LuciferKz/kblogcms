// import axios from './axios.config'
import data from '../mockingData'

const fetchData = function (uid, cb) {
  cb({
    tasksData: data.tasksData
  })
}

export default {
  fetchData
}
