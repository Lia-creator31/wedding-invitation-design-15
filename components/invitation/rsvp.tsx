import { CalendarPlus, Mail } from 'lucide-react'
import Image from 'next/image'
import { getCalendarUrl, wedding } from '@/lib/wedding'

export function Rsvp() {
  const mailto = `mailto:${wedding.rsvpEmail}?subject=${encodeURIComponent(
    `RSVP — ${wedding.bride} & ${wedding.groom}`,
  )}&body=${encodeURIComponent('Name(s):\nAttending (yes/no):\nNumber of guests:\nDietary requirements:\n')}`

  return (
    <section id="rsvp" aria-labelledby="rsvp-heading" className="relative scroll-mt-8 overflow-hidden">
      <div className="relative z-10 px-6 pt-20 text-center md:pt-24">
        <div className="mx-auto max-w-xl">
          <h2 id="rsvp-heading" className="font-script text-5xl text-primary md:text-6xl">
            Kindly reply
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We would be delighted to have you with us. Please let us know if you can attend by{' '}
            <span className="font-medium text-foreground">{wedding.rsvpBy}</span>.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={mailto}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
            >
              <Mail className="size-4" aria-hidden="true" />
              RSVP by email
            </a>
            <a
              href={getCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
            >
              <CalendarPlus className="size-4" aria-hidden="true" />
              Save the date
            </a>
          </div>

          <p className="mt-12 font-script text-3xl text-foreground md:text-4xl">
            With love, {wedding.bride} &amp; {wedding.groom}
          </p>
        </div>
      </div>

      <div className="relative -ml-[30%] -mt-[12%] w-[160%] md:ml-0 md:-mt-[10%] md:w-full">
        <Image
          src="/images/garland-dark.png"
          alt=""
          width={1376}
          height={768}
          sizes="160vw"
          className="h-auto w-full mix-blend-lighten [mask-image:linear-gradient(to_top,black_55%,transparent_90%)]"
        />
      </div>
    </section>
  )
}
