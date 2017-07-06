<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Category Add</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "categoryAddName"
        type = "text"
        placeholder = "Category name"
        labelText = "Category name"
        v-model = "categoryName"
      />
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'CategoryAdd',

  data () {
    return {
      categoryName: null
    }
  },

  methods: {
    submit: function () {
      this.$api.category.insert({
        name: this.categoryName
      }, function (res) {
        console.log(res)
        if (res.statusCode === 20000) {

        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
