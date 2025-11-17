"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Project } from "@/lib/types"
import { deleteProject, toggleProjectFeatured } from "@/app/actions/project-actions"

export function ProjectsList({ projects }: { projects: Project[] }) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return

    try {
      await deleteProject(id)
      router.refresh()
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await toggleProjectFeatured(id, currentStatus)
      router.refresh()
    } catch (error) {
      console.error("Error toggling featured status:", error)
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="p-6 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/30 transition-all"
        >
          <div className="space-y-4">
            <div className="relative aspect-video rounded overflow-hidden bg-muted">
              <img
                src={project.image_url || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-mono font-bold flex-1">{project.title}</h3>
                {project.featured && (
                  <Badge className="font-mono text-xs bg-secondary/20 text-secondary border-secondary/30">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => toggleFeatured(project.id, project.featured)}
                className="font-mono text-muted-foreground hover:text-secondary"
              >
                <Star className={`h-4 w-4 ${project.featured ? "fill-current" : ""}`} />
              </Button>
              <Link href={`/admin/projects/${project.id}`}>
                <Button size="sm" variant="ghost" className="font-mono text-muted-foreground hover:text-primary">
                  <Edit className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDelete(project.id)}
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
