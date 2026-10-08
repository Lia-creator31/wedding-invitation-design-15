'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { DoorOpen } from 'lucide-react'

type Phase = 'closed' | 'opening' | 'done'

const STARS = Array.from({ length: 40 }, (_, i) => ({
  left: (i * 53) % 100,
  top: (i * 29) % 45,
  size: 1 + ((i * 7) % 3),
  delay: (i * 0.37) % 4,
}))

const DUST = Array.from({ length: 16 }, (_, i) => ({
  left: 30 + ((i * 41) % 40),
  delay: (i * 0.9) % 7,
  duration: 6 + ((i * 5) % 6),
}))

const OPEN_DURATION_MS = 3600

type PalaceGateProps = {
  initials?: string
  onEnter: () => void
}

export function PalaceGate({ initials = 'A & R', onEnter }: PalaceGateProps) {
  const [phase, setPhase] = useState<Phase>('closed')
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (phase !== 'opening') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(
      () => {
        setPhase('done')
        onEnter()
      },
      reduceMotion ? 600 : OPEN_DURATION_MS,
    )
    return () => window.clearTimeout(timer)
  }, [phase, onEnter])

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current
    if (!stage || phase !== 'closed') return
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    stage.style.setProperty('--gate-rx', `${y * 4}deg`)
    stage.style.setProperty('--gate-ry', `${-x * 6}deg`)
  }

  function resetTilt() {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty('--gate-rx', '0deg')
    stage.style.setProperty('--gate-ry', '0deg')
  }

  function handleEnter() {
    resetTilt()
    setPhase('opening')
  }

  if (phase === 'done') return null

  return (
    <div
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      data-phase={phase}
      className="gate-stage fixed inset-0 z-[110] overflow-hidden bg-[#05060c]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#1b2a47_0%,#0c0f1d_45%,#05060c_100%)]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="gate-star absolute rounded-full bg-[#f5e6c8]"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="gate-world absolute inset-0" aria-hidden="true">
        <div className="gate-wall absolute inset-0" />

        <div className="gate-flower absolute -left-10 -top-10 w-[60vw] max-w-[460px] md:w-[34vw]">
          <Image src="/images/cover-flower-left.png" alt="" width={1024} height={1024} priority className="h-auto w-full" />
        </div>
        <div className="gate-flower absolute -right-10 -top-10 w-[60vw] max-w-[460px] md:w-[34vw]">
          <Image src="/images/cover-flower-right.png" alt="" width={1024} height={1024} priority className="h-auto w-full" />
        </div>

        <div className="gate-layout absolute inset-0 flex flex-col items-center justify-end pb-[24vh] md:pb-[22vh]">
          <div className="gate-heading mb-14 flex flex-col items-center text-center md:mb-16">
            <p className="font-serif text-xs uppercase tracking-[0.5em] text-[#c9a45c] md:text-sm">Selamat Datang</p>
            <p className="mt-1 font-serif text-sm italic text-[#f5e6c8]/80 md:text-base">di Istana Cinta Kami</p>
          </div>

          <div className="gate-arch relative">
            <div className="gate-arch-frame absolute -inset-[14px] rounded-t-full" />

            <div className="gate-interior absolute inset-0 overflow-hidden rounded-t-full">
              <Image
                src="/images/palace-hall.png"
                alt=""
                fill
                priority
                sizes="400px"
                className="gate-interior-img object-cover"
              />
              <div className="gate-interior-light absolute inset-0" />
              {DUST.map((d, i) => (
                <span
                  key={i}
                  className="gate-dust absolute bottom-0 size-1 rounded-full bg-[#f5d48a]"
                  style={{
                    left: `${d.left}%`,
                    animationDelay: `${d.delay}s`,
                    animationDuration: `${d.duration}s`,
                  }}
                />
              ))}
            </div>

            <div className="gate-door gate-door-left absolute inset-y-0 left-0">
              <DoorFace side="left" />
              <span className="gate-door-edge gate-door-edge-left" />
            </div>
            <div className="gate-door gate-door-right absolute inset-y-0 right-0">
              <DoorFace side="right" />
              <span className="gate-door-edge gate-door-edge-right" />
            </div>

            <div className="gate-keystone absolute left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full md:size-20">
              <span className="font-script text-xl text-[#f5e6c8] md:text-2xl">{initials}</span>
            </div>

            <div className="gate-pillar gate-pillar-left absolute bottom-0">
              <span className="gate-pillar-capital" />
              <span className="gate-pillar-shaft" />
              <span className="gate-pillar-base" />
            </div>
            <div className="gate-pillar gate-pillar-right absolute bottom-0">
              <span className="gate-pillar-capital" />
              <span className="gate-pillar-shaft" />
              <span className="gate-pillar-base" />
            </div>

            <div className="gate-floor absolute left-1/2 top-full">
              <div className="gate-carpet absolute inset-y-0 left-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>

        <div className="gate-garland pointer-events-none absolute inset-x-0 bottom-0 h-[22vh]">
          <Image
            src="/images/garland-dark.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_85%]"
          />
        </div>
      </div>

      <div className="gate-flash pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="gate-cta absolute inset-x-0 bottom-[4vh] z-10 flex flex-col items-center gap-3 px-6">
        <button
          type="button"
          onClick={handleEnter}
          disabled={phase !== 'closed'}
          className="cover-button group relative inline-flex items-center gap-3 rounded-full border border-[#c9a45c]/60 bg-[linear-gradient(135deg,#6b1d2f_0%,#3a1424_50%,#1b2a47_100%)] px-8 py-3.5 font-serif text-base font-semibold uppercase tracking-[0.25em] text-[#f5e6c8] shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:px-10 md:py-4 md:text-lg"
        >
          <DoorOpen className="size-5" aria-hidden="true" />
          Masuki Istana
        </button>
        <p className="font-serif text-xs italic tracking-wide text-[#f5e6c8]/60">Ketuk pintu untuk membuka undangan</p>
      </div>
    </div>
  )
}

function DoorFace({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`gate-door-face gate-door-face-${side} relative h-full w-full overflow-hidden`}>
      <div className="gate-door-panel gate-door-panel-top" />
      <div className="gate-door-panel gate-door-panel-mid" />
      <div className="gate-door-panel gate-door-panel-bottom" />
      <span className={`gate-door-knocker gate-door-knocker-${side}`} />
      <span className={`gate-door-seam gate-door-seam-${side}`} />
    </div>
  )
}
