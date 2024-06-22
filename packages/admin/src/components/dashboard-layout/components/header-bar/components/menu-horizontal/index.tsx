import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'

import { SvgIcon } from '@/components/ui'

const items: MenuProps['items'] = [
  {
    key: '/dashboard/home',
    label: 'APP',
    icon: <SvgIcon name="ic-dashboard" size={24} />
  },
  {
    key: 'about',
    label: 'ABOUT'
  },
  { key: '9', label: 'Option 9', children: [{ key: 'about', label: 'ABOUT' }] },
  { key: '10', label: 'Option 10' },
  { key: '11', label: 'Option 11' },
  { key: '12', label: 'Option 12' },
  { key: '9', label: 'Option 9', children: [{ key: 'about', label: 'ABOUT' }] },
  { key: '10', label: 'Option 10' },
  { key: '11', label: 'Option 11' },
  { key: '12', label: 'Option 12' },
  { key: '9', label: 'Option 9', children: [{ key: 'about', label: 'ABOUT' }] },
  { key: '10', label: 'Option 10' },
  { key: '11', label: 'Option 11' },
  { key: '12', label: 'Option 12' },
  { key: '9', label: 'Option 9', children: [{ key: 'about', label: 'ABOUT' }] },
  { key: '10', label: 'Option 10' },
  { key: '11', label: 'Option 11' },
  { key: '12', label: 'Option 12' }
]

const MenuHorizontal = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Menu
      className="border-t border-dashed border-gray-200"
      mode="horizontal"
      defaultSelectedKeys={[pathname]}
      items={items}
      onClick={handleMenuClick}
    />
  )
}

export default MenuHorizontal
