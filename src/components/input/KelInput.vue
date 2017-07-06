<template>
    <div class="form-group" :class="formCls">
      <label class="control-label" for="inputError" v-if="hasErrorMsg"><i class="fa fa-times-circle-o"></i> Input with error</label>

      <label v-if="hasLabel" :for="id" :class="labelCls">{{ labelText }}</label>

      <input v-if="type == 'text'" :id="id" type="text" class="form-control" :class="inputCls" v-model="currentVal" :placeholder="placeholder" autocomplete="off" :disabled="disabled">
      <input v-else-if="type == 'tel'" :id="id" type="tel" class="form-control" :class="inputCls" v-model="currentVal" :placeholder="placeholder" autocomplete="off" :disabled="disabled">
      <input v-else-if="type == 'email'" :id="id" type="email" class="form-control" :class="inputCls" v-model="currentVal" :placeholder="placeholder" autocomplete="off" :disabled="disabled">
      <input v-else-if="type == 'password'" :id="id" type="password" class="form-control" :class="inputCls" v-model="currentVal" :placeholder="placeholder" autocomplete="off" :disabled="disabled">
      <span v-if="iconCls != ''" class="glyphicon form-control-feedback" :class="iconCls"></span>

      <span class="help-block" v-if="hasErrorMsg">{{errorMsg}}</span>
      <!-- 帮助提示 -->
      <p class="help-block" v-if="helpText">{{helpText}}</p>
    </div>
</template>

<script>
export default {
  name: 'kel-input',
  props: {
    id: String,
    value: String,
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
      }
    },
    hasLabel () {
      return this.labelText !== undefined
    },
    hasErrorMsg () {
      return this.formCls && this.formCls.indexOf('has-error') > -1
    }
  }
}
</script>
