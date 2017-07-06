<template>
  <div ref="editor" style="width:100%;height:500px;"></div>
</template>

<script>
window.UEDITOR_HOME_URL = '@/components/plugins/ueditor/'
console.log(window.UEDITOR_HOME_URL)

import '@/plugins/ueditor/ueditor.config.js'
import '@/plugins/ueditor/ueditor.all.js'
import '@/plugins/ueditor/lang/zh-cn/zh-cn.js'
import '@/plugins/ueditor/third-party/codemirror/codemirror.js'
// import '@/plugins/ueditor/third-party/zeroclipboard/ZeroClipboard.js'

let ueditor

export default {

  name: 'UEditor',

  data () {
    return {
      id: 'ueditor'
    }
  },

  mounted () {
    this.$nextTick(function f1 () {
      this.$refs.editor.id = this.id
      this.editor = window.UE.getEditor(this.id, this.config)

      this.editor.ready(function f2 () {
        this.editor.setContent(this.value)

        this.editor.addListener('contentChange', function () {
          const wordCount = this.editor.getContentLength(true)
          const content = this.editor.getContent()
          const plainTxt = this.editor.getPlainTxt()
          this.$emit('input', { wordCount: wordCount, content: content, plainTxt: plainTxt })
        }.bind(this))

        this.$emit('ready', this.editor)
      }.bind(this))
    })
  },

  methods: {
    getContent: function () {
      console.log(ueditor.getContent())
    }
  }
}
</script>

<style lang="css" scoped>

@import '../../plugins/ueditor/themes/iframe.css';
@import '../../plugins/ueditor/themes/default/css/ueditor.css';
@import '../../plugins/ueditor/third-party/codemirror/codemirror.css';

</style>
