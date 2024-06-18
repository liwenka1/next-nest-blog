import { Button } from 'antd'

import { SvgIcon } from '../icon'
import { useGlobalStore } from '@/stores'
import { rgbToRgba } from '@/utils/util'

const SettingCard = () => {
  const colors = [
    'rgb(0, 167, 111)',
    'rgb(7, 141, 238)',
    'rgb(118, 53, 220)',
    'rgb(12, 104, 233)',
    'rgb(253, 169, 45)',
    'rgb(255, 48, 48)'
  ]
  const { primaryColor, setColor } = useGlobalStore()

  return (
    <div className="relative flex flex-col rounded-[16px] border border-solid px-[16px] pb-[16px] pt-[32px]">
      <span className="absolute top-[-12px] rounded-[176px] bg-black px-[10px] text-white">Presets</span>
      <ul className="grid grid-cols-3 gap-[12px]">
        {colors.map((color) => (
          <li>
            <Button
              className="flex h-[64px] w-full items-center justify-center"
              style={{ backgroundColor: rgbToRgba(primaryColor, primaryColor === color ? '0.08' : '0') }}
              onClick={() => setColor(color)}
            >
              <SvgIcon name="ic-siderbar-duotone" size={28} color={color} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SettingCard
