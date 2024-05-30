import { httpClient } from '@/utils/request'
import { UserData } from './type'

export const userApi = {
  signup: async (data: UserData) => {
    const res = await httpClient.post<UserData>('/user/signup', data)
    return res
  }
}
