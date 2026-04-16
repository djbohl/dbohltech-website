import Link from 'next/link'
import RevealSection from '@/components/RevealSection'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Work — dbohltech',
  description: 'Portfolio of backend systems, data engineering, cloud infrastructure, and full-stack projects.',
}

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <div className="blog-header">
        <div className="blog-header-glow" />
        <div className="blog-header-glow2" />
        <div className="section-label">Portfolio</div>
        <h1 className="blog-title">All projects.</h1>
        <p className="blog-sub">
          Full-stack applications, backend systems, data engineering, and cloud infrastructure work.
        </p>
      </div>

      {/* Projects Grid */}
      <section style={{ padding: '4rem 3rem' }}>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <RevealSection key={project.slug} delay={i * 60}>
              <Link href={`/projects/${project.slug}`} className={`project-card ${project.featured ? 'featured' : ''}`}>
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

      {/* Back to Home */}
      <div style={{ textAlign: 'center', padding: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href="/#work" className="btn-ghost">
          ← Back to Home
        </Link>
      </div>
    </>
  )
}
