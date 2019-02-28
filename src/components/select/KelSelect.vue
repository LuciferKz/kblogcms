<template>
  <div class="form-group" :class="{ 'open': visible }">
    <input 
      type="text"
      class="form-control form-control--readonly"
      :placeholder="placeholder"
      :value="currentLabel"
      @input='handleInput'
      @focus='handleFocus'
      @click.stop='handleClick'
      readonly='true'>
    <ul class="kel-select dropdown-menu">
      <slot v-show="visible"></slot>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'KelSelect',
  componentName: 'KelSelect',

  props: {
    value: String,
    placeholder: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      visible: false,
      selected: {}
    }
  },

  created () {
    this.$on('handleSelectOption', this.handleSelectOption)
  },

  computed: {
    currentVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
        this.dispatch('KFormItem', 'form.item.change', val)
      }
    },
    currentLabel () {
      return this.selected.label
    }
  },
  methods: {
    toggleMenu () {
      this.visible = !this.visible
    },
    handleInput () {},
    handleClick () {
      this.toggleMenu()
    },
    handleFocus () {},
    handleSelectOption (option) {
      this.selected = option
      if (!this.isEqualValue(option.value, this.currentVal)) {
        this.currentVal = option.value
      }
      this.visible = false
    },
    isEqualValue (newVal, oldVal) {
      return newVal === oldVal
    }
  },
  mounted () {
  }
}
</script>

<style lang="css" scoped>
  .form-control[readonly] {
    background-color: #FFF;
    cursor: pointer;
  }
</style>
