import DashboardPng from '@/assets/auth/dashboard.png'

interface AuthImageProps {
  type: 'LOGIN' | 'REGISTER'
}

const AuthImage: React.FC<AuthImageProps> = ({ type }) => {
  return (
    <div className="bg-overlay flex flex-1 flex-col items-center justify-center gap-[80px]">
      <span className="max-w-[480px] text-center text-4xl font-[700]">
        {type === 'LOGIN' ? 'Hi, Welcome back' : 'Manage the job more effectively with Minimal'}
      </span>
      <img className="max-w-[720px]" src={DashboardPng} alt="DashboardPng" />
      <span>一个世界最好的中后台管理系统</span>
    </div>
  )
}

export default AuthImage
