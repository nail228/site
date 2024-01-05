/* eslint-disable */
import {ref} from 'vue'
import auth from "@/store/auth";
import router from "@/router";
export async function useSubmit(login,password){
    const isSubmitted=ref(false)
    console.log(1)
    try{
        const user=await this.$store.dispatch('getLogin',{login, password})

    } catch(e){
        this.$store.commit('SetError')
    }

    return(isSubmitted)
}