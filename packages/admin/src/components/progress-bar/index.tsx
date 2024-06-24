import { useProgress } from '@/hooks'

interface ProgressBarProps {
  children: React.ReactNode
}

const ProgressBar: React.FC<ProgressBarProps> = ({ children }) => {
  useProgress()

  return <>{children}</>
}

export default ProgressBar
