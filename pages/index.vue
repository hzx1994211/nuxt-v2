<template>
  <div>
    <nuxt-link :to="`home`" class="ssss">{{ $t('menu.home') }}</nuxt-link>
    <nuxt-link :to="`demo?id=${1}`">demo</nuxt-link>
    <svg-icon name="huang_2_hong_1" :size="12" />

    <a href="javascript:;" @click="setLang('zh')">简体中文</a>
    <a href="javascript:;" @click="setLang('en')">English</a>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      text: ''
    }
  },
  head() {
    return {
      title: '奥默科技'
    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    setLang(lang) {
      var that = this;
      that.$i18n.locale = lang;
    },
  }
}
</script>
<style lang="scss" scoped>
.ssss {
  color: $pdcolor;
}
</style>

