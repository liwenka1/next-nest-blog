import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { ThemeContrast, ThemeMode, ThemeNavColor, ThemeNavLatout, ThemePresets } from '#/enum'

interface SettingState {
  themeMode: ThemeMode
  themeContrast: ThemeContrast
  themeNavLatout: ThemeNavLatout
  themeNavColor: ThemeNavColor
  themePresets: ThemePresets
  collapsed: boolean
}

interface SettingStore extends SettingState {
  setSetting: <K extends keyof SettingState>(key: K, value: SettingState[K]) => void
  resetSetting: () => void
}

const defaultSetting = {
  themeMode: ThemeMode.Light,
  themeContrast: ThemeContrast.Low,
  themeNavLatout: ThemeNavLatout.Inline,
  themeNavColor: ThemeNavColor.Integrate,
  themePresets: ThemePresets.Green,
  collapsed: false
}

export const useSettingStore = create<SettingStore>()(
  persist(
    (set) => ({
      ...defaultSetting,
      setSetting: (key, value) => set({ [key]: value }),
      resetSetting: () => set(defaultSetting)
    }),
    {
      name: 'setting'
    }
  )
)
