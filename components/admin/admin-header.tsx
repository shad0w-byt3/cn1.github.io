"use client"

import { Terminal, LogOut, Home, Newspaper, FolderKanban, Mail, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export function AdminHeader() {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    const supabase = getSupabaseBrowserClient()
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/content", label: "Content", icon: Settings },
    { href: "/admin/blogs", label: "Blogs", icon: Newspaper },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/messages", label: "Messages", icon: Mail },
  ]

  return (
    <header className="border-b border-cyber-green/20 bg-black/80 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-cyber-green" />
              <span className="text-xl font-mono font-bold text-cyber-green drop-shadow-[0_0_10px_rgba(0,255,150,0.5)]">
                ADMIN
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`font-mono ${
                        isActive
                          ? "text-cyber-green bg-cyber-green/10"
                          : "text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10"
                      }`}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="font-mono text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/10"
              >
                <Home className="mr-2 h-4 w-4" />
                View Site
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="font-mono text-gray-400 hover:text-red-500 hover:bg-red-500/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
