import { Button } from 'antd'

import { ShodowButton, SvgIcon } from '../ui'
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
          <span className="text-xs font-[600] text-[#637381]">Layout</span>
          <div className="mt-[12px] flex gap-[12px]">
            <ShodowButton className="h-[64px]">
              <div className="flex h-full w-[32px] flex-col gap-[4px] p-[6px]">
                <div
                  className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] max-w-[14px] flex-shrink-0 rounded opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-[6px]">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </ShodowButton>
            <ShodowButton className="h-[64px] flex-col">
              <div className="flex h-[22px] w-full items-center gap-[4px] p-[6px]">
                <div
                  className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] w-[16px] flex-shrink-0 rounded opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] w-full max-w-[10px] flex-shrink-0 rounded opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-[6px]">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </ShodowButton>
            <ShodowButton className="h-[64px]">
              <div className="flex h-full flex-col gap-[4px] p-[6px]">
                <div
                  className="h-[10px] w-[10px] flex-shrink-0 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] w-full flex-shrink-0 rounded opacity-50"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="h-[4px] w-full flex-shrink-0 rounded opacity-20"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
              <div className="h-full w-full flex-1 flex-grow p-[6px]">
                <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
              </div>
            </ShodowButton>
          </div>
        </div>
        <div>
          <span className="text-xs font-[600] text-[#637381]">Color</span>
          <div className="mt-[12px] flex gap-[12px]">
            <ShodowButton className="h-[56px] gap-[12px]">
              <SvgIcon name="ic-sidebar-filled" size={24} color={primaryColor} />
              <span>integrate</span>
            </ShodowButton>
            <ShodowButton className="h-[56px] gap-[12px]">
              <SvgIcon name="ic-sidebar-outline" size={24} color={primaryColor} />
              <span>integrate</span>
            </ShodowButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingCard
