
import session from "@/api/session";
/* eslint-disable */

export default {
    actions:{
        async getLogin ({commit},form){
            try{
                console.log(form)
                const user= await session.post('/api/login/',form, {'content-type': 'multipart/form-data'})

                return user.clean_data.json()
            }catch (e) {
                this.commit('setError', e)
                throw e
            }
        },
        async isAdmin({commit},form){
            try{
                const isAdm=await session.post('api/isadmin',form,{'content-type': 'multipart/form-data'})
                return isAdm.data
            }catch(e){
                this.commit('setError', e)
                throw e
            }


        },
        async getUserInfo(id) {
            const user = await getAccountDetails()
            return user ? user.uid : null
        },
        async logout({commit}) {
           await logout()
        }
    }
    }
