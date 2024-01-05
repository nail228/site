import { reactive, computed} from 'vue'
import {useField} from "@/components/User/main/hooks/authField";

export function useForm(form={}){

    const authForm=reactive({})

    for (const[key,value] of Object.fromEntries(form)){
        authForm[key]=useField(value)
    }

    authForm.valid= computed(()=>{
        return Object.keys(form).filter(x=>x!=='valid').reduce((acc,key)=>{
            acc=form[key].valid
            return acc
        },true)
    })


    return form
}