<template>
<div class="review-container">
<h1 class="rev-int">Отчет</h1>
  <div class="review-field">
    <p>Results for analisis 1</p>
    {{result[0]['result']}}
    <p>Results for analisis 2 </p>
    {{result[1]['result']}}

  </div>
</div>
</template>

<script>
export default {

  name: "ReviewAnti",
  props:{
    result:{

    }

  }

}
</script>

<style scoped>
.review-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>