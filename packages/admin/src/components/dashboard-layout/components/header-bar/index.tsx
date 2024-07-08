import { Layout } from 'antd'

import { useSettingStore } from '@/stores'
import { MenuHorizontal, LocaleDropdown, SettingDrawer } from './components'

import { ThemeNavLatout } from '#/enum'

const { Header } = Layout

const HeaderBar = () => {
  const { themeNavLatout } = useSettingStore()

  return (
    <>
      <Header className="flex items-center justify-end bg-background p-0">
        <LocaleDropdown />
        <SettingDrawer />
      </Header>
      {themeNavLatout === ThemeNavLatout.Horizontal && <MenuHorizontal />}
    </>
  )
}

export default HeaderBar
