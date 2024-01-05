<template>
  <div class="frame-container">
    <span class="base-search-intro"> Редактирование</span>
    <SearchFrom/>
    <searchFrame/>
  </div>
</template>

<script>
import SearchFrame from "@/components/User/BaseSearch/SearchFrame.vue";
import SearchFrom from "@/components/User/BaseSearch/SearchFrom";
export default {
  name: "BaseSearchPage",
  components:{SearchFrom,SearchFrame}

}
</script>

<style scoped>
.frame-container{
  height: 100%;
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}
.base-search-intro{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 80px;
  align-self: center;
  text-align: center;

  color: #000000;
  padding-top: 40px;
}

</style>