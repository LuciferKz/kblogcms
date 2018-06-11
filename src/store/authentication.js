import * as types from './mutationsType.js'

export default {
  state: {
    userInfo: { }
  },
  actions: {
  },
  mutations: {
    [types.ADD_USER_DATA] (state, user) {
      // return new Promise((resolve) => {
      state.userInfo = user
      if (user.remember === 'Y') {
        localStorage.setItem('uid', user.id)
        localStorage.setItem('token', user.token)
      } else {
        sessionStorage.setItem('uid', user.id)
        sessionStorage.setItem('token', user.token)
      }
      //   resolve(user)
      // })
    },
    [types.CLEAR_USER_DATA] (state) {
      state.userInfo = {}

      localStorage.removeItem('uid')
      localStorage.removeItem('token')

      sessionStorage.removeItem('uid')
      sessionStorage.removeItem('token')
    }
  },
  getters: {
    userInfo (state) {
      return state.userInfo
    }
  }
}
