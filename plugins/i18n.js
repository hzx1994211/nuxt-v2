import en_us from '../locales/en.js'
import zh_cn from '../locales/zh.js'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: app.$cookies.get('lang') || 'EN',
    fallbackLocale: 'EN',
    messages: {
      'EN': en_us,
      'ZH-CN': zh_cn,
    }
  })
}
