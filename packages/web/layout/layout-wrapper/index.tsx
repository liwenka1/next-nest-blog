import { Footer, Header } from './components'

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
