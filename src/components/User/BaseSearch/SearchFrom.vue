<template>
  <form class="search-form">
    <label class="search-label" > Поиск по базе</label>
    <input class="search-input" id="search" name="search" type="text">
    <button class="search-btn"  @click="searchBase">Поиск</button>

  </form>
</template>



<script>
import {defineComponent} from "vue";

export default defineComponent({
  components:{},
  name: "SearchFrom",
  props:{
    searchBaseList:Array
  },

})
</script>

<style scoped>
.search-form{
  margin-top: 100px;
  position: relative;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.search-label{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 80px;

  color: #000000;

}
.search-form>.search-input{
  box-sizing: border-box;
  background: #F3F3F3;
  border-radius: 15px;
  width: 50%;

  border: 1px solid #000000;
}
.search-btn{
  background: #FAFF00;
  border-radius: 20px;
padding: 10px 30px;
  align-self: center;


}

</style>