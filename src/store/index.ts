import { createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
import todo from './modules/todo'
import auth from './modules/auth'
import { IStore } from '@/types/auth'
import { ITodos } from '@/types/todo'

const ls = new SecureLS({ isCompression: false })

export interface IRootState {
  auth: IStore
  todo: ITodos
}

export default createStore({
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth, todo },
  plugins: [
    createPersistedState({
      paths: ['auth', 'todo'],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
})
