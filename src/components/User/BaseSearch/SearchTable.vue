<template>
  <table class="base">
    <thead>
    <tr>
      <th>#</th>
      <th>date</th>
      <th>type</th>
      <th>log</th>
      <th>url</th>
      <th>open</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(data,idx) of documents" :key="data.id">
      <td>{{idx+1}}</td>
      <td>{{data.d_date}}</td>
      <td>{{data.d_type}}</td>
      <td>{{data.d_log}}</td>
      <td>{{data.d_url}}</td>
      <td>
        <button
        class="btn-table"
        @click="dataAction"
        >
        </button>
      </td>

    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name:"SearchTable",
  setup(){
    props:{
      required:true
      documents:Array
    }
  }
}
</script>

<style scoped>
.base{
  position: relative;
  display: table;
  tab-size: 800px;


}

</style>