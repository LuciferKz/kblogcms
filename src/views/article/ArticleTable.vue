<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">{{boxTitle}}</h3>
    </div>
    <div class="box-body">
      <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Create date</th>
          <th>Update date</th>
          <th>Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="article in articles" :key="article._id">
          <td><router-link :to="{name: 'ArticlePreview', params: {artid: article._id}}">{{article.title}}</router-link></td>
          <td>{{article.author}}</td>
          <td>{{article.meta.createAt | formatDate }}</td>
          <td>{{article.meta.updateAt | formatDate }}</td>
          <td>
            <router-link :to="{name:'ArticleEdit',params:{artid:article._id}}" class="glyphicon glyphicon-edit" title="编辑"></router-link>
            <a href="javascript:void(0)" class="glyphicon glyphicon-remove" title="删除" @click="removeArticle(article._id)"></a>
            <a href="javascript:void(0)" class="glyphicon" :class="articleClass(article.state)" :title="articleState(article.state)" @click="toggleArticle(article)"></a>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Create date</th>
          <th>Update date</th>
          <th>Handle</th>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  name: 'ArticleTable',

  created () {
    this.fetchArticles()
  },

  mounted () {
  },

  data () {
    return {
      boxTitle: 'Article table',
      articles: []
    }
  },

  methods: {
    fetchArticles: function () {
      this.$api.article.fetchAll().then((res) => {
        if (res.statusCode === 20000) {
          this.articles = res.articles
        }
      })
    },

    removeArticle: function (id) {
      this.$api.article.removeById(id).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchArticles()
        }
      })
    },

    toggleArticle: function (article) {
      this.$api.article.updateById(article._id, {
        state: 1 ^ article.state
      }).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchArticles()
        }
      })
    }

  },
  computed: {
    articleClass () {
      return function (state) {
        return `glyphicon-${(state ? 'pause' : 'play')}`
      }
    },

    articleState () {
      return function (state) {
        return state ? '停用' : '启用'
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
