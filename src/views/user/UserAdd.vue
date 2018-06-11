<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">User Add</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "userNewName"
        type = "text"
        placeholder = "User name"
        labelText = "User name"
        v-model = "username"
        :formCls = "formCls.username"
        errorMsg = "用户名不能为空"
      />
      <KelInput
        id = "userNewPwd"
        type = "password"
        placeholder = "Password"
        labelText = "Password"
        v-model = "password"
        :formCls = "formCls.password"
        errorMsg = "密码不能为空"
      />
      <KelInput
        id = "userRetypePwd"
        type = "password"
        placeholder = "Retype password"
        labelText = "Retype password"
        v-model = "retypePassword"
        :formCls = "formCls.retypePassword"
        errorMsg = "两次密码输入结果不同"
        @input = "retypePwd"
      />
      <KelInput
        id = "userNewPhone"
        type = "tel"
        placeholder = "Phone"
        labelText = "Phone"
        v-model = "phone"
      />
      <KelInput
        id = "userNewEmail"
        type = "email"
        placeholder = "Email"
        labelText = "Email"
        v-model = "email"
      />
      <KelInput
        id = "userNewPhoto"
        type = "text"
        placeholder = "User Photo"
        labelText = "User Photo"
        v-model = "photo"
        helpText = "只支持使用图片绝对地址，http:// or https://"
      />
      <KelSelect
        v-model = "role"
        :options = "roles"
        errorMsg = "必须选择用户角色."
        :formCls = "formCls.role"
      />
    </div>
    <div class="box-footer">
      <button type="button" class="btn btn-primary" @click="insert">Submit</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'UserAdd',

  created: function () {
    this.$api.user.fetchUserData(this.$route.params.uid, (res) => {
      if (res.statusCode === 20000) {
        let userData = res.userData
        this.username = userData.username
        this.phone = userData.phone
        this.photo = userData.photo
        this.email = userData.email
      }
    })

    this.$api.role.fetchAll((res) => {
      if (res.statusCode === 20000) {
        this.roles = res.roles.map(function (role) {
          return { value: role._id, text: role.name }
        })
        this.roles.unshift({value: '1', text: '请选择用户角色'})
      }
    })
  },

  data () {
    return {
      username: '',
      phone: '',
      photo: '',
      email: '',
      password: '',
      role: '1',
      roles: [{value: '1', text: '请选择用户角色'}],
      retypePassword: '',
      formCls: {}
    }
  },

  methods: {
    insert: function () {
      this.formCls = {}
      if (!/[a-zA-Z0-9]{6,}/.test(this.username)) {
        this.$set(this.formCls, 'username', 'has-error')
        return
      }
      if (!/[a-zA-Z0-9]{6,}/.test(this.password)) {
        this.$set(this.formCls, 'password', 'has-error')
        return
      }
      if (this.password !== this.retypePassword) {
        this.$set(this.formCls, 'retypePassword', 'has-error')
        return
      }
      if (this.role === '1') {
        this.$set(this.formCls, 'role', 'has-error')
        return
      }

      this.$api.user.insertUser({
        username: this.username,
        phone: this.phone,
        photo: this.photo,
        email: this.email,
        password: this.password
      }).then((res) => {
        if (res.statusCode === 20000) {
          this.$router.push({name: 'UserTable'})
        } else {
          throw Error(res.message)
        }
      })
    },
    retypePwd: function () {
      // this.diffPwd = false
    }
  }
}
</script>

