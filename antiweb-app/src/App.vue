<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>


</template>

<script>
import MainLayout from "@/Layouts/MainLayout";
import AdminLayout from "@/Layouts/AdminLayout.vue";
import EmptyLayout from "@/Layouts/EmptyLayout.vue";


export default{
  name:'App',
  components: {AdminLayout,MainLayout,EmptyLayout},
  computed:{
    layout(){
      return(this.$route.meta.layout || 'Empty')+'-layout'

    }

  }
}


</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,600&display=swap');

#app{
  height: 100%;
}
</style>