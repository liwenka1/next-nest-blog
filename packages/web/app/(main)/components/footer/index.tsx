'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

const SegmentedControl = ({ options }: { options: string[] }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <div className="flex rounded-full bg-gray-200 p-1">
      {options.map((option, index) => (
        <div key={option} className="relative">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              selectedOption === option ? 'text-white' : 'text-gray-700'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
          {selectedOption === option && (
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

const Footer = () => {
  const options = ['Left', 'Center', 'Right']

  return (
    <footer>
      <Button>日</Button>
      <Button>系统</Button>
      <Button>月</Button>
      <div className="flex items-center justify-center">
        <SegmentedControl options={options} />
      </div>
    </footer>
  )
}

export default Footer
