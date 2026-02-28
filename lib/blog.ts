import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content/blog')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return []
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'))
  return files
    .map((f) => {
      const raw = fs.readFileSync(path.join(contentDir, f), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug: f.replace(/\.md$/, ''),
        title: (data.title as string) ?? 'Untitled',
        date: (data.date as string) ?? '',
        excerpt: (data.excerpt as string) ?? '',
        tags: (data.tags as string[]) ?? [],
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: (data.title as string) ?? 'Untitled',
    date: (data.date as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    content,
  }
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
