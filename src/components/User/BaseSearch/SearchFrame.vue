<template>
    <div class="frame-container">
      <SearchTable :documents="items"></SearchTable>
      <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="pageClickHandler"
          :prev-text="Назад"
          :next-text="Вперед"
          :container-class="pagination"
          :page-class="waves-effect"
      />
    </div>
</template>

<script>
import SearchTable from "@/components/User/BaseSearch/SearchTable";
export default {
  name: "SearchFrame",
  components:{SearchTable}



}
</script>

<style scoped>

</style>