import { BrandLogo, NavBar, UserAuth } from './components'

const Header = () => {
  return (
    <header className="fixed flex h-20 w-full items-center justify-between px-20">
      <BrandLogo />
      <NavBar />
      <UserAuth />
    </header>
  )
}

export default Header
