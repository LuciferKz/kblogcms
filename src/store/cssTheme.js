import * as types from './mutationsType'

export default {
  state: {
    sidebar: ''
  },
  mutations: {
    [types.TOGGLE_SIDEBAR] (state, model) {
      state.sidebar = model
    }
  },
  getters: {
    sidebarCls (state) {
      if (state.sidebar === 'mini') {
        return 'sidebar-collapse sidebar-mini'
      } else if (state.sidebar === 'collapse') {
        return 'sidebar-open'
      } else {
        return ''
      }
    }
  }
}
