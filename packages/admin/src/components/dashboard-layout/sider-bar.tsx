import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import clsx from 'clsx'

import { IconButton, SvgIcon } from '../ui'

const { Sider } = Layout

const items: MenuProps['items'] = [
  {
    key: 'overview',
    label: 'OVERVIEW',
    children: [{ key: '/dashboard/home', label: 'APP', icon: <SvgIcon name="ic-dashboard" /> }]
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
      { key: '9', label: 'Option 9', children: [{ key: 'about', label: 'ABOUT' }] },
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
    <Sider
      className={clsx('hidden border-r', 'lxl:block')}
      width={300}
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
    >
      <div className="flex h-[68px] items-center pb-[8px] pl-[28px] pt-[20px]">
        <SvgIcon name="ic-logo" size={40} />
      </div>
      <IconButton
        className="absolute right-0 top-[24px] translate-x-1/2 border"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <RightOutlined /> : <LeftOutlined />}
      </IconButton>
      <Menu mode="inline" defaultSelectedKeys={[pathname]} items={items} onClick={handleMenuClick} />
    </Sider>
  )
}

export default SiderBar
