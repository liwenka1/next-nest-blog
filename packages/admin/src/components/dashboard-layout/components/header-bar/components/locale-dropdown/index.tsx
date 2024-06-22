import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

import { useI18n } from '@/locales'
import { IconButton, SvgIcon } from '@/components/ui'

const LocaleDropdown = () => {
  const changeLanguage = useI18n()

  const items: MenuProps['items'] = [
    {
      label: (
        <div className="flex gap-[16px]" onClick={() => changeLanguage('en')}>
          <SvgIcon name="ic-locale_en_US" size={24} />
          <span>English</span>
        </div>
      ),
      key: 'en_US'
    },
    {
      label: (
        <div className="flex gap-[16px]" onClick={() => changeLanguage('zh')}>
          <SvgIcon name="ic-locale_zh_CN" size={24} />
          <span>Chinese</span>
        </div>
      ),
      key: 'zh_CN'
    }
  ]

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <IconButton>
        <SvgIcon name="ic-locale_en_US" size={24} />
      </IconButton>
    </Dropdown>
  )
}

export default LocaleDropdown
