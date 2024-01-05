<template>
  <div>
    <div class="header">
      <div class="header_wrapper">
        <div class="header_container">
          <div class="auth-lang">
            <button class="auth-button" @click="open=true">
              <router-link class="col-auth" to="/Auth">Войти</router-link>
            </button>
          </div>
          <div class="header_body">
            <div class="label-icon">
              <a><img src="../../../assets/gerb.png"></a>
              <p class="text"> Система заимствований</p>
            </div>
            <div class="header_main">
              <Menu/>
              <navbar/>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>



</template>

<script>
import Menu from "@/components/User/main/Menu";
import navbar from "@/components/User/main/SearchBar";


export default {
  components: {Menu,navbar},
  name: "headerMain",
  data(){
    return{
      open:false
    }
  },
  methods:
      {

      }
}
</script>

<style lang="scss" scoped>


.header{
  position: relative;
  width: 100%;
  left: 0;
  top: 0;

  background: rgba(5, 0, 248, 0.82);
}
.header_wrapper{
  position: relative;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(5, 0, 248, 0.82);
  z-index: 50;

}
.header_container{

}


.auth-lang{
  display:flex;
  justify-content: flex-end;
  padding:10px 10px;

}
.auth-button{
  background: #FAFF00;
  border-radius: 20px;

}
.col-auth{
  padding: 5px 5px;
  text-align: center;

  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}
.header_body{
  display:flex ;
  flex-direction: column;
  align-items:flex-start;
  padding: 20px 0;
  margin-left: 30px;
}
.header_main{
  display:flex;
  flex:1 0 40%;
  flex-direction: row;
  width: 100%;

}
.label-icon{
  display:flex;
  align-items: center;
  padding:5px;
  height: 100%;
  box-sizing: border-box;
}
a>img{
  position: relative;
  width: 80px;
  height: 75px;
}

.text {
  margin-left: 15px;
  margin-right: auto;
  position:relative;
  text-align: center;

  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;

  color: #FFFFFF;
}

</style>