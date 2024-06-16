import { useState } from 'react'
import { Button, Drawer } from 'antd'

import { useGlobalStore } from '@/stores'
import { IconButton, SvgIcon } from '../icon'
import { CloseOutlined } from '@ant-design/icons'

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
          <IconButton>
            <CloseOutlined />
          </IconButton>
        }
        closeIcon={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button onClick={() => setMenuMode('horizontal')}>horizontal</Button>
        <Button onClick={() => setMenuMode('inline')}>inline</Button>
      </Drawer>
    </>
  )
}

export default SettingDrawer
