export const wedding = {
  bride: 'Amelia',
  groom: 'Rafael',
  dateISO: '2026-12-12T16:00:00-05:00',
  weekday: 'Saturday',
  dateLabel: 'December 12th',
  year: 'Two thousand twenty-six',
  shortDate: '12 · 12 · 2026',
  rsvpBy: 'November 12, 2026',
  rsvpEmail: 'rsvp@ameliaandrafael.com',
  venue: {
    name: 'The Rose Garden Estate',
    address: '1450 Magnolia Lane, Charleston, SC',
  },
  events: [
    {
      title: 'Ceremony',
      time: '4:00 in the afternoon',
      place: 'The Garden Pavilion',
      note: 'Please arrive by 3:30 to be seated among the roses.',
    },
    {
      title: 'Cocktail Hour',
      time: '5:00 in the evening',
      place: 'The Peony Terrace',
      note: 'Champagne, canapés and a string quartet at sunset.',
    },
    {
      title: 'Reception',
      time: '6:30 in the evening',
      place: 'The Grand Conservatory',
      note: 'Dinner, toasts and dancing beneath the blooms.',
    },
  ],
  dressCode: 'Garden formal — soft pastels and florals are most welcome.',
} as const

export function getCalendarUrl() {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Wedding of ${wedding.bride} & ${wedding.groom}`,
    dates: '20261212T210000Z/20261213T040000Z',
    details: 'Ceremony at 4:00 PM, followed by cocktails and reception.',
    location: `${wedding.venue.name}, ${wedding.venue.address}`,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function getMapUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${wedding.venue.name} ${wedding.venue.address}`,
  )}`
}
