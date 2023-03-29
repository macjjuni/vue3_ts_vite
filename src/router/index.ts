import { createRouter, createWebHistory } from 'vue-router'
import { checkAuth } from '@/utils/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/router/views/Home.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/router/views/Dashboard.vue'),
    meta: {
      show: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/router/views/About.vue'),
    meta: {
      requiresAuth: true, // 로그인이 필요한 페이지
      show: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/router/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 네비게이션 가드
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !checkAuth()) {
    // 로그인이 필요한 페이지에 로그인하지 않은 경우
    next('/login')
  } else {
    if (to.path === '/login' && checkAuth()) {
      next('/')
      return
    }
    next()
  }
})

export default router
