import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import zh from './zh'
import en from './en'

import { LocalEnum } from '#/enum'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ...en,
      ...zh
    },
    lng: LocalEnum.en_US,
    fallbackLng: LocalEnum.en_US,

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
export const { t } = i18n
