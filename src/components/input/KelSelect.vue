<template>
  <div class="form-group" :class="formCls">
    <label>Select</label>
    <select class="form-control" v-model="selectedValue">
      <option :value="option.value" v-for="option in options">{{option.text}}</option>
    </select>

    <span class="help-block" v-if="hasErrorMsg">{{errorMsg}}</span>
  </div>
</template>

<script>
export default {

  name: 'KelSelect',

  props: {
    value: String,
    options: Array,
    formCls: String,
    errorMsg: String
  },

  data () {
    return {
    }
  },

  created () {
    console.log(this.value, this.options)
  },

  computed: {
    selectedValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    hasErrorMsg () {
      return this.formCls && this.formCls.indexOf('has-error') > -1
    }
  }
}
</script>

<style lang="css" scoped>
</style>
