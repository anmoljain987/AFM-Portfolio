export const DJ = {
  alias: 'AFM',
  tag: 'DJ · builder of the tools I use',
  line1: 'I play',
  line2: 'the records',
  line3: 'and I write',
  line4: 'the software.',
  sub: 'I play, and I write the software I play with. AFM started because no tool did what I actually needed between a messy library and a clean set.',
}

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
