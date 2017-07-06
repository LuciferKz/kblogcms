<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">User Add</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "userEditName"
        type = "text"
        placeholder = "User name"
        labelText = "User name"
        v-model = "username"
      />
      <KelInput
        id = "userEditName"
        type = "password"
        placeholder = "Password"
        labelText = "Password"
        v-model = "password"
      />
      <KelInput
        id = "userEditName"
        type = "password"
        placeholder = "Retype password"
        labelText = "Retype password"
        v-model = "retypePassword"
        :formCls = "diffPwd?'has-error':''"
        errorMsg = "两次密码输入结果不同"
        @input = "retypePwd"
      />
      <KelInput
        id = "userEditPhone"
        type = "tel"
        placeholder = "Phone"
        labelText = "Phone"
        v-model = "phone"
      />
      <KelInput
        id = "userEditEmail"
        type = "email"
        placeholder = "Email"
        labelText = "Email"
        v-model = "email"
      />
      <KelInput
        id = "userEditPhoto"
        type = "text"
        placeholder = "User Photo"
        labelText = "User Photo"
        v-model = "photo"
        helpText = "只支持使用图片绝对地址，http:// or https://"
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
  },

  data () {
    return {
      username: '',
      phone: '',
      photo: '',
      email: '',
      password: '',
      retypePassword: '',
      diffPwd: false
    }
  },

  methods: {
    insert: function () {
      if (this.password !== this.retypePassword) {
        this.diffPwd = true
        return true
      } else {
        this.diffPwd = false
      }

      this.$api.user.insertUser({
        username: this.username,
        phone: this.phone,
        photo: this.photo,
        email: this.email,
        password: this.password
      }, (res) => {
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

