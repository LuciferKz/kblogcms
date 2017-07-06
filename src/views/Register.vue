<template>
  <div class="register-page">
    <div class="register-box">
      <div class="login-logo">
          <b>KimZhang's </b>BLOG
      </div>
      <div class="register-box-body">
        <p class="login-box-msg">Register a new membership</p>
        <form action="../../index.html" method="post">
          <KelInput
              type = "text"
              placeholder = "Username"
              v-model = "formData.username"
              iconCls = "glyphicon-user"
          />
          <KelInput
              type = "password"
              placeholder = "Password"
              v-model = "formData.password"
              iconCls = "glyphicon-lock"
          />
          <KelInput
              type = "password"
              placeholder = "Retype password"
              v-model = "formData.retypePassword"
              iconCls = "glyphicon-log-in"
          />
          <div class="row">
            <div class="col-xs-8">
            </div>
            <div class="col-xs-4">
              <button type="button" @click="register" class="btn btn-primary btn-block btn-flat">Register</button>
            </div>
          </div>
        </form>
        <router-link :to="{name:'Login'}" class="text-center">I already have a membership</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Register',

  data () {
    return {
      formData: {
        username: '',
        password: '',
        retypePassword: ''
      }
    }
  },
  computed: {
  },
  methods: {
    register: function () {
      this.$api.user.register(this.formData.username, this.formData.password, (res) => {
        this.$router.push({name: 'Login'})
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .register-page{
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
  }
</style>
