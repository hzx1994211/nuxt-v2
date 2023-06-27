<template>
  <div>
    <Tutorial/>
    <nuxt-link :to="`home`" class="ssss">{{ $t('menu.home') }}</nuxt-link>
    <nuxt-link :to="`demo?id=${1}`">demo</nuxt-link>
    <svg-icon name="huang_2_hong_1" :size="12"/>
  </div>
</template>

<script>
import videoPlayer from '@/components/videoPlayer'
export default {
  name: 'IndexPage',
  data() {
    return {
      text:''
    }
  },
  head() {
    return {
      title: '奥默科技'
    }
  },
  components:{
    videoPlayer,
  },
  mounted() {

  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.ssss{
  color: $pdcolor;
}
  
</style>

