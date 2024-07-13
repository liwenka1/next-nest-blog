import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('flex cursor-pointer items-center justify-center', {
  variants: {
    variant: {
      icon: 'rounded-full p-2 hover:bg-accent',
      mode: 'flex-col rounded-[16px] border border-solid bg-transparent px-[16px] py-[20px] hover:bg-accent',
      shadow: 'w-full rounded-[12px] border border-solid border-light'
    }
  }
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export default Button
