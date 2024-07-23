import { RiUserReceivedLine } from 'react-icons/ri'

import { Button } from '@/components/ui/button'
import LoginDialog from './components/login-dialog'

const UserAuth = () => {
  return (
    <div>
      <LoginDialog>
        <Button className="rounded-full" variant="outline" size="icon">
          <RiUserReceivedLine />
        </Button>
      </LoginDialog>
    </div>
  )
}

export default UserAuth
