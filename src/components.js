import Vue from 'vue'
import KForm from './components/form/KForm.vue'
import KFormItem from './components/form/KFormItem.vue'
import KelInput from './components/input/KelInput.vue'
import KelCheck from './components/input/KelCheck.vue'
import KelRadio from './components/input/KelRadio.vue'
import KelSelect from './components/select/KelSelect.vue'
import KelOption from './components/select/KelOption.vue'
import SideBar from './views/layout/SideBar.vue'
import MainHeader from './views/layout/MainHeader.vue'
import MainFooter from './views/layout/MainFooter.vue'

const components = [
  MainHeader,
  MainFooter,
  SideBar,

  // k element
  KForm,
  KFormItem,
  KelInput,
  KelRadio,
  KelCheck,
  KelSelect,
  KelOption
]

components.forEach(component => {
  Vue.component(component.name, component)
})
