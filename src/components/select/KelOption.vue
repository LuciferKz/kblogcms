<template>
  <li class="kel-option" @click.stop="handleClick">
    <a href="javscript:void(0)">{{ currentLabel }}</a>
  </li>
</template>
<script>
import emiiter from '@/mixins/emiiter'

export default {
  name: 'KelOption',

  mixins: [emiiter],

  props: {
    label: String,
    value: [String, Number]
  },

  inject: ['select'],
  computed: {
    currentLabel () {
      return this.label ? this.label : this.value
    }
  },
  watch: {
    currentLabel () {
      console.log(this)
      if (!this.created) this.dispatch('ElSelect', 'setSelected')
    }
  },
  methods: {
    handleClick () {
      this.dispatch('KelSelect', 'handleSelectOption', [this])
    }
  },

  mounted () {
    this.select.options.push(this)
  }
}
</script>
