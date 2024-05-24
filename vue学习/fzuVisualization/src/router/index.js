import { createRouter, createWebHistory } from 'vue-router'

//createRoute用于创建路由示例
//配置history模式
//1. createWebHistory  地址栏不带#
//2. createWebHashHistory   地址栏带#
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/visualization',
      children: [
        {
          path: '/visualization',
          component: () => import('@/views/index/indexVisualization.vue')
        },
        {
          path: '/indexSubject',
          component: () => import('@/views/index/indexSubject.vue')
        },
        {
          path: '/engineer',
          component: () => import('@/views/index/enginnerPage.vue')
        },
        {
          path: '/chemistry',
          component: () => import('@/views/index/chemistryPage.vue')
        },
        {
          path: '/agricultuary',
          component: () => import('@/views/index/agricultuaryPage.vue')
        },
        {
          path: '/college',
          component: () => import('@/views/index/collegePage.vue')
        },
        {
          path: '/physic',
          component: () => import('@/views/index/physicPage.vue')
        }
      ]
    }
  ],
  //路由滚动行为配置项
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
