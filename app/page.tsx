import Image from 'next/image'
import { InvitationExperience } from '@/components/invitation-experience'

export default function Page() {
  return (
    <InvitationExperience>
      <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#0c0f1d] px-6 py-24 text-center text-[#f5e6c8]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,29,47,0.35),transparent_65%)]" />
        <Image
          src="/images/bouquet-dark.png"
          alt="Buket bunga mawar burgundy dan hydrangea navy"
          width={1024}
          height={1024}
          className="relative h-auto w-64 mix-blend-lighten md:w-80"
        />
        <p className="relative mt-6 font-serif text-sm uppercase tracking-[0.5em] text-[#c9a45c]">The Wedding Of</p>
        <h1 className="relative mt-3 font-script text-5xl md:text-7xl">Mempelai Berdua</h1>
        <p className="relative mt-6 max-w-md font-serif text-lg italic leading-relaxed text-[#f5e6c8]/80">
          Dengan penuh sukacita, kami mengundang Anda untuk hadir dan memberikan doa restu di hari bahagia kami.
        </p>
        <Image
          src="/images/garland-dark.png"
          alt=""
          width={1376}
          height={768}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full mix-blend-lighten opacity-70"
        />
      </main>
    </InvitationExperience>
  )
}
