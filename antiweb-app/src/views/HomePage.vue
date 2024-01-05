<template>
  <div class="wrapper">
        <main class="main">
          <div class="main_container">
            <div class="Intro">
                Зачем нужна данная система?
            </div>
            <div class="description">
              Эта система предназначенна для определения и обнаружения заимствований,
              попыток обойти систему анти-плагиат  путем аналитики и сканирования файлов из базы документов
              а также есть поиск по базе документов системы
            </div>
            <div class="action">
              В Системе выявления заимствований есть следующие сервисы:
            </div>
            <div class="action-container">
              <ActionMain/>
            </div>
            <div class="resorses-container">
              <h1>Какие ресурсы использует наша система ?</h1>
              <div>
                <img src="@/assets/book.png">
                <p> Коллекции  научной электронной библиотеки ELIBRARY.ru</p>
              </div>
              <div>
                <img src="@/assets/files.png">
                <p> Коллекции  нормативно-правовой документации и аналитики ЭПС “ Система ГАРАНТ”</p>
              </div>
              <div>
                <img src="@/assets/book.png">
                <p> Коллекции   документов “Кольцо ВУЗов”</p>
              </div>
              <div>
                <img src="@/assets/translate.png">
                <p> «Программный комплекс поиска переводных заимствований с английского на русский язык и с русского па казахский язык</p>
              </div>
              <div>
                <img src="@/assets/book.png">
                <p> Коллекции   документов “Патенты”</p>
              </div>
              <div>
                <img src="@/assets/book.png">
                <p> Коллекции   “Медицина”</p>
              </div>

            </div>
          </div>
        </main>



  </div>


</template>

<script >
import ActionMain from "@/components/User/main/ActionMain.vue";



export default {
  components: {ActionMain},
  data(){
    return{


    }
  }
}
</script>

<style lang="scss" >
@import '../../node_modules/materialize-css/dist/css/materialize.min.css';

.wrapper{
  display: flex;
  flex-direction: column;
}

.main {
  position: relative;


}
.main_container{
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  justify-content: space-between;

}
.Intro{

  font-family: Roboto Flex;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 63px;
  text-align:center;
  align-self: center;
  padding: 10px 10px ;
  margin: 40px 40px;

  color: #000000;
}
.description{
  font-family: Roboto Flex;
  position: relative;
  margin: 150px 0;
  text-align: center;
  align-self: center;
  padding: 10px 10px;


  color: #937C7C;
}
.description:nth-child(n){
  box-sizing: border-box;
  margin: 100px 150px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

}
.action{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
  margin-bottom: 40px;
  margin-left: 50px;
  align-self: flex-start;

  color: #666363;
}


.resorses-container{
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  align-self: flex-start;

}
h1{
  font-family: Roboto Flex;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 47px;
  align-self: flex-start;

  color: #000000;
}
.resorses-container>div{
  display: flex;
}

div>img{
  display: inline-block;
  position: relative;
  height: 64px;
  width: 64px;
  padding: 15px 15px;

}
div>p{
  font-family: Roboto Flex;
  text-align: center;
  align-self: center;
}


</style>