import { RiSunLine, RiComputerLine, RiMoonLine } from 'react-icons/ri'

import { Button } from '@/components/ui/button'
import { ModeToggle } from './components'

const Footer = () => {
  const options = [
    {
      mode: 'light',
      icon: <RiSunLine />
    },
    { mode: 'system', icon: <RiComputerLine /> },
    { mode: 'dark', icon: <RiMoonLine /> }
  ]

  return (
    <footer>
      <Button>日</Button>
      <Button>系统</Button>
      <Button>月</Button>
      <div className="flex items-center justify-center">
        <ModeToggle options={options} />
      </div>
    </footer>
  )
}

export default Footer
