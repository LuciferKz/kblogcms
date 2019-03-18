<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Article Edit</h3>
    </div>
    <div class="box-body">
      <k-form ref="form" :model="model" :rules="rules">
        <k-form-item prop="title" label="Article title">
          <kel-input placeholder = "Article title" v-model = "model.title"></kel-input>
        </k-form-item>
        <k-form-item prop="author" label="Article author">
          <kel-input placeholder = "Article author" v-model = "model.author" disabled></kel-input>
        </k-form-item>
        <k-form-item prop="categoryId" label="Article category">
          <kel-select v-model="model.categoryId">
            <kel-option v-for="category in categories" :key="category._id" :label="category.name" :value="category._id"></kel-option>
          </kel-select>
        </k-form-item>
      </k-form>
      <div class="form-group">
        <label>文章内容</label>
        <VueEditor v-model="model.content" />
      </div>
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="handleSave">Update</button>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {

  name: 'ArticleEdit',

  components: { VueEditor },

  data () {
    return {
      artid: null,
      model: {
        title: null,
        content: null,
        author: null,
        categoryId: null
      },
      categories: [],
      rules: {
        title: [{
          required: true,
          message: '文章标题不能为空'
        }],
        categoryId: [{
          required: true,
          message: '请选择所属文章类别'
        }]
      }
    }
  },

  created () {
    this.artid = this.$route.params.artid
    if (this.artid) {
      this.fetchArticle()
    }
    this.fetchCategories()
  },

  methods: {
    fetchCategories: function () {
      this.$api.category.fetchAll().then((res) => {
        this.categories = res.categories
      })
    },

    fetchArticle: function () {
      this.$api.article.fetchById(this.artid).then((res) => {
        this.model = res.article
      })
    },

    handleSave: function () {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          this.model.author = this.$store.state.auth.userInfo.username
          let request = this.artid ? this.$api.article.updateById(this.artid, this.model) : this.$api.article.insert(this.model)
          request.then((res) => {
            if (res.statusCode === 20000) {
              this.$router.push({name: 'ArticlePreview', params: { artid: this.artid }})
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
