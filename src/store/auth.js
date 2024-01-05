import dbController from '@/controllers/db.controller'


export default {
    actions:{
        async login ({commit},{login,password}){
            try{
                const user= await dbController.getAuth({login,password})
                return user
            }catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async getUserInfo(id) {
            const user = await dbController.findOnePer({id})
            return user ? user.uid : null
        },
        async logout({commit}) {
            commit('clearInfo')
        }
    }
    }
