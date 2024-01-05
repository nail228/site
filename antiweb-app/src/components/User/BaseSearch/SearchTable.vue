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
      <td>{{data.doc_date}}</td>
      <td>{{data.type}}</td>
      <td>{{data.log}}</td>
      <td>{{data.url}}</td>
      <td>
        <button
        class="btn-table"
        @click="dataAction"
        >
          Download
        </button>
      </td>

    </tr>
    </tbody>
  </table>
</template>
/* eslint-disable */
<script>
import store from '@/store';
/* eslint-disable */

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
  return{}
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

</style>