<template>
  <li class="kel-option" @click="handleClick">
    <a href="javscript:void(0)">{{ label }}</a>
  </li>
</template>
<script>
export default {
  name: 'KelOption',

  props: {
    label: String,
    value: [String, Number]
  },

  methods: {
    handleClick () {
      this.dispatch('KelSelect', 'handleSelectOption', [this])
    }
  }
}
</script>
