import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './zh'
import en from './en'

export const useI18n = () => {
  i18n.use(initReactI18next).init({
    resources: {
      ...en,
      ...zh
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  })

  const changeLanguage = (lng: 'zh' | 'en') => {
    i18n.changeLanguage(lng)
  }

  return changeLanguage
}
