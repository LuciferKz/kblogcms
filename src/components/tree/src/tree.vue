<template>
  <ul class="treeview" :class="{'menu-open': open}" ref="menu">
    <k-tree-item v-for="item in model" :model="item.children" :key="item.id"></k-tree-item>
  </ul>
</template>

<script>
import KTreeItem from './tree-item'

export default {
  name: 'k-tree',
  components: { KTreeItem },
  props: {
    model: {
      type: [Object, Array],
      default: []
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>
