<template>
  <div>
    <videoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"/>
  </div>
</template>

<script>
import videoPlayer from '@/components/videoPlayer'
export default {
  name: 'home',
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

