<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Article Edit</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "articleEditTitle"
        type = "text"
        placeholder = "Article title"
        labelText = "Article title"
        v-model = "articleTitle"
      />
      <KelInput
        id = "articleEditAuhthor"
        type = "text"
        placeholder = "Article author"
        labelText = "Article author"
        v-model = "articleAuthor"
        disabled
      />
      <KelSelect
        v-model = "articleType"
        :options = "categories"
        :formCls = "categoryCls"
        errorMsg = "必须选择一种文章类别."
      />
      <div class="form-group">
        <label>文章内容</label>
        <VueEditor v-model="articleContent" />
      </div>
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="update">Update</button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {

  name: 'ArticleEdit',

  data () {
    return {
      articleTitle: null,
      articleContent: null,
      articleAuthor: null,
      articleType: 'default',
      categoryCls: '',
      categories: [{value: '1', text: '请选择文章类别'}]
    }
  },

  created () {
    this.fetchCategories()
    this.fetchArticle()
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

    fetchArticle: function () {
      this.$api.article.fetchById(this.$route.params.artid).then((res) => {
        this.articleTitle = res.article.title
        this.articleContent = res.article.content
        this.articleAuthor = res.article.author
        this.articleType = res.article.categoryId
      })
    },

    update: function () {
      if (this.articleType === 'default') {
        this.categoryCls = 'has-error'
        return true
      }
      this.$api.article.updateById(this.$route.params.artid, {
        title: this.articleTitle,
        content: this.articleContent,
        author: this.$store.state.auth.userInfo.username,
        categoryId: this.articleType
      }).then((res) => {
        if (res.statusCode === 20000) {
          this.$router.push({name: 'ArticlePreview', params: {artid: this.$route.params.artid}})
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
