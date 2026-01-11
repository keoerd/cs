import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/main/Main.vue'
import Greeting from '@/pages/company/Greeting.vue'
import Certification from '@/pages/company/Certification.vue'
import Product from '@/pages/product/Product.vue'
import InstallationCase from '@/pages/installationCase/InstallationCase.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/company/greeting',
      name: 'companyy-greeting',
      component: Greeting,
    },
    {
      path: '/company/certification',
      name: 'companyy-certification',
      component: Certification,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/installation-case',
      name: 'installation-case',
      component: InstallationCase,
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    // 1. 이동하려는 경로에 해시(#)가 있는 경우
    if (to.hash) {
      return {
        el: to.hash, // 이동할 요소의 id 선택자
        behavior: 'smooth', // ✨ 스무스 스크롤 동작
      }
    }
    // 2. 뒤로/앞으로 가기 버튼을 눌렀을 때 이전 위치로 복원
    if (savedPosition) {
      return savedPosition
    }
    // 3. 그 외의 모든 경우 페이지 맨 위로 스크롤
    return { top: 0 }
  },
})

export default router
