<template>
  <div class="nav-container">
    <div class="text-field">
      <label class="search-text" for="search">Поиск</label>
      <input class="text-field__input" type="text" name="search" id="search" placeholder="Введите запрос"/>
    </div>
  </div>


</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style lang="scss" scoped>
.nav-container{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 300px;

}

input[type="text"] {
  font-family: inherit;
  font-size: inherit; /* 1 */
  line-height: inherit; /* 1 */
  margin: 0; /* 2 */
}
.text-field{
  display: flex;
  flex-direction: row;
}
.search-text{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #FFFDFD;
  text-align: center;
  align-self: center;
  padding: 5px 15px;

}
.text-field>.text-field__input{
  display: block;
  box-sizing: border-box;
  padding: 5px 5px;
  position: relative;
  width: 100%;


  border:5px #000000;
  background-color: #FFFFFF;
  border-radius: 12px;
}
.text-field>.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}

.text-field>.text-field__input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #bdbdbd;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}

</style>