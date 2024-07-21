import { RiUserReceivedLine } from 'react-icons/ri'

import { Button } from '@/components/ui/button'

const UserAuth = () => {
  return (
    <div>
      <Button className="rounded-full" variant="outline" size="icon">
        <RiUserReceivedLine />
      </Button>
    </div>
  )
}

export default UserAuth
