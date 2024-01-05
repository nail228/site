<template>
  <admin-header/>
  <div class="Intro">
    Панель Администратора
  </div>
  <div class="description">
    В данной панели есть следующие сервисы
  </div>
  <admin-action></admin-action>
  <footer-main/>
</template>

<script>
import adminHeader from "@/components/admin/MainPage/AdminHeader";
import footerMain from "@/components/User/main/footerMain";
import adminAction from "@/components/admin/MainPage/AdminAction";
export default {
  name: "AdminMain",
  components:{adminHeader,footerMain,adminAction}
}
</script>

<style scoped>
.Intro{

  font-family: Roboto Flex;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 63px;
  text-align:left;
  align-self: center;
  padding: 10px 10px ;
  margin: 40px 200px;

  color: #000000;
}
.description{
  position: relative;
  margin: 100px 200px;
  text-align: left;
  align-self: center;
  padding: 10px 10px;


  color: #937C7C;
}

</style>