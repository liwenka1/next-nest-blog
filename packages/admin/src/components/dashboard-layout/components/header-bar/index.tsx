import { Layout } from 'antd'

import { useSettingStore } from '@/stores'
import { MenuHorizontal, LocaleDropdown, SettingDrawer } from './components'

import { ThemeNavLatout } from '#/enum'

interface HeaderBarProps {
  type: 'AUTH' | 'DASHBOARD'
}

const { Header } = Layout

const HeaderBar: React.FC<HeaderBarProps> = ({ type }) => {
  const { themeNavLatout } = useSettingStore()

  return (
    <div className="flex-none">
      <Header className="flex items-center justify-end bg-background px-[24px]">
        {type === 'AUTH' && <span className="cursor-pointer text-sm hover:underline">Need help?</span>}
        {type === 'DASHBOARD' && <LocaleDropdown />}
        <SettingDrawer />
      </Header>
      {themeNavLatout === ThemeNavLatout.Horizontal && <MenuHorizontal />}
    </div>
  )
}

export default HeaderBar
