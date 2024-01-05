<template>

  <div id="app">
      <router-view/>
  </div>


</template>

<script>
import MainLayout from "@/Layouts/MainLayout";

export default{
  name:'App',
  computed:{
    layout(){
      return (MainLayout)
    }

  }
}


</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,600&display=swap');
</style>