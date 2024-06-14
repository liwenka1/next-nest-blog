import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import SiderBar from './sider-bar'
import HeaderBar from './header-bar'
import { useGlobalStore } from '@/stores'

const { Content } = Layout

const DashboardLayout = () => {
  const { menuMode } = useGlobalStore()

  return (
    <Layout className="h-full">
      {menuMode === 'inline' && <SiderBar />}
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
