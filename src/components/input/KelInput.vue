<template>
    <div class="kel-input form-group">
      <input 
        :id="id"
        :type="type"
        class="form-control"
        :class="inputCls"
        v-model="currentVal"
        :placeholder="placeholder"
        autocomplete="off"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange">
    </div>
</template>

<script>
export default {
  name: 'KelInput',
  componentName: 'KelInput',
  props: {
    id: String,
    value: [String, Number],
    inputCls: String,
    formCls: String,
    iconCls: String,
    labelText: String,
    labelCls: String,
    helpText: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入...'
    },
    errorMsg: {
      type: String,
      default: '输入内容错误.'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    currentVal: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('input', val)
        this.dispatch('KFormItem', 'form.item.change', val)
      }
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    }
  }
}
</script>
