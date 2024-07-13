import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'

import { IconButton, SvgIcon } from '@/components/ui'
import { LanguageMap, useLocale } from '@/hooks/use-locale'

import { LocalEnum } from '#/enum'

type Locale = keyof typeof LocalEnum

const LocaleDropdown = () => {
  const { locale, changeLanguage } = useLocale()

  const localeList: MenuProps['items'] = Object.values(LanguageMap).map((item) => ({
    key: item.locale,
    label: item.label,
    icon: <SvgIcon name={`ic-locale_${item.locale}`} size={24} />
  }))

  return (
    <Dropdown menu={{ items: localeList, onClick: (e) => changeLanguage(e.key as Locale) }} trigger={['click']}>
      <IconButton>
        <SvgIcon name={`ic-locale_${locale}`} size={24} />
      </IconButton>
    </Dropdown>
  )
}

export default LocaleDropdown
