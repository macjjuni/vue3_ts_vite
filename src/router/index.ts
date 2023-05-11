import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/router/views/Home.vue'),
    meta: {
      icon: 'mdi-home',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/router/views/About.vue'),
    meta: {
      icon: 'mdi-account',
      requiresAuth: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 네비게이션 가드
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   if (requiresAuth) {
//     // 로그인이 필요한 페이지에 로그인하지 않은 경우
//     next('/login')
//   } else {
//     if (to.path === '/login' && checkAuth()) {
//       next('/')
//       return
//     }
//     next()
//   }
// })

export default router
