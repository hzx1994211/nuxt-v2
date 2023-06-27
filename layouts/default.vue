<template>
  <div>
    <v-header></v-header>
    <main class="content-container" ref="container" >
      <section>
        <Sidebar/>
      </section>

      <section class="content">
        <nuxt/>
      </section>
    </main>
  </div>
</template>



<script>
  import VHeader from './Header/index.vue'
  import Sidebar from './Sidebar/index.vue'
  export default {
    components: {
      VHeader,
      Sidebar,
    },
    data (){
      return {

      }
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
  .content{
    width: calc(100vw - 210px);
    background: #EEF0F4;
  }
}
  .marginTop{
    margin-top: 170px;
  }
</style>
