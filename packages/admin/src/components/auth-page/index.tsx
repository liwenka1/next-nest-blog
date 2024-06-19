import { AuthForm, AuthImage } from './view'

interface AuthPageProps {
  type: 'LOGIN' | 'REGISTER' | 'FORTPASSWORD'
}

const AuthPage: React.FC<AuthPageProps> = ({ type }) => {
  return (
    <div className="flex h-full w-full">
      <AuthImage type={type} />
      <AuthForm type={type} />
    </div>
  )
}

export default AuthPage
