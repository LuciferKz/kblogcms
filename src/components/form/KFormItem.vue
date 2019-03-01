<template>
  <div class="k-form-item" :class="[{ 
    'has-error': validateState === 'error' 
  }]">
    <label class="k-form-item__label" v-if="label">{{ label }}</label>
    <slot></slot>
    <span v-if="icon" class="glyphicon form-control-feedback" :class="icon"></span>
    <!-- 错误提示 -->
    <div class="k-form-item__error--tip help-block" v-if="validateMessage">{{ validateMessage }}</div>
    <!-- 帮助提示 -->
    <div class="k-form-item__help--tip help-block" v-if="tip">{{tip}}</div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
const noop = function () {}

export default {
  name: 'KFormItem',
  componentName: 'KFormItem',

  props: {
    prop: String,
    label: String,
    tip: String,
    icon: String
  },

  data () {
    return {
      validateState: '',
      validateMessage: ''
    }
  },

  inject: ['form'],

  methods: {
    handleChange (value) {
      this.validate()
    },
    validate (callback = noop) {
      if (this.rules && this.rules.length > 0) {
        const descriptor = {}
        descriptor[this.prop] = this.rules
        const validate = new AsyncValidator(descriptor)
        const model = {}
        model[this.prop] = this.fieldValue
        // console.log(model)
        validate.validate(model, { firstFileds: true }, (error, fields) => {
          this.validateState = !error ? 'success' : 'error'
          this.validateMessage = error ? error[0].message : ''
          callback(this.validateMessage, fields)
        })
      } else {
        callback()
      }
    }
  },
  created () {
    this.$on('form.item.change', this.handleChange)
  },
  mounted () {
    this.dispatch('KForm', 'form.addField', [this])
  },
  computed: {
    rules () {
      return this.form.rules[this.prop]
    },
    fieldValue () {
      return this.form.model[this.prop]
    }
  }
}
</script>
<style lang="less">
  .k-form-item {
    position: relative;
  }
</style>
