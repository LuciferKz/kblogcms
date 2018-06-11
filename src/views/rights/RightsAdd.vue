<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Category Add</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "roleName"
        type = "text"
        placeholder = "Role name"
        labelText = "Role name"
        v-model = "model.name"
      />
      <KelInput
        id = "roleLevel"
        type = "text"
        placeholder = "Role level"
        labelText = "Role level"
        v-model = "model.level"
      />
      <KelInput
        id = "roleLevelName"
        type = "text"
        placeholder = "Role level name"
        labelText = "Role level name"
        v-model = "model.levelName"
      />
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RoleAdd',

  data () {
    return {
      model: {
        name: null,
        level: null,
        levelName: null
      }
    }
  },

  methods: {
    submit: function () {
      this.$api.role.insert(this.model).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
