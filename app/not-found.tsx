"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-2xl px-4">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-8xl font-mono font-bold text-primary glow-text mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-primary/50 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-mono font-semibold mb-4">
            System Breach Detected
          </h2>
          <p className="text-muted-foreground font-mono mb-2">
            The requested page has been compromised or doesn't exist.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            Error Code: PAGE_NOT_FOUND_404
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground font-mono">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Base
            </Link>
          </Button>

          <div className="flex gap-4">
            <Button variant="outline" asChild className="font-mono">
              <a
                href="https://github.com/shad0w-byt3/cn1.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            </Button>

            <Button variant="outline" asChild className="font-mono">
              <a
                href="mailto:hero.cn1@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* Terminal-style Animation */}
        <div className="bg-black/50 border border-primary/20 rounded-lg p-4 font-mono text-sm text-left max-w-md mx-auto">
          <div className="text-primary mb-2">$ scan --target=404-page</div>
          <div className="text-muted-foreground mb-1">Scanning target...</div>
          <div className="text-green-400 mb-2">✓ System secure</div>
          <div className="text-yellow-400 mb-1">⚠ Page not found in directory structure</div>
          <div className="text-primary">
            $ redirect --to="homepage" --force
          </div>
          <div className="animate-pulse text-primary">_</div>
        </div>
      </div>
    </div>
  )
}