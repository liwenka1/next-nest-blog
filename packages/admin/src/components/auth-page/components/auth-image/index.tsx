import clsx from 'clsx'

import DashboardPng from '@/assets/auth/dashboard.png'
interface AuthImageProps {
  type: 'LOGIN' | 'REGISTER' | 'FORTPASSWORD'
}

const AuthImage: React.FC<AuthImageProps> = ({ type }) => {
  return (
    <div
      className={clsx(
        'hidden max-w-[480px] flex-col items-center justify-center gap-[64px] bg-background bg-cover bg-center bg-no-repeat px-[24px] pb-[24px]',
        'mlg:flex'
      )}
    >
      <span className={clsx('w-full text-center text-2xl font-[700]', 'xl:text-3xl')}>
        {type === 'LOGIN' ? 'Hi, Welcome back' : 'Manage the job'}
      </span>
      <img className={clsx('w-full')} src={DashboardPng} alt="DashboardPng" />
      <span>一个世界最好的中后台管理系统</span>
    </div>
  )
}

export default AuthImage
