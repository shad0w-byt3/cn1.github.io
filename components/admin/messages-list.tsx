"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MailOpen, Trash2, Calendar } from "lucide-react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import type { ContactMessage } from "@/lib/types"

export function MessagesList({ messages }: { messages: ContactMessage[] }) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return

    const supabase = getSupabaseBrowserClient()
    await supabase.from("contact_messages").delete().eq("id", id)
    router.refresh()
  }

  const toggleRead = async (id: string, currentStatus: boolean) => {
    const supabase = getSupabaseBrowserClient()
    await supabase.from("contact_messages").update({ read: !currentStatus }).eq("id", id)
    router.refresh()
  }

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Card
          key={message.id}
          className={`p-6 bg-card/50 backdrop-blur transition-all ${
            message.read ? "border-muted/20" : "border-accent/30 hover:border-accent/50"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  {message.read ? (
                    <MailOpen className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Mail className="h-5 w-5 text-accent" />
                  )}
                  <h3 className="text-lg font-mono font-bold">{message.name}</h3>
                  <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(message.created_at).toLocaleString()}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  Email:{" "}
                  <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                    {message.email}
                  </a>
                </p>
                {message.subject && (
                  <p className="text-sm text-muted-foreground font-mono">Subject: {message.subject}</p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleRead(message.id, message.read)}
                  className="font-mono text-muted-foreground hover:text-accent"
                >
                  {message.read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(message.id)}
                  className="font-mono text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-4 bg-background/50 border border-primary/10 rounded">
              <p className="text-sm text-foreground font-mono whitespace-pre-wrap">{message.message}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
