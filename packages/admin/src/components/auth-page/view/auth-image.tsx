import AuthPng from '@/assets/auth.png'

interface AuthImageProps {
  type: 'LOGIN' | 'REGISTER'
}

const AuthImage: React.FC<AuthImageProps> = ({ type }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-around">
      <span>{type === 'LOGIN' ? 'Hi, Welcome back' : 'Manage the job more effectively with Minimal'}</span>
      <img src={AuthPng} alt="auth" />
      <span>一个世界最好的中后台管理系统</span>
    </div>
  )
}

export default AuthImage
