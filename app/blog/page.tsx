import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — dbohltech',
  description: 'Thoughts on development, design, and building things on the internet.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <div className="blog-header">
        <div className="blog-header-glow" />
        <div className="section-label">Writing</div>
        <h1 className="blog-title">
          The blog.
        </h1>
        <p className="blog-sub">
          Thoughts on development, design, and building things on the internet.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">✍️</div>
          <h2>No posts yet</h2>
          <p>
            Add a <code>.md</code> file to <code>content/blog/</code> to publish your first post.
          </p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
              <div className="post-date">{formatDate(post.date)}</div>
              <div className="post-title">{post.title}</div>
              <p className="post-excerpt">{post.excerpt}</p>
              {post.tags.length > 0 && (
                <div className="post-tags">
                  {post.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
              <div className="post-read-more">Read post →</div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
