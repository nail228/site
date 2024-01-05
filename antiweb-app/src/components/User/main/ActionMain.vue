<template>
  <div class="action-container" >
    <div class="card-action" id="obh">
      <img src="@/assets/stats_main.png">
      <p>
        Анализ обхода системы анти-плагиата
      </p>
      <p>
        Анализирует все попытки обхода системы анти-плагиата в виде отчета
      </p>
      <button @click="onBtnClicked" class="action-btn">Проверить</button>

    </div>
    <div class="card-action" id="anti">
      <img src="@/assets/anti.png">
      <p>
        Анализ заимствований
      </p>
      <p>
        Анализирует все заимствования в документе на основе базы имеющихся в системе документов
      </p>
      <button @click="onBtnClicked2" class="action-btn" type="button">Проверить</button>


    </div>
    <div class="card-action" id="base">
      <img src="@/assets/search.svg">
      <p>
        База документов
      </p>
      <p>
        Поиск по базе документов которые имеются в нашей системе
      </p>
      <button  @click="onBtnClicked3"  class="action-btn" type="submit">Поиск</button>

    </div>
  </div>

</template>

<script>

import router from "@/router";

export default {
  name: "ActionMain",
  methods:{
    onBtnClicked(){
      router.push('/evade')
    },
    onBtnClicked2(){
      router.push('/anti')
    },
    onBtnClicked3(){
      router.push('/Base')
    }
  }
}
</script>

<style scoped>
.action-container{

  display: flex;
  align-items: center;
  padding-inline: 30px;
  justify-content: center;


}
.card-action{
  display: flex;
  flex-direction: column;
  border: 15px black;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  background: #5CABF4;
  border-radius: 15px;
  padding-inline: 30px;
  width: 286px;
  height: 340px;



}
#obh>img{
  margin-top: 10px;
  height: 85px;
  width: 85px;

}
.card-action>p{
  font-family: Roboto Flex;
  text-align: center;
  margin: 10px 10px;

}

#anti>img{
  margin-top: 10px;
  height: 80px;
  width: 80px;
  transform: matrix(-1, 0, 0, 1, 0, 0);

}
#anti>p {
  margin: 10px 10px;

}

#base>img{
  margin-top: 10px;
  height: 85px;
  width: 95px;

}
.action-btn{

  display:inline;
  background: #FAFF00;
  border-radius: 20px;
  padding: 10px 10px;
  margin-bottom: 30px;
  margin-top:10px;


}

</style>