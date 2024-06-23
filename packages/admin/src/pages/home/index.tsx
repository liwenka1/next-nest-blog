import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      Home Page
      <h2 className="dark:text-red-700">{t('Welcome to React')}</h2>
      <Button type="primary">测试</Button>
    </div>
  )
}

export default Home
