/**
 * The studio layer — everything the site says about itself rather than about
 * one game. Kept here so the name lives in exactly one place: it appears in
 * the wordmark, the page title, the footer and the copyright line, and a
 * rename should be a one-line change, not a search-and-replace.
 */
export const STUDIO_NAME = 'One Phone Games'

/** Used where the wordmark is set in capitals and needs to break per word. */
export const STUDIO_WORDMARK = ['ONE', 'PHONE', 'GAMES']

export const STUDIO_TAGLINE = 'Party games for one phone and a room full of liars.'

export const STUDIO_EMAIL = 'support@bunkergame.app'

export interface Game {
  id: string
  name: string
  /** One line, the pitch a person repeats to their friends. */
  pitch: string
  /** The paragraph under it — what actually happens at the table. */
  body: string
  players: string
  /** The game's own accent. The studio page has none of its own: the only
   *  colour on it comes from the games, which is what the design system's
   *  "neutral background, let the work shine" rule asks for. */
  accent: string
  image: string
  icon: string
  href: string
  /** Shipped games link to the Store; one in review says so instead of
   *  pretending to be live. */
  status: 'live' | 'review'
  storeUrl?: string
  facts: string[]
}

export const GAMES: Game[] = [
  {
    id: 'bunker',
    name: 'Bunker',
    pitch: 'The bomb fell. There is one shelter and not enough room.',
    body:
      'Everyone draws a character they did not choose — a job, a body, a secret — and argues for their own life. Each round the table votes somebody out into the fallout. The last survivors inherit what is left.',
    players: '4–12 players',
    accent: '#f2384f',
    image: '/shots/01.jpg',
    icon: '/app-icon.jpg',
    href: '/bunker',
    status: 'live',
    storeUrl: 'https://apps.apple.com/app/bunker-survival-party-game/id6766305541',
    facts: ['Hidden traits', 'Live voting', 'No host needed'],
  },
  {
    id: 'mafia',
    name: 'Mafia & Werewolf',
    pitch: 'Two classics in one app, and nobody has to sit out to run them.',
    body:
      'The phone goes round the circle and every living player takes an identical turn — same screen, same seconds — so a role can never be read off how someone played it. The app deals, narrates the night, times the day and counts the votes.',
    players: '4–20 players',
    accent: '#9B6FFF',
    image: '/games/mafia-hero.jpg',
    icon: '/games/mafia-icon.png',
    href: '/mafia/support',
    status: 'review',
    facts: ['Two full decks', 'Narrated night', 'Replay a bad night'],
  },
]

/** The studio's actual working rules — the "about/philosophy" section the
 *  portfolio pattern asks for, written as commitments rather than adjectives. */
export const PRINCIPLES = [
  {
    n: '01',
    title: 'One phone, not five',
    body:
      'Nobody downloads anything to join. The game is the phone already on the table, passed from hand to hand, and a round starts in under a minute.',
  },
  {
    n: '02',
    title: 'Nobody sits out to run it',
    body:
      'The app is the host. It deals the roles, keeps the night honest, runs the clock and counts the votes — so the person who always narrates gets to play for once.',
  },
  {
    n: '03',
    title: 'No ads, no accounts, no signal',
    body:
      'Every game works on a plane and in a basement. Nothing to sign up for, nothing interrupting a round, no data leaving the phone at all.',
  },
  {
    n: '04',
    title: 'Mistakes are recoverable',
    body:
      'Somebody always taps the wrong name. A game that makes that final is a game people stop playing, so ours can rewind — a turn, or the whole night.',
  },
]
