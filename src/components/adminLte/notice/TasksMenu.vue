<template>
  <li class="dropdown tasks-menu">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-flag-o"></i>
      <span class="label label-danger">{{ tasksCount }}</span>
    </a>
    <ul class="dropdown-menu">
      <li class="header">You have {{ tasksCount }} tasks</li>
      <li>
        <ul class="menu">
          <!-- start task-item -->
          <li v-for="task in tasks">
            <a href="#">
              <h3>
                {{task.content}}
                <small class="pull-right">{{task.progress}}%</small>
              </h3>
              <div class="progress xs">
                <div class="progress-bar" :class="task.progressColor | progressCls" :style="{ width: task.progress + '%' }" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                  <span class="sr-only">{{task.progress}}% Complete</span>
                </div>
              </div>
            </a>
          </li>
          <!-- end task-item -->
        </ul>
      </li>
      <li class="footer">
        <a href="#">View all tasks</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {

  name: 'TasksMenu',

  props: {
    tasks: {
      type: Array
    }
  },

  data () {
    return {

    }
  },

  computed: {
    tasksCount () {
      return this.tasks.length
    }
  },

  filters: {
    progressCls (color) {
      return 'progress-bar-' + color
    }
  }
}
</script>
