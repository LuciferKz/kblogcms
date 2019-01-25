import Vue from 'vue'
import KelInput from './components/input/KelInput.vue'
import KelCheck from './components/input/KelCheck.vue'
import KelRadio from './components/input/KelRadio.vue'
import KelSelect from './components/input/KelSelect.vue'
import SideBar from './views/layout/SideBar.vue'
import MainHeader from './views/layout/MainHeader.vue'
import MainFooter from './views/layout/MainFooter.vue'

// export default function (Vue) {
// }

Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('SideBar', SideBar)

Vue.component('KelInput', KelInput)
Vue.component('KelCheck', KelCheck)
Vue.component('KelRadio', KelRadio)
Vue.component('KelSelect', KelSelect)
