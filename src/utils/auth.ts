import store from '@/store'
import { Login, Logout } from '@/store/mutation-types'
import { ILoginData } from '@/types/auth'

const { commit, getters } = store

export const checkAuth = () => {
  if (getters.userInfo.token) return true
  return false
}

export const login = (userData: ILoginData) => {
  commit(Login, {
    id: userData.id,
    token: 'This is FaKe Token!',
  })
}

export const logout = () => {
  commit(Logout)
}
