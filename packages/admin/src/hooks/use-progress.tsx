import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export const useProgress = () => {
  const location = useLocation()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    handleStart()
    handleStop()

    return () => {
      handleStop()
    }
  }, [location])
}
