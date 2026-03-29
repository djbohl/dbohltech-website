import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — dbohltech',
  description: 'Thoughts on AI, development, design, and building things on the internet.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Header */}
      <div className="blog-header">
        <div className="blog-header-glow" />
        <div className="blog-header-glow2" />
        <div className="section-label">Writing</div>
        <h1 className="blog-title">The blog.</h1>
        <p className="blog-sub">
          Thoughts on AI, automations, development, and building things that matter.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="blog-empty">
          <div className="blog-empty-icon">✍️</div>
          <h2 className="blog-empty-title">No posts yet</h2>
          <p className="blog-empty-sub">
            Add a <code>.md</code> file to <code>content/blog/</code> to publish your first post.
          </p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              {/* Holographic border — same as service cards */}
              <div className="post-card-shine" />
              <div className="post-card-inner">
                <div className="post-number">0{i + 1}</div>
                <div className="post-date">{formatDate(post.date)}</div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <div className="post-tags">
                    {post.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}
                <div className="post-read-more">
                  Read post <span className="post-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
