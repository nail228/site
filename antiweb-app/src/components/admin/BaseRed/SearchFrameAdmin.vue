<template>
  <div class="frame-container">
    <LoaderPage v-if="loading==true"/>

    <p class="center" v-else-if="!records.length">No records</p>

    <section v-else>
      <SearchTableAdmin :documents="records"></SearchTableAdmin>
    </section>


  </div>
</template>

<script>
import SearchTableAdmin from "@/components/admin/BaseRed/SearchTableAdmin.vue"
import store from '@/store'
import LoaderPage from "@/components/app/LoaderPage.vue";
export default {
  name: "SearchFrameAdmin",
  data(){
    return{
      loading:true,
      records:[],
      searchTableAdmin:SearchTableAdmin,
    }
  },
  components:{LoaderPage, SearchTableAdmin},
  async mounted(){
    try{
      const records=await store.dispatch('docsGet')
      this.records=records['data'].map(record=>{
        return{
          ...record
        }
      })

    }catch (e) {
      store.commit('setError')
    }

    this.loading=false
    return this.records
  },
  methods: {
    setup(){

    }

  }

}

</script>

<style scoped>

</style>