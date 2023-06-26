<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <span class="text">明天9:00</span>
    <span class="mg_100">
      {{ $t('topbar.home') }}
    </span>

  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>

<style lang="scss" scoped>
.relative {

  .text {
    display: inline-block;
    font-size: 12px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #000000;

  }

  .bg-white {}
}
</style>
