"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { updateWebsiteContent } from "@/app/actions/content-actions"
import { Loader2, Save } from "lucide-react"
import { useRouter } from "next/navigation"

type ContentSection = {
  id: string
  section: string
  content: any
}

export function ContentEditor({ initialContent }: { initialContent: ContentSection[] }) {
  const router = useRouter()
  const [content, setContent] = useState<Record<string, any>>(
    initialContent.reduce(
      (acc, item) => ({
        ...acc,
        [item.section]: item.content,
      }),
      {},
    ),
  )
  const [saving, setSaving] = useState<string | null>(null)

  const handleSave = async (section: string) => {
    setSaving(section)
    try {
      await updateWebsiteContent(section, content[section])
      router.refresh()
    } catch (error) {
      console.error("Failed to save:", error)
    } finally {
      setSaving(null)
    }
  }

  const updateContent = (section: string, updates: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...updates },
    }))
  }

  const updateSkillCategory = (categoryIndex: number, field: string, value: any) => {
    const newCategories = [...(content.skills?.categories || [])]
    newCategories[categoryIndex] = { ...newCategories[categoryIndex], [field]: value }
    updateContent("skills", { categories: newCategories })
  }

  const addSkillCategory = () => {
    const newCategories = [...(content.skills?.categories || []), { name: "", skills: [] }]
    updateContent("skills", { categories: newCategories })
  }

  const removeSkillCategory = (index: number) => {
    const newCategories = content.skills?.categories.filter((_: any, i: number) => i !== index)
    updateContent("skills", { categories: newCategories })
  }

  return (
    <Tabs defaultValue="hero" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-gray-900">
        <TabsTrigger value="hero">Hero Section</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>

      <TabsContent value="hero">
        <Card className="p-6 bg-gray-900 border-gray-800">
          <div className="space-y-4">
            <div>
              <Label htmlFor="hero-title">Title</Label>
              <Input
                id="hero-title"
                value={content.hero?.title || ""}
                onChange={(e) => updateContent("hero", { title: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Input
                id="hero-subtitle"
                value={content.hero?.subtitle || ""}
                onChange={(e) => updateContent("hero", { subtitle: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="hero-description">Description</Label>
              <Textarea
                id="hero-description"
                value={content.hero?.description || ""}
                onChange={(e) => updateContent("hero", { description: e.target.value })}
                rows={4}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button
              onClick={() => handleSave("hero")}
              disabled={saving === "hero"}
              className="bg-cyber-green text-black hover:bg-cyber-green/90"
            >
              {saving === "hero" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Hero Section
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="about">
        <Card className="p-6 bg-gray-900 border-gray-800">
          <div className="space-y-4">
            <div>
              <Label htmlFor="about-title">Title</Label>
              <Input
                id="about-title"
                value={content.about?.title || ""}
                onChange={(e) => updateContent("about", { title: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="about-content">Content</Label>
              <Textarea
                id="about-content"
                value={content.about?.content || ""}
                onChange={(e) => updateContent("about", { content: e.target.value })}
                rows={8}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button
              onClick={() => handleSave("about")}
              disabled={saving === "about"}
              className="bg-cyber-green text-black hover:bg-cyber-green/90"
            >
              {saving === "about" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save About Section
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="skills">
        <Card className="p-6 bg-gray-900 border-gray-800">
          <div className="space-y-6">
            {content.skills?.categories?.map((category: any, index: number) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Category {index + 1}</Label>
                  <Button variant="destructive" size="sm" onClick={() => removeSkillCategory(index)}>
                    Remove
                  </Button>
                </div>
                <Input
                  placeholder="Category Name"
                  value={category.name}
                  onChange={(e) => updateSkillCategory(index, "name", e.target.value)}
                  className="bg-gray-700 border-gray-600"
                />
                <Textarea
                  placeholder="Skills (comma separated)"
                  value={category.skills?.join(", ") || ""}
                  onChange={(e) =>
                    updateSkillCategory(
                      index,
                      "skills",
                      e.target.value.split(",").map((s) => s.trim()),
                    )
                  }
                  rows={3}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
            ))}
            <Button onClick={addSkillCategory} variant="outline" className="w-full bg-transparent">
              Add Category
            </Button>
            <Button
              onClick={() => handleSave("skills")}
              disabled={saving === "skills"}
              className="bg-cyber-green text-black hover:bg-cyber-green/90 w-full"
            >
              {saving === "skills" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Skills
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="contact">
        <Card className="p-6 bg-gray-900 border-gray-800">
          <div className="space-y-4">
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                value={content.contact?.email || ""}
                onChange={(e) => updateContent("contact", { email: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="contact-github">GitHub URL</Label>
              <Input
                id="contact-github"
                value={content.contact?.github || ""}
                onChange={(e) => updateContent("contact", { github: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="contact-linkedin">LinkedIn URL</Label>
              <Input
                id="contact-linkedin"
                value={content.contact?.linkedin || ""}
                onChange={(e) => updateContent("contact", { linkedin: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <div>
              <Label htmlFor="contact-twitter">Twitter URL</Label>
              <Input
                id="contact-twitter"
                value={content.contact?.twitter || ""}
                onChange={(e) => updateContent("contact", { twitter: e.target.value })}
                className="bg-gray-800 border-gray-700"
              />
            </div>
            <Button
              onClick={() => handleSave("contact")}
              disabled={saving === "contact"}
              className="bg-cyber-green text-black hover:bg-cyber-green/90"
            >
              {saving === "contact" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Contact Info
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
