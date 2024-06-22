import { Button } from 'antd'

import { SvgIcon } from '@/components/ui'
import { useGlobalStore } from '@/stores'
import { rgbToRgba } from '@/utils/util'
import { SettingColors } from '@/config/theme'

const PresetsCard = () => {
  const { primaryColor, setColor } = useGlobalStore()

  return (
    <ul className="grid grid-cols-3 gap-[12px]">
      {SettingColors.map((color) => (
        <li>
          <Button
            className="flex h-[64px] w-full items-center justify-center border-0"
            style={{ backgroundColor: rgbToRgba(primaryColor, primaryColor === color ? '0.08' : '0') }}
            onClick={() => setColor(color)}
          >
            <SvgIcon name="ic-siderbar-duotone" size={28} color={color} />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default PresetsCard
