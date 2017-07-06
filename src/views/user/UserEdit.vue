<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">User Edit</h3>
    </div>
    <div class="box-body">
      <KelInput
        id = "userEditName"
        type = "text"
        placeholder = "User name"
        labelText = "User name"
        v-model = "username"
        disabled
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
      <button type="button" class="btn btn-primary" @click="update">Update</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'UserEdit',

  created: function () {
    this.$api.user.fetchUserData(this.$route.params.uid, (res) => {
      if (res.statusCode === 20000) {
        console.log(res.userData)
        let userData = res.userData
        this.username = userData.username
        this.phone = userData.phone.toString()
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
      email: ''
    }
  },

  methods: {
    update: function () {
      this.$api.user.updateUser(this.$route.params.uid, {
        email: this.email,
        phone: this.phone,
        photo: this.photo
      }, (res) => {
        let userData = res.userData
        if (this.$route.params.uid === this.$store.state.auth.userInfo.id) {
          this.$store.commit('ADD_USER_DATA', userData)
        }
        this.$router.push({name: 'UserTable'})
      })
    }
  }
}
</script>
