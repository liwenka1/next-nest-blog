import { Switch } from 'antd'

import { SvgIcon, ModeButton } from '@/components/ui'
import { useTheme } from '@/hooks'
import { useSettingStore } from '@/stores'

import { ThemeMode } from '#/enum'

const ModeCard = () => {
  const { setTheme } = useTheme()
  const { setSetting } = useSettingStore()
  const onChange = (checked: boolean) => {
    if (checked) {
      setTheme('dark')
      setSetting('themeMode', ThemeMode.Dark)
    } else {
      setTheme('light')
      setSetting('themeMode', ThemeMode.Light)
    }
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
