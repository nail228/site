<template>
  <table class="base">
    <thead>
    <tr>
      <th>#</th>
      <th>date</th>
      <th>type</th>
      <th>log</th>
      <th>url</th>
      <th>download</th>
      <th>delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(data,idx) of documents" :key="data.id">
      <td>{{idx+1}}</td>
      <td>{{data.doc_date}}</td>
      <td>{{data.type}}</td>
      <td>{{data.log}}</td>
      <td>{{data.url}}</td>
      <td>
        <button
        class="btn-table"
        @click="dataAction(idx)"
        >
          download
        </button>
      </td>
      <td>
        <button
            class="btn-table-delete"
            @click="dataDelete(idx)"
        >
          delete
        </button>
      </td>

    </tr>
    </tbody>
  </table>
</template>

<script>
/* eslint-disable */
import store from "@/store";

export default {
  name:"SearchTable",
  props:{
    documents:{
      type:Array
    }
  },
  setup(props){

    async function dataAction(id){
      const action=await store.dispatch('downloadDoc',{id})
      return action
    }
    async function dataDelete(id){
      const deleteAction=await store.dispatch('docsDelete',{id})
      return deleteAction
    }
    return{dataAction}
  }
}
</script>

<style scoped>
.base{
  position: relative;
  display: table;
  tab-size: 800px;
}
.btn-table{
  height: 25px;
  width:100px;
  background: #2615E4;
  color:#FFFFFF;
  border-radius: 5px;
}
.btn-table-delete{
  height: 25px;
  width:100px;
  background: red;
  color:#FFFFFF;
  border-radius: 5px;
}

</style>