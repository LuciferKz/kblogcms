<template>
  <form>
      <textarea name="editor1" id="editor1" rows="10" cols="80">
        This is my textarea to be replaced with CKEditor.
      </textarea>
  </form>
</template>

<script>
import 'ckeditor'

export default {

  name: 'CKEditor',

  mounted () {
    this.$nextTick(function () {
      window.CKEDITOR.replace('editor1')
    })
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
