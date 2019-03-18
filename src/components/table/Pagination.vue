<template>
  <div class="pagination__container">
    <div class="col-sm-5">
      <div class="dataTables_info" role="status" aria-live="polite">
        Showing {{ skip }} to {{ skip + limit }} of {{ total }} entries
      </div>
    </div>
    <div class="col-sm-7">
      <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
        <ul class="pagination">
          <li class="paginate_button previous" :class="{ disabled: currentPage === 1 }">Previous</li>
          <li class="paginate_button" v-for="page in totalPage" :key="page" :class="{ active: currentPage === page }" @click="handleSkip(page)">{{ page }}</li>
          <li class="paginate_button next" :class="{ disabled: currentPage === totalPage }">Next</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pagination',

  props: {
    skip: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },

  computed: {
    currentPage () {
      return (this.skip + this.limit) / this.limit
    },
    totalPage () {
      return Math.ceil(this.total / this.limit)
    }
  },

  methods: {
    handleSkip (page) {
      this.$emit('change', page)
    }
  }
}
</script>

<style lang="css">
  .dataTables_info {
    padding-top: 8px;
    font-size: 14px;
    line-height: 32px;
  }
  .dataTables_paginate {
    float: right;
    text-align: right;
  }
  .dataTables_paginate .fg-button {
    box-sizing: border-box;
    display: inline-block;
    min-width: 1.5em;
    padding: 0.5em;
    margin-left: 2px;
    text-align: center;
    text-decoration: none !important;
    cursor: pointer;
    *cursor: hand;
    color: #333 !important;
    border: 1px solid transparent;
  }
  .dataTables_paginate .fg-button:active {
    outline: none;
  }
  .dataTables_paginate .fg-button:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .dataTables_paginate .fg-button:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .pagination {
    margin: 8px 0;
  }
  .pagination > li {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #666;
    text-decoration: none;
    background: #fafafa;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  .pagination > li.active {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .pagination.pagination-flat > li {
    border-radius: 0 !important;
  }
</style>
