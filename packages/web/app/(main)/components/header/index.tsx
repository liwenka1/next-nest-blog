import { BrandLogo, NavBar, UserAuth } from './components'

const Header = () => {
  return (
    <header className="flex justify-between fixed w-full">
      <BrandLogo />
      <NavBar />
      <UserAuth />
    </header>
  )
}

export default Header
