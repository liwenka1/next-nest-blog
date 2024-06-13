import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      Home Page
      <h2>{t('Welcome to React')}</h2>
    </div>
  )
}

export default Home
