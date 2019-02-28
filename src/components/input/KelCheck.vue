<template>
  <div class="checkbox-group">
    <div class="checkbox icheck kel-check" v-for='chk in data'>
      <label class="label-check" :class="skin">
        <input type="checkbox" class="input-checkbox" :value="chk.value" v-model="currentValues"><i></i>
        <span v-html="chk.text"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {

  name: 'KelCheck',
  componentName: 'KelCheck',

  props: {
    data: {
      type: Array,
      default: ''
    },
    skin: {
      type: String,
      default: 'icheck-square-blue'
    },
    value: {
      type: Array,
      default: []
    }
  },

  data () {
    return {

    }
  },

  computed: {
    currentValues: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="css" scoped>
  @import '../assets/css/blue.css';

  .kel-check{
    overflow: hidden;
    height: 22px;
  }
  .kel-check .label-check{
    display:inline-block;
    padding-left: 30px;
  }
  .kel-check input{
    opacity: 0;
  }
  .kel-check i{
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 22px;
      height: 22px;
      border: none;
      cursor: pointer;
  }
</style>
