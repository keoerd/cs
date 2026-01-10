import { createI18n } from 'vue-i18n'
import en from './en.json'
import ko from './ko.json'

const I18n = {
  instance: null,
}
I18n.install = (app) => {
  const i18n = createI18n({
    legacy: false, // Composition API와 함께 사용하려면 false로 설정
    locale: 'ko', // 기본 언어 설정
    fallbackLocale: 'en', // 기본 언어에 번역이 없을 경우 사용할 언어
    messages: {
      en,
      ko,
    },
  })
  I18n.instance = i18n
  app.use(i18n)
}

export default I18n

// import { createI18n } from 'vue-i18n'
// import en from './en.json'
// import ko from './ko.json'
// import { watch } from 'vue'
// import { useLanguageStore } from '@/stores/language.js'

// const i18n = createI18n({
//   legacy: false,
//   locale: 'ko', // 초기 언어 설정
//   fallbackLocale: 'en',
//   messages: {
//     en,
//     ko,
//   },
// })

// export default {
//   install(app) {
//     app.use(i18n)

//     // Pinia 스토어를 가져와서 locale 값을 감시합니다.
//     const languageStore = useLanguageStore()
//     watch(languageStore.locale, (newLocale) => {
//       i18n.global.locale.value = newLocale
//     })
//   },
// }
