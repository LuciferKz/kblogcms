<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">{{boxTitle}}</h3>
    </div>
    <div class="box-body">
      <table class="table table-bordered table-hover">
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
      <pagination :limit="filter.limit" :skip="filter.skip" :total="total" @change="handleSkip"></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/table/Pagination'

export default {

  name: 'ArticleTable',

  components: { Pagination },

  created () {
    this.fetchArticles()
  },

  mounted () {
  },

  data () {
    return {
      boxTitle: 'Article table',
      articles: [],
      filter: {
        limit: 10,
        skip: 0
      },
      total: 0
    }
  },

  methods: {
    fetchArticles () {
      this.$api.article.fetch(this.filter).then((res) => {
        if (res.statusCode === 20000) {
          this.articles = res.articles
          this.total = res.total
        }
      })
    },

    removeArticle (id) {
      this.$api.article.removeById(id).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchArticles()
        }
      })
    },

    toggleArticle (article) {
      this.$api.article.updateById(article._id, {
        state: 1 ^ article.state
      }).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchArticles()
        }
      })
    },
    handleSkip (page) {
      this.filter.skip = (page - 1) * this.filter.limit
      this.fetchArticles()
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
  table {
    /* min-height: 500px */
  }
</style>
