import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  return {
    title: post ? `${post.title} — dbohltech` : 'Post — dbohltech',
    description: post?.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero header */}
      <div className="post-header">
        <div className="post-header-glow" />
        <div className="post-header-glow2" />

        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>

        {post.tags.length > 0 && (
          <div className="section-label" style={{ marginBottom: '1.2rem' }}>
            {post.tags.join(' · ')}
          </div>
        )}

        <h1 className="post-header-title">{post.title}</h1>

        <div className="post-meta-row">
          <span className="post-meta-date">{formatDate(post.date)}</span>
          {post.tags.length > 0 && (
            <div className="post-meta-tags">
              {post.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div className="prose-wrapper">
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Bottom nav */}
        <div className="prose-footer">
          <Link href="/blog" className="prose-back-btn">
            ← All Posts
          </Link>
        </div>
      </div>
    </>
  )
}
