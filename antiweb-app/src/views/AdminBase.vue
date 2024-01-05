<template>

  <div class="frame-container">
    <span class="base-search-intro"> Редактирование</span>
    <SearchFrom/>
    <searchFrameAdmin/>
  </div>


</template>

<script>
import SearchFrom from "@/components/User/BaseSearch/SearchFrom";
import SearchFrameAdmin from "@/components/admin/BaseRed/SearchFrameAdmin.vue";

export default {
  name: "AdminBase",
  components:{
    SearchFrom,
    SearchFrameAdmin
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