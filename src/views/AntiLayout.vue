<template>
<div>
  <MainLayout>
    <DownloadPage/>
  </MainLayout>

</div>
</template>

<script>
import MainLayout from "@/Layouts/MainLayout";
import DownloadPage from "@/components/User/EvadePage/DownloadPage";
export default {
  name: "AntiLayout",
  components:{MainLayout,DownloadPage}
}
</script>

<style scoped>

</style>