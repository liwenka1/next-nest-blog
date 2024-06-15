import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

import { IconButton, SvgIcon } from '../icon'

const items: MenuProps['items'] = [
  {
    label: (
      <div className="flex gap-[16px]">
        <SvgIcon name="ic-locale_en_US" size={24} />
        <span>English</span>
      </div>
    ),
    key: 'en_US'
  },
  {
    label: (
      <div className="flex gap-[16px]">
        <SvgIcon name="ic-locale_zh_CN" size={24} />
        <span>Chinese</span>
      </div>
    ),
    key: 'zh_CN'
  }
]

const LocaleDropdown = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <IconButton>
        <SvgIcon name="ic-locale_en_US" size={24} />
      </IconButton>
    </Dropdown>
  )
}

export default LocaleDropdown
