import { Flower2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloralDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-4 text-ring', className)} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-ring/70 md:w-24" />
      <Flower2 className="size-5 stroke-[1.25]" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-ring/70 md:w-24" />
    </div>
  )
}
