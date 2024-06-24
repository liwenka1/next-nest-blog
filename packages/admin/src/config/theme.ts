import { ThemePresets } from '#/enum'

export const themePresetsColors: Record<ThemePresets, string> = {
  [ThemePresets.Green]: 'rgb(0, 167, 111)',
  [ThemePresets.Blue]: 'rgb(7, 141, 238)',
  [ThemePresets.Purple]: 'rgb(118, 53, 220)',
  [ThemePresets.Cyan]: 'rgb(12, 104, 233)',
  [ThemePresets.Orange]: 'rgb(253, 169, 45)',
  [ThemePresets.Red]: 'rgb(255, 48, 48)'
} as const
