<template>
  <div class="wrapper" :class="[sidebarCls]">
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
    <k-modal ref="kmodal"></k-modal>
  </div>
</template>

<script>
import ContentHeader from '@/components/adminLte/ContentHeader'

export default {
  name: 'Index',
  data () {
    return {
      skinCls: 'skin-blue',
      pagePaths: []
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
