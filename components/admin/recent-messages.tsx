// Mock data for local development
const mockMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Great portfolio! I'd like to discuss a project.",
    created_at: "2024-01-15T10:00:00Z",
    read: false
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Interested in your cybersecurity services.",
    created_at: "2024-01-14T15:30:00Z",
    read: true
  }
]

import { Card } from "@/components/ui/card"
import { Mail, Calendar } from "lucide-react"
import Link from "next/link"

export async function RecentMessages() {
  const messages = mockMessages

  return (
    <Card className="p-6 bg-card/50 backdrop-blur border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-mono font-bold text-secondary">Recent Messages</h2>
        <Link href="/admin/messages" className="text-sm font-mono text-primary hover:text-primary/80">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {messages?.map((message) => (
          <div
            key={message.id}
            className="p-4 bg-background/50 border border-primary/10 rounded hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Mail className={`h-4 w-4 ${message.read ? "text-muted-foreground" : "text-primary"}`} />
                <span className="font-mono font-semibold text-sm">{message.name}</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(message.created_at).toLocaleDateString()}
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-mono line-clamp-2">{message.message}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
