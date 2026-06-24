'use client'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'

function BlogCard({ post, index }) {
  const { ref, isVisible } = useScrollReveal()
  const delay = `${index * 0.1}s`

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible
          ? 'perspective(1000px) rotateX(0deg) translateY(0px)'
          : 'perspective(1000px) rotateX(10deg) translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}, opacity 0.6s ease ${delay}`,
      }}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <article className="bg-[#0f172a] border border-[#1e2a4a] group-hover:border-[#3b82f6]/40 rounded-2xl p-8 transition-all duration-200 group-hover:-translate-y-0.5">
          {post.featuredColor && (
            <div
              className="w-full h-1 rounded-full mb-6"
              style={{ background: `linear-gradient(90deg, ${post.featuredColor}, transparent)` }}
            />
          )}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#3b82f6] transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
          <span className="text-[#3b82f6] text-sm font-medium">Read article →</span>
        </article>
      </Link>
    </div>
  )
}

export default function BlogListClient({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  )
}
