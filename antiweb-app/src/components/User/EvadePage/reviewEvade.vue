<template>
  <div class="review-container">
    <h1>Отчет</h1>
    <div class="review-field">
      <p>Results for evade analisis</p>
      <div v-for="res in result[0]" :key="res.id">{{res}}</div>
      <div v-for="res in result[1]" :key="res.id">{{res}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "reviewEvade",
  props:{
    result:{

    }

  }


}
</script>

<style scoped>

</style>