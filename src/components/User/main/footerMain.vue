<template>
  <footer class="footer">
    <div class="footer-container">
      <router-link class="nav-footer" to="/">Главная</router-link>
      <div class="footer-info">
        <img src="@/assets/phone.png">
        <p>87478398803</p>
        <img src="@/assets/mail.png">
        <p>press@newaeon.tech</p>
      </div>
      <a>Политика конфиденциальности </a>

    </div>


  </footer>
</template>

<script>
export default {
  name: "footerMain"
}
</script>

<style lang="scss" scoped>
.footer{
  position: relative;
  margin-top: 150px;
  bottom: 0;
}
.nav-footer{
  padding: 5px 15px;
  text-align: center;

  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color: #FFFDFD;
}
.footer>a{
  padding: 5px 15px;
  text-align: center;

  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #FFFDFD;
}
.footer-container{
  width: 100%;
  height: 216px;
  background: rgba(0, 40, 248, 0.83);
  display:flex;
  align-items: center;
  justify-content: space-evenly;

}
.footer-info{
  display:flex;

  align-items: center;
  justify-items: flex-start;
}
.footer-info>p{
  text-align: center;
  align-self:flex-end;
  justify-self: flex-start;
  color: #FFFDFD;
}
.footer-info>img{
  height: 40px;
  width: 40px;
  padding: 10px 10px;
  align-self: center;
  margin-left: 30px;
}

</style>