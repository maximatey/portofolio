import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-full bg-ink text-white shadow-md hover:bg-bronze hover:shadow-bronze-glow hover:-translate-y-0.5',
        outline:
          'rounded-full border-2 border-pebble-dark bg-transparent text-ink hover:border-bronze hover:bg-bronze-tint hover:-translate-y-0.5',
        accent:
          'rounded-full bg-bronze text-white shadow-md hover:bg-amber-700 hover:shadow-bronze-glow hover:-translate-y-0.5',
        ghost:
          'rounded-lg text-subdued hover:text-ink hover:bg-sand',
        link:
          'text-bronze underline-offset-4 hover:underline p-0 h-auto rounded-none',
        nav:
          'rounded-full bg-ink text-white text-sm hover:bg-bronze transition-colors',
      },
      size: {
        default: 'h-11 px-7 py-2 text-sm',
        sm:      'h-9 px-4 text-xs',
        lg:      'h-12 px-9 text-base',
        icon:    'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
