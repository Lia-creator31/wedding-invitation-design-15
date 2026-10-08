import Image from 'next/image'

export function OurStory() {
  return (
    <section aria-labelledby="story-heading" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <Image
          src="/images/bouquet-dark.png"
          alt="Bridal bouquet of burgundy and ivory roses with navy hydrangea and gold leaves"
          width={1024}
          height={1024}
          sizes="(min-width: 768px) 480px, 90vw"
          className="mx-auto h-auto w-full max-w-sm mix-blend-lighten [mask-image:radial-gradient(closest-side,black_70%,transparent)] md:max-w-none"
        />
        <div className="text-center md:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Our Story</p>
          <h2 id="story-heading" className="mt-4 font-script text-5xl text-primary md:text-6xl">
            Love in full bloom
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We met one spring morning at a flower market, both reaching for the very last bunch of peonies. Rafael
            let Amelia have them — and asked for her number instead. Six springs later, we can&apos;t imagine
            celebrating this next chapter without the people we love most.
          </p>
          <blockquote className="mt-8 border-l-2 border-ring pl-5 text-left text-xl italic">
            {'"Where flowers bloom, so does hope."'}
            <footer className="mt-2 text-sm not-italic uppercase tracking-[0.2em] text-muted-foreground">
              Lady Bird Johnson
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
