<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Role {{ action }}</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "roleName"
        placeholder = "Role name"
        labelText = "Role name"
        v-model = "model.name"
      />
      <KelInput
        id = "roleKeys"
        placeholder = "Role keys"
        labelText = "Role keys"
        v-model = "model.keys"
      />
      <KelInput
        id = "roleLevel"
        placeholder = "Role level"
        labelText = "Role level"
        v-model = "model.level"
      />
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'RoleEdit',

  data () {
    return {
      roleId: null,
      model: {
        name: null,
        keys: null,
        level: null
      }
    }
  },
  methods: {
    submit () {
      this.$api.role.insert(this.model).then(function (res) {
        console.log(res)
      })
    }
  },
  computed: {
    action () {
      return this.roleId ? 'Edit' : 'Add'
    }
  },
  mounted () {
    const roleId = this.roleId = this.$route.params.roleid
    console.log(roleId)
    if (roleId) {
      this.$api.role.fetchById(roleId).then(res => {
        Object.assign(this.model, res.role)
      })
    } else {
      this.model = {
        name: null,
        keys: null,
        level: null
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
