import { useEffect } from 'react'
import { useRequest } from 'ahooks'

import { userApi } from '@/api'

const Home = () => {
  const { signup } = userApi
  const { data, loading } = useRequest(() => signup({ name: '123', email: '202002' }))
  useEffect(() => {}, [])

  return (
    <div>
      <span className="text-2xl text-red-500">{!loading && data?.name}</span>
    </div>
  )
}

export default Home
