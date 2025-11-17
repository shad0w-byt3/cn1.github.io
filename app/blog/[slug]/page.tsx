// Mock data for local development
const mockBlogs = [
  {
    slug: "getting-started-with-cybersecurity",
    title: "Getting Started with Cybersecurity",
    content: "# Getting Started with Cybersecurity\n\nCybersecurity is a critical field in today's digital world...",
    created_at: "2024-01-15T00:00:00Z",
    tags: ["cybersecurity", "beginners", "pentesting"],
    cover_image: "/placeholder.jpg"
  },
  {
    slug: "advanced-penetration-testing",
    title: "Advanced Penetration Testing Techniques",
    content: "# Advanced Penetration Testing Techniques\n\nIn this post, we'll explore advanced techniques...",
    created_at: "2024-01-20T00:00:00Z",
    tags: ["pentesting", "advanced", "tools"],
    cover_image: "/placeholder.jpg"
  }
]

import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const blog = mockBlogs.find(b => b.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link href="/#blog">
          <Button variant="ghost" className="mb-8 font-mono text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-mono font-bold text-balance leading-tight">{blog.title}</h1>

          <div className="flex flex-wrap gap-2">
            {blog.tags?.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="font-mono bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {blog.cover_image && (
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12 border border-primary/20">
            <img src={blog.cover_image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none font-mono prose-headings:font-mono prose-headings:text-primary prose-a:text-secondary prose-code:text-accent prose-pre:bg-card prose-pre:border prose-pre:border-primary/20">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
