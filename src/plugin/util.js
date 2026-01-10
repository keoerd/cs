import i18n from '@/i18n/index.js'

export default {
  install(app) {
    Object.assign(app.config.globalProperties, {
      translate: (msgCd, msgObj) => {
        const { t } = i18n.instance.global
        return t(msgCd, msgObj)
      },
      // changeLang: (lang) => {
      //   const { locale } = i18n.instance.global
      //   locale.value = lang
      // },
    })
  },
}
