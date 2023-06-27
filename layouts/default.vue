<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container" >
      <section v-show="collapse">
        <Sidebar/>
      </section>

      <section :class="['content-bg',collapse ? 'content-210':'content']">
        <nuxt/>
      </section>
    </main>
  </div>
</template>



<script>
  import VHeader from './Header/index.vue'
  import Sidebar from './Sidebar/index.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      VHeader,
      Sidebar,
    },
    data (){
      return {

      }
    },
    computed:{
      ...mapState(['collapse'])
    },
    mounted (){
  
    },
    methods: {

    },

  }
</script>

<style lang="scss">
.content-container{
  display: flex;
  .content-bg{
    background: #EEF0F4;
  }
  .content-210{
    width: calc(100vw - 210px);
  }
  .content{
    width:100vw;
  }
}
  .marginTop{
    margin-top: 170px;
  }
</style>
