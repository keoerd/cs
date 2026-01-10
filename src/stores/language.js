// src/stores/language.js

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // 현재 언어 코드를 저장할 상태
  const locale = ref('ko') // 기본값 'ko'

  // 언어를 변경하는 액션(함수)
  function setLocale(newLocale) {
    locale.value = newLocale
  }

  return { locale, setLocale }
})
