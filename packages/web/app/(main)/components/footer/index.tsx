import { RiSunLine, RiComputerLine, RiMoonLine } from 'react-icons/ri'

import { ModeToggle } from './components'

const Footer = () => {
  const options: {
    mode: 'light' | 'system' | 'dark'
    icon: React.ReactNode
  }[] = [
    { mode: 'light', icon: <RiSunLine /> },
    { mode: 'system', icon: <RiComputerLine /> },
    { mode: 'dark', icon: <RiMoonLine /> }
  ]

  return (
    <footer>
      <div className="flex items-center justify-center">
        <ModeToggle options={options} />
      </div>
    </footer>
  )
}

export default Footer
