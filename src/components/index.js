import Vue from 'vue'
import KForm from './form/KForm.vue'
import KFormItem from './form/KFormItem.vue'
import KelInput from './input/KelInput.vue'
import KelCheck from './input/KelCheck.vue'
import KelRadio from './input/KelRadio.vue'
import KelSelect from './select/KelSelect.vue'
import KelOption from './select/KelOption.vue'
// import KTree from './tree/src/tree'

const components = [
  // k element
  KForm,
  KFormItem,
  KelInput,
  KelRadio,
  KelCheck,
  KelSelect,
  KelOption
  // KTree
]

components.forEach(component => {
  Vue.component(component.name, component)
})
