'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ModeToggleProps {
  options: {
    mode: string
    icon: React.ReactNode
  }[]
}

const ModeToggle: React.FC<ModeToggleProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].mode)

  return (
    <div className="flex rounded-full bg-gray-200 p-1">
      {options.map(({ mode, icon }) => (
        <div key={mode} className="relative">
          <button
            className={clsx(
              'px-4 py-2 text-sm font-medium transition-colors duration-200',
              selectedOption === mode ? 'text-white' : 'text-gray-700'
            )}
            onClick={() => setSelectedOption(mode)}
          >
            {icon}
          </button>
          {selectedOption === mode && (
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
