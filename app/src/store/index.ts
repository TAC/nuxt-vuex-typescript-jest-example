export const actions = {
  nuxtServerInit: ({ commit }) => {
    commit('modules/counter/SET_VALUE', 20)
  }
}
