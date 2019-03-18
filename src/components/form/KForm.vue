<template>
  <section class="k-form">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'KForm',
  componentName: 'KForm',
  props: {
    rules: {
      type: Object,
      default: {}
    },
    model: {
      type: Object,
      default: {}
    }
  },

  data () {
    return {
      fields: []
    }
  },

  provide () {
    return {
      form: this
    }
  },

  methods: {
    validate (callback) {
      if (!this.fields.length) return
      let validPromise
      if (typeof callback !== 'function' && window.Promise) {
        validPromise = new Promise((resolve, reject) => {
          callback = function (message) {
            !message ? resolve(true) : reject(message)
          }
        })
      }
      let invalidFields = {}
      let count = 0
      this.fields.forEach(field => {
        field.validate((message, fields) => {
          invalidFields = Object.assign({}, invalidFields, fields)
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(message, invalidFields)
          }
        })
      })
      // console.log(validPromise)
      if (validPromise) return validPromise
    }
  },
  created () {
    this.$on('form.addField', (field) => {
      if (field) this.fields.push(field)
    })
  },
  mounted () {
  }
}
</script>
