import clsx from 'clsx'

import DashboardPng from '@/assets/auth/dashboard.png'
interface AuthImageProps {
  type: 'LOGIN' | 'REGISTER'
}

const AuthImage: React.FC<AuthImageProps> = ({ type }) => {
  return (
    <div
      className={clsx(
        'bg-color_overlay hidden flex-col items-center justify-center gap-[80px] bg-image_overlay bg-cover bg-center bg-no-repeat',
        'mlg:flex'
      )}
    >
      <span className={clsx('max-w-[480px] text-center text-2xl font-[700]', 'xl:text-3xl')}>
        {type === 'LOGIN' ? 'Hi, Welcome back' : 'Manage the job'}
      </span>
      <img className={clsx('max-w-[480px]', 'xl:max-w-[560px]')} src={DashboardPng} alt="DashboardPng" />
      <span>一个世界最好的中后台管理系统</span>
    </div>
  )
}

export default AuthImage
