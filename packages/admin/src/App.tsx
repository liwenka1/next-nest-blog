import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'antd/dist/reset.css'

import { useSettingStore } from './stores'
import router from './router'
import { ThemeProvider } from './components'
import { themePresetsColors } from './config/theme'

import { ThemeMode } from '#/enum'
import { useLocale } from './hooks/use-locale'

dayjs.locale('zh-cn')

const App = () => {
  const { themePresets, themeMode } = useSettingStore()

  const algorithm = themeMode === ThemeMode.Light ? theme.defaultAlgorithm : theme.darkAlgorithm

  const { language } = useLocale()

  return (
    <ThemeProvider>
      <ConfigProvider
        locale={language.antdLocal}
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
