import Link from 'next/link'
import Ticker from '@/components/Ticker'
import RevealSection from '@/components/RevealSection'
import SkillBars from '@/components/SkillBars'
import { projects } from '@/data/projects'

export default function Home() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-left">
          <div className="hero-tag">Full-Stack Studio · Est. 2024</div>
          <h1>
            Build the<br />
            <span className="line2">thing you&apos;ve</span><br />
            <span className="accent">been picturing.</span>
          </h1>
          <p className="hero-desc">
            Web apps, mobile apps, browser extensions, sites, and the graphics that tie it all
            together — built by one person who cares how it turns out.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-primary">See the Work</a>
            <a href="#contact" className="btn-ghost">Start a Project</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-bar">
              <div className="dot r" />
              <div className="dot y" />
              <div className="dot g" />
              <span className="terminal-title">dbohltech ~ stack</span>
            </div>
            <div className="terminal-body">
              <div><span className="t-dim">$ </span><span className="t-accent">cat</span> capabilities.txt</div>
              <div className="t-dim">———————————————————</div>
              <div><span className="t-purple">→</span> Web Apps &amp; Full-Stack Dev</div>
              <div><span className="t-purple">→</span> Mobile (iOS + Android)</div>
              <div><span className="t-purple">→</span> Browser Extensions</div>
              <div><span className="t-purple">→</span> UI/UX &amp; Web Design</div>
              <div><span className="t-purple">→</span> Graphic &amp; Brand Design</div>
              <div className="t-dim">———————————————————</div>
              <div><span className="t-dim">$ </span><span className="t-green">status</span>: available for projects</div>
              <div><span className="t-dim">$ </span><span className="blink" /></div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">10+</span>
              <div className="stat-label">Years Dev</div>
            </div>
            <div className="stat">
              <span className="stat-num">40+</span>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <span className="stat-num">1</span>
              <div className="stat-label">Point of Contact</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* SERVICES */}
      <section id="services">
        <RevealSection><div className="section-label">What I Build</div></RevealSection>
        <RevealSection delay={80}>
          <h2 className="section-title">End-to-end,<br />whatever the platform.</h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="section-sub">
            From first sketch to final deployment — if it runs on a screen, I can build it.
          </p>
        </RevealSection>
        <RevealSection delay={240}>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-num">01</div>
              <div className="service-name">Web Apps &amp; Sites</div>
              <p className="service-desc">
                Full-stack web applications and marketing sites built to perform. From complex
                data-driven tools to polished landing pages.
              </p>
              <div className="service-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Next.js</span>
                <span className="tag">Databases</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-num">02</div>
              <div className="service-name">Mobile Apps</div>
              <p className="service-desc">
                Native and cross-platform mobile apps for iOS and Android. Built with real
                performance in mind, not afterthought-mobile.
              </p>
              <div className="service-tags">
                <span className="tag">React Native</span>
                <span className="tag">iOS</span>
                <span className="tag">Android</span>
                <span className="tag">Flutter</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-num">03</div>
              <div className="service-name">Extensions &amp; Tools</div>
              <p className="service-desc">
                Browser extensions, internal tools, and custom software that plugs into the
                workflows your team already uses.
              </p>
              <div className="service-tags">
                <span className="tag">Chrome</span>
                <span className="tag">Firefox</span>
                <span className="tag">APIs</span>
                <span className="tag">Automation</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-num">04</div>
              <div className="service-name">Design &amp; Graphics</div>
              <p className="service-desc">
                UI/UX, brand identity, web graphics, and digital assets. Design and development
                under one roof means nothing gets lost in translation.
              </p>
              <div className="service-tags">
                <span className="tag">UI/UX</span>
                <span className="tag">Brand</span>
                <span className="tag">Figma</span>
                <span className="tag">Illustration</span>
              </div>
            </div>
            <div
              className="service-card"
              style={{
                gridColumn: 'span 2',
                background: 'rgba(0,229,255,0.02)',
                borderTop: '1px solid rgba(0,229,255,0.15)',
              }}
            >
              <div className="service-num" style={{ color: 'rgba(0,229,255,0.08)' }}>✦</div>
              <div className="service-name">The Solo Advantage</div>
              <p className="service-desc">
                No junior handoffs. No miscommunication between design and dev. You get one person
                who knows your project inside and out — from kickoff to launch and beyond.
                That&apos;s not a limitation, it&apos;s a feature.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* WORK */}
      <section id="work" className="work-section">
        <RevealSection><div className="section-label">Selected Work</div></RevealSection>
        <RevealSection delay={80}>
          <h2 className="section-title">Things I&apos;ve shipped.</h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="section-sub">A few recent projects — add yours to the list.</p>
        </RevealSection>

        <div className="projects-grid">
          {featuredProject && (
            <RevealSection delay={240}>
              <Link href={`/projects/${featuredProject.slug}`} className="project-card featured">
                <div className={`project-thumb thumb-${featuredProject.thumbVariant}`}>
                  <div className="project-thumb-text">{featuredProject.thumbText}</div>
                  <div className="project-thumb-icon">{featuredProject.thumbEmoji}</div>
                </div>
                <div className="project-info">
                  <div className="project-type">{featuredProject.type}</div>
                  <div className="project-name">{featuredProject.title}</div>
                  <p className="project-blurb">{featuredProject.blurb}</p>
                  <div className="service-tags" style={{ marginBottom: '1.5rem' }}>
                    {featuredProject.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="project-link">View Project →</span>
                </div>
              </Link>
            </RevealSection>
          )}

          {otherProjects.map((project, i) => (
            <RevealSection key={project.slug} delay={320 + i * 80}>
              <Link href={`/projects/${project.slug}`} className="project-card">
                <div className={`project-thumb thumb-${project.thumbVariant}`}>
                  <div className="project-thumb-text">{project.thumbText}</div>
                  <div className="project-thumb-icon">{project.thumbEmoji}</div>
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <div className="project-name">{project.title}</div>
                  <p className="project-blurb">{project.blurb}</p>
                  <span className="project-link">View Project →</span>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <RevealSection className="about-left">
            <div className="section-label">The Person Behind It</div>
            <h2>Not an agency.<br />Better.</h2>
            <p>
              I&apos;m Donna — a developer and designer who builds the whole thing. Web apps,
              mobile apps, browser extensions, brand graphics — all of it, all me.
            </p>
            <p>
              I&apos;ve spent years building for clients across industries. Moving forward under
              dbohltech, I&apos;m focused on projects where quality and communication actually
              matter.
            </p>
            <div className="about-highlight">
              &ldquo;You talk to me at kickoff, you talk to me at launch. No account managers, no
              mystery — just clean code and honest timelines.&rdquo;
            </div>
          </RevealSection>

          <RevealSection delay={160}>
            <SkillBars />
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="cta-glow" />
        <RevealSection><div className="section-label">Ready When You Are</div></RevealSection>
        <RevealSection delay={80}>
          <h2 className="cta-title">
            Got a project?<br />
            <span style={{ color: 'var(--muted)' }}>Let&apos;s build it.</span>
          </h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="cta-sub">
            I&apos;m currently taking on new projects. Tell me what you&apos;re building and
            let&apos;s figure out if we&apos;re a good fit.
          </p>
        </RevealSection>
        <RevealSection delay={240}>
          <a href="mailto:contact@dbohl.tech" className="cta-email">
            <span>contact@dbohl.tech</span>
            <span style={{ fontSize: '0.8em' }}>→</span>
          </a>
        </RevealSection>
      </section>
    </>
  )
}
