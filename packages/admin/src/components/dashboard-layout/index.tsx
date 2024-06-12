import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'

const { Header, Sider, Content } = Layout

const items: MenuProps['items'] = [
  {
    key: 'overview',
    label: 'OVERVIEW',
    children: [{ key: 'home', label: 'APP' }]
  },
  {
    key: 'manegement',
    label: 'MANAGEMENT',
    children: [{ key: 'about', label: 'ABOUT' }]
  },
  {
    key: 'other-cases',
    label: 'OTHER CASES',
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' }
    ]
  }
]

const DashboardLayout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 200
          }}
        />
        <Menu mode="inline" defaultSelectedKeys={[pathname]} items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }}>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            collapsed
          </Button>
        </Header>
        <Content style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout
