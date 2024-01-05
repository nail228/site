import dbController from '@/controllers/db.controller'
export default{
    actions:{

        async fetchBase({commit}){
            try{
                const data=await dbController.findAll()
                return data

            }catch (e) {
                commit('setError')

            }

        },
        async selectBase({commit},id){
          try{
              const data=await dbController.findOne(id)
              return data

          }  catch (e) {
              commit('setError')

          }
        },
        async updateBase({commit},{d_id, d_date, d_type, d_log, d_url}){
            try{
                const data=await dbController.update({d_id, d_date, d_type, d_log, d_url})
                return data
            }catch (e) {
                commit('setError')

            }
        },
        async deleteBase({commit},id){
            try{
                await dbController.delete(id)
            }catch (e) {
                commit('setError')
                throw e

            }
        }

    }


}

