<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">{{boxTitle}}</h3>
    </div>
    <div class="box-body">
      <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <td>{{category.name}}</td>
          <td>
            <router-link :to="{name:'CategoryEdit',params:{catid:category._id}}" class="glyphicon glyphicon-edit" title="编辑"></router-link>
            <a href="javascript:void(0)" class="glyphicon glyphicon-remove" title="删除" @click="removeCategory(category._id)"></a>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>Name</th>
          <th>Handle</th>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  name: 'CategoryTable',

  data () {
    return {
      boxTitle: 'Category table',
      categories: []
    }
  },

  created () {
    this.fetchCategories()
  },

  methods: {
    fetchCategories () {
      this.$api.category.fetchAll().then((res) => {
        console.log(1)
        if (res.statusCode === 20000) {
          this.categories = res.categories
        }
      })
    },

    removeCategory (id) {
      this.$api.category.removeById(id).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchCategories()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
