'use client'

import { motion } from 'framer-motion'

const NavBar = () => {
  const navList = [{ title: '首页' }, { title: '博客' }, { title: '关于' }]

  return (
    // <div className="flex cursor-pointer gap-4">
    //   {navList.map((item) => (
    //     <div key={item.title}>{item.title}</div>
    //   ))}
    // </div>
    <nav className="group pointer-events-auto relative rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md duration-200 dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10">
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(154.63505424062166px circle at 7.5px 291px, var(--spotlight-color) 0%, transparent 65%)'
        }}
      ></motion.div>
      <div className="flex px-4 font-medium text-zinc-800 dark:text-zinc-200">
        <div role="note" className="inline-block">
          <div>
            <motion.a
              className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
              href="/"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex items-center">
                <span className="mr-2 flex items-center">
                  <svg width="1em" height="1em" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"
                    ></path>
                  </svg>
                </span>
                <span>首页</span>
              </span>
              <motion.span
                className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0"
                layoutId="underline"
              ></motion.span>
            </motion.a>
          </div>
        </div>
        <div role="note" className="inline-block">
          <div>
            <motion.a
              className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
              href="/posts"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex items-center">
                <span>文稿</span>
              </span>
            </motion.a>
          </div>
        </div>
        <div>
          <motion.a
            className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
            href="/notes"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex items-center">
              <span>手记</span>
            </span>
          </motion.a>
        </div>
        <div role="note" className="inline-block">
          <div>
            <motion.a
              className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
              href="/timeline"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex items-center">
                <span>时光</span>
              </span>
            </motion.a>
          </div>
        </div>
        <div>
          <motion.a
            className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
            href="/friends"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex items-center">
              <span>友链</span>
            </span>
          </motion.a>
        </div>
        <div role="note" className="inline-block">
          <div>
            <motion.a
              className="relative block whitespace-nowrap px-4 py-2 transition-[padding] duration-200 hover:text-accent/80"
              href="#"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex items-center">
                <span>更多</span>
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
