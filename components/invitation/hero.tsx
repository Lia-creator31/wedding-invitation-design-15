import Image from 'next/image'
import { wedding } from '@/lib/wedding'
import { FloralDivider } from './floral-divider'

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-20 pt-56 md:pb-28 md:pt-40">
      <Image
        src="/images/cover-flower-left.png"
        alt=""
        width={1024}
        height={1024}
        sizes="(min-width: 768px) 34vw, 60vw"
        className="cover-flower pointer-events-none absolute -left-6 -top-6 h-auto w-[60vw] max-w-[480px] md:w-[34vw]"
      />
      <Image
        src="/images/cover-flower-right.png"
        alt=""
        width={1024}
        height={1024}
        sizes="(min-width: 768px) 34vw, 60vw"
        className="cover-flower cover-flower-right pointer-events-none absolute -right-6 -top-6 h-auto w-[60vw] max-w-[480px] md:w-[34vw]"
      />

      <div className="relative px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-xl duration-1000">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground md:text-sm">
            Together with their families
          </p>

          <h1 className="mt-6 font-script text-6xl leading-none text-primary md:text-8xl">
            <span className="block">{wedding.bride}</span>
            <span className="my-2 block font-serif text-3xl italic text-ring md:text-4xl">&amp;</span>
            <span className="block">{wedding.groom}</span>
          </h1>

          <p className="mt-8 text-lg italic text-muted-foreground md:text-xl">
            request the honour of your presence
            <br />
            at the celebration of their marriage
          </p>

          <FloralDivider className="my-8" />

          <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">{wedding.weekday}</p>
          <p className="mt-2 text-2xl font-medium uppercase tracking-[0.2em] md:text-3xl">{wedding.dateLabel}</p>
          <p className="mt-2 text-lg text-muted-foreground">{wedding.year}</p>
          <p className="mt-6 text-lg">
            <span className="font-medium">{wedding.venue.name}</span>
            <br />
            <span className="text-muted-foreground">{wedding.venue.address}</span>
          </p>

          <a
            href="#rsvp"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Kindly Reply
          </a>
        </div>
      </div>
    </header>
  )
}
