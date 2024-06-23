import clsx from 'clsx'

interface ModeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const ModeButton: React.FC<ModeButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'flex cursor-pointer flex-col items-center justify-center rounded-[16px] border border-solid bg-transparent px-[16px] py-[20px] hover:bg-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default ModeButton
