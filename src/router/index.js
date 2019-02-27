import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const requestAuth = function (to, from, next) {
  let token = localStorage.token || sessionStorage.token
  if (token) {
    next()
  } else {
    next({name: 'Login'})
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/views/Index'], resolve),
      beforeEnter: requestAuth,
      children: [
        {
          path: '/user-table',
          name: 'UserTable',
          component: resolve => require(['@/views/user/UserTable'], resolve)
        },
        {
          path: '/user/detail/:uid',
          name: 'UserDetail',
          component: resolve => require(['@/views/Index'], resolve)
        },
        {
          path: '/user/edit/:uid',
          name: 'UserEdit',
          component: resolve => require(['@/views/user/UserEdit'], resolve)
        },
        {
          path: '/user-add',
          name: 'UserAdd',
          component: resolve => require(['@/views/user/UserAdd'], resolve)
        },
        {
          path: '/article-table',
          name: 'ArticleTable',
          component: resolve => require(['@/views/article/ArticleTable'], resolve)
        },
        {
          path: '/article-add',
          name: 'ArticleAdd',
          component: resolve => require(['@/views/article/ArticleAdd'], resolve)
        },
        {
          path: '/article-edit/:artid',
          name: 'ArticleEdit',
          component: resolve => require(['@/views/article/ArticleEdit'], resolve)
        },
        {
          path: '/article-preview/:artid',
          name: 'ArticlePreview',
          component: resolve => require(['@/views/article/ArticlePreview'], resolve)
        },
        {
          path: '/category-table',
          name: 'CategoryTable',
          component: resolve => require(['@/views/article/CategoryTable'], resolve)
        },
        {
          path: '/category-edit/:catid',
          name: 'CategoryEdit',
          component: resolve => require(['@/views/article/CategoryEdit'], resolve)
        },
        {
          path: '/category-add',
          name: 'CategoryAdd',
          component: resolve => require(['@/views/article/CategoryAdd'], resolve)
        },
        {
          path: '/role-add',
          name: 'RoleAdd',
          component: resolve => require(['@/views/rights/RoleEdit'], resolve)
        },
        {
          path: '/role-edit/:roleid',
          name: 'RoleEdit',
          component: resolve => require(['@/views/rights/RoleEdit'], resolve)
        },
        {
          path: '/role-table',
          name: 'RoleTable',
          component: resolve => require(['@/views/rights/RoleTable'], resolve)
        },
        {
          path: '/rights-add',
          name: 'RightsAdd',
          component: resolve => require(['@/views/rights/RightsAdd'], resolve)
        },
        {
          path: '/rights-table',
          name: 'RightsTable',
          component: resolve => require(['@/views/rights/RightsTable'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/views/Login'], resolve)
    },
    {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/views/Register'], resolve)
    }
  ]
})

