<template>
  <div class="checkbox-group">
    <div class="checkbox iradio kel-radio" v-for='chk in data'>
      <label class="label-radio" :class="skin">
        <input type="radio" :value="chk.value" v-model="currentValue"><i></i>
        <span v-html="chk.text"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {

  name: 'KelRadio',
  componentName: 'KelRadio',

  props: {
    data: {
      type: Array,
      default: ''
    },
    skin: {
      type: String,
      default: 'iradio-square-blue'
    },
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {

    }
  },

  computed: {
    currentValue: {
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

  .kel-radio{
    overflow: hidden;
    height: 22px;
  }
  .kel-radio .label-radio{
    display:inline-block;
    padding-left: 30px;
  }
  .kel-radio input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .kel-radio i{
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
