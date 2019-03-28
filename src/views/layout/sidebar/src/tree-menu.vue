<template>
  <li class="treeview" :class="{'treeview--open': open}" ref="menu">
    <a class="treeview__link" @click="linkTo">
      <i class="fa" :class="model.icon ? model.icon : 'fa-circle-o'"></i>
      <span>{{model.name}}</span>
      <span class="pull-right-container" v-if="model.children && model.children.length > 0">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu" ref="subMenu" v-if="model.children && model.children.length > 0">
      <tree-menu v-for = "item in model.children" :model = "item" :key = "item.id"></tree-menu>
    </ul>
  </li>
</template>

<script>

export default {

  name: 'TreeMenu',

  props: {
    model: {
      type: Object,
      require: true
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
    let subMenu = this.$refs.subMenu
    if (subMenu) {
      this.menuHeight = subMenu.scrollHeight + 'px'
    }
  },

  methods: {
    toggle () {
      this.open = !this.open
      this.$refs.subMenu.style.height = this.open ? this.menuHeight : '0px'
    },
    linkTo () {
      let path = this.model.link
      if (path) {
        this.$router.push(path)
      } else {
        this.toggle()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .skin-blue {
    .sidebar-menu {
      > li {
        > .treeview__link {
          border-left: 3px solid transparent;
        }
      }
      .treeview__link {
        color: #b8c7ce;
      }
    }
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
  .treeview__link:focus {
    text-decoration: none;
  }
  .treeview__link > .fa-angle-left,
  .treeview__link > .pull-right-container > .fa-angle-left{
    -webkit-transition: transform .5s ease;
       -moz-transition: transform .5s ease;
        -ms-transition: transform .5s ease;
         -o-transition: transform .5s ease;
            transition: transform .5s ease;
  }

  .treeview--open .treeview__link > .fa-angle-left,
  .treeview--open .treeview__link > .pull-right-container > .fa-angle-left{
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
</style>
