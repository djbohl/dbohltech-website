import Link from 'next/link'
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
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-glow2" />

        <div className="hero-left">
          <div className="hero-tag">Backend · Data · Infrastructure · AI</div>
          <h1>
            Let's build the<br />
            <span className="line2">thing you've</span><br />
            <span className="accent">been picturing.</span>
          </h1>
          <p className="hero-desc">
            Backend systems, data pipelines, cloud infrastructure, and AI integrations —
            built by one engineer who cares about reliability, scale, and clean architecture.
          </p>
          <div className="hero-actions">
            <Link href="/work" className="btn-primary">See the Work</Link>
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
              <div><span className="t-purple">▸</span> REST &amp; GraphQL APIs</div>
              <div><span className="t-purple">▸</span> Data Pipelines &amp; ETL</div>
              <div><span className="t-purple">▸</span> Cloud Infrastructure</div>
              <div><span className="t-purple">▸</span> AI Integrations</div>
              <div><span className="t-purple">▸</span> Automation Scripts</div>
              <div><span className="t-purple">▸</span> Full-Stack Applications</div>
              <div><span className="t-purple">▸</span> Dashboards &amp; Visualization</div>
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
          <h2 className="section-title">Reliable systems.<br />Clean architecture.</h2>
        </RevealSection>
        <RevealSection delay={160}>
          <p className="section-sub">
            From backend APIs to cloud infrastructure — engineered for scale, performance, and clarity.
          </p>
        </RevealSection>
        <RevealSection delay={240}>
          <div className="services-grid">

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(37,99,235,0.35)',
                }}
              >
                <IconCode />
              </div>
              <div className="service-num">01</div>
              <div className="service-name">Backend &amp; API Development</div>
              <p className="service-desc">
                RESTful and GraphQL APIs, microservices, and server-side systems built for
                reliability and performance. Designed with clean contracts and built to scale.
              </p>
              <div className="service-tags">
                <span className="tag">Node.js</span>
                <span className="tag">Python</span>
                <span className="tag">REST</span>
                <span className="tag">GraphQL</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #0e7490, #06b6d4)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(6,182,212,0.35)',
                }}
              >
                <IconBolt />
              </div>
              <div className="service-num">02</div>
              <div className="service-name">Data Engineering &amp; Analytics</div>
              <p className="service-desc">
                ETL pipelines, data modeling, and analytics platforms. Turning raw data into
                reliable, queryable systems that support real decisions.
              </p>
              <div className="service-tags">
                <span className="tag">Python</span>
                <span className="tag">Pandas</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Jupyter</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #b45309, #f59e0b)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(245,158,11,0.32)',
                }}
              >
                <IconPuzzle />
              </div>
              <div className="service-num">03</div>
              <div className="service-name">Cloud &amp; Infrastructure</div>
              <p className="service-desc">
                Cloud deployments, container orchestration, and infrastructure automation.
                Kubernetes, CI/CD, and cloud-native architecture on AWS and GCP.
              </p>
              <div className="service-tags">
                <span className="tag">Kubernetes</span>
                <span className="tag">Docker</span>
                <span className="tag">AWS</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(37,99,235,0.32)',
                }}
              >
                <IconExtension />
              </div>
              <div className="service-num">04</div>
              <div className="service-name">Full-Stack Applications</div>
              <p className="service-desc">
                End-to-end web applications: React/Next.js frontends, Node.js or Python
                backends, and production-grade database design. One owner, full stack.
              </p>
              <div className="service-tags">
                <span className="tag">Next.js</span>
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #0e7490, #06b6d4)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(6,182,212,0.32)',
                }}
              >
                <IconBrain />
              </div>
              <div className="service-num">05</div>
              <div className="service-name">AI Integrations</div>
              <p className="service-desc">
                Integrating LLMs, embedding models, and AI APIs into production systems.
                Practical AI that solves real operational problems, not demos.
              </p>
              <div className="service-tags">
                <span className="tag">Claude API</span>
                <span className="tag">OpenAI</span>
                <span className="tag">RAG</span>
                <span className="tag">LangChain</span>
              </div>
            </div>

            <div
              className="service-card"
              style={{
                background: 'rgba(13, 20, 33, 0.95)',
                borderColor: 'rgba(59, 130, 246, 0.15)',
              }}
            >
              <div className="service-card-shine" />
              <div
                className="service-icon-bubble"
                style={{
                  background: 'linear-gradient(135deg, #065f46, #10b981)',
                  // @ts-ignore
                  '--bubble-glow': 'rgba(16,185,129,0.32)',
                }}
              >
                <IconWand />
              </div>
              <div className="service-num" style={{ opacity: 0.5 }}>06</div>
              <div className="service-name">Automation &amp; Workflows</div>
              <p className="service-desc">
                Scripted automation, cron pipelines, and workflow tooling that eliminate
                repetitive work. Python-first, production-ready, built for ops efficiency.
              </p>
              <div className="service-tags">
                <span className="tag">Python</span>
                <span className="tag">Bash</span>
                <span className="tag">Make</span>
                <span className="tag">n8n</span>
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
          <p className="section-sub">A few recent projects — scroll to explore.</p>
        </RevealSection>

        <RevealSection delay={240}>
          <div className="featured-projects-scroll">
            {featuredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="featured-project-card project-card">
                <div className={`project-thumb thumb-${project.thumbVariant}`}>
                  <div className="project-thumb-text">{project.thumbText}</div>
                  <div className="project-thumb-icon">{project.thumbEmoji}</div>
                </div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <div className="project-name">{project.title}</div>
                  <p className="project-blurb">{project.blurb}</p>
                  <div className="service-tags" style={{ marginBottom: '1.5rem' }}>
                    {project.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="project-link">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </RevealSection>

        {/* View All Work Link */}
        <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/work" className="btn-ghost">
            View All Work →
          </Link>
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
            I&apos;m currently taking on new projects — backend systems, data pipelines, cloud
            infrastructure, and AI integrations. Let&apos;s talk about what you need built.
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
