'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

const Footer = () => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <footer>
      <Button>日</Button>
      <Button>系统</Button>
      <Button>月</Button>
      <div className="h-20 w-72 bg-red-200" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="h-20 w-20 bg-white" layout transition={spring} />
      </div>
      <motion.div layout />
    </footer>
  )
}

export default Footer
