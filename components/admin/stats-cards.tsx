import { Card } from "@/components/ui/card"
import { FileText, FolderGit2, Mail, AlertCircle } from "lucide-react"

interface StatsCardsProps {
  blogsCount: number
  projectsCount: number
  messagesCount: number
  unreadCount: number
}

export function StatsCards({ blogsCount, projectsCount, messagesCount, unreadCount }: StatsCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-1">Total Blogs</p>
            <p className="text-3xl font-mono font-bold text-primary">{blogsCount}</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <FileText className="h-6 w-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-1">Projects</p>
            <p className="text-3xl font-mono font-bold text-secondary">{projectsCount}</p>
          </div>
          <div className="p-3 bg-secondary/10 rounded-lg">
            <FolderGit2 className="h-6 w-6 text-secondary" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-1">Messages</p>
            <p className="text-3xl font-mono font-bold text-accent">{messagesCount}</p>
          </div>
          <div className="p-3 bg-accent/10 rounded-lg">
            <Mail className="h-6 w-6 text-accent" />
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur border-destructive/20 hover:border-destructive/50 transition-all">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-1">Unread</p>
            <p className="text-3xl font-mono font-bold text-destructive">{unreadCount}</p>
          </div>
          <div className="p-3 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
        </div>
      </Card>
    </div>
  )
}
