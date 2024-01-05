<template>
  <admin-header/>
  <div class="frame-container">
    <span class="base-search-intro"> Редактирование</span>
    <SearchFrom/>
    <searchFrame/>
  </div>
  <footer-main/>

</template>

<script>
import SearchFrom from "@/components/User/BaseSearch/SearchFrom";
import searchFrame from "@/components/User/BaseSearch/SearchFrame";
import footerMain from "@/components/User/main/footerMain";
import AdminHeader from "@/components/admin/MainPage/AdminHeader";
import FooterMain from "@/components/User/main/footerMain";
export default {
  name: "AdminBase",
  components:{
    FooterMain,
    AdminHeader,
    SearchFrom,
    footerMain,
    searchFrame
  }
}
</script>

<style scoped>
.base-search-intro{
  font-family: Roboto Flex;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 80px;
  margin: 50px;

  color: #000000;
}

</style>