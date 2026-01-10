<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { watch } from 'vue'
import i18n from '@/i18n/index.js'
import { useLanguageStore } from '@/stores/language.js'

// 1. Pinia 스토어와 i18n의 locale을 가져옵니다.
const languageStore = useLanguageStore()
const { locale } = i18n.instance.global;

// 2. Pinia 스토어의 locale 값이 변경될 때마다 i18n의 locale 값을 업데이트합니다.
watch(
  () => languageStore.locale, // ref나 computed 속성을 감시할 때는 getter 함수 형태로 전달
  (newLocale) => {
    locale.value = newLocale
  }
)
</script>

<template>
  <Header />
  <div id="container">
    <RouterView></RouterView>
  </div>
  <!-- <main id="container">
    <HeroBanner />
    <Introduction id="scroll1" />
    <PurposeSection />
    <Activities />
  </main> -->
  <Footer />
</template>

<style>
/* 전역 스타일이나 기본 레이아웃 스타일을 여기에 추가 */
@import '@/assets/base.css'; /* 필요하다면 기본 CSS 파일 생성 후 임포트 */
</style>
<style lang="scss" scoped>
#container {
  padding-top: var(--header-height-pc);
  min-height: calc(100vh - var(--header-height-pc) - 309px);
}
@media (max-width: 767px) {
  #container {
    padding-top: var(--header-height-mobile);
  }
}
</style>
