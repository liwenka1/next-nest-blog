import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const BrandLogo = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default BrandLogo
