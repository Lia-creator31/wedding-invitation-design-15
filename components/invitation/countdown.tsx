'use client'

import { useEffect, useState } from 'react'
import { wedding } from '@/lib/wedding'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

const target = new Date(wedding.dateISO).getTime()

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units: { label: string; value?: number }[] = [
    { label: 'Days', value: timeLeft?.days },
    { label: 'Hours', value: timeLeft?.hours },
    { label: 'Minutes', value: timeLeft?.minutes },
    { label: 'Seconds', value: timeLeft?.seconds },
  ]

  return (
    <section aria-labelledby="countdown-heading" className="bg-secondary/60 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="countdown-heading" className="font-script text-4xl text-primary md:text-5xl">
          Counting down the days
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">{wedding.shortDate}</p>

        <dl className="mt-10 grid grid-cols-4 gap-2 md:gap-6">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col-reverse items-center rounded-t-full border border-border bg-card px-2 pb-5 pt-8 md:pt-10"
            >
              <dt className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                {unit.label}
              </dt>
              <dd className="text-3xl font-medium tabular-nums text-foreground md:text-5xl">
                {unit.value === undefined ? '--' : String(unit.value).padStart(2, '0')}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
