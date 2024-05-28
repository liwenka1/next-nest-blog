import { httpClient } from '@/utils/request'
import { OneYanType } from './type'

export const userApi = {
  oneYan: httpClient.get<OneYanType>('/api')
}
