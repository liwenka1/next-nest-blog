import { HeaderBar } from '../dashboard-layout/components'
import { AuthForm, AuthImage } from './components'

interface AuthPageProps {
  type: 'LOGIN' | 'REGISTER' | 'FORTPASSWORD'
}

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar type="AUTH" />
      <div className="flex flex-1">
        <AuthImage type={type} />
        <AuthForm type={type} />
      </div>
    </div>
  )
}

export default AuthPage
