<template>
  <div class="action-container" >
    <div class="card-action" id="obh">
      <img src="@/assets/stats_main.png">
      <p>
        Статистика
      </p>
<div class="list">
  <ul>Подробная статистика действий пользователей в данном сервисе:</ul>

  <li>Количество пользователей компании</li>

  <li> Количество загруженных документов</li>

  <li>Количество документов а индексе собственной коллекции документов</li>

  <li> Количество проверок по  каждому из подключенных модулей поиска</li>
</div>


      <button @click="onBtnCliked" class="action-btn">Проверить</button>

    </div>
    <div class="card-action" id="anti">
      <img src="@/assets/anti.png">
      <p>
        Пользователи
      </p>
      <div class="list">
        <ul>Информация о пользоваателях сервиса:</ul>

        <li> ФИО пользователя</li>

        <li> Количество проверок</li>

        <li> Количество просмотренных отчетов</li>

      </div>

      <button @click="onBtnCliked" class="action-btn">Проверить</button>


    </div>
    <div class="card-action" id="base">
      <img src="@/assets/search.svg">
      <p>
        База документов
      </p>
      <div class="list">
        <ul> Редактирование базы документов:</ul>

        <li> Загрузка документов</li>

        <li> Удаление документов из базы</li>

        <li> Добавление документов в базу документов</li>

      </div>
      <button  @click="onBtnCliked"  class="action-btn">Поиск</button>

    </div>
  </div>

</template>

<script>
import router from "@/router";

export default {
  name: "ActionMain",
  methods:{
    onBtnClicked(){
      return router.push('/evade')
    }
  }
}
</script>

<style scoped>
.action-container{

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 30px;
  justify-content: center;
  margin-top: 100px;


}
.card-action{
  display: flex;
  flex-direction: row;
  border: 15px black;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  background: rgba(5, 0, 248, 0.82);
  border-radius: 15px;
  padding-inline: 30px;
  margin-top: 50px;
  width: 75%;




}
.list{
  font-family: Roboto Flex;
  margin: 30px;
}
#obh>img{
  margin-top: 10px;
  height: 85px;
  width: 85px;

}
.card-action>p{
  text-align: left;
  margin: 30px 30px;

}

#anti>img{
  margin-top: 10px;
  height: 80px;
  width: 80px;
  transform: matrix(-1, 0, 0, 1, 0, 0);

}
#anti>p {
  margin: 30px 30px;

}

#base>img{
  margin-top: 10px;
  height: 85px;
  width: 95px;

}
.action-btn{
  font-family: Roboto Flex;
  display: inline;
  background: rgba(5, 0, 248, 0.82);
  border-radius: 20px;
  padding: 10px 10px;
  margin-bottom: 30px;

}

</style>