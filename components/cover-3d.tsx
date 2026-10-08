'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MailOpen } from 'lucide-react'

const PETALS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 1.3) % 12,
  duration: 10 + ((i * 7) % 9),
  size: 8 + ((i * 5) % 10),
  color: i % 3 === 0 ? '#c9a45c' : i % 2 === 0 ? '#6b1d2f' : '#2b3d63',
}))

export function Cover3D() {
  const [opened, setOpened] = useState(false)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const scene = sceneRef.current
    if (!scene) return
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    scene.style.setProperty('--rx', `${-y * 8}deg`)
    scene.style.setProperty('--ry', `${x * 10}deg`)
    scene.style.setProperty('--px', `${x}`)
    scene.style.setProperty('--py', `${y}`)
  }

  function handlePointerLeave() {
    const scene = sceneRef.current
    if (!scene) return
    scene.style.setProperty('--rx', '0deg')
    scene.style.setProperty('--ry', '0deg')
    scene.style.setProperty('--px', '0')
    scene.style.setProperty('--py', '0')
  }

  return (
    <div
      ref={sceneRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden={opened}
      className={`cover-scene fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-[transform,opacity] duration-[1400ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        opened ? 'pointer-events-none -translate-y-full opacity-0' : ''
      }`}
    >
      {/* Elegant layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a0a10_0%,#0c0f1d_45%,#150308_80%,#05060c_100%)]" />
      <div className="cover-glow absolute left-1/2 top-1/2 size-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(107,29,47,0.55)_0%,rgba(27,42,71,0.35)_50%,transparent_72%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,164,92,0.12),transparent_55%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.9)]" />

      {/* Gold ornamental frame lines */}
      <div className="pointer-events-none absolute inset-4 rounded-sm border border-[#c9a45c]/25 md:inset-8" />
      <div className="pointer-events-none absolute inset-6 rounded-sm border border-[#c9a45c]/10 md:inset-11" />

      {/* Falling petals */}
      <div className="pointer-events-none absolute inset-0">
        {PETALS.map((p, i) => (
          <span
            key={i}
            className="cover-petal absolute -top-8 rounded-[60%_0_60%_0] opacity-70"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Flowers (far layer) */}
      <div className="cover-layer-flower-left pointer-events-none absolute -left-6 -top-6 w-[55vw] max-w-[520px] md:w-[38vw]">
        <div className="cover-sway-left">
          <Image
            src="/images/cover-flower-left.png"
            alt=""
            width={1024}
            height={1024}
            priority
            className="cover-flower h-auto w-full"
          />
        </div>
      </div>
      <div className="cover-layer-flower-right pointer-events-none absolute -right-6 -top-6 w-[55vw] max-w-[520px] md:w-[38vw]">
        <div className="cover-sway-right">
          <Image
            src="/images/cover-flower-right.png"
            alt=""
            width={1024}
            height={1024}
            priority
            className="cover-flower cover-flower-right h-auto w-full"
          />
        </div>
      </div>

      {/* Center: photo + button */}
      <div className="cover-center relative z-20 flex flex-col items-center gap-10 px-6">
        <div className="cover-float relative">
          <div className="absolute -inset-6 rounded-t-full bg-[radial-gradient(circle,rgba(201,164,92,0.35),transparent_70%)] blur-2xl" />
          <div className="cover-photo-frame relative h-[340px] w-[250px] rounded-t-full p-[3px] md:h-[400px] md:w-[290px]">
            <div className="relative h-full w-full overflow-hidden rounded-t-full border border-[#c9a45c]/40 bg-black">
              <Image
                src="/images/childhood.png"
                alt="Foto masa kecil kedua mempelai"
                fill
                priority
                sizes="290px"
                className="cover-photo object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,4,8,0.75),transparent_45%)]" />
              <div className="cover-shine absolute inset-0" />
            </div>
          </div>
          <div className="mx-auto mt-4 h-3 w-40 rounded-full bg-black/70 blur-md" />
        </div>

        <button
          type="button"
          onClick={() => setOpened(true)}
          className="cover-button group relative inline-flex items-center gap-3 rounded-full border border-[#c9a45c]/60 bg-[linear-gradient(135deg,#6b1d2f_0%,#3a1424_50%,#1b2a47_100%)] px-10 py-4 font-serif text-lg font-semibold uppercase tracking-[0.25em] text-[#f5e6c8] shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a45c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <MailOpen className="size-5" aria-hidden="true" />
          Buka Undangan
        </button>
      </div>
    </div>
  )
}
