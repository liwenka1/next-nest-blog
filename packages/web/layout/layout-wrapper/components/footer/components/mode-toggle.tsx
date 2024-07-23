'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useThemeModeStore } from '@/stores/use-theme-mode'

interface ModeToggleProps {
  options: {
    mode: 'light' | 'system' | 'dark'
    icon: React.ReactNode
  }[]
}

const ModeToggle: React.FC<ModeToggleProps> = ({ options }) => {
  const { setTheme } = useTheme()
  const { themeMode, setThemeMode } = useThemeModeStore()

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode, setTheme])

  return (
    <div className="flex rounded-full bg-gray-200 p-1">
      {options.map(({ mode, icon }) => (
        <div key={mode} className="relative">
          <button
            className={clsx(
              'px-4 py-2 text-sm font-medium transition-colors duration-200',
              themeMode === mode ? 'text-white' : 'text-gray-700'
            )}
            onClick={() => setThemeMode(mode)}
          >
            {icon}
          </button>
          {themeMode === mode && (
            <motion.div
              className="absolute inset-0 z-10 rounded-full bg-blue-500"
              layoutId="highlight"
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default ModeToggle
