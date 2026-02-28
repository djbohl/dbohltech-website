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
      <div className="post-header">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        {post.tags.length > 0 && (
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            {post.tags.join(' · ')}
          </div>
        )}
        <h1 className="post-header-title">{post.title}</h1>
        <div className="post-meta-row">
          <span className="post-meta-date">{formatDate(post.date)}</span>
        </div>
      </div>

      <div className="prose-wrapper">
        <article className="prose">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <Link href="/blog" className="back-link">
            ← All Posts
          </Link>
        </div>
      </div>
    </>
  )
}
