import { useEffect } from 'react'
import { useRequest } from 'ahooks'

import { userApi } from '@/api'

const Home = () => {
  const { oneYan } = userApi
  const { data, loading } = useRequest(() => oneYan)
  useEffect(() => {}, [])

  return (
    <div>
      <span className="text-2xl text-red-500">{!loading && data?.message}</span>
    </div>
  )
}

export default Home
