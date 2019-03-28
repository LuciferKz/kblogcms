<template>
  <li>
    <ul class="treeview-menu" ref="subMenu">
      <k-tree-item v-for="item in model" :model="item.children" :key="item.id"></k-tree-item>
    </ul>
  </li>
</template>

<script>

export default {

  name: 'k-tree-item',

  props: {
    model: {
      type: [Object, Array],
      default: []
    }
  },

  created () {
    this.sidebarModel === 'mini'
  },

  data () {
    return {
      menuHeight: 0,
      displayMenu: 'none',
      open: false
    }
  },

  mounted () {
    this.menuHeight = this.$refs.subMenu.scrollHeight + 'px'
  },

  methods: {
    toggle () {
      this.open = !this.open
      this.$refs.subMenu.style.height = this.open ? this.menuHeight : '0px'
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
    display: block;
    height: 0;
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
  .sidebar-menu a:focus {
    text-decoration: none;
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
