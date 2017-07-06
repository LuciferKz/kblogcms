<template>
  <div class="wrapper" :class="[skinCls, sidebarCls]">
    <side-bar></side-bar>
    <main-header></main-header>
    <!-- <router-view></router-view> -->
  <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <ContentHeader
        :paths = "pagePaths"
      />
      <!-- Main content -->
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import ContentHeader from '@/components/adminLte/ContentHeader'

export default {
  name: 'Index',
  created: function () {
    this.fetchUserData()
  },
  data () {
    return {
      skinCls: 'skin-blue',
      pagePaths: []
    }
  },
  computed: {
    sidebarCls () {
      return this.$store.getters.sidebarCls
    }
  },
  methods: {
    fetchUserData: function () {
      let uid = localStorage.uid || sessionStorage.uid

      this.$api.user.fetchUserData(uid, (res) => {
        let userData = res.userData
        this.$store.commit('ADD_USER_DATA', userData)
      })
    }
  },
  components: { ContentHeader },
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      vm.pagePaths = ['Home']
      vm.pagePaths.push(to.name)
    })
  },
  beforeRouteUpdate: function (to, from, next) {
    this.pagePaths = ['Home']
    this.pagePaths.push(to.name)
    next()
  }
}
</script>

<style lang="css" scoped>
  .wrapper{
    height: auto;
    min-height: 100%;
  }
</style>
