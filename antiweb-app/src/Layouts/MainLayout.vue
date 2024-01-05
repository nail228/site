<template>
  <HeaderMain/>
  <div class="main">
    <router-view/>
  </div>
  <footer-main/>

</template>

<script>
import HeaderMain from "@/components/User/main/headerMain";
import footerMain from "@/components/User/main/footerMain";


export default {
  components: {HeaderMain,footerMain},
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" >
@import '~materialize-css/dist/css/materialize.min.css';
</style>
