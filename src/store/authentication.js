import * as types from './mutationsType.js'

export default {
  state: {
    userInfo: { }
  },
  actions: {
  },
  mutations: {
    [types.ADD_USER_DATA] (state, user) {
      state.userInfo = user
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    }
  }
}
