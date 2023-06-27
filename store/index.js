export const state = () => ({
  collapse: true, // 顶部栏是否显示
  locales: ['en', 'zh'],
  locale: 'zh'
})

export const mutations = {
  UPDATE_COLLAPSE(state, payload) {
    console.log(payload,'--payload');
    state.collapse = payload
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
