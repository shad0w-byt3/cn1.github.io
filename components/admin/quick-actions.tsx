import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, FolderGit2, Mail } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
      <h2 className="text-xl font-mono font-bold text-secondary mb-6">Quick Actions</h2>

      <div className="grid gap-4">
        <Link href="/admin/blogs/new">
          <Button className="w-full justify-start font-mono bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20">
            <Plus className="mr-2 h-4 w-4" />
            Create New Blog Post
          </Button>
        </Link>

        <Link href="/admin/projects/new">
          <Button className="w-full justify-start font-mono bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20">
            <Plus className="mr-2 h-4 w-4" />
            Add New Project
          </Button>
        </Link>

        <Link href="/admin/blogs">
          <Button
            variant="outline"
            className="w-full justify-start font-mono border-primary/20 hover:bg-primary/10 bg-transparent"
          >
            <FileText className="mr-2 h-4 w-4" />
            Manage Blogs
          </Button>
        </Link>

        <Link href="/admin/projects">
          <Button
            variant="outline"
            className="w-full justify-start font-mono border-secondary/20 hover:bg-secondary/10 bg-transparent"
          >
            <FolderGit2 className="mr-2 h-4 w-4" />
            Manage Projects
          </Button>
        </Link>

        <Link href="/admin/messages">
          <Button
            variant="outline"
            className="w-full justify-start font-mono border-accent/20 hover:bg-accent/10 bg-transparent"
          >
            <Mail className="mr-2 h-4 w-4" />
            View Messages
          </Button>
        </Link>
      </div>
    </Card>
  )
}
