<template>
  <header class="header">
    <ul class="header-box">
      <li class="header-logo">
        <span class="mouse-in" @click="handleCollapse"><svg-icon name="collapse" :size="14" /></span>
        <span class="logo"><svg-icon name="am_logo"  :size="24" /></span>
        <h3>AM Score</h3>
      </li>
      <li class="header-sreach">
        <a-input v-model:value="sreachValue" placeholder="搜索">
          <template #suffix>
            <svg-icon name="sreach" :size="20" />
          </template>
        </a-input>
      </li>
      <li class="header-right">
        <svg-icon name="kaibo" class="mouse-in" :size="24" />
        <span class="app-download mouse-in"><svg-icon name="app_download" :size="24" /></span>
        <svg-icon class="mouse-in" name="msg" :size="24" />
        <img class="user-logo mouse-in" :src="userLogo" alt="">
      </li>
    </ul>
  </header>
</template>

<script>
import userLogo from '@/assets/img/userLogo.png';
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      sreachValue:'',
      userLogo,
    }
  },
  computed:{
    ...mapState(['collapse']),
    ...mapState('auth', [
      'token'
    ]),
  },
  methods:{
    ...mapMutations([
      'UPDATE_COLLAPSE',
    ]),
    handleCollapse() {
      this.UPDATE_COLLAPSE(!this.collapse)
    }
  }
}
</script>
<style lang='scss' scoped>
.header {
  height: 50PX;
  box-shadow: 0px 1PX 5PX 1PX rgba(0, 0, 0, 0.2);
  padding: 0 60PX 0 20PX;
  .header-box{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li{
      flex: 1;
    }
    .header-logo{
      display: flex;
      align-items: center;

      .logo{
        display: inline-block;
        margin: 0 5px 0 20px;
      }
      h3{
        font-size: 15px;
        font-weight: bold;
        color: #000000;
      }
    }
    .header-sreach{
      flex: 2;
    }
    .header-right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .user-logo{
        width: 30PX;
        height: 30PX;
        margin-left: 30px;
      }
      .app-download{
        display: inline-block;
        margin: 0 30px;
      }
    }
  }
}
</style>