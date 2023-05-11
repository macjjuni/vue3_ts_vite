import { IRootState } from '..'
import { IStore } from '@/types/auth'
import { Module } from 'vuex'
import { userLogin } from '@/api/auth'

const auth: Module<IStore, IRootState> = {
  state: () => ({
    userInfo: {
      id: null,
      token: null,
    },
  }),
  mutations: {
    Login(state, userInfo) {
      state.userInfo.id = userInfo.id
      state.userInfo.token = userInfo.token
    },
    Logout(state) {
      state.userInfo.id = null
      state.userInfo.token = null
    },
  },
  actions: {
    Login({ commit }, userInfo) {
      return new Promise(async (resolve, reject) => {
        const res = await userLogin()
        commit('Login', userInfo)
        if (res) resolve(true)
        reject(false)
      })
    },
  },
  getters: {
    getUserId(state) {
      return state.userInfo.id
    },
    getUserToken(state) {
      return state.userInfo.token
    },
  },
}

export default auth
