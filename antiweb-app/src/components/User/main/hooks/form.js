import { reactive, computed} from 'vue'
import {useField} from "@/components/User/main/hooks/authField";
/* eslint-disable */
export function useForm(form={}){

    const authForm=reactive({})

    for (const [key,value] of Object.entries(form)){
        authForm[key]=useField(value)
    }

    authForm.valid= computed(()=>{
        return Object.keys(authForm).filter(x=>x!=='valid').every(k=>authForm[k].valid)
    })


    return authForm
}