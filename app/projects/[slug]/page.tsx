import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return {
    title: project ? `${project.title} — dbohltech` : 'Project — dbohltech',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const thumbClass = `thumb-${project.thumbVariant}`

  return (
    <>
      <div className="page-header">
        <div className="page-header-glow" />
        <Link href="/#work" className="back-link">
          ← Back to Work
        </Link>
        <div className="section-label">{project.type}</div>
        <h1 className="page-title">{project.title}</h1>
        <div className="page-meta">
          {project.year && <span className="page-year">{project.year}</span>}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Site →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>

      <div className="project-detail-layout">
        <div>
          {/* Thumbnail */}
          <div className={`project-thumb-lg ${thumbClass}`}>
            <div className="project-thumb-lg-text">{project.thumbText}</div>
            <div className="project-thumb-lg-icon">{project.thumbEmoji}</div>
          </div>

          {/* Description */}
          <div className="project-detail-content">
            {project.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '1.2rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="project-detail-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-label">Tech Stack</div>
            <div className="service-tags">
              {project.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-card">
            <div className="sidebar-label">Category</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{project.type}</div>
          </div>

          {project.year && (
            <div className="sidebar-card">
              <div className="sidebar-label">Year</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{project.year}</div>
            </div>
          )}

          <div className="sidebar-card" style={{ background: 'rgba(0,229,255,0.02)', borderColor: 'rgba(0,229,255,0.15)' }}>
            <div className="sidebar-label">Want something like this?</div>
            <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              I&apos;m available for new projects. Let&apos;s talk.
            </p>
            <Link href="/#contact" className="project-link">
              Start a conversation →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
