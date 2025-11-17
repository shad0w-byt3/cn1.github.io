"use client"

import { Button } from "@/components/ui/button"
import { Terminal, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Penetration Tester & Security Researcher"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm lg:text-base font-mono text-primary">
                <Terminal className="h-4 w-4" />
                <span className="glow-text">root@batmanc0d3:~$</span>
              </div>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-mono font-bold text-balance leading-tight">
                <span className="text-primary glow-text">BATMAN-c0d3</span>
              </h1>
              <p className="text-2xl lg:text-3xl xl:text-4xl font-mono font-semibold text-secondary">
                CYIMANA Ntwali Ivan
              </p>
              <div className="h-8 lg:h-10">
                <p className="text-xl lg:text-2xl font-mono text-secondary">
                  {text}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-mono">
              {">"} Specialized in penetration testing, vulnerability assessment, and security research. Breaking
              systems to make them stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base font-mono bg-primary hover:bg-primary/80 text-background neon-border"
              >
                <a href="#projects" className="flex items-center">
                  View Projects
                  <span className="ml-2">{">"}</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-mono border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:batman@protonmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden bg-card border border-primary/30 neon-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative h-full p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground ml-2">terminal</span>
              </div>

              <div className="space-y-2 text-primary/80">
                <p>
                  <span className="text-secondary">batman@security</span>:<span className="text-accent">~</span>$ whoami
                </p>
                <p className="text-foreground">Penetration Tester</p>
                <p className="text-foreground">Security Researcher</p>
                <p className="text-foreground">Ethical Hacker</p>
                <br />
                <p>
                  <span className="text-secondary">batman@security</span>:<span className="text-accent">~</span>$ cat
                  skills.txt
                </p>
                <p className="text-foreground">• Python, Bash, C</p>
                <p className="text-foreground">• Metasploit, Burp Suite</p>
                <p className="text-foreground">• Nmap, Wireshark</p>
                <p className="text-foreground">• Kali Linux, Parrot OS</p>
                <p className="text-foreground">• OWASP Top 10</p>
                <br />
                <p>
                  <span className="text-secondary">batman@security</span>:<span className="text-accent">~</span>$ ls
                  certifications/
                </p>
                <p className="text-foreground">OSCP CEH CISSP</p>
                <br />
                <p>
                  <span className="text-secondary">batman@security</span>:<span className="text-accent">~</span>${" "}
                  <span className="animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
