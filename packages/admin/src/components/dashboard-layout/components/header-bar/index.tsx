import { Layout } from 'antd'

import { useGlobalStore } from '@/stores'
import { MenuHorizontal, LocaleDropdown, SettingDrawer } from './components'

const { Header } = Layout

const HeaderBar = () => {
  const { menuMode } = useGlobalStore()

  return (
    <>
      <Header className="flex items-center justify-end bg-[#fff] p-0">
        <LocaleDropdown />
        <SettingDrawer />
      </Header>
      {menuMode === 'horizontal' && <MenuHorizontal />}
    </>
  )
}

export default HeaderBar
