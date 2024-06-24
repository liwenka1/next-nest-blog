import { useState } from 'react'
import { Drawer } from 'antd'

import { IconButton, SvgIcon } from '@/components/ui'
import { CloseOutlined } from '@ant-design/icons'
import { SettingCard } from './components'

const SettingDrawer = () => {
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
        <SettingCard />
      </Drawer>
    </>
  )
}

export default SettingDrawer
