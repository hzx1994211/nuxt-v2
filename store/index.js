export const state = () => ({
  isTopbarBlock: true, // 顶部栏是否显示
  locales: ['en', 'zh'],
  locale: 'zh'
})

export const mutations = {
  UPDATE_TOPBAR_BLOCK(state, payload) {
    state.isTopbarBlock = payload
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
