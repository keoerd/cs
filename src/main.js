import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 라이브러리 CSS 임포트
import 'swiper/css'
import 'aos/dist/aos.css'
import 'odometer/themes/odometer-theme-default.css'

import App from './App.vue'
import router from './router'
import i18n from './i18n' // 2단계에서 만든 설정 파일 import
import utilPlugin from './plugin/util.js' // 글로벌 메서드 플러그인 import
// AOS 초기화
import AOS from 'aos'

AOS.init({
  duration: 1500, // 원래 HTML의 data-aos-duration 값
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n) // Vue 앱에 i18n 적용
app.use(utilPlugin) // 글로벌 메서드 플러그인 적용

window.appRoot = app.config.globalProperties

app.mount('#app')
