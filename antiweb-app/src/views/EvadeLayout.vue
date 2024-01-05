<template>
  <div>
    <h1 class="IntroAnti">Анализ на обход заимствований</h1>
    <DownloadPage/>
  </div>


</template>

<script>

import DownloadPage from "@/components/User/EvadePage/DownloadPage.vue";
export default {
  components:{DownloadPage},
  name: "BaseLayout"
}
</script>

<style scoped>
.IntroAnti{
  align-self: center;
  text-align: center;
}


</style>