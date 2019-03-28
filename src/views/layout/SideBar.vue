<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~@/assets/img/user2-160x160.jpg" v-bind:data-src="userInfo.photo" v-checkimg class="img-circle" alt="User Image">
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
          v-for = "(model, index) in sidebarMenu"
          :menuModel = "model"
          :key = "index"
        />
        <li><a href="https://adminlte.io/themes/AdminLTE/documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
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
        },
        {
          name: 'Rights',
          icon: 'fa-user-secret',
          children: [
            {
              name: 'Role Table',
              link: { name: 'RoleTable' },
              children: []
            },
            {
              name: 'Role Add',
              link: { name: 'RoleAdd' },
              children: []
            },
            {
              name: 'Rights',
              link: { name: 'Rights' },
              children: []
            }
          ]
        }
      ]
    }
  },

  computed: {
    userInfo () {
      console.log(this.$store.state.auth.userInfo)
      return this.$store.state.auth.userInfo
    }
  },

  components: {
    TreeMenu
  }
}
</script>
