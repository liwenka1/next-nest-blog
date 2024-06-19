import { Button, Card } from 'antd'

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
    <>
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
      <div className="grid grid-cols-3 gap-4">
        <Card
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          styles={{
            body: {
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }
          }}
        >
          <div className="flex h-full w-7 flex-shrink-0 flex-col gap-1 p-1">
            <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
            <div className="h-1 w-full flex-shrink-0 rounded opacity-50" style={{ backgroundColor: primaryColor }} />
            <div
              className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
          </div>
        </Card>
        <Card
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          styles={{
            body: {
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }
          }}
        >
          <div className="flex h-4 w-full items-center gap-1 p-1">
            <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
            <div className="h-1 w-4 flex-shrink-0 rounded opacity-50" style={{ backgroundColor: primaryColor }} />
            <div className="h-1 w-3 flex-shrink-0 rounded opacity-20" style={{ backgroundColor: primaryColor }} />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
          </div>
        </Card>
        <Card
          className="h-14 cursor-pointer"
          style={{ flexGrow: 1, flexShrink: 0 }}
          styles={{
            body: {
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }
          }}
        >
          <div className="flex h-full flex-shrink-0 flex-col gap-1 p-1">
            <div className="h-2 w-2 flex-shrink-0 rounded" style={{ backgroundColor: primaryColor }} />
            <div className="h-1 w-full flex-shrink-0 rounded opacity-50" style={{ backgroundColor: primaryColor }} />
            <div
              className="h-1 max-w-[12px] flex-shrink-0 rounded opacity-20"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <div className="h-full w-full flex-1 flex-grow p-1">
            <div className="h-full w-full rounded opacity-20" style={{ backgroundColor: primaryColor }} />
          </div>
        </Card>
      </div>
    </>
  )
}

export default SettingCard
