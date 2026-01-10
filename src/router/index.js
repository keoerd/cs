import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/main/Main.vue'
import Greeting from '@/pages/greeting/Greeting.vue'
import MediaCenter from '@/pages/mediaCenter/MediaCenter.vue'
import Notice from '@/pages/notice/Notice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/greeting',
      name: 'greeting',
      component: Greeting,
    },
    {
      path: '/mediaCenter',
      name: 'mediaCenter',
      component: MediaCenter,
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
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
