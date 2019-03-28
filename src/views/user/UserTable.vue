<template>
  <div class="box">
    <div class="box-header">
      <h3 class="box-title">{{boxTitle}}</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table id="example2" class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>User name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Create date</th>
          <th>Update date</th>
          <th>Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user._id">
          <td>{{user.username}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td>{{user.createAt.split('T')[0]}}</td>
          <td>{{user.updateAt.split('T')[0]}}</td>
          <td>
            <router-link :to="{name:'UserEdit',params:{uid:user._id}}" class="glyphicon glyphicon-edit" title="编辑"></router-link>
            <a href="javascript:void(0)" class="glyphicon glyphicon-remove" title="删除" @click="remove(user._id)"></a>
            <!-- <a href="javascript:void(0)" class="glyphicon glyphicon-qrcode" title="个人二维码"></a> -->
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>User name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Create date</th>
          <th>Update date</th>
          <th>Handle</th>
        </tr>
        </tfoot>
      </table>
    </div>
    <!-- /.box-body -->
  </div>
</template>

<script>
export default {

  name: 'UserTable',

  created: function () {
    this.fetchUsers()
  },

  data () {
    return {
      boxTitle: 'User Table',
      users: []
    }
  },

  mounted () {
  },

  methods: {
    fetchUsers: function () {
      this.$api.user.fetchUsers().then((res) => {
        if (res.statusCode === 20000) {
          this.users = res.users
        }
      })
    },
    remove: function (id) {
      this.$api.user.removeUser(id).then((res) => {
        this.fetchUsers()
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .glyphicon-trash{
    border: none;
    background: transparent;
    color: #3c8dbc;
  }
</style>
