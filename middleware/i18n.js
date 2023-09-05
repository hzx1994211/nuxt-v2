export default function ({
  isHMR,
  app,
  store,
  error
}) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return
  }
  // 获取locale
  const locale = app.$cookies.get('lang') || defaultLocale

  // 设置语言
  store.commit('SET_LANG', locale)
  app.i18n.locale = locale
}
