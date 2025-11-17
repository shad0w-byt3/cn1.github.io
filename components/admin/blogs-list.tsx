"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Blog } from "@/lib/types"
import { deleteBlog, toggleBlogPublish } from "@/app/actions/blog-actions"

export function BlogsList({ blogs }: { blogs: Blog[] }) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return

    try {
      await deleteBlog(id)
      router.refresh()
    } catch (error) {
      console.error("Error deleting blog:", error)
    }
  }

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      await toggleBlogPublish(id, currentStatus)
      router.refresh()
    } catch (error) {
      console.error("Error toggling publish status:", error)
    }
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Card
          key={blog.id}
          className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/30 transition-all"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-mono font-bold">{blog.title}</h3>
                <Badge
                  variant={blog.published ? "default" : "secondary"}
                  className={`font-mono text-xs ${
                    blog.published ? "bg-primary/20 text-primary border-primary/30" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {blog.published ? "Published" : "Draft"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => togglePublish(blog.id, blog.published)}
                className="font-mono text-muted-foreground hover:text-primary"
              >
                {blog.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Link href={`/admin/blogs/${blog.id}`}>
                <Button size="sm" variant="ghost" className="font-mono text-muted-foreground hover:text-secondary">
                  <Edit className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDelete(blog.id)}
                className="font-mono text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
