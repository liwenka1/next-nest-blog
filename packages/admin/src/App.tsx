import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import { useGlobalStore } from '@/stores'
import router from './router'
import { useI18n } from './locales'
import { ThemeProvider } from './components'

dayjs.locale('zh-cn')

const App = () => {
  const { primaryColor } = useGlobalStore()

  useI18n()

  return (
    <ThemeProvider>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: primaryColor,
            fontFamily: 'Public Sans'
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
