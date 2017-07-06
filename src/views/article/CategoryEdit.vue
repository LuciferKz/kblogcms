<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Category Edit</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "categoryEditName"
        type = "text"
        placeholder = "Category name"
        labelText = "Category name"
        v-model = "categoryName"
      />
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="update">Update</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'CategoryEdit',

  data () {
    return {
      categoryName: ''
    }
  },

  created () {
    this.fetchCategory()
  },

  methods: {
    fetchCategory: function () {
      this.$api.category.fetchById(this.$route.params.catid, (res) => {
        console.log(res)
        this.categoryName = res.category.name
      })
    },
    update: function () {
      this.$api.category.updateById(this.$route.params.catid, {
        name: this.categoryName
      }, (res) => {
        console.log(res)
        if (res.statusCode === 20000) {
          this.$router.push({name: 'CategoryTable'})
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
