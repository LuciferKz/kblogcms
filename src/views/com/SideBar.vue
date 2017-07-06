<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="userInfo.photo" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{userInfo.username}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
          </span>
        </div>
      </form>
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
        <TreeMenu
          v-for = "model in sidebarMenu"
          :menuModel = "model"
          key = "model.id"
        />
        <li><a href="https://adminlte.io/themes/AdminLTE/documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
      </ul>
    </section>
  </aside>
</template>

<script>
import TreeMenu from '@/components/adminLte/layout/TreeMenu'

export default {

  name: 'SideBar',

  data () {
    return {
      sidebarMenu: [
        {
          name: 'User',
          icon: 'fa-user',
          children: [
            {
              name: 'User Table',
              link: { name: 'UserTable' },
              children: []
            },
            {
              name: 'User Add',
              link: { name: 'UserAdd' },
              children: []
            }
          ]
        },
        {
          name: 'Article',
          icon: 'fa-sticky-note',
          children: [
            {
              name: 'Article Table',
              link: { name: 'ArticleTable' },
              children: []
            },
            {
              name: 'Article Add',
              link: { name: 'ArticleAdd' },
              children: []
            },
            {
              name: 'Category Table',
              link: { name: 'CategoryTable' },
              children: []
            },
            {
              name: 'Category Add',
              link: { name: 'CategoryAdd' },
              children: []
            }
          ]
        }
      ]
    }
  },

  computed: {
    userInfo () {
      return this.$store.state.auth.userInfo
    }
  },

  components: {
    TreeMenu
  }
}
</script>
