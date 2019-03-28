<template>
  <div class="wrapper" :class="[sidebarCls]">
    <side-bar></side-bar>
    <main-header></main-header>
    <!-- <router-view></router-view> -->
  <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>{{title}}<small>{{desc}}</small></h1>
        <ol class="breadcrumb">
          <li v-for="(name, index) in crumbs" :class="{'active': index === crumbs.length - 1}" :key="index">{{ name }}</li>
        </ol>
      </section>
      <!-- Main content -->
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <main-footer></main-footer>
    <k-modal ref="kmodal"></k-modal>
  </div>
</template>

<script>
import SideBar from '@/views/layout/sidebar/index'
import MainHeader from '@/views/layout/MainHeader'
import MainFooter from '@/views/layout/MainFooter'

export default {
  name: 'Index',
  components: { MainHeader, MainFooter, SideBar },
  data () {
    return {
      crumbs: [],
      skinCls: 'skin-blue',
      title: 'KBLOG',
      desc: 'Content management system'
    }
  },
  created () {
  },
  mounted () {
    this.$kmodal.init(this.$refs.kmodal)
  },
  computed: {
    sidebarCls () {
      return this.$store.getters.sidebarCls
    }
  },
  beforeRouteEnter: function (to, from, next) {
    next(vm => {
      vm.crumbs = ['Home']
      vm.crumbs.push(to.name)
    })
  },
  beforeRouteUpdate: function (to, from, next) {
    this.crumbs = ['Home']
    this.crumbs.push(to.name)
    next()
  }
}
</script>
