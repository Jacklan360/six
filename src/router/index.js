import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      isShow: false
    },
    children: [
      {
        path: '/courseList',
        name: 'CourseList',
        meta: {
          isShow: true,
          title: '课程列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/courseList.vue')
      },
      {
        path: '/teacherList',
        name: 'TeacherList',
        meta: {
          isShow: true,
          title: '讲师列表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/teacherList.vue')
      },
      {
        path: '/personal',
        name: 'personal',
        meta: {
          isShow: true,
          title: '个人中心'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/personalView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    meta: {
      isShow: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
