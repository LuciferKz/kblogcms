<template>
  <section class="content-header">
    <h1>
      {{title}}
      <small>{{desc}}</small>
    </h1>
    <ol class="breadcrumb">
      <li v-for="(path, index) in paths" :class="{'active': index === pathCount}">
        <!-- <a href="#"><i class="fa fa-dashboard"></i></a> -->
         {{ path }}
      </li>
    </ol>
  </section>
</template>

<script>
export default {

  name: 'ContentHeader',

  props: {
    title: {
      type: String,
      default: 'KBLOG'
    },
    desc: {
      type: String,
      default: 'Content management system'
    },
    paths: {
      type: Array
    }
  },

  data () {
    return {
      isActive: true
    }
  },

  computed: {
    pathCount () {
      return this.paths.length - 1
    }
  }
}
</script>
