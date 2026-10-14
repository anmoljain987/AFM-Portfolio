export const LINKS = {
  instagram: 'https://instagram.com/afm.live',
  handle: '@afm.live',
  site: 'https://afm.live',
}

export const DJ = {
  alias: 'A.FM',
  say: 'pronounced "A F M"',
  tag: 'DJ · Professional Song Finder',
  city: 'Chandigarh',
  line1: 'I play',
  line2: 'the records',
  line3: 'and I write',
  line4: 'the software.',
  sub: 'I play, and I write the software I play with. A.FM started because no tool did what I actually needed between a messy library and a clean set.',
}

/** Straight off the A.FM bio. The song-finder line is the spine of this page:
 *  it is what he does on the decks and what afm.live does on disk. */
export const SOUND = {
  genres: ['House', 'Tech', 'Whatever slaps'],
  body: 'House and tech, and anything that slaps. The job is the same either way: find the record nobody else is playing, then put it somewhere it lands.',
}

/** Rooms played. Dates inferred from the capture dates of the folder media,
 *  so they need confirming before this goes public. City only where known. */
export const PLAYED: { venue: string; city?: string; when: string }[] = [
  { venue: '9xm', when: 'Sep 2026' },
  { venue: 'Sunrise Club', when: 'Sep 2026' },
  { venue: 'District 909', when: 'Sep 2026' },
  { venue: 'Garam Masala', when: 'Jul 2026' },
  { venue: 'Day Dreams', when: 'Jun 2026' },
  { venue: 'Random Fridays', when: 'May 2026' },
  { venue: 'House & Beyond', city: 'New Delhi', when: 'Feb 2026' },
  { venue: 'Kampai', when: 'Feb 2026' },
  { venue: 'Komo House', city: 'Chandigarh', when: 'Feb 2026' },
  { venue: 'Komo House', city: 'Chandigarh', when: 'Jan 2026' },
  { venue: 'OKO', when: 'Nov 2025' },
]

/** Shot in the rooms above. */
export const SHOTS = [
  { src: '/afm/komo-house.jpg', alt: 'Behind the decks under the Komo House sign' },
  { src: '/afm/decks.jpg', alt: 'Hands on the CDJs' },
  { src: '/afm/crowd.jpg', alt: 'Crowd at House & Beyond' },
  { src: '/afm/hands.jpg', alt: 'Hands up on the floor' },
  { src: '/afm/komo-night.jpg', alt: 'Playing at Komo House' },
]

/** Mixes to listen to. Empty until links arrive — the section hides itself. */
export const MIXES: { title: string; platform: string; url: string; when?: string }[] = []

/** afm.live — the product, described from what it really does. */
export const AFM = {
  name: 'afm.live',
  kicker: 'Local-first DJ library workstation',
  blurb: 'Bring a library together from Spotify, SoundCloud, Rekordbox and local drives. Find what is missing, acquire the best legally-available quality, and prep clean, well-cued sets. Everything runs on your own machine. No cloud account, no subscription, nothing uploaded.',
  stack: ['React', 'Vite', 'TypeScript', 'Node', 'Local-first', 'Monorepo'],
  features: [
    { t: 'Library & Prep', d: 'Scan a folder and get a deterministic prep plan: transition notes, risk flags, suggested hot cues, Spotify BPM and key enrichment.' },
    { t: 'Quality report', d: 'Flags lossy files under your bitrate threshold, with one click to send a track back to the wishlist and re-acquire a better copy.' },
    { t: 'Wishlist', d: 'Answers the only question that matters: what am I missing and how do I get it. Cross-references Spotify and Rekordbox against what is already on disk, then scores SoundCloud candidates by confidence.' },
    { t: 'Organize', d: 'Strips download junk from filenames and sorts by genre, BPM, energy or date. Preview, then apply. Non-destructive.' },
    { t: 'Duplicates', d: 'Finds duplicate groups and merges them, always keeping the highest-quality copy.' },
    { t: 'Downloads', d: 'A live queue with progress streamed in real time, plus an inbox activity feed.' },
  ],
}

/** Empty until Anmol fills it. The section hides itself when the list is empty. */
export const SETS: { title: string; where: string; when: string; url?: string }[] = []

export const CROSSOVER = {
  t: 'Why both pages exist',
  d: 'The engineering is not a day job that funds the music, and the music is not a hobby that decorates the engineering. AFM exists because I hit a problem as a DJ and had the tools to solve it as an engineer. Most of what I am good at came from doing both.',
}
