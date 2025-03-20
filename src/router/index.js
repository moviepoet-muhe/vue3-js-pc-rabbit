// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 路由滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router