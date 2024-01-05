<template>
<div class="review-container">
<h1>Отчет</h1>
  <div class="review-field">
    <p>Количество попыток заимствования</p>
    {{antiCount}}
    <p>Количество попыток заимствования</p>
    {{antiPages}}
    <p>Количество попыток заимствования</p>
    {{antiFragment}}

  </div>
</div>
</template>

<script>
export default {
  name: "ReviewAnti",
  data(){
    return{
      antiCount:0,
      antiPages:0,
      antiFragment:0,
    }

  },
  methods:{
    async antiCount(){
      try{
        fetch('')

      }catch(e){

      }
    }
  }
}
</script>

<style scoped>

</style>