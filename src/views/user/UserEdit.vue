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
        v-model = "userData.username"
        disabled
      />
      <KelInput
        id = "userEditPhone"
        type = "tel"
        placeholder = "Phone"
        labelText = "Phone"
        v-model = "userData.phone"
      />
      <KelInput
        id = "userEditEmail"
        type = "email"
        placeholder = "Email"
        labelText = "Email"
        v-model = "userData.email"
      />
      <KelInput
        id = "userEditPhoto"
        type = "text"
        placeholder = "User Photo"
        labelText = "User Photo"
        v-model = "userData.photo"
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
        let userData = res.userData
        userData.phone = userData.phone && userData.phone.toString()
        this.userData = userData
        console.log(this.userData)

        // this.username = userData.username
        // this.phone = userData.phone.toString()
        // this.photo = userData.photo
        // this.email = userData.email
      }
    })
  },

  data () {
    return {
      userData: {
        username: '',
        phone: '',
        photo: '',
        email: ''
      }
    }
  },

  methods: {
    update: function () {
      var userData = this.userData
      this.$api.user.updateUser(this.$route.params.uid, {
        email: userData.email,
        phone: userData.phone,
        photo: userData.photo
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
