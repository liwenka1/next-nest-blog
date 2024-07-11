import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import { useSettingStore } from '@/stores'
import router from './router'
import { useI18n } from './locales'
import { ThemeProvider } from './components'
import { themePresetsColors } from './config/theme'

import { ThemeMode } from '#/enum'

dayjs.locale('zh-cn')

const App = () => {
  const { themePresets, themeMode } = useSettingStore()
  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm

  useI18n()

  return (
    <ThemeProvider>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: themePresetsColors[themePresets],
            fontFamily: 'Public Sans'
          },
          components: {
            Layout: {
              headerHeight: 72
            }
          },
          algorithm
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
