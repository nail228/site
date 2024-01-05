import {reactive, ref,watch} from 'vue'

export function useField(init={}){
    const valid=ref(true)
    const value=ref(init.value)
    const touched=ref(false)
    const errors=reactive({})
    const reassign=val=>{
        Object.keys(init.validators??{}).map(  name=>{
            const isValid = init.validators[name](val)
            errors[name]= !isValid
            if(!isValid){
                valid.value=false
            }
        })
    }



    watch(value,reassign)

    reassign(init.value)

    return {value,valid,errors,touched,blur:()=>touched.value=true}

}