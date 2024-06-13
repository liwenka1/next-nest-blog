import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'

import SvgIcon from '../svg-icon'

const { Sider } = Layout

const items: MenuProps['items'] = [
  {
    key: 'overview',
    label: 'OVERVIEW',
    children: [{ key: 'home', label: 'APP', icon: <SvgIcon name="ic_dashboard" /> }]
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

const SiderBar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
      <div
        className="relative"
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(0, 0, 0, 0.2)',
          zIndex: 200
        }}
      >
        <Button
          className="absolute -right-7 top-0"
          type="link"
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <Menu mode="inline" defaultSelectedKeys={[pathname]} items={items} onClick={handleMenuClick} />
    </Sider>
  )
}

export default SiderBar
