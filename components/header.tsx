"use client"

import { useState } from "react"
import { Terminal, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2 text-xl lg:text-2xl font-mono font-bold text-primary glow-text"
          >
            <Terminal className="h-6 w-6" />
            <span>{"CN1"}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#skills"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="group-hover:glow-text">/skills</span>
            </a>
            <a
              href="#about"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="group-hover:glow-text">/about</span>
            </a>
            <a
              href="#projects"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="group-hover:glow-text">/projects</span>
            </a>
            <a
              href="#blog"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="group-hover:glow-text">/blog</span>
            </a>
            <a
              href="#contact"
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="group-hover:glow-text">/contact</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-primary/20">
            <a
              href="#skills"
              className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              /skills
            </a>
            <a
              href="#about"
              className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              /about
            </a>
            <a
              href="#projects"
              className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              /projects
            </a>
            <a
              href="#blog"
              className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              /blog
            </a>
            <a
              href="#contact"
              className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              /contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
