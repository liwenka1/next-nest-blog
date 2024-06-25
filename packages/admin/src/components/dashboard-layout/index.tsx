import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import { HeaderBar, SiderBar } from './components'
import { useSettingStore } from '@/stores'

import { ThemeNavLatout } from '#/enum'

const { Content } = Layout

const DashboardLayout = () => {
  const { themeNavLatout } = useSettingStore()

  return (
    <Layout className="h-full">
      {themeNavLatout === ThemeNavLatout.Inline && <SiderBar />}
      <Layout className="flex h-full w-full flex-col" style={{ flexDirection: 'column' }}>
        <HeaderBar />
        <Content className="h-full w-full p-[16px]">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
