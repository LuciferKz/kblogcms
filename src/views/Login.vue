<template>
<div class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <b>KimZhang's </b>BLOG
        </div>
        <div class="login-box-body">
            <KelInput
                type = "text"
                placeholder = "username"
                v-model = "formData.username"
                :formCls = "formIptCls.username"
                errorMsg = "用户名不存在"
                iconCls = "glyphicon-user"
            />
            <KelInput
                type = "password"
                placeholder = "Password"
                v-model = "formData.password"
                :formCls = "formIptCls.password"
                errorMsg = "密码错误"
                iconCls = "glyphicon-lock"
            />
            <div class="row">
                <div class="col-xs-8">
                    <KelCheck
                        :data = 'checkboxs'
                        v-model = "rememberMeOrNot"
                    />
                </div>
                <div class="col-xs-4">
                    <button type="button" @click="login" class="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
            </div>
            <!-- <a href="#">I forgot my password</a><br> -->
            <router-link :to="{name:'Register'}" class="text-center">Register a new membership</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      checkboxs: [{ value: 'Y', text: 'Remember Me' }],
      rememberMeOrNot: [],
      formIptCls: {
        username: 'has-feedback',
        password: 'has-feedback'
      }
    }
  },
  methods: {
    reset: function () {
      this.formIptCls = {
        username: 'has-feedback',
        password: 'has-feedback'
      }
    },
    login: function () {
      this.reset()
      this.$api.user.login(this.formData).then((res) => {
        console.log(res)
        if (res.statusCode === 20000) {
          let userData = res.userData
          userData.remember = this.rememberMeOrNot[0]
          this.$store.commit('ADD_USER_DATA', userData)
          console.log(this.$store.state.auth.userInfo)
          this.$router.push({'name': 'Index'})
        } else if (res.statusCode === 10001) {
          this.formIptCls.username = 'has-feedback has-error'
        } else if (res.statusCode === 10002) {
          this.formIptCls.password = 'has-feedback has-error'
        }
      })
    }
  }
}
</script>

<style lang="css">
  .login-page{
    border: 1px solid transparent;
    width: 100%;
    height: 100%;
  }
</style>
