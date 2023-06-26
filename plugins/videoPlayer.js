
import Vue from 'vue'
import 'videojs-flash';
const VueVideoPlayer = require('vue-video-player/dist/ssr')

// 若是只是想播放普通视频，则不需要videojs-contrib-hls
const hls = require('videojs-contrib-hls')
Vue.use(hls)
Vue.use(VueVideoPlayer)

