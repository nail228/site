<template>
  <div class="Menu">
    <div class ="MenuList" >
     <router-view>
       <router-link  class="col" class-active="active" to="/">Главное</router-link>
       <router-link  class="col" class-active="active" to="/evade">Поиск обхода антиплагиата</router-link>
       <router-link  class="col" class-active="active" to="/anti">Анализ заимствований</router-link>
       <router-link  class="col" class-active="active" to="/Base">База документов</router-link>
     </router-view>
    </div>
  </div>

</template>

<script>

export default {
  name:"MenuBar",

  data(){
    let menuList=[
      {id:1,name:"Главное"},
      {id:2,name:"Поиск обхода антиплагиата"},
      {id:3,name:"Анализ заимствований"},
      {id:4,name:"База документов"}
    ];
    return {
      menuList
    }
  },
  methods:
      {
        onbtnClicked(elem){
          if (elem.id==1){
            console.log(1)
            return '/'
          }
          else if(elem.id==2){
            console.log(2)
            return '/evade'
          }
          else if (elem.id==3){
            console.log(3)
            return '/anti'
          }
          //else{
           // console.log(4)
            //return '/BaseSearch'
          //}
        }

      }
}



</script>

<style lang="scss" scoped>
.Menu{
  display:flex;
  flex:0 0 70%;
  padding: 5px;
  max-height: 100px;

}
.MenuList{
  display:flex;
  align-items: center;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;


}

.col{
  padding: 5px 15px;
  text-align: center;

  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #FFFDFD;


}

</style>