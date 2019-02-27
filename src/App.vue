<template>
    <router-view></router-view>
</template>


<script>
export default {
  name: 'app',
  created: function () {
    let uid = localStorage.uid || sessionStorage.uid
    if (uid) {
      this.$api.user.auth(uid).then((res) => {
        if (res.statusCode === 10004) {
          this.$store.commit('CLEAR_USER_DATA')
          this.$router.push({ name: 'Login' })
        } else {
          this.$store.commit('ADD_USER_DATA', res.userData)
        }
        return res
      })
    }
  }
}
</script>

<style lang="less">
@import "./assets/less/AdminLTE-without-plugins.less";
@import "./assets/less/skins/_all-skins.less";
</style>

<style>
@import "./assets/css/normalize.css";
@import "./bootstrap/css/bootstrap.min.css";
@import "./bootstrap/css/bootstrap-theme.min.css";

/*
@import "./assets/css/AdminLTE.min.css";
@import "./assets/css/skins/_all-skins.min.css";
@import "./assets/css/font-awesome.min.css" */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
