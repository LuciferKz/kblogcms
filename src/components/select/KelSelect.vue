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
    value: [String, Number],
    placeholder: {
      type: String,
      default: ''
    }
  },

  provide () {
    return {
      select: this
    }
  },

  data () {
    return {
      visible: false,
      selected: {},
      options: []
    }
  },

  created () {
    this.$on('handleSelectOption', this.handleSelectOption)
    this.$on('setSelected', this.setSelected)
  },

  computed: {
    currentLabel () {
      return this.selected.label
    }
  },
  watch: {
    value (newVal, oldVal) {
      this.$emit('input', newVal)
      this.setSelected(newVal)
      this.dispatch('KFormItem', 'form.item.change', newVal)
    },
    options () {
      this.setSelected()
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
      if (!this.isEqualValue(option.value, this.value)) {
        this.$emit('input', option.value)
      }
      this.visible = false
    },
    setSelected () {
      const option = this.getOption(this.value)
      this.selected = option
    },
    isEqualValue (newVal, oldVal) {
      return newVal === oldVal
    },
    getOption (val) {
      return this.options.find(opt => opt.value === val) || {}
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .form-group {
    position: relative;
    .form-control[readonly] {
      background-color: #FFF;
      cursor: pointer;
    }
  }
</style>
