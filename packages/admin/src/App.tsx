import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import { useSettingStore } from '@/stores'
import router from './router'
import { useI18n } from './locales'
import { ThemeProvider } from './components'
import { themePresetsColors } from './config/theme'

dayjs.locale('zh-cn')

const App = () => {
  const { setting } = useSettingStore()

  useI18n()

  return (
    <ThemeProvider>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: themePresetsColors[setting.themePresets],
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
