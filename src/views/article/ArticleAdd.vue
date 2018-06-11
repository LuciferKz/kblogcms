<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Article Add</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "articleAddTitle"
        type = "text"
        placeholder = "Article title"
        labelText = "Article title"
        v-model = "articleTitle"
      />
      <KelSelect
        v-model = "articleType"
        :options = "categories"
        :formCls = "categoryCls"
        errorMsg = "必须选择一种文章类别."
      />
      <div class="form-group">
        <label>Article Title</label>
        <VueEditor v-model="articleContent" />
      </div>
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {

  name: 'ArticleAdd',

  data () {
    return {
      articleTitle: null,
      articleContent: null,
      articleType: 'default',
      categoryCls: '',
      categories: [{value: '1', text: '请选择文章类别'}]
    }
  },

  created () {
    this.fetchCategories()
  },

  methods: {
    fetchCategories: function () {
      this.$api.category.fetchAll().then((res) => {
        let _categories = [{value: 'default', text: '请选择文章类别'}]
        for (var i = 0, len = res.categories.length; i < len; i++) {
          _categories.push({
            value: res.categories[i]._id,
            text: res.categories[i].name
          })
        }
        this.categories = _categories
      })
    },
    submit: function () {
      if (this.articleType === 'default') {
        this.categoryCls = 'has-error'
        return true
      }

      this.$api.article.insert({
        title: this.articleTitle,
        content: this.articleContent,
        author: this.$store.state.auth.userInfo.username,
        categoryId: this.articleType
      }).then((res) => {
        console.log(res)
        if (res.statusCode === 20000) {
          this.$router.push({name: 'ArticleTable'})
        }
      })
    }
  },

  watch: {
    articleType: function () {
      this.categoryCls = ''
    }
  },

  components: { VueEditor }
}
</script>

<style lang="css" scoped>
</style>
