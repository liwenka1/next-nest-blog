import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeModeStore {
  themeMode: 'light' | 'system' | 'dark'
  setThemeMode: (themeMode: ThemeModeStore['themeMode']) => void
}

export const useThemeModeStore = create<ThemeModeStore>()(
  persist(
    (set) => ({
      themeMode: 'system',
      setThemeMode: (themeMode) => set({ themeMode })
    }),
    {
      name: 'mode'
    }
  )
)
