import clsx from 'clsx'

interface ShodowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const ShodowButton: React.FC<ShodowButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'flex w-full cursor-pointer items-center justify-center rounded-[12px] border border-solid border-light shadow-light',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ShodowButton
