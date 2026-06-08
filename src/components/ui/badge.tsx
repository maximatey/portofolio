import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:  'bg-ink text-white border border-transparent',
        outline:  'border border-pebble text-ink-soft bg-transparent',
        accent:   'border border-bronze/30 bg-bronze-tint text-bronze',
        tech:     'border border-pebble bg-sand font-mono text-xs text-ink-soft',
        remote:   'bg-blue-50 text-blue-600 border border-blue-100',
        onsite:   'bg-emerald-50 text-emerald-700 border border-emerald-100',
        thesis:   'bg-violet-50 text-violet-700 border border-violet-100',
      },
    },
    defaultVariants: { variant: 'outline' },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
