import * as React from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-lg border border-pebble bg-cream px-4 py-3 text-sm text-ink',
        'placeholder:text-subdued/60',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze/40 focus-visible:border-bronze',
        'transition-colors duration-200 resize-vertical',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea }
