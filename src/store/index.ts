import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import { IStore } from '@/types/auth'

const ls = new SecureLS({ isCompression: false })

export default createStore<IStore>({
  state: {
    userInfo: {
      id: null,
      token: null,
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
  },
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
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
})
