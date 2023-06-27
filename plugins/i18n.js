import en_us from '../locales/en.js'
import zh_cn from '../locales/zh.js'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const i18n = {
  locales: ['en', 'zh'],//有多少地区的语言就添加多少种
  defaultLocale: 'zh',//默认的地区语言
  vueI18n: {
    fallbackLocale: 'en',//回退策略，指定的locale中没有找到对应资源的情况下使用的locale
    messages: { //要渲染的信息，有多少语言就添加多少种
      en: en_us,
      zh: zh_cn
    }
  }

}

export default i18n



