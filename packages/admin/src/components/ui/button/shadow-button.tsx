import clsx from 'clsx'

interface ShodowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  shadow?: boolean
}

const ShodowButton: React.FC<ShodowButtonProps> = ({ children, className, shadow = false, ...props }) => {
  return (
    <button
      className={clsx(
        'flex w-full cursor-pointer items-center justify-center rounded-[12px] border border-solid border-light',
        shadow && 'shadow-light',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ShodowButton
