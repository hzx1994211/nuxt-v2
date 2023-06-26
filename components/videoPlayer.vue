<template>
  <section class="vueVideo">
    <div v-video-player:myVideoPlayer="playerOptions" ref="videoPlayer" :muted="false"
      class="video-player-box video-player vjs-custom-skin" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)" @loadeddata="onPlayerLoadeddata($event)" @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)" @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)" @ready="playerReadied" @statechanged="playerStateChanged($event)">
    </div>


  </section>
</template>
 
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { nextTick } from 'vue'

export default {
  props: {
    src: {
      type: String,

    }
  },
  data() {
    return {
      playerOptions: {
        // 播放器配置
        language: 'zh-CN',
        // aspectRatio: '16:9',
        // playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        controls: true,
        autoplay: true, // 是否自动播放
        preload: 'auto', // 视频预加载
        liveui: true,

        fluid: true,
        playsinline: true,
        muted: false, // 是否静音
        sources: [
          // {
          //    type: 'video/mp4',
          //    src:
          //      'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          //  },
          // 直播流
          //  'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
          {
            type: 'application/x-mpegURL',
            src: this.src
          }
        ],
        poster: '/imgs/choice/avator.png', // 封面图
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: false, // 时长显示
          remainingTimeDisplay: false, // 剩下时间
          fullscreenToggle: true, //全屏按钮
          //   currentTimeDisplay: true, // 当前时间
          volumeControl: true, // 声音控制键
          playToggle: true, // 暂停和播放键
          progressControl: true, // 进度条
        },
      }
    }
  },
  // computed:{
  //   player() {
  //     return this.$refs.videoPlayer
  //   }
  // },  
  mounted() {
    nextTick(async () => {
      console.log(this.myVideoPlayer, '----myVideoPlayer');

    })
  },
  methods: {
    // 监听播放
    onPlayerPlay(player) {
      console.log('player play!', player)

    },
    // 监听暂停
    onPlayerPause(player) {
      console.log('player pause!', player)
    },
    // 监听停止
    onPlayerEnded(player) {
      console.log('player ended!', player)
    },
    // 监听加载完成
    onPlayerLoadeddata(player) {
      console.log('player Loadeddata!', player)
    },
    // 监听视频缓存等待
    onPlayerWaiting(player) {
      console.log('player Waiting!', player)
    },
    // 监听视频暂停后播放
    onPlayerPlaying(player) {
      console.log('player Playing!', player)
    },
    // 监听视频播放时长更新
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      console.log('player Canplay!', player)

    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // 监听状态改变
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // 监听播放器准备就绪
    playerReadied(player) {
      console.log('example 01: the player is readied', player)
    }
  }
}
</script>
 
<style lang="scss" scoped>
.vueVideo{
  width: calc(100vw - 210px);
  height: 50%;
}
::v-deep .vjs-progress-control {
  visibility: hidden;
}

::v-deep .vjs-current-time {
  visibility: hidden;
}

::v-deep .vjs-time-control {
  visibility: hidden;
}
</style>
