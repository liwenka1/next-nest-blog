import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface userInfoState {
  userInfo: Record<string, string> | null
  setUserInfo: (info: userInfoState['userInfo']) => void
}

export const useUserInfoStore = create<userInfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo }))
    }),
    { name: 'userInfo' }
  )
)
