// VueX Store

interface IUSerInfo {
  id: string | null
  token: string | null
}

export interface IStore {
  userInfo: IUSerInfo
}

export interface ILoginData {
  id: string
  password: string
}
