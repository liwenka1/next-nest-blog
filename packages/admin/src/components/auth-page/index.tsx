import { AuthForm } from './view'
import LoingPng from '@/assets/login.png'

interface AuthPageProps {
  type: 'LOGIN' | 'REGISTER'
}

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  return (
    <div className="w-full h-full flex">
      <div className="flex-1 flex items-center justify-center">
        <img src={LoingPng} alt="login" />
      </div>
      <AuthForm type={type} />
    </div>
  )
}

export default AuthPage
