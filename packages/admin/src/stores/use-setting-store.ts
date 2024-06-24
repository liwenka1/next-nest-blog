import { create } from 'zustand'

import { ThemeContrast, ThemeMode, ThemeNavColor, ThemeNavLatout, ThemePresets } from '#/enum'

interface SettingState {
  themeMode: ThemeMode
  themeContrast: ThemeContrast
  themeNavLatout: ThemeNavLatout
  themeNavColor: ThemeNavColor
  themePresets: ThemePresets
  collapsed: boolean
}

interface SettingStore {
  setting: SettingState
  setSetting: (setting: SettingStore['setting']) => void
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

export const useSettingStore = create<SettingStore>()((set) => ({
  setting: defaultSetting,
  setSetting: (setting) => set({ setting }),
  resetSetting: () => set({ setting: defaultSetting })
}))
