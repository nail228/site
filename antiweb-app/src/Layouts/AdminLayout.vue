<template>
  <admin-header/>
  <router-view>

  </router-view>

  <footer-main/>
</template>

<script>
import AdminHeader from "@/components/admin/MainPage/AdminHeader.vue";
import footerMain from "@/components/User/main/footerMain.vue";
export default {

  name: "AdminLayout",
  components:{AdminHeader,footerMain}
}
</script>

<style scoped>

</style>