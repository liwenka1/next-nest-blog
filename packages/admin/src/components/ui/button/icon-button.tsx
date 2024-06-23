import clsx from 'clsx'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const IconButton: React.FC<IconButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx('flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
