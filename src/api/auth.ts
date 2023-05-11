import Axios from '@/utils/axios'

export const userLogin = async () => {
  try {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/users?id=1')
    console.log(res)
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}
