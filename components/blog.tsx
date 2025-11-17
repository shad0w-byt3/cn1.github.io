"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  published_at: string
  tags: string[] | null
  read_time: number | null
}

// Static blog data
const staticBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Advanced SQL Injection Techniques",
    excerpt: "Deep dive into modern SQL injection methods and prevention strategies. Learn about blind SQL injection, time-based attacks, and how to properly sanitize user input.",
    slug: "advanced-sql-injection",
    published_at: "2024-01-15T00:00:00Z",
    tags: ["SQL Injection", "Web Security", "OWASP"],
    read_time: 8,
  },
  {
    id: "2",
    title: "Bypassing Modern WAF Solutions",
    excerpt: "Techniques and methodologies for testing WAF effectiveness. Understanding common bypass techniques and how to properly configure your WAF.",
    slug: "bypassing-waf",
    published_at: "2024-01-10T00:00:00Z",
    tags: ["WAF", "Security", "Penetration Testing"],
    read_time: 6,
  },
  {
    id: "3",
    title: "Network Penetration Testing Framework",
    excerpt: "Custom automated framework for network vulnerability assessment and exploitation using Python, Nmap, and Metasploit.",
    slug: "network-pentest-framework",
    published_at: "2024-01-05T00:00:00Z",
    tags: ["Python", "Nmap", "Metasploit", "Security"],
    read_time: 10,
  },
]

export function Blog() {

  // No loading state needed for static data

  return (
    <section id="blog" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm lg:text-base font-mono text-primary glow-text mb-4">{">"} BLOG</p>
          <h2 className="text-3xl lg:text-5xl font-mono font-bold text-balance leading-tight">
            Latest <span className="text-secondary glow-text">Posts</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 font-mono">
            Insights and tutorials on cybersecurity and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {staticBlogs.map((blog: BlogPost, index: number) => (
            <Card
              key={blog.id || index}
              className="group overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{blog.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags?.map((tag: string, tagIndex: number) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="font-mono text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(blog.published_at).toLocaleDateString()}</span>
                  </div>
                  {blog.read_time && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{blog.read_time} min read</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-secondary transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Read more →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-lg font-mono text-primary hover:bg-primary/20 transition-colors"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
