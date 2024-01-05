<template>
<div>
  <h1 class="anti-intro">Анализ на заимствования</h1>

    <DownloadPageAnti/>

</div>
</template>

<script>

import DownloadPageAnti from "@/components/User/antiplagiat/DownloadPageAnti.vue";
export default {
  name: "AntiLayout",
  components:{DownloadPageAnti}
}
</script>

<style scoped>
.anti-intro{
  text-align: center;
  align-self: center;
}

</style>