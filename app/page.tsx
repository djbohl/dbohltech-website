import Link from 'next/link'
import Image from 'next/image'
import Ticker from '@/components/Ticker'
import RevealSection from '@/components/RevealSection'
import SkillBars from '@/components/SkillBars'
import { projects } from '@/data/projects'

/* ── Inline SVG icons ─────────────────────────────── */
const IconBrain = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0"/>
    <path d="M14.5 2A4.5 4.5 0 0 1 19 6.5c0 1.5-.5 2.8-1.3 3.8"/>
    <path d="M9.5 2A4.5 4.5 0 0 0 5 6.5c0 1.5.5 2.8 1.3 3.8"/>
    <circle cx="12" cy="14" r="4"/>
    <path d="M12 10v-1"/>
    <path d="M8.3 10.3 7.6 9.6"/>
    <path d="M15.7 10.3l.7-.7"/>
    <path d="M9 17.5A4 4 0 0 0 12 18a4 4 0 0 0 3-0.5"/>
    <path d="M12 18v3"/>
  </svg>
)
const IconBolt = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)
const IconPuzzle = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-3.407 0l-1.569-1.568c-.23-.23-.556-.338-.878-.29-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02.048-.322-.059-.648-.289-.878L4.297 13.05a2.404 2.404 0 0 1 0-3.406l1.568-1.569c.23-.23.338-.556.29-.878-.074-.493-.505-.84-.968-1.02a2.5 2.5 0 1 1 3.237-3.237c.18.464.527.894 1.02.967.322.048.648-.059.878-.289L11.91 2.05a2.404 2.404 0 0 1 3.406 0l1.569 1.568c.23.23.556.338.878.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02"/>
  </svg>
)
const IconWand = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 4-1 1"/>
    <path d="m9 20-1 1"/>
    <path d="m4 9-1 1"/>
    <path d="m20 15 1-1"/>
    <path d="M9.5 9.5 3 21l7.5-3.5"/>
    <path d="M9.5 9.5 21 3l-3.5 7.5"/>
    <path d="M9.5 9.5 15 15"/>
    <path d="m11 13 1.5 1.5"/>
  </svg>
)
const IconExtension = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <path d="M17.5 14v3"/>
    <path d="M14 17.5h3"/>
    <path d="M20.5 17.5h.5"/>
    <path d="M17.5 20.5v.5"/>
  </svg>
)
const IconCode = () => (
  <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

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
          <div className="hero-tag">Full-Stack Development · Systems Design</div>
          <h1>
            Let's build the<br />
            <span className="line2">thing you've</span><br />
            <span className="accent">been picturing.</span>
          </h1>
          <p className="hero-desc">
            AI tools, automations, browser extensions, apps, and the graphics that tie it all
            together — built by one person who actually cares how it turns out.
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
              <span className="terminal-title">dbohltech ~ capabilities</span>
            </div>
            <div className="terminal-body">
              <div><span className="t-dim">$ </span><span className="t-accent">cat</span> what-i-build.txt</div>
              <div className="t-dim">———————————————————</div>
              <div><span className="t-purple">✦</span> AI Tools &amp; Agents</div>
              <div><span className="t-purple">✦</span> Automations &amp; Workflows</div>
              <div><span className="t-purple">✦</span> Browser Extensions</div>
              <div><span className="t-purple">✦</span> Graphic &amp; Brand Design</div>
              <div><span className="t-purple">✦</span> Web &amp; Mobile Apps</div>
              <div><span className="t-purple">✦</span> AI Skills &amp; Claude Plugins</div>
              <div className="t-dim">———————————————————</div>
              <div><span className="t-dim">$ </span><span className="t-green">status</span>: open for projects</div>
              <div><span className="t-dim">$ </span><span className="blink" /></div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <span className="stat-num">10+</span>
              <div className="stat-label">Years Design</div>
            </div>
            <div className="stat">
              <span className="stat-num">5+</span>
              <div className="stat-label">Years Dev</div>
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
          <h2 className="section-title">AI-first, end-to-end,<br />whatever the platform.</h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="section-sub">
            From AI agents to full-stack apps — if it runs on a screen or in the cloud, I can build it smarter.
          </p>
        </RevealSection>
        <RevealSection delay={240}>
          <div className="services-grid">

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(124,58,237,0.32)',
                }}
              >
                <IconBrain />
              </div>
              <div className="service-num">01</div>
              <div className="service-name">AI Tools &amp; Agents</div>
              <p className="service-desc">
                Custom AI-powered tools, chatbots, and autonomous agents that actually solve real
                problems. Built with the latest models and designed to fit your workflow.
              </p>
              <div className="service-tags">
                <span className="tag">Claude API</span>
                <span className="tag">OpenAI</span>
                <span className="tag">LangChain</span>
                <span className="tag">RAG</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(249,115,22,0.32)',
                }}
              >
                <IconBolt />
              </div>
              <div className="service-num">02</div>
              <div className="service-name">Automations &amp; Workflows</div>
              <p className="service-desc">
                End-to-end automation pipelines that cut out the repetitive work. From no-code
                flows to custom scripts — your processes, on autopilot.
              </p>
              <div className="service-tags">
                <span className="tag">Make</span>
                <span className="tag">n8n</span>
                <span className="tag">Zapier</span>
                <span className="tag">Custom APIs</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(6,182,212,0.32)',
                }}
              >
                <IconPuzzle />
              </div>
              <div className="service-num">03</div>
              <div className="service-name">AI Skills &amp; Claude Plugins</div>
              <p className="service-desc">
                Building and publishing Claude skills, Cowork plugins, and MCP servers that
                extend what AI can do inside your team&apos;s daily tools.
              </p>
              <div className="service-tags">
                <span className="tag">Claude Skills</span>
                <span className="tag">MCP</span>
                <span className="tag">Cowork Plugins</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #db2777, #ec4899)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(236,72,153,0.32)',
                }}
              >
                <IconWand />
              </div>
              <div className="service-num">04</div>
              <div className="service-name">Graphic &amp; Brand Design</div>
              <p className="service-desc">
                Visual identity, UI/UX design, digital assets, and graphics — designed with
                intention and built to scale. Design and dev under one roof.
              </p>
              <div className="service-tags">
                <span className="tag">UI/UX</span>
                <span className="tag">Brand</span>
                <span className="tag">Figma</span>
                <span className="tag">Motion</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(59,130,246,0.32)',
                }}
              >
                <IconExtension />
              </div>
              <div className="service-num">05</div>
              <div className="service-name">Browser Extensions</div>
              <p className="service-desc">
                Powerful browser extensions that supercharge how you use the web. AI-enhanced,
                cross-browser, and built with real performance in mind.
              </p>
              <div className="service-tags">
                <span className="tag">Chrome</span>
                <span className="tag">Firefox</span>
                <span className="tag">Edge</span>
                <span className="tag">AI-enhanced</span>
              </div>
            </div>

            <div
              className="service-card"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.06), rgba(236,72,153,0.04))',
                borderColor: 'rgba(168,85,247,0.18)',
              }}
            >
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(79,70,229,0.32)',
                }}
              >
                <IconCode />
              </div>
              <div className="service-num" style={{ opacity: 0.5 }}>06</div>
              <div className="service-name">Web &amp; Mobile Apps</div>
              <p className="service-desc">
                Full-stack web and mobile applications built to perform. React, Next.js, React
                Native — all the way from idea to deployment.
              </p>
              <div className="service-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React Native</span>
                <span className="tag">Node.js</span>
                <span className="tag">Databases</span>
              </div>
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
                  {featuredProject.thumbImage ? (
                    <Image
                      src={featuredProject.thumbImage}
                      alt={featuredProject.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="project-thumb-text">{featuredProject.thumbText}</div>
                      <div className="project-thumb-icon">{featuredProject.thumbEmoji}</div>
                    </>
                  )}
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
                  {project.thumbImage ? (
                    <Image
                      src={project.thumbImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="project-thumb-text">{project.thumbText}</div>
                      <div className="project-thumb-icon">{project.thumbEmoji}</div>
                    </>
                  )}
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
            <h2>Full-stack builder.<br />Systems thinking.</h2>
            <p>
              I&apos;m a full-stack developer and systems technologist specializing in building scalable,
              efficient solutions that bridge web, cloud, and infrastructure domains.
            </p>
            <p>
              I design and implement software and automation tools that reduce operational bottlenecks,
              enhance data accessibility, and improve productivity — delivering measurable outcomes.
              My experience spans end-to-end project ownership: developing custom CRMs, deploying
              automation scripts, administering secure cloud infrastructure, and building tools that
              improve operational efficiency by 75% or more.
            </p>
            <p>
              I thrive in independent, high-impact environments, rapidly learning new technologies to
              solve complex challenges. I&apos;m motivated by creating systems that work reliably at scale.
            </p>
          </RevealSection>

          <RevealSection delay={160}>
            <SkillBars />
          </RevealSection>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <RevealSection>
            <div className="section-label">Certifications</div>
          </RevealSection>
          <RevealSection delay={80}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '0.5rem',
                background: 'rgba(255,255,255,0.03)'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Make Foundation</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>June 2025</div>
              </div>
              <div style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '0.5rem',
                background: 'rgba(255,255,255,0.03)'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>3CX Basic Certified Engineer V18</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Active</div>
              </div>
            </div>
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
            <span style={{ color: 'var(--muted)' }}>Let&apos;s build it together.</span>
          </h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="cta-sub">
            I&apos;m currently taking on new projects — AI tools, automations, extensions, and
            everything in between. Tell me what you&apos;re building.
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
