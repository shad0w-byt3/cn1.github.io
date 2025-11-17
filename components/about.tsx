"use client"

import { Award, Target, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-sm lg:text-base font-mono text-primary glow-text">{">"} ABOUT_ME</p>
              <h2 className="text-3xl lg:text-5xl font-mono font-bold text-balance leading-tight">
                Breaking Systems to <span className="text-primary glow-text">Build Security</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-mono">
              <p className="text-base lg:text-lg">
                {">"} I'm a penetration tester and security researcher with a passion for finding vulnerabilities before
                malicious actors do. My mission is to help organizations strengthen their security posture through
                comprehensive testing and research.
              </p>
              <p className="text-base lg:text-lg">
                {">"} With expertise in network security, web application testing, and exploit development, I've helped
                numerous organizations identify and remediate critical security flaws. I believe in ethical hacking and
                responsible disclosure to make the digital world safer.
              </p>
              <p className="text-base lg:text-lg">
                {">"} When I'm not breaking into systems, I contribute to the security community through bug bounty
                programs, security research, and sharing knowledge with fellow hackers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold">CTFs</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    PicoCTF, Pwn.College, HTB,...                
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold">Bug Bounties</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Active researcher on HackerOne and Bugcrowd platforms
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold">Security Research</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Published CVEs and security advisories for major platforms
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
