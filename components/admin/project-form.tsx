"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Save } from "lucide-react"
import type { Project } from "@/lib/types"
import { createProject, updateProject } from "@/app/actions/project-actions"

interface ProjectFormProps {
  project?: Project
}

export function ProjectForm({ project }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    image_url: project?.image_url || "",
    technologies: project?.technologies?.join(", ") || "",
    github_url: project?.github_url || "",
    project_url: project?.project_url || "",
    featured: project?.featured || false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("title", formData.title)
      formDataObj.append("description", formData.description)
      formDataObj.append("image_url", formData.image_url)
      formDataObj.append("technologies", formData.technologies)
      formDataObj.append("github_url", formData.github_url)
      formDataObj.append("project_url", formData.project_url)
      formDataObj.append("featured", String(formData.featured))

      if (project) {
        await updateProject(project.id, formDataObj)
      } else {
        await createProject(formDataObj)
      }
    } catch (error) {
      console.error("Error saving project:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur border-secondary/20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-mono text-foreground">
            {">"} Title
          </label>
          <Input
            id="title"
            placeholder="Project title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="font-mono bg-background/50 border-secondary/30 focus:border-secondary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-mono text-foreground">
            {">"} Description
          </label>
          <Textarea
            id="description"
            placeholder="Describe your project"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className="font-mono bg-background/50 border-secondary/30 focus:border-secondary resize-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image_url" className="text-sm font-mono text-foreground">
            {">"} Image URL
          </label>
          <Input
            id="image_url"
            placeholder="https://example.com/image.jpg"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="font-mono bg-background/50 border-secondary/30 focus:border-secondary"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="technologies" className="text-sm font-mono text-foreground">
            {">"} Technologies (comma-separated)
          </label>
          <Input
            id="technologies"
            placeholder="Python, Security, Pentesting"
            value={formData.technologies}
            onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
            className="font-mono bg-background/50 border-secondary/30 focus:border-secondary"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="github_url" className="text-sm font-mono text-foreground">
              {">"} GitHub URL
            </label>
            <Input
              id="github_url"
              placeholder="https://github.com/username/repo"
              value={formData.github_url}
              onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
              className="font-mono bg-background/50 border-secondary/30 focus:border-secondary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="project_url" className="text-sm font-mono text-foreground">
              {">"} Live Demo URL
            </label>
            <Input
              id="project_url"
              placeholder="https://demo.example.com"
              value={formData.project_url}
              onChange={(e) => setFormData({ ...formData, project_url: e.target.value })}
              className="font-mono bg-background/50 border-secondary/30 focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 rounded border-secondary/30"
          />
          <label htmlFor="featured" className="text-sm font-mono text-foreground">
            Feature this project on homepage
          </label>
        </div>

        <Button
          type="submit"
          className="w-full font-mono bg-secondary hover:bg-secondary/80 text-background neon-border"
          disabled={isSubmitting}
        >
          <Save className="mr-2 h-4 w-4" />
          {isSubmitting ? "Saving..." : "Save Project"}
        </Button>
      </form>
    </Card>
  )
}
