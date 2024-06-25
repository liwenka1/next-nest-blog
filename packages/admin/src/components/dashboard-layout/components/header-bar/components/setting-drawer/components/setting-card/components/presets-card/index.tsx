import { Button } from 'antd'

import { SvgIcon } from '@/components/ui'
import { rgbToRgba } from '@/utils/util'
import { themePresetsColors } from '@/config/theme'
import { useSettingStore } from '@/stores/use-setting-store'

import { ThemePresets } from '#/enum'

const PresetsCard = () => {
  const { themePresets, setSetting } = useSettingStore()

  return (
    <ul className="grid grid-cols-3 gap-[12px]">
      {Object.entries(themePresetsColors).map(([preset, color]) => (
        <li>
          <Button
            className="flex h-[64px] w-full items-center justify-center border-0"
            style={{ backgroundColor: rgbToRgba(color, themePresets === preset ? '0.08' : '0') }}
            onClick={() => setSetting('themePresets', preset as ThemePresets)}
          >
            <SvgIcon name="ic-siderbar-duotone" size={28} color={color} />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default PresetsCard
