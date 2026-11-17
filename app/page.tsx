'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import {
  GAMES,
  PRINCIPLES,
  STUDIO_EMAIL,
  STUDIO_NAME,
  STUDIO_TAGLINE,
  STUDIO_WORDMARK,
  type Game,
} from '@/lib/studio'

/**
 * The studio page. Built on the portfolio-grid pattern the design system
 * recommends for a studio with a small catalogue: wordmark, the work, the
 * philosophy, a way to reach a person.
 *
 * It has no accent colour of its own. The two games each carry one (Bunker
 * red, Mafia violet) and they are the only colour on the page, which is the
 * "neutral background, let the work shine" rule taken literally — and it
 * stops a third brand colour from competing with the two it exists to sell.
 */

function AppleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/** A hairline label in the mono voice — used to title every section. */
function SectionLabel({ children, color = 'var(--text-muted)' }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        letterSpacing: '0.26em',
        textTransform: 'uppercase',
        color,
      }}
    >
      {children}
    </span>
  )
}

/**
 * One game. The cards alternate which side the art sits on, so the grid reads
 * as an editorial spread rather than two identical tiles — and each one is
 * tinted by its own game, never by the studio.
 */
function GameEntry({ game, index }: { game: Game; index: number }) {
  const flipped = index % 2 === 1

  return (
    <ScrollReveal>
      <article
        className={`game-entry${flipped ? ' game-entry-flipped' : ''}`}
        style={{ ['--accent' as string]: game.accent }}
      >
        {/* The art. A single screenshot, lit from its own accent rather than
            sat in a grey frame. */}
        <div className="game-art">
          <img
            src={game.image}
            alt={`${game.name} on an iPhone`}
            width={552}
            height={1200}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>

        <div className="game-copy">
          <div className="game-head">
            <img src={game.icon} alt="" width={46} height={46} className="game-icon" />
            <div>
              <h3 className="game-name">{game.name}</h3>
              <SectionLabel color={game.accent}>{game.players}</SectionLabel>
            </div>
          </div>

          <p className="game-pitch">{game.pitch}</p>
          <p className="game-body">{game.body}</p>

          <ul className="game-facts">
            {game.facts.map(fact => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>

          <div className="game-actions">
            {game.status === 'live' && game.storeUrl ? (
              <a className="btn-solid" href={game.storeUrl} target="_blank" rel="noopener noreferrer">
                <AppleLogo />
                App Store
              </a>
            ) : (
              <span className="btn-pending">
                <span className="pending-dot" aria-hidden="true" />
                In review
              </span>
            )}
            <Link className="btn-ghost" href={game.href}>
              {game.status === 'live' ? 'About the game' : 'How it works'}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function StudioPage() {
  const live = GAMES.filter(g => g.status === 'live').length

  return (
    <div className="studio">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero">
        {/* Masthead left, figures right. A single left column left the right
            half of a 1440px screen empty, which is the one layout fault the
            design audit rejects above all others. */}
        <div className="hero-main">
          <ScrollReveal>
            <SectionLabel>Independent game studio</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="wordmark">
              {STUDIO_WORDMARK.map(word => (
                <span key={word}>{word}</span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="tagline">{STUDIO_TAGLINE}</p>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <a className="hero-jump" href="#games">
              The games <ArrowRight />
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={3} className="hero-side">
          <dl className="stats">
            <div>
              <dt>Games</dt>
              <dd>{GAMES.length}</dd>
            </div>
            <div>
              <dt>On the App Store</dt>
              <dd>{live}</dd>
            </div>
            <div>
              <dt>Phones needed</dt>
              <dd>1</dd>
            </div>
            <div>
              <dt>Ads, ever</dt>
              <dd>0</dd>
            </div>
          </dl>
        </ScrollReveal>
      </section>

      {/* ── THE WORK ─────────────────────────────────────────────────────── */}
      <section id="games" className="section">
        <ScrollReveal>
          <header className="section-head">
            <SectionLabel>The work</SectionLabel>
            <h2 className="section-title">Two games, one phone</h2>
            <p className="section-lede">
              Both are built on the same belief: the best party game is the one nobody has to set
              up, install or run.
            </p>
          </header>
        </ScrollReveal>

        <div className="games">
          {GAMES.map((game, i) => (
            <GameEntry key={game.id} game={game} index={i} />
          ))}
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <section id="studio" className="section">
        <ScrollReveal>
          <header className="section-head">
            <SectionLabel>How we build them</SectionLabel>
            <h2 className="section-title">Four rules we don&apos;t break</h2>
          </header>
        </ScrollReveal>

        <div className="principles">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.n} delay={(i % 2) + 1 as 1 | 2}>
              <article className="principle">
                <span className="principle-n">{p.n}</span>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-body">{p.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="section contact">
        <ScrollReveal>
          <SectionLabel>Say something</SectionLabel>
          <h2 className="contact-title">
            A rule we got wrong?
            <br />
            A game you want to see?
          </h2>
          <a className="contact-mail" href={`mailto:${STUDIO_EMAIL}`}>
            {STUDIO_EMAIL}
          </a>
          <p className="contact-note">
            {STUDIO_NAME} is one person who makes games for other people&apos;s living rooms. Every
            message is read by that person.
          </p>
        </ScrollReveal>
      </section>
    </div>
  )
}
