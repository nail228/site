import Auth from "@/store/auth";
import Admin from "@/store/admin";
import Document from "@/store/document";

import { createStore } from 'vuex'



export default createStore({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {

  },
  getters: {
    error: s => s.error
  },
  modules: {
    Auth, Admin, Document
  }
})
