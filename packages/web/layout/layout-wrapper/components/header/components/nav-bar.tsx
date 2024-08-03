'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiPantoneLine, RiArchiveLine, RiGhostLine } from 'react-icons/ri'

const NavBar = () => {
  const pathName = usePathname()
  const navList = [
    { title: '首页', href: '/', icon: <RiPantoneLine /> },
    { title: '博客', href: '/posts', icon: <RiArchiveLine /> },
    { title: '关于', href: '/about', icon: <RiGhostLine /> }
  ]

  return (
    <nav className="group pointer-events-auto relative rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md duration-200 dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10">
      <div className="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
        {navList.map((item) => (
          <Link href={item.href} key={item.title}>
            <motion.div
              className={clsx(
                'relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80',
                pathName === item.href ? 'text-accent' : 'hover:text-accent/80'
              )}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex items-center">
                <span className="mr-2 flex items-center">{item.icon}</span>
                <span>{item.title}</span>
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
