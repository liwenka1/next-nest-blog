import { Button, Layout, Drawer } from 'antd'

import { useGlobalStore } from '@/stores'
import MenuHorizontal from './menu-horizontal'
import SvgIcon from '../svg-icon'
import { useState } from 'react'

const { Header } = Layout

const HeaderBar = () => {
  const { menuMode, setMenuMode } = useGlobalStore()

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Header className="flex items-center justify-end bg-[#fff] p-0">
        <Button type="text" onClick={() => setMenuMode('horizontal')}>
          collapsed
        </Button>
        <Button onClick={showDrawer} icon={<SvgIcon name="ic-setting" size={24} />} />
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <Button onClick={() => setMenuMode('horizontal')}>horizontal</Button>
          <Button onClick={() => setMenuMode('inline')}>inline</Button>
        </Drawer>
      </Header>
      {menuMode === 'horizontal' && <MenuHorizontal />}
    </>
  )
}

export default HeaderBar
