"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Save, Eye } from "lucide-react"
import type { Blog } from "@/lib/types"
import { createBlog, updateBlog } from "@/app/actions/blog-actions"

interface BlogFormProps {
  userId: string
  blog?: Blog
}

export function BlogForm({ userId, blog }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    slug: blog?.slug || "",
    content: blog?.content || "",
    excerpt: blog?.excerpt || "",
    cover_image: blog?.cover_image || "",
    tags: blog?.tags?.join(", ") || "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSubmit = async (e: React.FormEvent, publish: boolean) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("title", formData.title)
      formDataObj.append("slug", formData.slug || generateSlug(formData.title))
      formDataObj.append("content", formData.content)
      formDataObj.append("excerpt", formData.excerpt)
      formDataObj.append("cover_image", formData.cover_image)
      formDataObj.append("tags", formData.tags)
      formDataObj.append("published", String(publish))

      if (blog) {
        await updateBlog(blog.id, formDataObj)
      } else {
        await createBlog(formDataObj)
      }
    } catch (error) {
      console.error("Error saving blog:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
      <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-mono text-foreground">
            {">"} Title
          </label>
          <Input
            id="title"
            placeholder="Blog post title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="font-mono bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="slug" className="text-sm font-mono text-foreground">
            {">"} Slug (URL)
          </label>
          <Input
            id="slug"
            placeholder="blog-post-url (auto-generated if empty)"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="font-mono bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="excerpt" className="text-sm font-mono text-foreground">
            {">"} Excerpt
          </label>
          <Textarea
            id="excerpt"
            placeholder="Short description of the blog post"
            rows={3}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="font-mono bg-background/50 border-primary/30 focus:border-primary resize-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-mono text-foreground">
            {">"} Content (Markdown)
          </label>
          <Textarea
            id="content"
            placeholder="Write your blog post content in Markdown..."
            rows={15}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
            className="font-mono bg-background/50 border-primary/30 focus:border-primary resize-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cover_image" className="text-sm font-mono text-foreground">
            {">"} Cover Image URL
          </label>
          <Input
            id="cover_image"
            placeholder="https://example.com/image.jpg"
            value={formData.cover_image}
            onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
            className="font-mono bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="tags" className="text-sm font-mono text-foreground">
            {">"} Tags (comma-separated)
          </label>
          <Input
            id="tags"
            placeholder="Security, Hacking, Tutorial"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="font-mono bg-background/50 border-primary/30 focus:border-primary"
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, false)}
            variant="outline"
            className="flex-1 font-mono border-secondary/30 hover:bg-secondary/10 bg-transparent"
            disabled={isSubmitting}
          >
            <Save className="mr-2 h-4 w-4" />
            Save as Draft
          </Button>
          <Button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="flex-1 font-mono bg-primary hover:bg-primary/80 text-background neon-border"
            disabled={isSubmitting}
          >
            <Eye className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </form>
    </Card>
  )
}
