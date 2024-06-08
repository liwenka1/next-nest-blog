import { useProgressHook } from '@/hooks'

interface ProgressBarWrapperProps {
  children: React.ReactNode
}

const ProgressBarWrapper: React.FC<ProgressBarWrapperProps> = ({ children }) => {
  useProgressHook()

  return <>{children}</>
}

export default ProgressBarWrapper
