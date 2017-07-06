<template>
  <li class="treeview" @click="toggle" :class="{'menu-open': open}" ref="menuItem">
    <router-link :to="menuModel.link" v-if="menuModel.link">
      <i class="fa" :class="menuModel.icon ? menuModel.icon : 'fa-circle-o'"></i>
      <span> {{menuModel.name}}</span>
      <span class="pull-right-container" v-if="menuModel.children.length > 0">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </router-link>
    <a href="javascript:void(0)" v-else>
      <i class="fa" :class="menuModel.icon ? menuModel.icon : 'fa-circle-o'"></i>
      <span> {{menuModel.name}}</span>
      <span class="pull-right-container" v-if="menuModel.children.length > 0">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" ref="subMenu" :style="{ display: displayMenu }">
      <TreeMenu
        v-for = "model in menuModel.children"
        :menuModel = "model"
        key = "model.id"
      />
    </ul>
  </li>
</template>

<script>

export default {

  name: 'TreeMenu',

  props: {
    menuModel: {
      type: Object,
      require: true
    }
  },

  created () {
    this.open = this.sidebarModel === 'mini'
  },

  data () {
    return {
      menuHeight: 0,
      displayMenu: 'none',
      open: false
    }
  },

  methods: {
    toggle () {
      if (this.open) {
        this.open = false
        new Promise((resolve, reject) => {
          this.$refs.subMenu.style.height = '0px'
          resolve()
        }).then(() => {
          this.displayMenu = 'block'
        })
      } else {
        this.open = true
        new Promise((resolve, reject) => {
          this.displayMenu = 'block'
          this.$refs.subMenu.style.height = '0px'
          resolve()
        }).then(() => {
          this.$refs.subMenu.style.height = this.$refs.subMenu.scrollHeight + 'px'
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .menu-open .treeview-menu{

  }
  .sidebar-mini .sidebar-menu .treeview .treeview-menu{

  }
  .sidebar-menu .treeview .treeview-menu{
    overflow: hidden;
    padding: 0!important;
    -webkit-transition: all .5s ease;
       -moz-transition: all .5s ease;
        -ms-transition: all .5s ease;
         -o-transition: all .5s ease;
            transition: all .5s ease;
  }

  .sidebar-menu a>.fa-angle-left,
  .sidebar-menu a>.pull-right-container>.fa-angle-left{
    -webkit-transition: transform .5s ease;
       -moz-transition: transform .5s ease;
        -ms-transition: transform .5s ease;
         -o-transition: transform .5s ease;
            transition: transform .5s ease;
  }

  .sidebar-menu .menu-open>a>.fa-angle-left,
  .sidebar-menu .menu-open>a>.pull-right-container>.fa-angle-left{
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
