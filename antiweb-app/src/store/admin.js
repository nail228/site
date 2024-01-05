/* eslint-disable */
import axios from "axios";

export default{

    async getUid(login) {
        const user = await fetch('hhtp/')

        return user ? user.uid : null
    },
    async logout({commit}) {
        commit('clearInfo')
    }

}