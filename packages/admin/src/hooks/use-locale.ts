import { useTranslation } from 'react-i18next'

import en_US from 'antd/locale/en_US'
import zh_CN from 'antd/locale/zh_CN'

import { LocalEnum } from '#/enum'

type Locale = keyof typeof LocalEnum

export const LanguageMap = {
  [LocalEnum.zh_CN]: {
    locale: LocalEnum.zh_CN,
    label: 'Chinese',
    icon: 'ic-locale_zh_CN',
    antdLocal: zh_CN
  },
  [LocalEnum.en_US]: {
    locale: LocalEnum.en_US,
    label: 'English',
    icon: 'ic-locale_en_US',
    antdLocal: en_US
  }
}

export const useLocale = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: Locale) => {
    i18n.changeLanguage(lng)
  }

  const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale

  const language = LanguageMap[locale]

  return { locale, language, changeLanguage }
}
