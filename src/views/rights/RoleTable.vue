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
        <tr v-for="role in roles">
          <td>{{role.name}}</td>
          <td>
            <router-link :to="{name:'CategoryEdit',params:{catid:role._id}}" class="glyphicon glyphicon-edit" title="编辑"></router-link>
            <a href="javascript:void(0)" class="glyphicon glyphicon-remove" title="删除" @click="removeRole(role._id)"></a>
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
      roles: []
    }
  },

  created () {
    this.fetchRoles()
  },

  methods: {
    fetchRoles () {
      this.$api.role.fetchAll().then((res) => {
        if (res.statusCode === 20000) {
          this.roles = res.roles
        }
      })
    },

    removeRole (id) {
      this.$api.role.removeById(id).then((res) => {
        if (res.statusCode === 20000) {
          this.fetchRoles()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
