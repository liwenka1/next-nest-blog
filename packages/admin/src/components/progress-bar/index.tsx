import { useProgressHook } from '@/hooks'

interface ProgressBarProps {
  children: React.ReactNode
}

const ProgressBar: React.FC<ProgressBarProps> = ({ children }) => {
  useProgressHook()

  return <>{children}</>
}

export default ProgressBar
