import {sql} from '@/db/Connection'


export default{
    async isAdmin(){
        await sql`
select isAdmin from users
where isAdmin='True'
`
    },
    async getUid(login) {
        const user = await sql`
select login from user 
where login=${login}
`
        return user ? user.uid : null
    },
    async logout({commit}) {
        commit('clearInfo')
    }

}