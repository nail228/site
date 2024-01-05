<template>
  <form class="auth-card" @submit.prevent="SubmitHandler">
    <span class="auth-card-name"> Авторизация</span>
    <div class="form-control" :class="{invalid:!form.email.valid && form.email.touched}">
      <input  id="email" type="text" v-model.trim="form.email.value" @blur="form.email.blur">
      <label class="auth-label" for="email">Логин</label>
      <small v-if="form.email.errors.required && form.email.touched">
        Поле логина не должно пустовать
      </small>
    </div>
   <div class="form-control" :class="{invalid:!form.password.valid && form.password.touched}">
     <input id="password" type="password" v-model="form.password.value" @blur="form.password.blur">
     <label for="password">Password</label>
     <small v-if="form.password.errors.required & form.password.touched">
       Поле пароля не должно пустовать
     </small>
     <small v-else-if="form.password.errors.minLength && form.password.touched">
       Пароль не может быть меньше 3 символов.Сейчас {{form.password.value.length}}
     </small>
   </div>

    <button class="auth-button" type="submit" :disabled="!form.valid"> Войти </button>
  </form>

</template>
<script>
//import {useVuelidate} from "@vuelidate/core";
//import {required, minLength} from '@vuelidate/validators'
import {ref} from 'vue'
import {useForm} from "@/components/User/main/hooks/form";
const submited=ref(false)
const required=val=>!!val
const minLength=num=>val=>val.length>=num


export default {
  name:'AutPage',
  setup () {

    const form=useForm({
      email:{
        value:'123',
        validators:{required}
      },
      password:{
        value:'123',
        validators:{required,minLength:minLength(3)}
      }
    })

    function submit(){
      submited.value=true
    }

    return { form ,submit,submited}
  },
/*  data:()=>({
      email:'',
      password:''
  }),
  validations:()=>({
    email:{required,minLength:minLength(3)},
    password:{required,minLength:minLength(8)}
  }),
  methods:{
    async SubmitHandler(){
      this.v$.$touch()
      if(this.v$.$error) return
      const formData={
        login: this.login,
        password: this.password
      }
      try{
        await this.$store.dispatch('login',formData)
        const isAdmin=await this.$store.dispatch('checkAuth',formData)
        if (!isAdmin){
          this.router.push('/')
        }
        else{
          this.router.push('/Admin')
        }
      }catch(e){

      }
    },
    printError($name, $param) {
      if ($name === 'required') {
        return 'Поле не должно быть пустым'
      } else if ($name === 'minLength') {
        return 'Минимальная длина должна быть ' + $param + ' символов'
      }
    }
  }
*/
}

</script>
<style scoped>
.auth-card{
  margin-top: 150px;
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 150px;
}
.auth-card-name{
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 40px;
  padding: 50px 150px;


  color: #000000;
}
.auth-button{

  width: 20%;
  background: #2615E4;
  border: 1px solid #ECEF3E;
  border-radius: 9px;
  padding: 10px 10px;
  color: #FFFDFD;
  margin-top: 40px;
}
#email{
 margin: 30px 800px;

  background: #E9EAF2;
  border: 1px solid #000000;
  border-radius: 10px;
}
#password{
  margin: 30px 400px;

  background: #E9EAF2;
  border: 1px solid #000000;
  border-radius: 10px;

}

</style>