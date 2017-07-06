import Vue from 'vue'
import Vuex from 'vuex'
import auth from './authentication'
import cssTheme from './cssTheme'

Vue.use(Vuex)

var Store = new Vuex.Store({
  modules: { auth, cssTheme }
})

export default Store
