import { Switch } from 'antd'

import { SvgIcon } from '@/components/ui'
import { ModeButton } from '@/components/ui/button'

const ModeCard = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <ModeButton>
        <div className="mb-[24px] flex w-full items-center justify-between">
          <SvgIcon name="ic-moon" size={24} />
          <Switch size="small" defaultChecked onChange={onChange} />
        </div>
        <div className="w-full text-left">
          <span className="text-sm font-[600]">Dark mode</span>
        </div>
      </ModeButton>
      <ModeButton>
        <div className="mb-[24px] flex w-full items-center justify-between">
          <SvgIcon name="ic-contrast" size={24} />
          <Switch size="small" defaultChecked onChange={onChange} />
        </div>
        <div className="w-full text-left">
          <span className="text-sm font-[600]">Contrast</span>
        </div>
      </ModeButton>
    </div>
  )
}

export default ModeCard
