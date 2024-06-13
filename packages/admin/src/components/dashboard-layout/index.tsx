import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import SiderBar from './sider-bar'
import HeaderBar from './header-bar'

const { Content } = Layout

const DashboardLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <SiderBar />
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <HeaderBar />
        <Content style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
