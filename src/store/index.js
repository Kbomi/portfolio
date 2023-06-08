import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit('setLoading', isLoading)
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    }
  }
})

export default store
