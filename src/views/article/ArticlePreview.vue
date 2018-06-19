<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Article Preview</h3>
    </div>
    <div class="box-body">
      <h1>{{ article.title }}</h1>
      <p class="updateTime">{{ article.meta.updateAt && article.meta.updateAt.replace(/(T|Z)/g, ' ')  }}</p>
      <p></p>
      <div v-html="article.content"></div>
    </div>
    <div class="box-footer">
      <router-link v-if="article._id" class="btn btn-app" :to="{name: 'ArticleEdit', params: {artid: article._id}}">
        <i class="fa fa-edit"></i> Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

  name: 'ArticlePreview',

  data () {
    return {
      article: {
        _id: null,
        title: null,
        content: null,
        meta: {
          updateAt: null
        }
      }
    }
  },

  created () {
    this.fetchArticle()
  },

  methods: {
    fetchArticle: function () {
      this.$api.article.fetchById(this.$route.params.artid).then((res) => {
        if (res.statusCode === 20000) {
          this.article = res.article
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .updateTime{
    margin-bottom: 10px;
    font-size: 16px;
  }
</style>
