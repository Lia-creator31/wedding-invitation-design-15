import { CalendarHeart, GlassWater, MapPin, Music, Shirt } from 'lucide-react'
import { getMapUrl, wedding } from '@/lib/wedding'
import { FloralDivider } from './floral-divider'

const icons = [CalendarHeart, GlassWater, Music]

export function EventDetails() {
  return (
    <section aria-labelledby="details-heading" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">The Celebration</p>
        <h2 id="details-heading" className="mt-4 font-script text-5xl text-primary md:text-6xl">
          Order of the day
        </h2>
        <FloralDivider className="mt-6" />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {wedding.events.map((event, i) => {
            const Icon = icons[i]
            return (
              <li
                key={event.title}
                className="flex flex-col items-center rounded-t-full border border-border bg-card px-6 pb-10 pt-14"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-6 stroke-[1.25]" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-medium uppercase tracking-[0.15em]">{event.title}</h3>
                <p className="mt-2 text-lg italic text-primary">{event.time}</p>
                <p className="mt-1 font-medium">{event.place}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{event.note}</p>
              </li>
            )
          })}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 text-left">
            <MapPin className="mt-1 size-5 shrink-0 stroke-[1.5] text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em]">The Venue</h3>
              <p className="mt-2 text-lg">{wedding.venue.name}</p>
              <p className="text-muted-foreground">{wedding.venue.address}</p>
              <a
                href={getMapUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-primary underline decoration-ring underline-offset-4 hover:decoration-primary"
              >
                View on map
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 text-left">
            <Shirt className="mt-1 size-5 shrink-0 stroke-[1.5] text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em]">Dress Code</h3>
              <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{wedding.dressCode}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
