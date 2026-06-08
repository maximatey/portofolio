import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-pebble bg-cream px-4 py-2 text-sm text-ink',
        'placeholder:text-subdued/60',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus-visible:border-bronze',
        'transition-colors duration-200',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

export { Input }
