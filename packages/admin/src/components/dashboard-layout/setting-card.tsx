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
    <div className="flex flex-col gap-[48px]">
      <div className="relative flex flex-col rounded-[16px] border border-solid px-[16px] pb-[16px] pt-[32px]">
        <span className="absolute top-[-12px] rounded-[176px] bg-black px-[10px] text-white">Presets</span>
        <ul className="grid grid-cols-3 gap-[12px]">
          {colors.map((color) => (
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
      </div>
      <div className="relative flex flex-col gap-[20px] rounded-[16px] border border-solid px-[16px] pb-[16px] pt-[32px]">
        <span className="absolute top-[-12px] rounded-[176px] bg-black px-[10px] text-white">Nav</span>
        <div>
          <span>Layout</span>
          <div className="mt-[12px] flex gap-[12px]">
            <div className="flex h-[64px] w-full items-center justify-center">
              <div className="flex h-full w-7 flex-shrink-0 flex-col gap-1 p-1">
                <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
                <div
                  className="h-1 w-full flex-shrink-0 rounded opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-1">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>
            <div className="flex h-[64px] w-full flex-col items-center justify-center">
              <div className="flex h-4 w-full items-center gap-1 p-1">
                <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
                <div className="h-1 w-4 flex-shrink-0 rounded opacity-50" style={{ backgroundColor: primaryColor }} />
                <div className="h-1 w-3 flex-shrink-0 rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-1">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>
            <div className="flex h-[64px] w-full items-center justify-center">
              <div className="flex h-full flex-shrink-0 flex-col gap-1 p-1">
                <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
                <div
                  className="h-1 w-full flex-shrink-0 rounded opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-1">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>Color</span>
          <div className="mt-[12px] flex gap-[12px]">
            <div className="shadow-light flex h-[56px] w-full cursor-pointer items-center justify-center gap-[12px] rounded-[12px] border border-solid">
              <SvgIcon name="ic-sidebar-filled" size={24} color={primaryColor} />
              <span>integrate</span>
            </div>
            <div className="shadow-light flex h-[56px] w-full cursor-pointer items-center justify-center gap-[12px] rounded-[12px] border border-solid">
              <SvgIcon name="ic-sidebar-outline" size={24} color={primaryColor} />
              <span>integrate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingCard
