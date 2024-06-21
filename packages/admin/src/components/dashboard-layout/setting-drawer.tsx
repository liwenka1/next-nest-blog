import { useState } from 'react'
import { Button, Drawer } from 'antd'

import { useGlobalStore } from '@/stores'
import { IconButton, SvgIcon } from '../ui'
import { CloseOutlined } from '@ant-design/icons'
import SettingCard from './setting-card'

const SettingDrawer = () => {
  const { setMenuMode } = useGlobalStore()

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton onClick={showDrawer}>
        <SvgIcon name="ic-setting" size={24} />
      </IconButton>
      <Drawer
        title="Settings"
        onClose={onClose}
        open={open}
        extra={
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
        }
        closeIcon={false}
        styles={{
          mask: { backgroundColor: 'transparent' }
        }}
      >
        <Button onClick={() => setMenuMode('horizontal')}>horizontal</Button>
        <Button className="mb-[100px]" onClick={() => setMenuMode('inline')}>
          inline
        </Button>
        <SettingCard />
      </Drawer>
    </>
  )
}

export default SettingDrawer
